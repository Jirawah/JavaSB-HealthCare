package com.Jirawah.webApp.dto;

import lombok.Data;

@Data
public class PatientDto {
    private Long id;
    private String nom;
    private String prenom;
    private String email;
    private int age;
}