package com.Jirawah.webApp.feign;

import com.Jirawah.webApp.dto.PatientDto;
import org.springframework.cloud.openfeign.FeignClient;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;

import java.util.List;

@FeignClient(name = "mspatient") // Utilisation d’Eureka, pas besoin de l'URL fixe
public interface PatientClient {

    @GetMapping("/patients")
    List<PatientDto> getAllPatients();

    @GetMapping("/patients/{id}")
    PatientDto getPatientById(@PathVariable Long id);
}
