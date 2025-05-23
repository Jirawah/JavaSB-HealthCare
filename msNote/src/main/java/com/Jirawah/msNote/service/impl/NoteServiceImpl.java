package com.Jirawah.msNote.service.impl;

import com.Jirawah.msNote.dto.NoteRequestDTO;
import com.Jirawah.msNote.dto.NoteResponseDTO;
import com.Jirawah.msNote.mapper.NoteMapper;
import com.Jirawah.msNote.model.NoteModel;
import com.Jirawah.msNote.repository.NoteRepository;
import com.Jirawah.msNote.service.NoteService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;

@Service
public class NoteServiceImpl implements NoteService {

    private final NoteRepository noteRepository;

    @Autowired
    public NoteServiceImpl(NoteRepository noteRepository) {
        this.noteRepository = noteRepository;
    }

    @Override
    public NoteResponseDTO createNote(NoteRequestDTO requestDTO) {
        NoteModel note = NoteMapper.toEntity(requestDTO);
        NoteModel saved = noteRepository.save(note);
        return NoteMapper.toDTO(saved);
    }

    @Override
    public List<NoteResponseDTO> getNotesByPatientId(String patientId) {
        return noteRepository.findByPatientId(patientId)
                .stream()
                .map(NoteMapper::toDTO)
                .collect(Collectors.toList());
    }

    @Override
    public NoteResponseDTO updateNote(String noteId, NoteRequestDTO requestDTO) {
        Optional<NoteModel> optionalNote = noteRepository.findById(noteId);
        if (optionalNote.isPresent()) {
            NoteModel note = optionalNote.get();
            NoteMapper.updateEntity(note, requestDTO);
            NoteModel updated = noteRepository.save(note);
            return NoteMapper.toDTO(updated);
        } else {
            throw new RuntimeException("Note with ID " + noteId + " not found");
        }
    }

    @Override
    public void deleteNote(String noteId) {
        noteRepository.deleteById(noteId);
    }
}
