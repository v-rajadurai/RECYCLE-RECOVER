package com.example.backend.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import com.example.backend.model.PostRagModel;
import com.example.backend.service.PostRagService;

@CrossOrigin(origins = "http://localhost:5173")
@RestController
@RequestMapping("/ecoconnect")
public class PostRagController {

    @Autowired
    private PostRagService ragService;

    @PostMapping("/postragger/post")
    public PostRagModel getRagsPost(@RequestBody PostRagModel postRagModel) {
        return ragService.postragservice(postRagModel);
    }

    @GetMapping("/getRags")
    public List<PostRagModel> getRagsDetails() {
        return ragService.getRags();
    }

    @DeleteMapping("/deleteRag/{id}")
    public void deletePostRagModel(@PathVariable int id) {
        ragService.deletePost(id);
    }
}
