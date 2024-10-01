package com.garcia.splitpal.service;

import com.garcia.splitpal.domain.User;
import com.garcia.splitpal.repository.UserRepository;
import org.junit.jupiter.api.DisplayName;
import org.junit.jupiter.api.Nested;
import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.extension.ExtendWith;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.junit.jupiter.MockitoExtension;
import org.springframework.security.crypto.password.PasswordEncoder;

import java.util.Optional;
import java.util.UUID;

import static org.junit.jupiter.api.Assertions.*;
import static org.mockito.ArgumentMatchers.any;
import static org.mockito.Mockito.*;

@ExtendWith(MockitoExtension.class)
class UserServiceTest {

    @Mock
    private UserRepository userRepository;

    @InjectMocks
    private UserService userService;

    @Nested
    class getUser {
        @Test
        @DisplayName("should find and return an user")
        public void shouldReturnUserSuccessfully() {
            UUID id = UUID.randomUUID();
            User user = new User();
            user.setId(id);
            doReturn(Optional.of(user))
                    .when(userRepository)
                    .findById(id);

            var output = userService.getUserById(id.toString());

            assertEquals(output, Optional.of(user));
        }

        @Test
        @DisplayName("should return an optional empty when user is not found")
        public void shouldNotFindAnyUser() {
            var output = userService.getUserById(UUID.randomUUID().toString());

            assertEquals(output, Optional.empty());
        }
    }

    @Nested
    class deleteUser {
        @Test
        @DisplayName("should call deleteById when user exists")
        public void shouldDeleteUser() {
            doReturn(true)
                    .when(userRepository)
                    .existsById(any());

            UUID id = UUID.randomUUID();
            userService.deleteById(id.toString());

            verify(userRepository, times(1)).deleteById(id);
        }

        @Test
        @DisplayName("should not call deleteById when user does not exist")
        public void shouldNotDeleteUser() {
            doReturn(false)
                    .when(userRepository)
                    .existsById(any());

            UUID id = UUID.randomUUID();
            userService.deleteById(id.toString());

            verify(userRepository, times(0)).deleteById(id);
        }

    }

}