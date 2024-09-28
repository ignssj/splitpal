package com.garcia.splitpal.repository;

import java.util.Optional;

import org.junit.jupiter.api.DisplayName;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.orm.jpa.DataJpaTest;
import org.springframework.test.context.ActiveProfiles;
import static org.assertj.core.api.Assertions.assertThat;

import com.garcia.splitpal.domain.User;
import com.garcia.splitpal.dto.user.CreateUserDTO;
import com.garcia.splitpal.util.TestUtil;

import jakarta.persistence.EntityManager;

@DataJpaTest
@ActiveProfiles("local")
class UserRepositoryTest {

    @Autowired
    EntityManager entityManager;

    @Autowired
    UserRepository userRepository;

    @Test
    @DisplayName("Should get user successfully from db")
    void findByUsernameSuccess() {
        String username = "mytestinguser";
        CreateUserDTO data = new CreateUserDTO(username, "fakepassword");
        TestUtil.createUser(data, entityManager);

        Optional<User> userFound = userRepository.findByUsername(username);

        assertThat(userFound.isPresent()).isTrue();
    }

    @Test
    @DisplayName("Should not find user")
    void findByUsernameError() {
        String username = "mytestinguser";
        Optional<User> userFound = userRepository.findByUsername(username);

        assertThat(userFound.isEmpty()).isTrue();
    }

}