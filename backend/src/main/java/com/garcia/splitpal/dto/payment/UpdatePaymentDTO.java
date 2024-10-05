package com.garcia.splitpal.dto.payment;

import jakarta.validation.constraints.Min;
import jakarta.validation.constraints.NotBlank;
import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class UpdatePaymentDTO {
    @NotBlank(message = "Recepit is mandatory")
    private String receipt;

    @Min(value = 10, message = "Value must be greater than 10")
    private float total;
}
