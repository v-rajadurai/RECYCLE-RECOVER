package com.example.backend.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.mail.MailSender;
import org.springframework.mail.SimpleMailMessage;
import org.springframework.stereotype.Service;

@Service
public class MailService {

    @Autowired
    private MailSender mailSender;

    public void sendEmail(String email) {
        SimpleMailMessage message = new SimpleMailMessage();
        message.setFrom("rajpandivenkat01@gmail.com");
        message.setTo(email);
        message.setSubject("🎉Congratulations from Eco-Connect!🎉");
        message.setText("Dear Consumer!!,\n\n"
                    + "Congratulations on completing your registration with Eco-Connect!\n\n"
                    + "We are excited to have you on board. Now you can manage your recyclable materials and connect with rag pickers efficiently.\n\n"
                    + "Thank you for joining us. If you have any questions or need assistance, feel free to reach out to us.\n\n"
                    + "Best Regards,\n"
                    + "Team Eco-Connect");
    
        try {
            mailSender.send(message);
            System.out.println("Mail sent successfully");
        } catch (Exception e) {
            System.err.println("Failed to send email: " + e.getMessage());
            e.printStackTrace(); 
        }
    }
}
