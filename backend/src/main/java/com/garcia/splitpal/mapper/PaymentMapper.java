package com.garcia.splitpal.mapper;

import com.garcia.splitpal.domain.Payment;
import com.garcia.splitpal.dto.payment.PaymentDTO;

public class PaymentMapper {

    public static PaymentDTO toPaymentDTO(Payment payment) {
        return new PaymentDTO(payment.getId(), payment.getReceipt(), payment.getTotal(), payment.getUser_id(),
                payment.getSplit_id(), payment.getCreated_at(), payment.getUpdated_at());
    }
}
