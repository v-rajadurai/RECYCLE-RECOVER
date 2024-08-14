package com.example.backend.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import com.example.backend.model.LoginModel;
import com.example.backend.service.LogService;

import java.util.List;

@RestController
@RequestMapping("/api")
@CrossOrigin(origins = "http://localhost:5173") // Allow CORS for this origin
public class Login {

    @Autowired
    private LogService logService;

    @PostMapping("/register")
    public boolean register(@RequestBody LoginModel loginModel) {
        return logService.registerUser(loginModel);
    }

    @GetMapping("/auth")
    public ResponseEntity<LoginModel> autho(@RequestParam String email, @RequestParam String pass) {
    LoginModel authenticatedUser = logService.autho(email, pass);
    if (authenticatedUser != null) {
        return ResponseEntity.ok(authenticatedUser); // Return 200 OK with the user data
    } else {
        return ResponseEntity.status(HttpStatus.UNAUTHORIZED).body(null); // Return 401 Unauthorized
    }
}



    @GetMapping("/profile")
    public ResponseEntity<LoginModel> getProfile(@RequestParam String email) {
        LoginModel profile = logService.getUserProfile(email);
        if (profile != null) {
            return ResponseEntity.ok(profile);
        } else {
            return ResponseEntity.status(HttpStatus.NOT_FOUND).body(null);
        }
    }

    @PutMapping("/profile")
    public boolean updateProfile(@RequestBody LoginModel updatedUser) {
        return logService.updateUserProfile(updatedUser);
    }

    @GetMapping("/users")
    public List<LoginModel> getAllUser() {
        return logService.getAllUsers();
    }
}
