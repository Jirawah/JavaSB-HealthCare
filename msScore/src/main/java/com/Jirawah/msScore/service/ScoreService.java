package com.Jirawah.msScore.service;

import com.Jirawah.msScore.dto.ScoreResponseDTO;

public interface ScoreService {
    ScoreResponseDTO assessDiabetesRisk(Long patientId);
}
