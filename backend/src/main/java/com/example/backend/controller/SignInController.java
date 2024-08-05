package com.example.backend.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.backend.model.SignIn;
import com.example.backend.service.SignInService;
@CrossOrigin(origins = "http://localhost:5173/")
@RestController
@RequestMapping("/rag")
public class SignInController {
    @Autowired
    private SignInService signInService;
    // @PostMapping("/post")
    // public Boolean postSignIn(@RequestBody SignIn signIn)
    // {
    //     return signInService.saveSignIn(signIn);
    // }
    @GetMapping("/get")
    public List<SignIn> getSignin()
    {
        return signInService.getSignInAll();
    }
}
