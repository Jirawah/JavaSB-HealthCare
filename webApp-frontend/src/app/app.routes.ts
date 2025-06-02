import { Routes } from '@angular/router';

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
    path: 'patients/:id/notes',
    title: 'Notes du patient',
    loadComponent: () => import('./components/note/note.component').then(m => m.NoteComponent)
  },
  {
    path: 'patients/:id/notes/new',
    title: 'Ajouter une note',
    loadComponent: () => import('./components/note-form/note-form.component').then(m => m.NoteFormComponent)
  },
  {
    path: 'patients/:id/notes/edit/:noteId',
    title: 'Modifier une note',
    loadComponent: () => import('./components/note-form/note-form.component').then(m => m.NoteFormComponent)
  },
  {
  path: 'patients/:id/score',
  title: 'Score du patient',
  loadComponent: () => import('./components/score/score.component').then(m => m.ScoreComponent)
  },
  {
    path: '**',
    redirectTo: ''
  }
];

