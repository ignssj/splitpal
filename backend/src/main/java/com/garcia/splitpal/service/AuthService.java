package com.garcia.splitpal.service;

import com.garcia.splitpal.domain.User;
import com.garcia.splitpal.dto.auth.AuthenticateUserDTO;
import com.garcia.splitpal.dto.user.CreateUserDTO;
import com.garcia.splitpal.exception.ConflictException;
import com.garcia.splitpal.exception.NotFoundException;
import com.garcia.splitpal.infra.security.TokenService;
import com.garcia.splitpal.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import java.util.UUID;

@Service
public class AuthService {
    @Autowired
    UserRepository userRepository;
    @Autowired
    PasswordEncoder passwordEncoder;
    @Autowired
    TokenService tokenService;

    public String authenticate(AuthenticateUserDTO user){
        User authenticatedUser = userRepository.findByUsername(user.username()).orElseThrow(() -> new NotFoundException("User not found"));
        if (!passwordEncoder.matches(user.password(), authenticatedUser.getPassword())){
            return null;
        }
        String token = tokenService.generatedToken(authenticatedUser);
        return token;
    }

    public UUID register(CreateUserDTO user){
        var userWithSameUsername = userRepository.findByUsername(user.getUsername());
        if (userWithSameUsername.isPresent()){
            throw new ConflictException("User with email " + user.getUsername()+ " already exists");
        }


        User entity = new User();
        entity.setUsername(user.getUsername());
        entity.setPassword(passwordEncoder.encode(user.getPassword()));

        entity = userRepository.save(entity);
        return entity.getId();
    }

}
