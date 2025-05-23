package com.Jirawah.msNote.dto;

import lombok.AllArgsConstructor;
import lombok.Data;

import java.time.LocalDate;

@Data
@AllArgsConstructor
public class NoteResponseDTO {
    private String id;
    private String patientId;
    private String note;
    private LocalDate noteDate;
}
