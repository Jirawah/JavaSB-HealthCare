import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { NoteService } from '../../service/note.service';
import { Note } from '../../model/note.model';

@Component({
  selector: 'app-note-form',
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MatCardModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule
  ],
  templateUrl: './note-form.component.html',
  styleUrls: ['./note-form.component.scss']
})
export class NoteFormComponent implements OnInit {
  noteForm!: FormGroup;
  patientId!: string;
  noteId?: string;
  isEditMode = false;

  constructor(
    private fb: FormBuilder,
    private noteService: NoteService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.patientId = this.route.snapshot.paramMap.get('id')!;
    this.noteId = this.route.snapshot.paramMap.get('noteId') || undefined;
    this.isEditMode = !!this.noteId;

    this.noteForm = this.fb.group({
      note: ['', Validators.required]
    });

    if (this.isEditMode && this.noteId) {
      this.noteService.getNotesByPatientId(this.patientId).subscribe(notes => {
        const noteToEdit = notes.find(n => n.id === this.noteId);
        if (noteToEdit) {
          this.noteForm.patchValue({ note: noteToEdit.note });
        }
      });
    }
  }

  onSubmit(): void {
    if (this.noteForm.invalid) return;

    const noteData = {
      patientId: this.patientId,
      note: this.noteForm.value.note
    };

    const request$ = this.isEditMode && this.noteId
      ? this.noteService.updateNote(this.noteId, noteData)
      : this.noteService.createNote(noteData);

    request$.subscribe(() => {
      this.router.navigate(['/patients', this.patientId, 'notes']);
    });
  }

  onBack(): void {
    this.router.navigate(['/patients', this.patientId, 'notes']);
  }
}
