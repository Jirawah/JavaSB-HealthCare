package com.Jirawah.msScore.dto;

import lombok.Data;
import java.time.LocalDate;

@Data
public class PatientDTO {
    private Long id;
    private String prenom;
    private String nom;
    private LocalDate birthday;
    private String gender;
    private String phone;
    private String address;
    private String email;
}
