package com.garcia.splitpal.controller;

import com.garcia.splitpal.dto.split.CreateSplitDTO;
import com.garcia.splitpal.service.SplitService;
import io.swagger.v3.oas.annotations.Operation;
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
    @Operation(summary = "Create a split", description = "Creates a split and returns its id")
    @PostMapping
    public ResponseEntity<String> create(@Valid @RequestBody CreateSplitDTO body){
        UUID id = splitService.create(body);
        return ResponseEntity.created(URI.create("splits/"+id.toString())).build();
    }
}
