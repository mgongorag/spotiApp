//Aca se importan las rutas
import { Routes } from '@angular/router';
import {HomeComponent} from './components/home/home.component';
import {SearchComponent} from './components/search/search.component';
import { ArtistaComponent } from './components/artista/artista.component';


export const ROUTES: Routes = [
     { path: 'home', component: HomeComponent},
     { path: 'search', component: SearchComponent},
     { path: '', pathMatch: 'full', redirectTo: 'home'},
     { path: 'artist/:id', component: ArtistaComponent},
     { path: '**', pathMatch: 'full', redirectTo: 'home'},
     
]