package com.Jirawah.msNote.service;

import com.Jirawah.msNote.dto.NoteRequestDTO;
import com.Jirawah.msNote.dto.NoteResponseDTO;

import java.util.List;

public interface NoteService {

    NoteResponseDTO createNote(NoteRequestDTO requestDTO);

    List<NoteResponseDTO> getNotesByPatientId(String patientId);

    NoteResponseDTO updateNote(String noteId, NoteRequestDTO requestDTO);

    void deleteNote(String noteId);
}
