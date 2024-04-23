import { Component, EventEmitter, Input, Output, input } from '@angular/core';
import { Product } from '../../../shared/models/product';

@Component({
  selector: 'app-product',
  standalone: true,
  imports: [],
  templateUrl: './product.component.html',
  styleUrl: './product.component.css'
})
export class ProductComponent {
  // @Input({required:true}) img: string = '';
  // @Input({required: true}) price: number=0;
  // @Input({required: true}) title: string='';
  @Input({required: true}) product!: Product;
  
  @Output() addToCart = new EventEmitter();

  addToCartHandler(){
    this.addToCart.emit(this.product);
  }
}
