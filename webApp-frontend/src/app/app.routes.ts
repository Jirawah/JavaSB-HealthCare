import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './auth/login/login.component';
import { RegisterComponent } from './auth/register/register.component';

export const routes: Routes = [
  { path: '', title: 'Accueil', component: HomeComponent },
  { path: 'login', title: 'Connexion', component: LoginComponent },
  { path: 'register', title: 'Inscription', component: RegisterComponent },
  { path: '**', redirectTo: '' }
];
