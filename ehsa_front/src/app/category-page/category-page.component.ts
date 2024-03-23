import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faCartPlus,faArrowRight } from '@fortawesome/free-solid-svg-icons';
import { GoodInfoComponent } from '../good-info/good-info.component';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-category-page',
  standalone: true,
  imports: [FontAwesomeModule,CommonModule, GoodInfoComponent],
  templateUrl: './category-page.component.html',
  styleUrl: './category-page.component.css'
})
export class CategoryPageComponent {
  constructor(private route : ActivatedRoute){
      this.category = this.route.snapshot.params['category'];
  }
  category : string;

  arrIcon = faArrowRight;
  cart = faCartPlus;
  fltr : boolean = false;
  list : number[] = [1,2,3,4,5,6,7,8,9,0];
  openFiltr(){
    this.fltr = !this.fltr;
  }
}
