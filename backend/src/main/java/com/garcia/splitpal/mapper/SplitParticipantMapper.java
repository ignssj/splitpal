package com.garcia.splitpal.mapper;

import com.garcia.splitpal.domain.SplitParticipant;
import com.garcia.splitpal.dto.splitParticipant.GetSplitParticipantDTO;

public class SplitParticipantMapper {

    public static GetSplitParticipantDTO toSplitParticipantDTO(SplitParticipant splitParticipant) {
        return new GetSplitParticipantDTO(splitParticipant.getId(), splitParticipant.isOrganizer(),
                splitParticipant.getUserId(), splitParticipant.getSplitId(), splitParticipant.getCreated_at(),
                splitParticipant.getUpdated_at());
    }
}
