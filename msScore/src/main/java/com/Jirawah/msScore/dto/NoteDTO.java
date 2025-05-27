package com.Jirawah.msScore.dto;

import lombok.Data;
import java.time.LocalDate;

@Data
public class NoteDTO {
    private String id;
    private String patientId;
    private String note;
    private LocalDate noteDate;
}
