import { Component, Input, SimpleChange, SimpleChanges, inject, signal } from '@angular/core';
import { Product } from '../../models/product';

import { CartService } from '../../services/cart.service';
import { RouterLinkWithHref, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [RouterLinkWithHref, RouterLinkActive],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {
  hidenSideMenu = signal(true);
  // @Input({required: true}) cart: Product[] = [];
  private cartService = inject(CartService);
  // total = signal(0);
  cart = this.cartService.cart;
  total = this.cartService.total;


  toggleSideMenu(){
    this.hidenSideMenu.update(prevState => !prevState);
  }

  // al delegar los calculos al servicio simplificamos los componentes que solo se encargaran de renderizar

  // ngOnChanges(changes: SimpleChanges){
  //   const cart = changes['cart'];
  //   if(cart){
  //     this.total.set(this.calcTotal());
  //   }
  // }

  // calcTotal(){
  //   return this.cart.reduce((total, product) => total + product.price, 0);
  // }
}
