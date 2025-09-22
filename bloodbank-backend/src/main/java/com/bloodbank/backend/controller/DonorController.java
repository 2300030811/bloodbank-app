package com.bloodbank.backend.controller;

import com.bloodbank.backend.model.Donor;
import com.bloodbank.backend.repository.DonorRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import java.util.List;

@RestController
@RequestMapping("/api/donors")
@CrossOrigin("http://localhost:5173")
public class DonorController {

    @Autowired
    private DonorRepository donorRepository;

    @PostMapping
    public Donor createDonor(@RequestBody Donor donor) {
        return donorRepository.save(donor);
    }

    @GetMapping
    public List<Donor> getAllDonors() {
        return donorRepository.findAll();
    }
    
    @DeleteMapping("/{id}")
    public ResponseEntity<?> deleteDonor(@PathVariable Long id) {
        donorRepository.deleteById(id);
        return ResponseEntity.ok().build();
    }
}