package com.garcia.splitpal.repository;

import org.junit.jupiter.api.DisplayName;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.orm.jpa.DataJpaTest;
import org.springframework.test.context.ActiveProfiles;
import java.util.Optional;

import com.garcia.splitpal.domain.Split;
import com.garcia.splitpal.domain.SplitParticipant;
import com.garcia.splitpal.domain.User;
import com.garcia.splitpal.dto.split.CreateSplitDTO;
import com.garcia.splitpal.dto.splitParticipant.CreateSplitParticipantDTO;
import com.garcia.splitpal.dto.user.CreateUserDTO;
import com.garcia.splitpal.util.TestUtil;

import static org.assertj.core.api.Assertions.assertThat;
import jakarta.persistence.EntityManager;

@DataJpaTest
@ActiveProfiles("local")
class SplitParticipationRepositoryTest {

    @Autowired
    EntityManager entityManager;

    @Autowired
    SplitParticipantRepository splitParticipantRepository;

    @Test
    @DisplayName("Should get split participation successfully from db")
    void findBySplitIdAndUserIdSuccess() {

        User user = TestUtil.createUser(
                new CreateUserDTO("myuser", "mypassword"),
                entityManager);
        Split split = TestUtil.createSplit(
                new CreateSplitDTO(user.getId().toString(), "supername", "supercategory", 100.00, "superqrcode12345"),
                entityManager);

        SplitParticipant data = TestUtil.createSplitParticipant(
                new CreateSplitParticipantDTO(true, user.getId(), split.getId()),
                entityManager);

        Optional<SplitParticipant> splitParticipantFound = splitParticipantRepository
                .findBySplitIdAndUserId(data.getSplitId(), data.getUserId());

        assertThat(splitParticipantFound.isPresent()).isTrue();
    }

    @Test
    @DisplayName("Should not find split participation")
    void findBySplitIdAndUserIdError() {
        Optional<SplitParticipant> splitParticipantFound = splitParticipantRepository
                .findBySplitIdAndUserId(null, null);

        assertThat(splitParticipantFound.isEmpty()).isTrue();
    }

}
