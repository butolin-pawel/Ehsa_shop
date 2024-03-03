import { Component } from '@angular/core';
import { CategoryPageComponent } from '../category-page/category-page.component';

@Component({
  selector: 'app-start-page',
  standalone: true,
  imports: [CategoryPageComponent],
  templateUrl: './start-page.component.html',
  styleUrl: './start-page.component.css'
})
export class StartPageComponent {

}
