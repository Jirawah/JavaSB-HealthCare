package com.Jirawah.msNote.controller;

import com.Jirawah.msNote.dto.NoteRequestDTO;
import com.Jirawah.msNote.dto.NoteResponseDTO;
import com.Jirawah.msNote.service.NoteService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/notes")
//@CrossOrigin(origins = "*") // À adapter si besoin pour autoriser les requêtes Angular
@CrossOrigin(origins = "http://localhost:4200")
public class NoteController {

    private final NoteService noteService;

    @Autowired
    public NoteController(NoteService noteService) {
        this.noteService = noteService;
    }

    @PostMapping
    public ResponseEntity<NoteResponseDTO> createNote(@RequestBody NoteRequestDTO requestDTO) {
        NoteResponseDTO created = noteService.createNote(requestDTO);
        return ResponseEntity.ok(created);
    }

    @GetMapping("/patient/{patientId}")
    public ResponseEntity<List<NoteResponseDTO>> getNotesByPatientId(@PathVariable String patientId) {
        List<NoteResponseDTO> notes = noteService.getNotesByPatientId(patientId);
        return ResponseEntity.ok(notes);
    }

    @PutMapping("/{noteId}")
    public ResponseEntity<NoteResponseDTO> updateNote(@PathVariable String noteId, @RequestBody NoteRequestDTO requestDTO) {
        NoteResponseDTO updated = noteService.updateNote(noteId, requestDTO);
        return ResponseEntity.ok(updated);
    }

    @DeleteMapping("/{noteId}")
    public ResponseEntity<Void> deleteNote(@PathVariable String noteId) {
        noteService.deleteNote(noteId);
        return ResponseEntity.noContent().build();
    }
}
