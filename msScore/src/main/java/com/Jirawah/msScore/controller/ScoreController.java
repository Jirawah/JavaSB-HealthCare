package com.Jirawah.msScore.controller;

import com.Jirawah.msScore.dto.ScoreResponseDTO;
import com.Jirawah.msScore.service.ScoreService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/score")
@RequiredArgsConstructor
public class ScoreController {

    private final ScoreService scoreService;

    @GetMapping("/{patientId}")
    public ResponseEntity<ScoreResponseDTO> getDiabetesRisk(@PathVariable Long patientId) {
        ScoreResponseDTO result = scoreService.assessDiabetesRisk(patientId);
        return ResponseEntity.ok(result);
    }
}
