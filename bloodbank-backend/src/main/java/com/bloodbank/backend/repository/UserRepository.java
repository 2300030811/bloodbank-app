package com.bloodbank.backend.repository;

import com.bloodbank.backend.model.User;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.Optional;

@Repository
public interface UserRepository extends JpaRepository<User, Long> {

    // Spring Data JPA is smart enough to automatically create a query
    // from this method name. It will search for a user by their email field.
    Optional<User> findByEmail(String email);
}