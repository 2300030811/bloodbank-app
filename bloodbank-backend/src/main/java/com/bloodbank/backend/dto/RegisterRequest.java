package com.bloodbank.backend.dto;

public record RegisterRequest(String email, String password, String hospitalName) {
}