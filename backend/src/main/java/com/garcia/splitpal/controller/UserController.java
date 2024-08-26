package com.garcia.splitpal.controller;

import com.garcia.splitpal.dto.split.SplitDTO;
import com.garcia.splitpal.dto.user.UpdateUserDTO;
import com.garcia.splitpal.dto.user.UserDTO;
import com.garcia.splitpal.domain.User;
import com.garcia.splitpal.service.UserService;
import io.swagger.v3.oas.annotations.Operation;
import io.swagger.v3.oas.annotations.tags.Tag;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/api/users")
@Tag(name = "User")
public class UserController {

    @Autowired
    UserService userService;

    @Operation(summary = "Get user by id", description = "Return an user by its id")
    @GetMapping("/{id}")
    public ResponseEntity<User> getById(@PathVariable("id") String id) {
        var user = this.userService.getUserById(id);
        if (user.isEmpty()) {
            return ResponseEntity.notFound().build();
        }
        return ResponseEntity.ok(user.get());
    }

    @Operation(summary = "Get all users", description = "Returns an array with all users")
    @GetMapping
    public ResponseEntity<List<UserDTO>> getAll() {
        var users = this.userService.getAllUsers();
        if (users.isEmpty()) {
            return ResponseEntity.noContent().build();
        }
        return ResponseEntity.ok(users);
    }

    @Operation(summary = "Update user by id", description = "Update and returns an user")
    @PutMapping("/{id}")
    public ResponseEntity<Optional<UserDTO>> updateById(@PathVariable("id") String id,
            @RequestBody UpdateUserDTO body) {
        var user = this.userService.updateUserById(id, body);
        if (user == null) {
            return ResponseEntity.notFound().build();
        }
        return ResponseEntity.ok(user);
    }

    @Operation(summary = "Remove user by id", description = "Deletes an user by its id")
    @DeleteMapping("/{id}")
    public ResponseEntity<Void> deleteById(@PathVariable("id") String id) {
        this.userService.deleteById(id);
        return ResponseEntity.noContent().build();
    }

    @Operation(summary = "Get participations from user", description = "Returns an array with all participations in splits of an user")
    @GetMapping("/{id}/participations")
    public ResponseEntity<List<SplitDTO>> getParticipations(@PathVariable("id") String id) {
        var participations = this.userService.getParticipations(id);
        if (participations.isEmpty()) {
            return ResponseEntity.noContent().build();
        }
        return ResponseEntity.ok(participations);
    }
}
