package com.Jirawah.msNote.model;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

import java.time.LocalDate;

@Data
@NoArgsConstructor
@AllArgsConstructor
@Document(collection = "notes")
public class NoteModel {

    @Id
    private String id;
    private String patientId;
    private String note;
    private LocalDate noteDate;
}
