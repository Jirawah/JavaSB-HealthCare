package com.Jirawah.msScore.dto;

import lombok.AllArgsConstructor;
import lombok.Data;

@Data
@AllArgsConstructor
public class ScoreResponseDTO {
    private String patientFullName;
    private int age;
    private int triggerCount;
    private String riskLevel;
}
