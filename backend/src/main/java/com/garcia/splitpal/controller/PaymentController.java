package com.garcia.splitpal.controller;

import com.garcia.splitpal.domain.Payment;
import com.garcia.splitpal.dto.payment.CreatePaymentDTO;
import com.garcia.splitpal.dto.payment.UpdatePaymentDTO;
import com.garcia.splitpal.service.PaymentService;
import io.swagger.v3.oas.annotations.Operation;
import io.swagger.v3.oas.annotations.tags.Tag;
import jakarta.validation.Valid;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.net.URI;
import java.util.List;
import java.util.Optional;
import java.util.UUID;

@RestController
@RequestMapping("/api/payments")
public class PaymentController {

    @Autowired
    PaymentService paymentService;

    @PostMapping
    public ResponseEntity<String> create(@Valid  @RequestBody CreatePaymentDTO body){
        UUID id = this.paymentService.create(body);
        return ResponseEntity.created(URI.create("payments/"+id.toString())).build();
    }

    @GetMapping("/{id}")
    public ResponseEntity<Optional<Payment>> getById(@PathVariable("id") String id){
        var payment = this.paymentService.getPaymentById(id);
        if (payment.isEmpty()) return ResponseEntity.notFound().build();
        return ResponseEntity.ok(payment);
    }

    @GetMapping
    public ResponseEntity<List<Payment>> getAll(){
        var list = this.paymentService.getAll();
        if (list.isEmpty()) return ResponseEntity.noContent().build();
        return ResponseEntity.ok(list);
    }

    @PutMapping("/{id}")
    public ResponseEntity<Payment> updateById(@PathVariable("id") String id, @RequestBody UpdatePaymentDTO body){
        var updated = this.paymentService.updateById(id, body);
        if (updated == null) return ResponseEntity.noContent().build();
        return ResponseEntity.ok(updated);
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Void> deleteById(@PathVariable("id") String id){
        this.paymentService.deleteById(id);
        return ResponseEntity.noContent().build();
    }


}
