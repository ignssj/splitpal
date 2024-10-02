package com.garcia.splitpal.service;
import com.garcia.splitpal.domain.Split;
import com.garcia.splitpal.domain.SplitParticipant;
import com.garcia.splitpal.domain.User;
import com.garcia.splitpal.dto.user.UpdateUserDTO;
import com.garcia.splitpal.exception.BadRequestException;
import com.garcia.splitpal.exception.NotFoundException;
import com.garcia.splitpal.mapper.UserMapper;
import com.garcia.splitpal.repository.UserRepository;
import org.junit.jupiter.api.DisplayName;
import org.junit.jupiter.api.Nested;
import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.extension.ExtendWith;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.junit.jupiter.MockitoExtension;
import org.springframework.security.crypto.password.PasswordEncoder;
import java.util.List;
import java.util.Optional;
import java.util.UUID;
import static org.junit.jupiter.api.Assertions.*;
import static org.mockito.ArgumentMatchers.any;
import static org.mockito.Mockito.*;

@ExtendWith(MockitoExtension.class)
class UserServiceTest {


    @Mock
    private PasswordEncoder passwordEncoder;
    @Mock
    private UserRepository userRepository;

    @InjectMocks
    private UserService userService;

    @Nested
    class GetUser {
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
    class DeleteUser {
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

    @Nested
    class GetAllUsers {

        @Test
        @DisplayName("should return a list of users")
        public void shouldReturnAListOfUsers(){
            User userInList = new User();
            userInList.setUsername("johnDoe");
            doReturn(List.of(userInList))
                    .when(userRepository)
                    .findAll();

            var output = userService.getAllUsers();

            assertEquals(output.size(), 1);
            assertEquals(UserMapper.toUserDTO(userInList), output.get(0));
        }

        @Test
        @DisplayName("should return an empty list of users")
        public void shouldReturnAnEmptyList(){
            doReturn(List.of())
                    .when(userRepository)
                    .findAll();

            var output = userService.getAllUsers();

            assertEquals(output.size(), 0);
        }

    }

    @Nested
    class UpdateUser {

        @Test
        @DisplayName("should return null when user is not found")
        public void shouldReturnNull(){
            doReturn(Optional.empty())
                    .when(userRepository)
                    .findById(any());
            UpdateUserDTO input = new UpdateUserDTO("johndoe", "superpass", "superpass");

            var output = userService.updateUserById(UUID.randomUUID().toString(), input);

            assertNull(output);
        }

        @Test
        @DisplayName("should throw an exception when current password is wrong")
        public void shouldThrowExceptionForWrongPassword(){
            doReturn(Optional.of(new User()))
                    .when(userRepository)
                    .findById(any());
            doReturn(false)
                    .when(passwordEncoder)
                    .matches(any(),any());

            UpdateUserDTO input = new UpdateUserDTO(
                    "johndoe",
                    "new-password",
                    "bad-password"
            );

            assertThrows(BadRequestException.class, () -> userService.updateUserById(UUID.randomUUID().toString(), input));
        }

        @Test
        @DisplayName("should update and return user")
        public void shouldUpdateUser(){
            User existingUser = new User();
            existingUser.setUsername("johndoe");
            UpdateUserDTO input = new UpdateUserDTO(
                    "johndoe",
                    "new-password",
                    "bad-password"
            );

            doReturn(Optional.of(existingUser))
                    .when(userRepository)
                    .findById(any());
            doReturn(true)
                    .when(passwordEncoder)
                    .matches(any(),any());


            var output = userService.updateUserById(UUID.randomUUID().toString(), input);

            verify(userRepository, times(1)).save(existingUser);
            assertEquals(UserMapper.toUserDTO(existingUser), output.get());

        }

        @Nested
        class GetParticipation {

            @Test
            @DisplayName("should throw an exception when user not found")
            public void shouldThrowExceptionUserNotFound(){
                doReturn(Optional.empty())
                        .when(userRepository)
                        .findById(any());

                assertThrows(NotFoundException.class, () -> userService.getParticipations(UUID.randomUUID().toString()));
            }

            @Test
            @DisplayName("should throw an exception when user has no participation")
            public void shouldThrowExceptionNoParticipation(){
                User user = new User();
                user.setParticipations(List.of());
                doReturn(Optional.of(user))
                        .when(userRepository)
                                .findById(any());

                assertThrows(NotFoundException.class, () -> userService.getParticipations(UUID.randomUUID().toString()));
            }

            @Test
            @DisplayName("should return a list of users participation")
            public void shouldReturnAllUserParticipation(){
                User user = new User();
                Split split = new Split();
                SplitParticipant participation1 = new SplitParticipant();
                split.setParticipants(List.of(participation1));
                participation1.setSplit(split);
                user.setParticipations(List.of(participation1));

                doReturn(Optional.of(user))
                        .when(userRepository)
                        .findById(any());

                var output = userService.getParticipations(UUID.randomUUID().toString());

                assertEquals(output.size(), 1);
            }
        }

    }

}