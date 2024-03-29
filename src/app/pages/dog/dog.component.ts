import { Component } from '@angular/core';
import { CardDogComponent } from '../../components/card-dog/card-dog.component';
import { NavbarComponent } from '../../components/navbar/navbar.component';
import { FooterComponent } from '../../components/footer/footer.component';
import { IPet } from '../../model/ipet';

@Component({
  selector: 'app-dog',
  standalone: true,
  imports: [CardDogComponent, NavbarComponent, FooterComponent],
  templateUrl: './dog.component.html',
  styleUrl: './dog.component.css'
})
export class DogComponent {
  cachorros:IPet[] = [
    {
      id:1,
      img:'../../../assets/dog-01.jpg',
      nome:'Ozzy',
      genero:'Macho',
      idade:3,
      castrado:true,
      vermifugado:true,
      porte:'Grande',
      termos:'Ser maior de 21 anos, Apresentar documentação básica (cópia de RG e CPF), Cópia do comprovante de endereço, Passar pela entrevista de adoção com um responsável da VidaPet, Para adoção de gatinhos, levar caixa de transporte ou adquiri-la conosco, Para adotar cães, é indispensável levar a guia peitoral ou adquiri-la conosco.',
    },
    {
      id:2,
      img:'../../../assets/dog-02.jpg',
      nome:'Billy',
      genero:'Macho',
      idade:2,
      castrado:true,
      vermifugado:true,
      porte:'Pequeno',
      termos:'Ser maior de 21 anos, Apresentar documentação básica (cópia de RG e CPF), Cópia do comprovante de endereço, Passar pela entrevista de adoção com um responsável da VidaPet, Para adoção de gatinhos, levar caixa de transporte ou adquiri-la conosco, Para adotar cães, é indispensável levar a guia peitoral ou adquiri-la conosco.',
    },
    {
      id:3,
      img:'../../../assets/dog-03.jpg',
      nome:'Bruce',
      genero:'Macho',
      idade:2,
      castrado:true,
      vermifugado:true,
      porte:'Pequeno',
      termos:'Ser maior de 21 anos, Apresentar documentação básica (cópia de RG e CPF), Cópia do comprovante de endereço, Passar pela entrevista de adoção com um responsável da VidaPet, Para adoção de gatinhos, levar caixa de transporte ou adquiri-la conosco, Para adotar cães, é indispensável levar a guia peitoral ou adquiri-la conosco.',
    },
    {
      id:4,
      img:'../../../assets/dog-04.jpg',
      nome:'Jack',
      genero:'Macho',
      idade:4,
      castrado:true,
      vermifugado:true,
      porte:'Pequeno',
      termos:'Ser maior de 21 anos, Apresentar documentação básica (cópia de RG e CPF), Cópia do comprovante de endereço, Passar pela entrevista de adoção com um responsável da VidaPet, Para adoção de gatinhos, levar caixa de transporte ou adquiri-la conosco, Para adotar cães, é indispensável levar a guia peitoral ou adquiri-la conosco.',
    },
    {
      id:5,
      img:'../../../assets/dog-05.jpg',
      nome:'Simba',
      genero:'Macho',
      idade:2,
      castrado:true,
      vermifugado:true,
      porte:'Grande',
      termos:'Ser maior de 21 anos, Apresentar documentação básica (cópia de RG e CPF), Cópia do comprovante de endereço, Passar pela entrevista de adoção com um responsável da VidaPet, Para adoção de gatinhos, levar caixa de transporte ou adquiri-la conosco, Para adotar cães, é indispensável levar a guia peitoral ou adquiri-la conosco.',
    },
    {
      id:6,
      img:'../../../assets/dog-06.jpg',
      nome:'Luna',
      genero:'Fêmea',
      idade:3,
      castrado:true,
      vermifugado:true,
      porte:'Pequeno',
      termos:'Ser maior de 21 anos, Apresentar documentação básica (cópia de RG e CPF), Cópia do comprovante de endereço, Passar pela entrevista de adoção com um responsável da VidaPet, Para adoção de gatinhos, levar caixa de transporte ou adquiri-la conosco, Para adotar cães, é indispensável levar a guia peitoral ou adquiri-la conosco.',
    },
    {
      id:7,
      img:'../../../assets/dog-07.jpg',
      nome:'Bella',
      genero:'Fêmea',
      idade:5,
      castrado:true,
      vermifugado:true,
      porte:'Grande',
      termos:'Ser maior de 21 anos, Apresentar documentação básica (cópia de RG e CPF), Cópia do comprovante de endereço, Passar pela entrevista de adoção com um responsável da VidaPet, Para adoção de gatinhos, levar caixa de transporte ou adquiri-la conosco, Para adotar cães, é indispensável levar a guia peitoral ou adquiri-la conosco.',
    },
    {
      id:8,
      img:'../../../assets/dog-08.jpg',
      nome:'Bidu',
      genero:'Macho',
      idade:4,
      castrado:true,
      vermifugado:true,
      porte:'Pequeno',
      termos:'Ser maior de 21 anos, Apresentar documentação básica (cópia de RG e CPF), Cópia do comprovante de endereço, Passar pela entrevista de adoção com um responsável da VidaPet, Para adoção de gatinhos, levar caixa de transporte ou adquiri-la conosco, Para adotar cães, é indispensável levar a guia peitoral ou adquiri-la conosco.',
    },
    {
      id:9,
      img:'../../../assets/dog-09.jpg',
      nome:'Tyler',
      genero:'Macho',
      idade:6,
      castrado:true,
      vermifugado:true,
      porte:'Grande',
      termos:'Ser maior de 21 anos, Apresentar documentação básica (cópia de RG e CPF), Cópia do comprovante de endereço, Passar pela entrevista de adoção com um responsável da VidaPet, Para adoção de gatinhos, levar caixa de transporte ou adquiri-la conosco, Para adotar cães, é indispensável levar a guia peitoral ou adquiri-la conosco.',
    },
    {
      id:10,
      img:'../../../assets/dog-10.jpg',
      nome:'Malu',
      genero:'Fêmea',
      idade:5,
      castrado:true,
      vermifugado:true,
      porte:'Grande',
      termos:'Ser maior de 21 anos, Apresentar documentação básica (cópia de RG e CPF), Cópia do comprovante de endereço, Passar pela entrevista de adoção com um responsável da VidaPet, Para adoção de gatinhos, levar caixa de transporte ou adquiri-la conosco, Para adotar cães, é indispensável levar a guia peitoral ou adquiri-la conosco.',
    },
    {
      id:11,
      img:'../../../assets/dog-11.jpg',
      nome:'Freddie',
      genero:'Macho',
      idade:1,
      castrado:true,
      vermifugado:true,
      porte:'Pequeno',
      termos:'Ser maior de 21 anos, Apresentar documentação básica (cópia de RG e CPF), Cópia do comprovante de endereço, Passar pela entrevista de adoção com um responsável da VidaPet, Para adoção de gatinhos, levar caixa de transporte ou adquiri-la conosco, Para adotar cães, é indispensável levar a guia peitoral ou adquiri-la conosco.',
    },
    {
      id:12,
      img:'../../../assets/dog-12.jpg',
      nome:'Bobby',
      genero:'Macho',
      idade:7,
      castrado:true,
      vermifugado:true,
      porte:'Pequeno',
      termos:'Ser maior de 21 anos, Apresentar documentação básica (cópia de RG e CPF), Cópia do comprovante de endereço, Passar pela entrevista de adoção com um responsável da VidaPet, Para adoção de gatinhos, levar caixa de transporte ou adquiri-la conosco, Para adotar cães, é indispensável levar a guia peitoral ou adquiri-la conosco.',
    },
  ]
}
