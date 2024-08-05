package com.example.backend.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.backend.model.SignIn;
import com.example.backend.repository.SignInRepo;

@Service
public class SignInService {
    @Autowired
    private SignInRepo signInRepo;
    public Boolean saveSignIn(SignIn signIn)
    {
        try{
            signInRepo.save(signIn);
            return true;
        }
        catch(Exception e)
        {
            return false;
        }
    }
    public List<SignIn> getSignInAll()
    {
        return signInRepo.findAll();
    }
}
