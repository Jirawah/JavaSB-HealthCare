package com.Jirawah.msPatient.service;

import com.Jirawah.msPatient.model.PatientModel;
import com.Jirawah.msPatient.repository.PatientRepository;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class PatientService {

    private final PatientRepository repository;

    public PatientService(PatientRepository repository) {
        this.repository = repository;
    }

    public List<PatientModel> getAll() {
        return repository.findAll();
    }

    public PatientModel getById(Long id) {
        return repository.findById(id).orElse(null);
    }

    public PatientModel save(PatientModel patient) {
        return repository.save(patient);
    }

    public PatientModel update(Long id, PatientModel patient) {
        patient.setId(id);
        return repository.save(patient);
    }

    public void delete(Long id) {
        repository.deleteById(id);
    }
}