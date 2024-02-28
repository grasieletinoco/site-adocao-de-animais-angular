import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { AboutComponent } from './pages/about/about.component';
import { ContactComponent } from './pages/contact/contact.component';
import { DogComponent } from './pages/dog/dog.component';
import { CatComponent } from './pages/cat/cat.component';

export const routes: Routes = [
    {path:'',title:'Home',component:HomeComponent},
    {path:'sobre',title:'Sobre',component:AboutComponent},
    {path:'contato',title:'Contato',component:ContactComponent},
    {path:'cachorro', title:'Cachorro', component:DogComponent},
    {path:'gato', title:'Gato',component:CatComponent},
];
