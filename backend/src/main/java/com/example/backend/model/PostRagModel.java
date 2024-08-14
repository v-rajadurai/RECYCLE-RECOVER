package com.example.backend.model;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;

@Entity
public class PostRagModel {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    int id;
    String ragType;
    int quantity;
    int estimatedAmount;
    String name;
    String email;
    String phone;
    String address;

    public PostRagModel() {
    }
    
    public PostRagModel(int id, String ragType, int quantity, int estimatedAmount, String name, String email,
            String phone, String address) {
        this.id = id;
        this.ragType = ragType;
        this.quantity = quantity;
        this.estimatedAmount = estimatedAmount;
        this.name = name;
        this.email = email;
        this.phone = phone;
        this.address = address;
    }

    public int getId() {
        return id;
    }
    public void setId(int id) {
        this.id = id;
    }
    public String getRagType() {
        return ragType;
    }
    public void setRagType(String ragType) {
        this.ragType = ragType;
    }
    public int getQuantity() {
        return quantity;
    }
    public void setQuantity(int quantity) {
        this.quantity = quantity;
    }
    public int getEstimatedAmount() {
        return estimatedAmount;
    }
    public void setEstimatedAmount(int estimatedAmount) {
        this.estimatedAmount = estimatedAmount;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public String getPhone() {
        return phone;
    }

    public void setPhone(String phone) {
        this.phone = phone;
    }

    public String getAddress() {
        return address;
    }

    public void setAddress(String address) {
        this.address = address;
    }
}
