import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-quero-ajudar',
  standalone: true,
  imports: [CommonModule,RouterLink],
  templateUrl: './quero-ajudar.component.html',
  styleUrl: './quero-ajudar.component.css'
})
export class QueroAjudarComponent {

}
