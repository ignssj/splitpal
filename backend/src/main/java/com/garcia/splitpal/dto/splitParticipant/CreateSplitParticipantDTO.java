package com.garcia.splitpal.dto.splitParticipant;

import java.util.UUID;

import lombok.AllArgsConstructor;
import lombok.Getter;

@Getter
@AllArgsConstructor
public class CreateSplitParticipantDTO {
    private boolean organizer;
    private UUID userId;
    private UUID splitId;
}