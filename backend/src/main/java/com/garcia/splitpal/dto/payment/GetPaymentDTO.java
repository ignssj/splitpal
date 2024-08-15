package com.garcia.splitpal.dto.payment;

public record GetPaymentDTO(String id,String receipt, double value, String created_at, String updated_at) {}
