package com.garcia.splitpal.dto.payment;

import jakarta.validation.constraints.Min;
import jakarta.validation.constraints.NotBlank;
import lombok.Getter;
import org.hibernate.validator.constraints.UUID;

@Getter
public class CreatePaymentDTO {
    @NotBlank(message = "Recepit is mandatory")
    private String receipt;

    @Min(value = 10, message = "Total must be greater than 10")
    private float total;

    @NotBlank(message = "UserId is mandatory")
    @UUID
    private String userId;

    @NotBlank
    @UUID
    private String splitId;
}
