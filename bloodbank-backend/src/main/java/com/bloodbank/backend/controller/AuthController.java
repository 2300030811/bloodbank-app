package com.bloodbank.backend.controller;

import com.bloodbank.backend.dto.AuthenticationResponse;
import com.bloodbank.backend.dto.LoginRequest;
import com.bloodbank.backend.model.User;
import com.bloodbank.backend.repository.UserRepository;
import com.bloodbank.backend.service.JwtService;
import org.springframework.http.ResponseEntity;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/auth")
@CrossOrigin("http://localhost:5173")
public class AuthController {

    private final UserRepository userRepository;
    private final JwtService jwtService;
    private final AuthenticationManager authenticationManager;

    public AuthController(UserRepository userRepository, JwtService jwtService, AuthenticationManager authenticationManager) {
        this.userRepository = userRepository;
        this.jwtService = jwtService;
        this.authenticationManager = authenticationManager;
    }

    @PostMapping("/login")
    public ResponseEntity<AuthenticationResponse> login(@RequestBody LoginRequest request) {
        authenticationManager.authenticate(
            new UsernamePasswordAuthenticationToken(request.email(), request.password())
        );

        final User user = userRepository.findByEmail(request.email()).orElseThrow();
        String token = jwtService.generateToken(user);

        return ResponseEntity.ok(new AuthenticationResponse(token, user.getEmail(), user.getRole()));
    }

    @GetMapping("/me")
    public ResponseEntity<?> me(@RequestHeader("Authorization") String authorization) {
        if (authorization == null || !authorization.startsWith("Bearer ")) {
            return ResponseEntity.status(401).build();
        }
        String token = authorization.substring(7);
        String email = jwtService.extractUsername(token);
        var user = userRepository.findByEmail(email).orElse(null);
        if (user == null) {
            return ResponseEntity.status(404).build();
        }
        return ResponseEntity.ok(new AuthenticationResponse(token, user.getEmail(), user.getRole()));
    }
}