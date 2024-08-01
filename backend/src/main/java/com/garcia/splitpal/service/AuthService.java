package com.garcia.splitpal.service;

import com.garcia.splitpal.domain.user.User;
import com.garcia.splitpal.dto.AuthenticateUserDTO;
import com.garcia.splitpal.dto.AuthenticationResponseDTO;
import com.garcia.splitpal.dto.CreateUserDTO;
import com.garcia.splitpal.exception.ConflictException;
import com.garcia.splitpal.exception.NotFoundException;
import com.garcia.splitpal.infra.security.TokenService;
import com.garcia.splitpal.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import java.util.Optional;
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
        var userWithSameUsername = userRepository.findByUsername(user.username());
        if (userWithSameUsername.isPresent()){
            throw new ConflictException("User with email " + user.username()+ " already exists");
        }


        User entity = new User();
        entity.setUsername(user.username());
        entity.setPassword(passwordEncoder.encode(user.password()));

        entity = userRepository.save(entity);
        return entity.getId();
    }

}
