package com.Jirawah.msScore.client;

import com.Jirawah.msScore.config.FeignClientConfig;
import com.Jirawah.msScore.dto.NoteDTO;
import org.springframework.cloud.openfeign.FeignClient;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;

import java.util.List;

@FeignClient(
        name = "msnote",
        configuration = FeignClientConfig.class
)
public interface NoteClient {

    @GetMapping("/notes/patient/{patientId}")
    List<NoteDTO> getNotesByPatientId(@PathVariable("patientId") String patientId);
}
