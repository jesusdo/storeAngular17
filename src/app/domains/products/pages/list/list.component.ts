import { Component, signal } from '@angular/core';
import { ProductComponent } from '../../components/product/product.component';
import { CommonModule } from '@angular/common';
import { Product } from '../../../shared/models/product';
import { HeaderComponent } from '../../../shared/components/header/header.component';

@Component({
  selector: 'app-list',
  standalone: true,
  imports: [CommonModule, ProductComponent, HeaderComponent],
  templateUrl: './list.component.html',
  styleUrl: './list.component.css'
})
export class ListComponent {
  products = signal<Product[]>([]);
  cart = signal<Product[]>([]);

  constructor(){
    const initProducts: Product[] = [
      {
        id: Date.now(),
        title: 'Product 1',
        price: 200,
        image: 'https://picsum.photos/640/640',
        creationAt: new Date().toISOString()
      },{
        id: Date.now(),
        title: 'Product 2',
        price: 200,
        image: 'https://picsum.photos/640/640?r4',
        creationAt: new Date().toISOString()
      },{
        id: Date.now(),
        title: 'Product 3',
        price: 200,
        image: 'https://picsum.photos/640/640?r3',
        creationAt: new Date().toISOString()
      },
      {
        id: Date.now(),
        title: 'Product 4',
        price: 200,
        image: 'https://picsum.photos/640/640?r7',
        creationAt: new Date().toISOString()
      },{
        id: Date.now(),
        title: 'Product 5',
        price: 200,
        image: 'https://picsum.photos/640/640?r41',
        creationAt: new Date().toISOString()
      },{
        id: Date.now(),
        title: 'Product 6',
        price: 200,
        image: 'https://picsum.photos/640/640?r31',
        creationAt: new Date().toISOString()
      }
    ];
    this.products.set(initProducts);
  }
  
 fromChild(event: string){
    console.log('estamos en el padre');
    console.log(event);
 }
 addToCart(product: Product){
  this.cart.update(prevState => [...prevState, product]);
 }
}
