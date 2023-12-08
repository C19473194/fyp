package com.example.demo.model;

import java.util.Date;



import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;

import jakarta.persistence.Table;

@Entity
@Table(name = "feedback")
public class Feedback {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "feedback_id")
    private Long feedbackId;

    @Column(name = "feedback_text")
    private String feedbackText;

    @Column(name = "message")
    private String message;

    @Column(name = "date_submitted")
    private Date dateSubmitted;

    @Column(name = "is_seen")
    private Boolean isSeen;

    @Column(name = "status", nullable = false)
    private String status;

    // @ManyToOne
    // @JoinColumn(name = "project_project_id", nullable = false)
    // private Project project;
    
    // Constructors

    public Feedback() {
    }

    public Feedback(String feedbackText, String message, Date dateSubmitted, Boolean isSeen, String status) {
        this.feedbackText = feedbackText;
        this.message = message;
        this.dateSubmitted = dateSubmitted;
        this.isSeen = isSeen;
        this.status = status;
        //this.project = project;
    }

    // Getters and setters

    public Long getFeedbackId() {
        return feedbackId;
    }

    public void setFeedbackId(Long feedbackId) {
        this.feedbackId = feedbackId;
    }

    public String getFeedbackText() {
        return feedbackText;
    }

    public void setFeedbackText(String feedbackText) {
        this.feedbackText = feedbackText;
    }

    public String getMessage() {
        return message;
    }

    public void setMessage(String message) {
        this.message = message;
    }

    public Date getDateSubmitted() {
        return dateSubmitted;
    }

    public void setDateSubmitted(Date dateSubmitted) {
        this.dateSubmitted = dateSubmitted;
    }

    public boolean getIsSeen() {
        return isSeen;
    }

    public void setIsSeen(Boolean isSeen) {
        this.isSeen = isSeen;
    }

    public String getStatus() {
        return status;
    }

    public void setStatus(String status) {
        this.status = status;
    }
    
}
