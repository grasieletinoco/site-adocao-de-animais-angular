import { Component } from '@angular/core';
import { HomeComponent } from '../../pages/home/home.component';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-card-adocao',
  standalone: true,
  imports: [HomeComponent, CommonModule,RouterLink],
  templateUrl: './card-adocao.component.html',
  styleUrl: './card-adocao.component.css'
})
export class CardAdocaoComponent {
}
