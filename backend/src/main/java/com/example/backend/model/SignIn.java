package com.example.backend.model;

import jakarta.persistence.Entity;
import jakarta.persistence.Id;


@Entity


public class SignIn {
    @Id
    public String email;
    public String password;
    public SignIn() {
    }
    public SignIn(String email, String password) {
        this.email = email;
        this.password = password;
    }
    public void setEmail(String email) {
        this.email = email;
    }
    public void setPassword(String password) {
        this.password = password;
    }
    public String getEmail() {
        return email;
    }
    public String getPassword() {
        return password;
    }
    
}
