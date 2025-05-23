package com.Jirawah.msNote.repository;

import com.Jirawah.msNote.model.NoteModel;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface NoteRepository extends MongoRepository<NoteModel, String> {

    List<NoteModel> findByPatientId(String patientId);

}
