import { Component, Input, SimpleChanges, inject, signal } from '@angular/core';
import { ProductComponent } from '@products/components/product/product.component';

import { Product } from '@shared/models/product';
import { HeaderComponent } from '@shared/components/header/header.component';
import { CartService } from '@shared/services/cart.service';
import { ProductService } from '@shared/services/product.service';
import { Category } from '@shared/models/category';
import { CategoryService } from '@shared/services/category.service';
import { RouterLinkWithHref } from '@angular/router';

@Component({
  selector: 'app-list',
  standalone: true,
  imports: [ProductComponent, HeaderComponent, RouterLinkWithHref],
  templateUrl: './list.component.html',
  styleUrl: './list.component.css'
})
export default class ListComponent {
  products = signal<Product[]>([]);
  categories = signal<Category[]>([])
  private categoryService = inject(CategoryService);
  // cart = signal<Product[]>([]);
  private cartService = inject(CartService);
  private productService = inject(ProductService);
  @Input() category_id?: string;

  ngOnInit(){
    this.getCategories(); 
  }

  ngOnChanges(changes: SimpleChanges){
    this.getProducts();
  }
  
 fromChild(event: string){
    console.log('estamos en el padre');
    console.log(event);
 }

 addToCart(product: Product){
  // this.cart.update(prevState => [...prevState, product]);
    this.cartService.addToCart(product);
 }

 getProducts(){
  this.productService.getProducts(this.category_id).subscribe({
    next: (products) => {
      this.products.set(products);
      console.log(products)
    },
    error: () => {

    }
  })
}

 getCategories(){
  this.categoryService.getCategories().subscribe({
    next: (categories) => {
      this.categories.set(categories);
      console.log(categories);
    },error: () => {

    } 
  })
}
}


// constructor(){
//   const initProducts: Product[] = [
//     {
//       id: Date.now(),
//       title: 'Product 1',
//       price: 200,
//       image: 'https://picsum.photos/640/640',
//       creationAt: new Date().toISOString()
//     },{
//       id: Date.now(),
//       title: 'Product 2',
//       price: 200,
//       image: 'https://picsum.photos/640/640?r4',
//       creationAt: new Date().toISOString()
//     },{
//       id: Date.now(),
//       title: 'Product 3',
//       price: 200,
//       image: 'https://picsum.photos/640/640?r3',
//       creationAt: new Date().toISOString()
//     },
//     {
//       id: Date.now(),
//       title: 'Product 4',
//       price: 200,
//       image: 'https://picsum.photos/640/640?r7',
//       creationAt: new Date().toISOString()
//     },{
//       id: Date.now(),
//       title: 'Product 5',
//       price: 200,
//       image: 'https://picsum.photos/640/640?r41',
//       creationAt: new Date().toISOString()
//     },{
//       id: Date.now(),
//       title: 'Product 6',
//       price: 200,
//       image: 'https://picsum.photos/640/640?r31',
//       creationAt: new Date().toISOString()
//     }
//   ];
//   this.products.set(initProducts);
// }