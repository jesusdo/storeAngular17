import { Component, Input, signal } from '@angular/core';
import { Product } from '../../models/product';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {
  hidenSideMenu = signal(true);
  @Input({required: true}) cart: Product[] = [];

  toggleSideMenu(){
    this.hidenSideMenu.update(prevState => !prevState);
  }
}
