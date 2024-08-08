package com.garcia.splitpal.dto.split;

import jakarta.validation.constraints.Max;
import jakarta.validation.constraints.Min;
import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.Size;
import lombok.Getter;

@Getter
public class CreateSplitDTO{
    @NotBlank(message = "Split name is mandatory")
    @Size(min = 5, max = 30, message = "Name must have 5~30 characters")
    private String name;
    @Size(max = 15, message = "Value must have less than 15 characters")
    private String category;
    @Min(value = 10, message = "Value must be greater than 10")
    private double total;
    @Size(min = 15, max = 255, message = "QRCode must have 15~255 characters")
    private String qrcode;
}
