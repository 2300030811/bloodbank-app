package com.bloodbank.backend.dto;

public record AuthenticationResponse(String token, String email, String role) {
}