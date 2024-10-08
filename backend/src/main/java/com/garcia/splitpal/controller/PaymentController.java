package com.garcia.splitpal.controller;

import com.garcia.splitpal.domain.Payment;
import com.garcia.splitpal.dto.payment.PaymentDTO;
import com.garcia.splitpal.dto.payment.UpdatePaymentDTO;
import com.garcia.splitpal.service.PaymentService;
import io.swagger.v3.oas.annotations.Operation;
import io.swagger.v3.oas.annotations.tags.Tag;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import java.net.URI;
import java.util.List;
import java.util.Optional;
import java.util.UUID;

@RestController
@RequestMapping("/api/payments")
@Tag(name = "Payment")
public class PaymentController {

    @Autowired
    PaymentService paymentService;

    @Operation(summary = "Create a payment", description = "Creates a payment and returns its id")
    @PostMapping(consumes = { "multipart/form-data" })
    public ResponseEntity<Void> create(
            @RequestPart MultipartFile receipt,
            @RequestPart String splitId,
            @RequestPart String userId,
            @RequestPart String total) {
        UUID id = this.paymentService.create(receipt, splitId, userId, total);
        return ResponseEntity.created(URI.create("payments/" + id.toString())).build();
    }

    @Operation(summary = "Get payment by id", description = "Returns a payment by its id if it exists")
    @GetMapping("/{id}")
    public ResponseEntity<Optional<Payment>> getById(@PathVariable("id") String id) {
        var payment = this.paymentService.getPaymentById(id);
        if (payment.isEmpty())
            return ResponseEntity.notFound().build();
        return ResponseEntity.ok(payment);
    }

    @Operation(summary = "Get all payments", description = "Return an array containing all payments")
    @GetMapping
    public ResponseEntity<List<PaymentDTO>> getAll(
            @RequestParam(required = false) String receipt,
            @RequestParam(required = false) String user_id,
            @RequestParam(required = false) String split_id) {
        var list = this.paymentService.getAll(receipt, user_id, split_id);
        if (list.isEmpty())
            return ResponseEntity.noContent().build();
        return ResponseEntity.ok(list);
    }

    @Operation(summary = "Update payment by id", description = "Updates a payment by its id and returns the updated register")
    @PutMapping("/{id}")
    public ResponseEntity<Payment> updateById(@PathVariable("id") String id, @RequestBody UpdatePaymentDTO body) {
        var updated = this.paymentService.updateById(id, body);
        if (updated == null)
            return ResponseEntity.noContent().build();
        return ResponseEntity.ok(updated);
    }

    @Operation(summary = "Remove a payment by id", description = "Removes a payment by its id if it exists")
    @DeleteMapping("/{id}")
    public ResponseEntity<Void> deleteById(@PathVariable("id") String id) {
        this.paymentService.deleteById(id);
        return ResponseEntity.noContent().build();
    }

}
