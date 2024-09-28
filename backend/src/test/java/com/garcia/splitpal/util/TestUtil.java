package com.garcia.splitpal.util;

import com.garcia.splitpal.domain.Split;
import com.garcia.splitpal.domain.SplitParticipant;
import com.garcia.splitpal.domain.User;
import com.garcia.splitpal.dto.split.CreateSplitDTO;
import com.garcia.splitpal.dto.splitParticipant.CreateSplitParticipantDTO;
import com.garcia.splitpal.dto.user.CreateUserDTO;

import jakarta.persistence.EntityManager;

public class TestUtil {

    public static User createUser(CreateUserDTO data, EntityManager em) {
        User user = new User();
        user.setUsername(data.getUsername());
        user.setPassword(data.getPassword());
        em.persist(user);
        return user;
    }

    public static SplitParticipant createSplitParticipant(CreateSplitParticipantDTO data, EntityManager em) {
        SplitParticipant splitParticipant = new SplitParticipant();
        splitParticipant.setOrganizer(data.isOrganizer());
        splitParticipant.setUserId(data.getUserId());
        splitParticipant.setSplitId(data.getSplitId());
        em.persist(splitParticipant);
        return splitParticipant;
    }

    public static Split createSplit(CreateSplitDTO data, EntityManager em) {
        Split split = new Split();
        split.setTotal(data.getTotal());
        split.setName(data.getName());
        split.setQrcode(data.getQrcode());
        split.setCategory(data.getCategory());
        em.persist(split);
        return split;
    }

}
