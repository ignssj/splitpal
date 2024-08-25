package com.garcia.splitpal.service;

import com.garcia.splitpal.dto.split.SplitDTO;
import com.garcia.splitpal.dto.user.UpdateUserDTO;
import com.garcia.splitpal.dto.user.UserDTO;
import com.garcia.splitpal.exception.NotFoundException;
import com.garcia.splitpal.mapper.SplitMapper;
import com.garcia.splitpal.mapper.UserMapper;
import com.garcia.splitpal.domain.SplitParticipant;
import com.garcia.splitpal.domain.User;
import com.garcia.splitpal.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;
import java.util.stream.Collectors;

import java.util.List;
import java.util.Optional;
import java.util.UUID;

@Service
public class UserService {

    @Autowired
    UserRepository userRepository;
    @Autowired
    PasswordEncoder passwordEncoder;

    public Optional<User> getUserById(String id) {
        return this.userRepository.findById(UUID.fromString(id));
    }

    public List<UserDTO> getAllUsers() {
        var entities = this.userRepository.findAll();
        return entities.stream()
                .map(UserMapper::toUserDTO)
                .collect(Collectors.toList());
    }

    public Optional<User> updateUserById(String id, UpdateUserDTO data) {
        var userEntity = this.userRepository.findById(UUID.fromString(id));

        if (userEntity.isEmpty()) {
            return null;
        }

        var user = userEntity.get();

        if (data.username() != null) {
            user.setUsername(data.username());
        }
        if (data.password() != null) {
            user.setPassword(passwordEncoder.encode(data.password()));
        }

        this.userRepository.save(user);
        return this.userRepository.findById(UUID.fromString(id));
    }

    public void deleteById(String id) {
        var uuid = UUID.fromString(id);

        if (this.userRepository.existsById(uuid)) {
            this.userRepository.deleteById(uuid);
        }
    }

    public List<SplitDTO> getParticipations(String id) {
        User user = this.userRepository.findById(UUID.fromString(id))
                .orElseThrow(() -> new NotFoundException("User not found"));

        List<SplitParticipant> participations = user.getParticipations();
        if (participations.isEmpty())
            throw new NotFoundException("No participations found");
        List<SplitDTO> userSplits = participations.stream()
                .map(SplitParticipant::getSplit)
                .map(SplitMapper::toSplitDTO)
                .collect(Collectors.toList());

        return userSplits;
    }

}
