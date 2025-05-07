package com.Jirawah.msPatient.repository;

import com.Jirawah.msPatient.model.Patient;
import org.springframework.data.jpa.repository.JpaRepository;

public interface PatientRepository extends JpaRepository<Patient, Long> {
}
