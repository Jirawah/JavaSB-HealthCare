import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatTableModule } from '@angular/material/table';
import { MatButtonModule } from '@angular/material/button';
import { PatientService } from '../../service/patient.service';
import { Patient } from '../../model/patient.model';

@Component({
  selector: 'app-patients',
  standalone: true,
  imports: [
    CommonModule,
    MatCardModule,
    MatTableModule,
    MatButtonModule
  ],
  templateUrl: './patient.component.html',
  styleUrls: ['./patient.component.scss']
})
export class PatientsComponent implements OnInit {
  patients: Patient[] = [];
  displayedColumns = ['prenom', 'nom', 'birthday', 'gender', 'phone', 'address', 'email', 'actions'];

  constructor(private patientService: PatientService) {}

  ngOnInit(): void {
    this.patientService.getAll().subscribe(data => {
      this.patients = data;
    });
  }

  editPatient(id: number) {
    console.log('Edit', id);
  }

  manageNotes(id: number) {
    console.log('Manage notes for', id);
  }

  generateScore(id: number) {
    console.log('Generate score for', id);
  }
}
