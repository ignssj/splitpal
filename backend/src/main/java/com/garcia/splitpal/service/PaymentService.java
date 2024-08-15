package com.garcia.splitpal.service;

import com.garcia.splitpal.domain.Payment;
import com.garcia.splitpal.dto.payment.CreatePaymentDTO;
import com.garcia.splitpal.dto.payment.UpdatePaymentDTO;
import com.garcia.splitpal.exception.NotFoundException;
import com.garcia.splitpal.repository.PaymentRepository;
import com.garcia.splitpal.repository.SplitRepository;
import com.garcia.splitpal.repository.UserRepository;
import org.apache.coyote.BadRequestException;
import org.springframework.beans.factory.annotation.Autowired;
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

    public UUID create(CreatePaymentDTO body){
        var user = userRepository.findById(UUID.fromString(body.getUserId()));
        if (user.isEmpty()) new BadRequestException("Invalid userId");

        var split = splitRepository.findById(UUID.fromString(body.getSplitId()));
        if (split.isEmpty()) new BadRequestException("Invalid splitId");

        Payment payment = new Payment();
        payment.setReceipt(body.getReceipt());
        payment.setValue(body.getValue());

        paymentRepository.save(payment);

        return payment.getId();
    }

    public Optional<Payment> getPaymentById(String id){
        return this.paymentRepository.findById(UUID.fromString(id));
    }

    public List<Payment> getAll(){
        return this.paymentRepository.findAll();
    }

    public Payment updateById(String id, UpdatePaymentDTO body){
        Payment payment = paymentRepository.findById(UUID.fromString(id)).orElseThrow(() -> new NotFoundException("Payment not found"));
        payment.setValue(body.getValue());
        payment.setReceipt(body.getReceipt());

        paymentRepository.save(payment);

        return payment;
    }

    public void deleteById(String id){
        this.paymentRepository.deleteById(UUID.fromString(id));
    }

}
