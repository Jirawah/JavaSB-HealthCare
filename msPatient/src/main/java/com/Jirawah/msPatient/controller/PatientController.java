package com.Jirawah.msPatient.controller;

import com.Jirawah.msPatient.model.PatientModel;
import com.Jirawah.msPatient.service.PatientService;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/patients")
@CrossOrigin(origins = "http://localhost:4200")
public class PatientController {

    private final PatientService service;

    public PatientController(PatientService service) {
        this.service = service;
    }

    @GetMapping
    public List<PatientModel> getAll() {
        return service.getAll();
    }

    @GetMapping("/{id}")
    public PatientModel getById(@PathVariable Long id) {
        return service.getById(id);
    }

    @PostMapping
    public PatientModel create(@RequestBody PatientModel patient) {
        return service.save(patient);
    }

    @PutMapping("/{id}")
    public PatientModel update(@PathVariable Long id, @RequestBody PatientModel patient) {
        return service.update(id, patient);
    }

    @DeleteMapping("/{id}")
    public void delete(@PathVariable Long id) {
        service.delete(id);
    }
}
