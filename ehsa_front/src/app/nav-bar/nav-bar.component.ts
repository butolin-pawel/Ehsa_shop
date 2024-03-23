import { CommonModule } from '@angular/common';
import { Component, ElementRef, Renderer2, ViewChild } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faShoppingCart, faUser, faArrowRight, faBars, faTimes, faEnvelope, faPhone } from '@fortawesome/free-solid-svg-icons';
import { CartComponent } from '../cart/cart.component';


@Component({
  selector: 'nav-bar',
  standalone: true,
  imports: [FontAwesomeModule,CommonModule,CartComponent],
  templateUrl: './nav-bar.component.html',
  styleUrl: './nav-bar.component.css'
})
export class NavBarComponent {
  phoneIcon = faPhone;
  mailIcon = faEnvelope;
  closeIcon = faTimes;
  barIcon = faBars;
  cartIcon = faShoppingCart;
  userIcon = faUser;
  arrIcon = faArrowRight;
  countItemInCart : number = 12;
  showList: boolean = false;
  subCat : any;
  showSideMenu : boolean = false;
  showCategoryList(subCat : any): void {
    this.showList = true;
    this.subCat = subCat;
  }

  hideCategoryList(): void {
    this.showList = false;
  }
  hideSubCategoryList(): void {
    this.subCat = null;
  }

  sideMenu(){
    this.showSideMenu = !this.showSideMenu;
  }
}
