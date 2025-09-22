package com.bloodbank.backend.model;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Column;

@Entity // Marks this class as a database table blueprint
public class BloodRequest {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String bloodGroup;
    private int unitsRequired;
    private String urgencyLevel;
    private String hospitalName;
    private String contactPerson;
    private String contactNumber;
    private String email; // <-- ADDED
    
    @Column(columnDefinition = "TEXT") // Use TEXT type for longer descriptions
    private String reason; // <-- ADDED
    
    private String status; // e.g., PENDING, FULFILLED, REJECTED

    // --- Getters and Setters ---
    // Remember to generate the new getters and setters for email and reason in Eclipse
    // Right-click -> Source -> Generate Getters and Setters...

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getBloodGroup() {
        return bloodGroup;
    }

    public void setBloodGroup(String bloodGroup) {
        this.bloodGroup = bloodGroup;
    }

    public int getUnitsRequired() {
        return unitsRequired;
    }

    public void setUnitsRequired(int unitsRequired) {
        this.unitsRequired = unitsRequired;
    }

    public String getUrgencyLevel() {
        return urgencyLevel;
    }

    public void setUrgencyLevel(String urgencyLevel) {
        this.urgencyLevel = urgencyLevel;
    }

    public String getHospitalName() {
        return hospitalName;
    }

    public void setHospitalName(String hospitalName) {
        this.hospitalName = hospitalName;
    }

    public String getContactPerson() {
        return contactPerson;
    }

    public void setContactPerson(String contactPerson) {
        this.contactPerson = contactPerson;
    }

    public String getContactNumber() {
        return contactNumber;
    }

    public void setContactNumber(String contactNumber) {
        this.contactNumber = contactNumber;
    }
    
    public String getEmail() { // <-- ADDED
        return email;
    }

    public void setEmail(String email) { // <-- ADDED
        this.email = email;
    }

    public String getReason() { // <-- ADDED
        return reason;
    }

    public void setReason(String reason) { // <-- ADDED
        this.reason = reason;
    }

    public String getStatus() {
        return status;
    }

    public void setStatus(String status) {
        this.status = status;
    }
}