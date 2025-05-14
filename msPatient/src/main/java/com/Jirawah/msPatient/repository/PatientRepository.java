package com.Jirawah.msPatient.repository;

import com.Jirawah.msPatient.model.PatientModel;
import org.springframework.data.jpa.repository.JpaRepository;

public interface PatientRepository extends JpaRepository<PatientModel, Long> {
}
