package com.example.backend.controller;

import com.example.backend.service.MailService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

@RestController
@CrossOrigin(origins = "http://localhost:5173") // Allow requests from your frontend
public class EmailController {

    @Autowired
    private MailService mailService;

   @PostMapping("/sendMail")
public String sendMail(@RequestParam String email) {
    try {
        mailService.sendEmail(email);
        return "Email sent successfully.";
    } catch (Exception e) {
        return "Failed to send email: " + e.getMessage();
    }
}

}
