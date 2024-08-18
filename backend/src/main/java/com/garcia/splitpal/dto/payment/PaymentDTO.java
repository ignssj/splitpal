package com.garcia.splitpal.dto.payment;

import java.sql.Timestamp;
import java.util.UUID;

public record PaymentDTO(UUID id, String receipt, float total, UUID user_id, UUID split_id, Timestamp created_at,
        Timestamp updated_at) {
}
