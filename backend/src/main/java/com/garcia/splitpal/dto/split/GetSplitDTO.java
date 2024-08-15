package com.garcia.splitpal.dto.split;

import com.garcia.splitpal.domain.SplitParticipant;
import com.garcia.splitpal.dto.payment.GetPaymentDTO;
import com.garcia.splitpal.dto.splitParticipant.GetSplitParticipantDTO;

import java.util.List;

public record GetSplitDTO(String id, String name, String category, float total, String qrcode, List<GetSplitParticipantDTO> participants, List<GetPaymentDTO> payments, String created_at, String updated_at) {}
