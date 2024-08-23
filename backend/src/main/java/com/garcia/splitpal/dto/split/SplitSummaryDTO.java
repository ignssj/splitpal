package com.garcia.splitpal.dto.split;

import java.time.LocalDateTime;
import java.util.List;
import java.util.UUID;

import com.garcia.splitpal.domain.Payment;

public record SplitSummaryDTO(UUID id, String name, String category, String qrcode, double total,
        LocalDateTime created_at, LocalDateTime updated_at, List<Payment> payments) {
}
