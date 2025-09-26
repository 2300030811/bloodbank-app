package com.bloodbank.backend.exception;

import org.springframework.dao.DataIntegrityViolationException;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.bind.annotation.RestControllerAdvice;

@RestControllerAdvice
public class GlobalExceptionHandler {

    /**
     * This method catches database constraint errors, like when a unique email
     * is already in the database.
     * It returns a user-friendly message and an HTTP 409 Conflict status.
     */
    @ExceptionHandler(DataIntegrityViolationException.class)
    public ResponseEntity<String> handleDataIntegrityViolation(DataIntegrityViolationException ex) {
        // You can make this check more specific if needed, but for now,
        // any data integrity error on registration likely means a duplicate email.
        return new ResponseEntity<>("This email is already registered.", HttpStatus.CONFLICT); // Returns 409
    }
}