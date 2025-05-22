// import { Component, OnInit } from '@angular/core';
// import { CommonModule } from '@angular/common';
// import { MatCardModule } from '@angular/material/card';
// import { MatTableModule } from '@angular/material/table';
// import { MatButtonModule } from '@angular/material/button';
// import { PatientService } from '../../service/patient.service';
// import { Patient } from '../../model/patient.model';
// import { Router } from '@angular/router';
// import { MatIconModule } from '@angular/material/icon';

// @Component({
//   selector: 'app-patient',
//   standalone: true,
//   imports: [
//     CommonModule,
//     MatCardModule,
//     MatTableModule,
//     MatButtonModule,
//     MatIconModule
//   ],
//   templateUrl: './patient.component.html',
//   styleUrls: ['./patient.component.scss']
// })
// export class PatientsComponent implements OnInit {
//   patients: Patient[] = [];
//   displayedColumns = ['prenom', 'nom', 'birthday', 'gender', 'phone', 'address', 'email', 'actions'];

//   constructor(private patientService: PatientService, private router: Router) {}

//   ngOnInit(): void {
//     this.patientService.getAll().subscribe(data => {
//       this.patients = data;
//     });
//   }

//   onCreatePatient(): void {
//   this.router.navigate(['/patients/new']);
// }

//   editPatient(id: number) {
//     console.log('Edit', id);
//   }

//   manageNotes(id: number) {
//     console.log('Manage notes for', id);
//   }

//   generateScore(id: number) {
//     console.log('Generate score for', id);
//   }
// }

import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatTableModule } from '@angular/material/table';
import { MatButtonModule } from '@angular/material/button';
import { PatientService } from '../../service/patient.service';
import { Patient } from '../../model/patient.model';
import { Router } from '@angular/router';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-patient',
  standalone: true,
  imports: [
    CommonModule,
    MatCardModule,
    MatTableModule,
    MatButtonModule,
    MatIconModule
  ],
  templateUrl: './patient.component.html',
  styleUrls: ['./patient.component.scss']
})
export class PatientsComponent implements OnInit {
  patients: Patient[] = [];
  displayedColumns = ['prenom', 'nom', 'birthday', 'gender', 'phone', 'address', 'email', 'actions'];

  constructor(private patientService: PatientService, private router: Router) {}

  ngOnInit(): void {
    this.patientService.getAll().subscribe(data => {
      this.patients = data;
    });
  }

  onCreatePatient(): void {
    this.router.navigate(['/patients/new']);
  }

  editPatient(id: number): void {
    this.router.navigate(['/patients/edit', id]);
  }

  manageNotes(id: number): void {
    console.log('Manage notes for', id);
  }

  generateScore(id: number): void {
    console.log('Generate score for', id);
  }
}
