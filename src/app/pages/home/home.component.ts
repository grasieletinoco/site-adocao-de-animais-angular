import { Component } from '@angular/core';
import { HeaderComponent } from '../../components/header/header.component';
import { FooterComponent } from '../../components/footer/footer.component';
import { CardAdocaoComponent } from '../../components/card-adocao/card-adocao.component';
import { MissaoVisaoValoresComponent } from '../../components/missao-visao-valores/missao-visao-valores.component';
import { QueroAjudarComponent } from '../../components/quero-ajudar/quero-ajudar.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [HeaderComponent, FooterComponent,CardAdocaoComponent,MissaoVisaoValoresComponent,QueroAjudarComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

}
