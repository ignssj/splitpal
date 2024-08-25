package com.garcia.splitpal.mapper;

import com.garcia.splitpal.domain.User;
import com.garcia.splitpal.dto.user.UserDTO;

public class UserMapper {

    public static UserDTO toUserDTO(User user) {
        return new UserDTO(
                user.getId(),
                user.getUsername(),
                user.getPassword(),
                user.getCreated_at(),
                user.getUpdated_at());
    }

}
