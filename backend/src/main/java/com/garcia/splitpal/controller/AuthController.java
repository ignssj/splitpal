package com.garcia.splitpal.controller;

import com.garcia.splitpal.dto.AuthenticateUserDTO;
import com.garcia.splitpal.domain.user.User;
import com.garcia.splitpal.dto.AuthenticationResponseDTO;
import com.garcia.splitpal.dto.CreateUserDTO;
import com.garcia.splitpal.exception.ConflictException;
import com.garcia.splitpal.exception.NotFoundException;
import com.garcia.splitpal.infra.security.TokenService;
import com.garcia.splitpal.repository.UserRepository;
import com.garcia.splitpal.service.AuthService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.web.bind.annotation.*;

import java.net.URI;

@RestController
@RequestMapping("/api/auth")
public class AuthController {

    @Autowired
    AuthService authService;

    @PostMapping("/login")
    public ResponseEntity login(@RequestBody AuthenticateUserDTO body){
        var token = authService.authenticate(body);
        if (token == null){
            return ResponseEntity.badRequest().build();
        }
        return ResponseEntity.ok(new AuthenticationResponseDTO(body.username(), token));
    }

    @PostMapping("/register")
    public ResponseEntity<User> register(@RequestBody CreateUserDTO body){
        var id = authService.register(body);
        return ResponseEntity.created(URI.create("users/"+id.toString())).build();
    }



}
