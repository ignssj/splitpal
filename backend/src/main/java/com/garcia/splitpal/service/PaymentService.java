package com.garcia.splitpal.service;

import com.garcia.splitpal.domain.Payment;
import com.garcia.splitpal.dto.payment.CreatePaymentDTO;
import com.garcia.splitpal.dto.payment.PaymentDTO;
import com.garcia.splitpal.dto.payment.UpdatePaymentDTO;
import com.garcia.splitpal.exception.BadRequestException;
import com.garcia.splitpal.exception.NotFoundException;
import com.garcia.splitpal.repository.PaymentRepository;
import com.garcia.splitpal.repository.SplitRepository;
import com.garcia.splitpal.repository.UserRepository;
import com.garcia.splitpal.repository.specification.PaymentSpecification;
import java.util.stream.Collectors;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.jpa.domain.Specification;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;
import java.util.UUID;

@Service
public class PaymentService {

    @Autowired
    PaymentRepository paymentRepository;
    @Autowired
    UserRepository userRepository;

    @Autowired
    SplitRepository splitRepository;

    public UUID create(CreatePaymentDTO body) {
        userRepository.findById(UUID.fromString(body.getUserId()))
                .orElseThrow(() -> new BadRequestException("Invalid userId"));
        splitRepository.findById(UUID.fromString(body.getSplitId()))
                .orElseThrow(() -> new BadRequestException("Invalid splitId"));

        Payment payment = new Payment();
        payment.setReceipt(body.getReceipt());
        payment.setTotal(body.getTotal());
        payment.setSplit_id(UUID.fromString(body.getSplitId()));
        payment.setUser_id(UUID.fromString(body.getUserId()));

        paymentRepository.save(payment);

        return payment.getId();
    }

    public Optional<Payment> getPaymentById(String id) {
        return this.paymentRepository.findById(UUID.fromString(id));
    }

    public List<PaymentDTO> getAll(String receipt, String user_id, String split_id) {
        Specification<Payment> spec = Specification.where(
                PaymentSpecification.hasReceipt(receipt)
                        .and(PaymentSpecification.hasSplitID(UUID.fromString(split_id))
                                .and(PaymentSpecification.hasUserID(UUID.fromString(user_id)))));
        List<Payment> payments = this.paymentRepository.findAll(spec);
        return payments.stream()
                .map(this::toPaymentDTO)
                .collect(Collectors.toList());
    }

    public Payment updateById(String id, UpdatePaymentDTO body) {
        Payment payment = paymentRepository.findById(UUID.fromString(id))
                .orElseThrow(() -> new NotFoundException("Payment not found"));
        payment.setTotal(body.getTotal());
        payment.setReceipt(body.getReceipt());

        paymentRepository.save(payment);

        return payment;
    }

    public void deleteById(String id) {
        this.paymentRepository.deleteById(UUID.fromString(id));
    }

    private PaymentDTO toPaymentDTO(Payment payment) {
        return new PaymentDTO(payment.getId(), payment.getReceipt(), payment.getTotal(), payment.getUser_id(),
                payment.getSplit_id(), payment.getCreated_at(), payment.getUpdated_at());
    }

}
