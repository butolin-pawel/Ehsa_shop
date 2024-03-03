import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faTrash } from '@fortawesome/free-solid-svg-icons';
@Component({
  selector: 'app-cart',
  standalone: true,
  imports: [CommonModule,FontAwesomeModule],
  templateUrl: './cart.component.html',
  styleUrl: './cart.component.css'
})
export class CartComponent {
  faTrash = faTrash;
  count : boolean = false;
  change(){
    this.count = !this.count;
  }
  list : number[] = [1,2,3]
}
