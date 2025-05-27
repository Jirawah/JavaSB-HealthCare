package com.Jirawah.msScore.service.impl;

import com.Jirawah.msScore.client.NoteClient;
import com.Jirawah.msScore.client.PatientClient;
import com.Jirawah.msScore.dto.NoteDTO;
import com.Jirawah.msScore.dto.PatientDTO;
import com.Jirawah.msScore.dto.ScoreResponseDTO;
import com.Jirawah.msScore.service.ScoreService;
import org.springframework.stereotype.Service;

import java.time.LocalDate;
import java.time.Period;
import java.util.List;
import java.util.Locale;
import java.util.regex.Pattern;

@Service
public class ScoreServiceImpl implements ScoreService {

    private final PatientClient patientClient;
    private final NoteClient noteClient;

    private static final String[] TRIGGERS = {
            "Hémoglobine A1C", "Microalbumine", "Taille", "Poids",
            "Fumeur", "Fumeuse", "Anormal", "Cholestérol",
            "Vertige", "Rechute", "Réaction", "Anticorps"
    };

    public ScoreServiceImpl(PatientClient patientClient, NoteClient noteClient) {
        this.patientClient = patientClient;
        this.noteClient = noteClient;
    }

    @Override
    public ScoreResponseDTO assessDiabetesRisk(Long patientId) {
        // Récupération des données
        PatientDTO patient = patientClient.getPatientById(patientId);
        List<NoteDTO> notes = noteClient.getNotesByPatientId(String.valueOf(patientId));

        // Calcul de l’âge
        int age = Period.between(patient.getBirthday(), LocalDate.now()).getYears();

        // Comptage des déclencheurs dans toutes les notes
        int triggerCount = countTriggersInNotes(notes);

        // Évaluation du risque
        String riskLevel = evaluateRiskLevel(patient.getGender(), age, triggerCount);

        return new ScoreResponseDTO(patient.getPrenom() + " " + patient.getNom(), age, triggerCount, riskLevel);

    }

    private int countTriggersInNotes(List<NoteDTO> notes) {
        int count = 0;
        Pattern pattern;
        for (NoteDTO note : notes) {
            String content = note.getNote().toLowerCase(Locale.ROOT);
            for (String trigger : TRIGGERS) {
                pattern = Pattern.compile("\\b" + trigger.toLowerCase(Locale.ROOT) + "\\b");
                if (pattern.matcher(content).find()) {
                    count++;
                }
            }
        }
        return count;
    }

    private String evaluateRiskLevel(String gender, int age, int triggerCount) {
        boolean male = "M".equalsIgnoreCase(gender);

        if (age > 30) {
            if (triggerCount >= 8) return "Early onset";
            if (triggerCount >= 6) return "In danger";
            if (triggerCount >= 2) return "Borderline";
            return "None";
        } else {
            if (male) {
                if (triggerCount >= 5) return "Early onset";
                if (triggerCount >= 3) return "In danger";
            } else {
                if (triggerCount >= 7) return "Early onset";
                if (triggerCount >= 4) return "In danger";
            }
            return "None";
        }
    }
}
