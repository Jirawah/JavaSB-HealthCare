import { Routes } from '@angular/router';
// import { HomeComponent } from './home/home.component';
// import { LoginComponent } from './auth/login/login.component';
// import { RegisterComponent } from './auth/register/register.component';
// import { PatientsComponent } from './components/patient/patient.component';

// export const routes: Routes = [
//   { path: '', title: 'Accueil', component: HomeComponent },
//   { path: 'login', title: 'Connexion', component: LoginComponent },
//   { path: 'register', title: 'Inscription', component: RegisterComponent },
//   { path: 'patients', title: 'Patients', component: PatientsComponent },
//   { path: '**', redirectTo: '' }
// ];

export const routes: Routes = [
  {
    path: '',
    title: 'Accueil',
    loadComponent: () => import('./home/home.component').then(m => m.HomeComponent)
  },
  {
    path: 'login',
    title: 'Connexion',
    loadComponent: () => import('./auth/login/login.component').then(m => m.LoginComponent)
  },
  {
    path: 'register',
    title: 'Inscription',
    loadComponent: () => import('./auth/register/register.component').then(m => m.RegisterComponent)
  },
  {
    path: 'patients',
    title: 'Patients',
    loadComponent: () => import('./components/patient/patient.component').then(m => m.PatientsComponent)
  },
  {
    path: 'patients/new',
    title: 'Ajouter un patient',
    loadComponent: () => import('./components/patient-form/patient-form.component').then(m => m.PatientFormComponent)
  },
    {
    path: 'patients/edit/:id',
    loadComponent: () =>
      import('./components/patient-form/patient-form.component').then(m => m.PatientFormComponent),
    title: 'Modifier un patient'
  },
  {
    path: '**',
    redirectTo: ''
  }
];

