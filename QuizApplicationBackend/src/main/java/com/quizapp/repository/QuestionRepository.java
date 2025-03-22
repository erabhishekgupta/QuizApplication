package com.quizapp.repository;



import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import com.quizapp.model.Question;
import java.util.List;


@Repository
public interface QuestionRepository extends JpaRepository<Question, Long> {
    List<Question> findAll();
    
  
}

