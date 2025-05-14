package com.Jirawah.webApp.controller;

import com.Jirawah.webApp.dto.PatientDto;
import com.Jirawah.webApp.feign.PatientClient;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/webapp/patients")
@RequiredArgsConstructor
public class PatientProxyController {

    private final PatientClient patientClient;

    @GetMapping
    public List<PatientDto> getAllPatients() {
        return patientClient.getAllPatients();
    }

    @GetMapping("/{id}")
    public PatientDto getPatientById(@PathVariable Long id) {
        return patientClient.getPatientById(id);
    }
}
