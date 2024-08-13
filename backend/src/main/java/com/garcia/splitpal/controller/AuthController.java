package com.garcia.splitpal.controller;

import com.garcia.splitpal.dto.auth.AuthenticateUserDTO;
import com.garcia.splitpal.dto.user.CreateUserDTO;
import com.garcia.splitpal.service.AuthService;
import io.swagger.v3.oas.annotations.Operation;
import io.swagger.v3.oas.annotations.tags.Tag;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.net.URI;

@RestController
@RequestMapping(value = "/api/auth", produces = { "application/json" })
@Tag(name = "Auth")
public class AuthController {

    @Autowired
    AuthService authService;

    @Operation(summary = "Authenticates an user", description = "Returns a JWT if the user is authenticated")
    @PostMapping("/login")
    public ResponseEntity login(@RequestBody AuthenticateUserDTO body) {
        var authenticatedUser = authService.authenticate(body);
        if (authenticatedUser == null) {
            return ResponseEntity.badRequest().build();
        }
        return ResponseEntity.ok(authenticatedUser);
    }

    @Operation(summary = "Register an user", description = "Creates an user and returns its id")
    @PostMapping("/register")
    public ResponseEntity register(@RequestBody CreateUserDTO body) {
        var id = authService.register(body);
        return ResponseEntity.created(URI.create("users/" + id.toString())).build();
    }

}
