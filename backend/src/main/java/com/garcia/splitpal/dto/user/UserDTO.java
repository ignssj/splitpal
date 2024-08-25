package com.garcia.splitpal.dto.user;

import java.time.LocalDateTime;
import java.util.UUID;

public record UserDTO(UUID id, String username, String password, LocalDateTime created_at, LocalDateTime updated_at) {
}
