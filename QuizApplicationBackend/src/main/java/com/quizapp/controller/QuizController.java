package com.quizapp.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import com.quizapp.model.Question;
import com.quizapp.repository.QuestionRepository;
import java.util.List;
import java.util.Collections;

@RestController
@RequestMapping("/api/quiz")
@CrossOrigin("*")
public class QuizController {

    @Autowired
    private QuestionRepository questionRepository;

    // Get Random Questions
    @GetMapping("/questions")
    public List<Question> getRandomQuestions() {
        List<Question> questions = questionRepository.findAll();
        Collections.shuffle(questions);
        return questions.size() > 10 ? questions.subList(0, 10) : questions;
    }
    
    

}
