package com.garcia.splitpal.controller;

import com.garcia.splitpal.dto.CreateSplitDTO;
import com.garcia.splitpal.service.SplitService;
import jakarta.validation.Valid;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.net.URI;
import java.util.UUID;

@RestController
@RequestMapping("/api/splits")
public class SplitController {

    @Autowired
    SplitService splitService;
    @PostMapping
    public ResponseEntity<String> create(@Valid @RequestBody CreateSplitDTO body){
        UUID id = splitService.create(body);
        return ResponseEntity.created(URI.create("splits/"+id.toString())).build();
    }
}
