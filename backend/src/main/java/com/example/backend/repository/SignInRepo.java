package com.example.backend.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.example.backend.model.SignIn;

@Repository
public interface SignInRepo extends JpaRepository<SignIn,String>{

    
}