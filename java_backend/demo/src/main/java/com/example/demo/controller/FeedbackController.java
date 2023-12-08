package com.example.demo.controller;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import com.example.demo.model.Feedback;

import com.example.demo.repository.FeedbackRepository;

import com.example.demo.service.FeedbackService;

import java.util.List;
import java.util.Optional;
@CrossOrigin(origins = "http://localhost:3000")
@RestController
@RequestMapping("/api/v1")
public class FeedbackController {

    @Autowired
    FeedbackRepository feedbackRepository;
    private final FeedbackService feedbackService;

 
    public FeedbackController(FeedbackService feedbackService) {
        this.feedbackService = feedbackService;
    }

    @GetMapping("/feedbacks")
    public List<Feedback> getAllFeedback() {
        return feedbackService.getAllFeedback();
    }

    @GetMapping("/feedbacks/{id}")
    public ResponseEntity<Feedback> getFeedbackById(@PathVariable Long id) {
        Optional<Feedback> feedback = feedbackService.getFeedbackById(id);
        return feedback.map(value -> new ResponseEntity<>(value, HttpStatus.OK))
                .orElseGet(() -> new ResponseEntity<>(HttpStatus.NOT_FOUND));
    }

    @PostMapping ("/feedbacks")
    public ResponseEntity<Feedback> saveFeedback(@RequestBody Feedback feedback) {
          try {
			Feedback _feedback = feedbackRepository
					.save(new Feedback(feedback.getFeedbackText(), feedback.getMessage(), feedback.getDateSubmitted(), feedback.getIsSeen(), feedback.getStatus()));
			return new ResponseEntity<>(_feedback, HttpStatus.CREATED);
		} catch (Exception e) {
			return new ResponseEntity<>(null, HttpStatus.INTERNAL_SERVER_ERROR);
		}
      
    }

    @DeleteMapping("feedbacks/{id}")
    public ResponseEntity<Void> deleteFeedback(@PathVariable Long id) {
        feedbackService.deleteFeedback(id);
        return new ResponseEntity<>(HttpStatus.NO_CONTENT);
    }
}
