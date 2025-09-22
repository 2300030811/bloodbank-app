package com.bloodbank.backend.repository;

import com.bloodbank.backend.model.BloodRequest;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface BloodRequestRepository extends JpaRepository<BloodRequest, Long> {
    // Spring Data JPA automatically provides all the necessary database
    // operations like save(), findById(), findAll(), etc.
    // No extra code is needed here.
}