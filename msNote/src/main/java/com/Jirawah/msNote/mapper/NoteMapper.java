package com.Jirawah.msNote.mapper;

import com.Jirawah.msNote.dto.NoteRequestDTO;
import com.Jirawah.msNote.dto.NoteResponseDTO;
import com.Jirawah.msNote.model.NoteModel;

import java.time.LocalDate;

public class NoteMapper {

    public static NoteModel toEntity(NoteRequestDTO dto) {
        return new NoteModel(
                null,
                dto.getPatientId(),
                dto.getNote(),
                LocalDate.now() // On associe la date du jour lors de la création
        );
    }

    public static NoteResponseDTO toDTO(NoteModel model) {
        return new NoteResponseDTO(
                model.getId(),
                model.getPatientId(),
                model.getNote(),
                model.getNoteDate()
        );
    }

    public static void updateEntity(NoteModel note, NoteRequestDTO dto) {
        note.setNote(dto.getNote());
        note.setNoteDate(LocalDate.now()); // Mise à jour de la date
    }
}
