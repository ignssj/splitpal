package com.garcia.splitpal.dto.payment;

import jakarta.validation.constraints.Max;
import jakarta.validation.constraints.Min;
import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.Size;
import lombok.Getter;
import org.hibernate.validator.constraints.UUID;

@Getter
public class CreatePaymentDTO {
    @NotBlank(message = "Recepit is mandatory")
    private String receipt;

    @Min(value = 10, message = "Value must be greater than 10")
    private float value;

    @NotBlank(message = "UserId is mandatory")
    @UUID
    private String userId;

    @NotBlank
    @UUID
    private String splitId;
}
