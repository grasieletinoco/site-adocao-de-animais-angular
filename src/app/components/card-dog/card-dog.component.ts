import { Component, Input } from '@angular/core';
import { IPet } from '../../model/ipet';
import { DogComponent } from '../../pages/dog/dog.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-card-dog',
  standalone: true,
  imports: [DogComponent, CommonModule],
  templateUrl: './card-dog.component.html',
  styleUrl: './card-dog.component.css'
})
export class CardDogComponent {
  @Input() cardCachorro?:IPet[] = [];
  iconDog = "&#128021;";
}
