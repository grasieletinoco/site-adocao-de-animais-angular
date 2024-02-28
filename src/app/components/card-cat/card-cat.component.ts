import { Component, Input } from '@angular/core';
import { IPet } from '../../model/ipet';
import { CatComponent } from '../../pages/cat/cat.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-card-cat',
  standalone: true,
  imports: [CatComponent,CommonModule],
  templateUrl: './card-cat.component.html',
  styleUrl: './card-cat.component.css'
})
export class CardCatComponent {
  @Input() cardGato?:IPet[] = [];
  iconCat = "&#x1F408;";
}
