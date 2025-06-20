package com.Jirawah.msScore.client;

import com.Jirawah.msScore.config.FeignClientConfig;
import com.Jirawah.msScore.dto.PatientDTO;
import org.springframework.cloud.openfeign.FeignClient;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;

@FeignClient(
        name = "mspatient",
        configuration = FeignClientConfig.class
)
public interface PatientClient {

    @GetMapping("/patients/{id}")
    PatientDTO getPatientById(@PathVariable("id") Long id);
}
