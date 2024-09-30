package com.garcia.splitpal.service;

import com.garcia.splitpal.domain.User;
import com.garcia.splitpal.dto.auth.AuthenticateUserDTO;
import com.garcia.splitpal.dto.user.CreateUserDTO;
import com.garcia.splitpal.exception.ConflictException;
import com.garcia.splitpal.exception.NotFoundException;
import com.garcia.splitpal.infra.security.TokenService;
import com.garcia.splitpal.repository.UserRepository;
import org.junit.jupiter.api.DisplayName;
import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.extension.ExtendWith;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.junit.jupiter.MockitoExtension;
import org.springframework.security.crypto.password.PasswordEncoder;


import java.util.Optional;
import java.util.UUID;

import static org.junit.jupiter.api.Assertions.*;
import static org.mockito.Mockito.*;

@ExtendWith(MockitoExtension.class)
class AuthServiceTest {

    @Mock
    private UserRepository userRepository;

    @Mock
    private TokenService tokenService;

    @Mock
    private PasswordEncoder passwordEncoder;
    @InjectMocks
    private AuthService authService;
    @Test
    @DisplayName("should successfully register an user")
    public void shouldCreateUser(){
        User user = new User();
        user.setId(UUID.randomUUID());

        doReturn(user)
                .when(userRepository)
                .save(any());

        CreateUserDTO input = new CreateUserDTO(
                "fake-username",
                "fake-password"
        );
        var createdId = this.authService.register(input);

        assertEquals(user.getId(), createdId);
    }


    @Test
    @DisplayName("should fail registration and throw an exception")
    public void shouldFailForUsernameInUse(){
        User user = new User();
        user.setUsername("fake-username");

        doReturn(Optional.of(user))
                .when(userRepository)
                .findByUsername(any());

        CreateUserDTO input = new CreateUserDTO(
                "fake-username",
                "fake-password"
        );

        assertThrows(ConflictException.class, () -> authService.register(input));
    }

    @Test
    @DisplayName("should throw an exception when user not found")
    public void shouldFailForUserNotFound(){
        AuthenticateUserDTO user = new AuthenticateUserDTO("fake-username", "fake-password");

        assertThrows(NotFoundException.class, () -> this.authService.authenticate(user));
    }

    @Test
    @DisplayName("should fail authentication when passwords is incorrect")
    public void shouldFailForInvalidPassword(){
        AuthenticateUserDTO userWithWrongPassword = new AuthenticateUserDTO("fake-username", "right-password");

        User userWithCorrectPassword = new User();
        userWithCorrectPassword.setPassword("wrong-password");
        doReturn(Optional.of(userWithCorrectPassword))
                .when(userRepository)
                .findByUsername(any());

        var output = authService.authenticate(userWithWrongPassword);

        assertNull(output);
    }

    @Test
    @DisplayName("should authenticate user successfully")
    public void shouldAuthenticateUser(){
        AuthenticateUserDTO user = new AuthenticateUserDTO("fake-username", "fake-password");


        doReturn(true)
                .when(passwordEncoder)
                .matches(any(), any());

        String mockedToken = "super-token";
        doReturn(mockedToken)
                .when(tokenService)
                .generatedToken(any());

        User userRegistered = new User();
        UUID id = UUID.randomUUID();
        userRegistered.setId(id);
        userRegistered.setUsername(user.username());
        doReturn(Optional.of(userRegistered))
                .when(userRepository)
                .findByUsername(any());

        var output = authService.authenticate(user);

        assertAll(
                () -> assertEquals(output.username(), userRegistered.getUsername()),
                () -> assertEquals(output.id(), userRegistered.getId().toString()),
                () -> assertEquals(output.token(), mockedToken)
        );
    }

}
