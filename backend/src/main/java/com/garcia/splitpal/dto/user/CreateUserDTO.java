package com.garcia.splitpal.dto.user;

import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.Size;
import lombok.Getter;

@Getter
public class CreateUserDTO{
    @NotBlank(message = "Username is mandatory")
    @Size(min = 5, max = 20, message = "Username must have 5~20 characters")
    private String username;

    @NotBlank(message = "Password is mandatory")
    @Size(min = 5, max = 100, message = "Password must have at least 5 characters")
    private String password;
}
