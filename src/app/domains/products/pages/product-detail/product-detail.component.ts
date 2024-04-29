import { CommonModule } from '@angular/common';
import { Component, Input, inject, signal } from '@angular/core';
import { Category } from '@shared/models/category';
import { Product } from '@shared/models/product';
import { CartService } from '@shared/services/cart.service';
import { ProductService } from '@shared/services/product.service';

@Component({
  selector: 'app-product-detail',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './product-detail.component.html',
  styleUrl: './product-detail.component.css'
})
export class ProductDetailComponent {
  @Input() id?: string;
  private productService = inject(ProductService);
  private cartService = inject(CartService);
  product = signal<Product | null>(null);
  cover = signal('');

  ngOnInit(){
    this.getProducts();
  }

  changeCover(newImg: string){
    this.cover.set(newImg);
  }

  addToCart(){
    const product = this.product();
    if(product){
      this.cartService.addToCart(product);
    }
  }

  getProducts(){
    if(this.id){
      this.productService.getOne(this.id).subscribe({
        next: (product) => {
          this.product.set(product);
          if(product.images.length > 0){
            this.cover.set(product.images[0]);
          }
        }, error: () => {

        }
      });
    }
  }


}

