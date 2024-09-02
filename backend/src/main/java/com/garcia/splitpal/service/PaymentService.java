package com.garcia.splitpal.service;

import com.garcia.splitpal.domain.Payment;
import com.garcia.splitpal.dto.payment.PaymentDTO;
import com.garcia.splitpal.dto.payment.UpdatePaymentDTO;
import com.garcia.splitpal.exception.BadRequestException;
import com.garcia.splitpal.exception.NotFoundException;
import com.garcia.splitpal.mapper.PaymentMapper;
import com.garcia.splitpal.repository.PaymentRepository;
import com.garcia.splitpal.repository.SplitRepository;
import com.garcia.splitpal.repository.UserRepository;
import com.garcia.splitpal.repository.specification.PaymentSpecification;
import java.util.stream.Collectors;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.jpa.domain.Specification;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;

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

    @Autowired
    S3Service s3Service;

    public UUID create(MultipartFile receipt, String splitId, String userId, String total) {
        userRepository.findById(UUID.fromString(userId))
                .orElseThrow(() -> new BadRequestException("Invalid userId"));
        splitRepository.findById(UUID.fromString(splitId))
                .orElseThrow(() -> new BadRequestException("Invalid splitId"));

        var receiptUrl = s3Service.uploadFile(receipt);
        if (receiptUrl == null)
            throw new BadRequestException("Error uploading receipt");

        Payment payment = new Payment();
        payment.setReceipt(receiptUrl);
        payment.setTotal(Float.parseFloat(total));
        payment.setSplit_id(UUID.fromString(splitId));
        payment.setUser_id(UUID.fromString(userId));

        paymentRepository.save(payment);

        return payment.getId();
    }

    public Optional<Payment> getPaymentById(String id) {
        return this.paymentRepository.findById(UUID.fromString(id));
    }

    public List<PaymentDTO> getAll(String receipt, String user_id, String split_id) {
        Specification<Payment> spec = Specification.where(
                PaymentSpecification.hasReceipt(receipt)
                        .and(PaymentSpecification.hasSplitID((split_id))
                                .and(PaymentSpecification.hasUserID((user_id)))));
        List<Payment> payments = this.paymentRepository.findAll(spec);
        return payments.stream()
                .map(PaymentMapper::toPaymentDTO)
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

}
