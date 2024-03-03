import { Component } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faCartPlus } from '@fortawesome/free-solid-svg-icons';
@Component({
  selector: 'app-good-info',
  standalone: true,
  imports: [FontAwesomeModule],
  templateUrl: './good-info.component.html',
  styleUrl: './good-info.component.css'
})
export class GoodInfoComponent {

  cart = faCartPlus;
}
