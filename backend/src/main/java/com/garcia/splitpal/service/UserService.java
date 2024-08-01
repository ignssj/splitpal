package com.garcia.splitpal.service;

import com.garcia.splitpal.dto.CreateUserDTO;
import com.garcia.splitpal.dto.UpdateUserDTO;
import com.garcia.splitpal.domain.user.User;
import com.garcia.splitpal.exception.ConflictException;
import com.garcia.splitpal.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;
import java.util.UUID;

@Service
public class UserService {

    @Autowired
    UserRepository userRepository;
    public Optional<User> getUserById(String id){
        return this.userRepository.findById(UUID.fromString(id));
    }

    public List<User> getAllUsers(){
        return this.userRepository.findAll();
    }

    public Optional<User> updateUserById(String id, UpdateUserDTO data){
        var userEntity = this.userRepository.findById(UUID.fromString(id));

        if (userEntity.isEmpty()){
            return null;
        }

        var user = userEntity.get();

        if (data.username() != null){
            user.setUsername(data.username());
        }
        if (data.password() != null){
            user.setPassword(data.password());
        }

        this.userRepository.save(user);
        return this.userRepository.findById(UUID.fromString(id));
    }

    public void deleteById(String id){
        var uuid = UUID.fromString(id);

        if(this.userRepository.existsById(uuid)) {
            this.userRepository.deleteById(uuid);
        }
    }

}
