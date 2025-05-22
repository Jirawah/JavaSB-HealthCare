// import { Component } from '@angular/core';
// import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
// import { CommonModule } from '@angular/common';
// import { Router } from '@angular/router';
// import { MatCardModule } from '@angular/material/card';
// import { MatFormFieldModule } from '@angular/material/form-field';
// import { MatInputModule } from '@angular/material/input';
// import { MatButtonModule } from '@angular/material/button';
// import { MatSelectModule } from '@angular/material/select';
// import { PatientService } from '../../service/patient.service';
// import { Patient } from '../../model/patient.model';

// @Component({
//   selector: 'app-patient-form',
//   standalone: true,
//   imports: [
//     CommonModule,
//     ReactiveFormsModule,
//     MatCardModule,
//     MatFormFieldModule,
//     MatInputModule,
//     MatButtonModule,
//     MatSelectModule
//   ],
//   templateUrl: './patient-form.component.html',
//   styleUrls: ['./patient-form.component.scss']
// })
// export class PatientFormComponent {
//   patientForm: FormGroup;

//   constructor(
//     private fb: FormBuilder,
//     private router: Router,
//     private patientService: PatientService
//   ) {
//     this.patientForm = this.fb.group({
//       prenom: ['', Validators.required],
//       nom: ['', Validators.required],
//       birthday: ['', Validators.required],
//       gender: ['', Validators.required],
//       phone: ['', Validators.required],
//       address: ['', Validators.required],
//       email: ['', [Validators.required, Validators.email]]
//     });
//   }

//   onSubmit(): void {
//     if (this.patientForm.valid) {
//       const patient: Patient = this.patientForm.value;

//       this.patientService.create(patient).subscribe({
//         next: (createdPatient) => {
//           console.log('Patient créé avec succès :', createdPatient);
//           this.router.navigate(['/patients']);
//         },
//         error: (err) => {
//           console.error('Erreur lors de la création du patient :', err);
//         }
//       });
//     }
//   }

//   onCancel(): void {
//     this.router.navigate(['/patients']);
//   }
// }

// import { Component, OnInit } from '@angular/core';
// import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
// import { CommonModule } from '@angular/common';
// import { ActivatedRoute, Router } from '@angular/router';
// import { MatCardModule } from '@angular/material/card';
// import { MatFormFieldModule } from '@angular/material/form-field';
// import { MatInputModule } from '@angular/material/input';
// import { MatButtonModule } from '@angular/material/button';
// import { MatSelectModule } from '@angular/material/select';
// import { PatientService } from '../../service/patient.service';
// import { Patient } from '../../model/patient.model';
// import { switchMap } from 'rxjs';

// @Component({
//   selector: 'app-patient-form',
//   standalone: true,
//   imports: [
//     CommonModule,
//     ReactiveFormsModule,
//     MatCardModule,
//     MatFormFieldModule,
//     MatInputModule,
//     MatButtonModule,
//     MatSelectModule
//   ],
//   templateUrl: './patient-form.component.html',
//   styleUrls: ['./patient-form.component.scss']
// })
// export class PatientFormComponent implements OnInit {
//   patientForm: FormGroup;
//   isEditMode = false;
//   patientId?: number;

//   constructor(
//     private fb: FormBuilder,
//     private router: Router,
//     private route: ActivatedRoute,
//     private patientService: PatientService
//   ) {
//     this.patientForm = this.fb.group({
//       prenom: ['', Validators.required],
//       nom: ['', Validators.required],
//       birthday: ['', Validators.required],
//       gender: ['', Validators.required],
//       phone: ['', Validators.required],
//       address: ['', Validators.required],
//       email: ['', [Validators.required, Validators.email]]
//     });
//   }

//   ngOnInit(): void {
//     this.route.paramMap
//       .pipe(
//         switchMap(params => {
//           const id = params.get('id');
//           if (id) {
//             this.isEditMode = true;
//             this.patientId = +id;
//             return this.patientService.getById(this.patientId);
//           }
//           return [];
//         })
//       )
//       .subscribe((patient: Patient) => {
//         if (patient) {
//           this.patientForm.patchValue(patient);
//         }
//       });
//   }

//   onSubmit(): void {
//     if (this.patientForm.valid) {
//       const patient: Patient = this.patientForm.value;

//       if (this.isEditMode && this.patientId) {
//         this.patientService.update(this.patientId, patient).subscribe({
//           next: updated => {
//             console.log('✅ Patient modifié :', updated);
//             this.router.navigate(['/patients']);
//           },
//           error: err => {
//             console.error('❌ Erreur modification :', err);
//           }
//         });
//       } else {
//         this.patientService.create(patient).subscribe({
//           next: created => {
//             console.log('✅ Patient créé :', created);
//             this.router.navigate(['/patients']);
//           },
//           error: err => {
//             console.error('❌ Erreur création :', err);
//           }
//         });
//       }
//     }
//   }

//   onCancel(): void {
//     this.router.navigate(['/patients']);
//   }
// }

import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, Router } from '@angular/router';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatSelectModule } from '@angular/material/select';
import { PatientService } from '../../service/patient.service';
import { Patient } from '../../model/patient.model';
import { switchMap } from 'rxjs';

@Component({
  selector: 'app-patient-form',
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MatCardModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatSelectModule
  ],
  templateUrl: './patient-form.component.html',
  styleUrls: ['./patient-form.component.scss']
})
export class PatientFormComponent implements OnInit {
  patientForm: FormGroup;
  isEditMode = false;
  patientId?: number;
  formTitle = 'Ajouter un nouveau patient';
  submitButtonLabel = 'Enregistrer';

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private route: ActivatedRoute,
    private patientService: PatientService
  ) {
    this.patientForm = this.fb.group({
      prenom: ['', Validators.required],
      nom: ['', Validators.required],
      birthday: ['', Validators.required],
      gender: ['', Validators.required],
      phone: ['', Validators.required],
      address: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]]
    });
  }

  ngOnInit(): void {
    this.route.paramMap
      .pipe(
        switchMap(params => {
          const id = params.get('id');
          if (id) {
            this.isEditMode = true;
            this.patientId = +id;
            this.formTitle = 'Modifier le patient';
            this.submitButtonLabel = 'Mettre à jour';
            return this.patientService.getById(this.patientId);
          }
          return [];
        })
      )
      .subscribe((patient: Patient) => {
        if (patient) {
          this.patientForm.patchValue(patient);
        }
      });
  }

  onSubmit(): void {
    if (this.patientForm.valid) {
      const patient: Patient = this.patientForm.value;

      if (this.isEditMode && this.patientId) {
        this.patientService.update(this.patientId, patient).subscribe({
          next: updated => {
            console.log('✅ Patient modifié :', updated);
            this.router.navigate(['/patients']);
          },
          error: err => {
            console.error('❌ Erreur modification :', err);
          }
        });
      } else {
        this.patientService.create(patient).subscribe({
          next: created => {
            console.log('✅ Patient créé :', created);
            this.router.navigate(['/patients']);
          },
          error: err => {
            console.error('❌ Erreur création :', err);
          }
        });
      }
    }
  }

  onCancel(): void {
    this.router.navigate(['/patients']);
  }
}
