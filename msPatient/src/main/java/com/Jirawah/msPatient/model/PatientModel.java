package com.Jirawah.msPatient.model;

import jakarta.persistence.*;
import lombok.*;

import java.time.LocalDate;

@Entity
@Data
@NoArgsConstructor
@AllArgsConstructor
@Table(name = "patients") // 📝 Pluriel recommandé pour une meilleure lisibilité
public class PatientModel {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String prenom;     // first name
    private String nom;        // last name
    private LocalDate birthday;
    private String gender;
    private String phone;
    private String address;
    private String email;

   // @ManyToOne
   // private User medecin;
}
