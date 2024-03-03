import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faShoppingCart, faUser } from '@fortawesome/free-solid-svg-icons';
import { CartComponent } from '../cart/cart.component';

@Component({
  selector: 'nav-bar',
  standalone: true,
  imports: [FontAwesomeModule,CommonModule,CartComponent],
  templateUrl: './nav-bar.component.html',
  styleUrl: './nav-bar.component.css'
})
export class NavBarComponent {
  cartIcon = faShoppingCart;
  userIcon = faUser;
  countItemInCart : number = 12;
}
