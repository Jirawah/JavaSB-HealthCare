import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Note } from '../../model/note.model';
import { NoteService } from '../../service/note.service';
import { ActivatedRoute, Router } from '@angular/router';
import { MatCardModule } from '@angular/material/card';
import { MatTableModule } from '@angular/material/table';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-note',
  standalone: true,
  imports: [
    CommonModule,
    MatCardModule,
    MatTableModule,
    MatButtonModule,
    MatIconModule
  ],
  templateUrl: './note.component.html',
  styleUrls: ['./note.component.scss']
})
export class NoteComponent implements OnInit {
  notes: Note[] = [];
  displayedColumns = ['noteDate', 'note', 'actions'];
  patientId!: string;

  constructor(
    private noteService: NoteService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      const id = params.get('id');
      if (id) {
        this.patientId = id;
        this.fetchNotes();
      }
    });
  }

  fetchNotes(): void {
    this.noteService.getNotesByPatientId(this.patientId).subscribe(notes => {
      this.notes = notes;
    });
  }

  onAddNote(): void {
    this.router.navigate(['/patients', this.patientId, 'notes', 'new']);
  }

  onEditNote(noteId: string): void {
    this.router.navigate(['/patients', this.patientId, 'notes', 'edit', noteId]);
  }

  onDeleteNote(noteId: string): void {
    this.noteService.deleteNote(noteId).subscribe(() => {
      this.fetchNotes();
    });
  }

  onBack(): void {
    this.router.navigate(['/patients']);
  }
}