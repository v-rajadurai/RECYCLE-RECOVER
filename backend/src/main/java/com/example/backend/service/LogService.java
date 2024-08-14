package com.example.backend.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.backend.model.LoginModel;
import com.example.backend.repository.LogRepo;

import java.util.List;

@Service
public class LogService {
    @Autowired
    private LogRepo logRepo;

    public boolean registerUser(LoginModel log) {
        try {
            logRepo.save(log);
            return true;
        } catch (Exception e) {
            e.printStackTrace();
            return false;
        }
    }

    public LoginModel autho(String email, String pass) {
        LoginModel foundUser = logRepo.findById(email).orElse(null);
        if (foundUser != null && foundUser.getPass().equals(pass)) {
            return foundUser; // Return the user if authentication is successful
        }
        return null; // Return null if authentication fails
    }
    

    public LoginModel getUserProfile(String email) {
        return logRepo.findById(email).orElse(null);
    }

    public boolean updateUserProfile(LoginModel updatedUser) {
        if (logRepo.existsById(updatedUser.getEmail())) {
            try {
                logRepo.save(updatedUser);
                return true;
            } catch (Exception e) {
                e.printStackTrace();
                return false;
            }
        }
        return false;
    }

    public List<LoginModel> getAllUsers() {
        return logRepo.findAll();
    }
}
