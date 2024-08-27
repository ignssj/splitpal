package com.garcia.splitpal.dto.splitParticipant;

import java.time.LocalDateTime;
import java.util.UUID;

public record GetSplitParticipantDTO(UUID id, boolean organizer, UUID userId, UUID splitId, LocalDateTime created_at,
        LocalDateTime updated_at) {
}
