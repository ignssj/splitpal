package com.garcia.splitpal.service;

import com.garcia.splitpal.domain.Payment;
import com.garcia.splitpal.domain.Split;
import com.garcia.splitpal.domain.User;
import com.garcia.splitpal.dto.payment.PaymentDTO;
import com.garcia.splitpal.dto.payment.UpdatePaymentDTO;
import com.garcia.splitpal.exception.BadRequestException;
import com.garcia.splitpal.exception.NotFoundException;
import com.garcia.splitpal.repository.PaymentRepository;
import com.garcia.splitpal.repository.SplitRepository;
import com.garcia.splitpal.repository.UserRepository;
import org.junit.jupiter.api.*;
import org.junit.jupiter.api.extension.ExtendWith;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.junit.jupiter.MockitoExtension;
import org.springframework.data.jpa.domain.Specification;
import org.springframework.http.MediaType;
import org.springframework.mock.web.MockMultipartFile;
import java.nio.charset.StandardCharsets;
import java.util.Optional;
import java.util.UUID;
import java.util.List;
import static org.junit.jupiter.api.Assertions.*;
import static org.mockito.ArgumentMatchers.any;
import static org.mockito.Mockito.*;

@ExtendWith(MockitoExtension.class)
class PaymentServiceTest {

        @Mock
        private PaymentRepository paymentRepository;

        @Mock
        private UserRepository userRepository;

        @Mock
        private SplitRepository splitRepository;

        @Mock
        private S3Service s3Service;

        @InjectMocks
        private PaymentService paymentService;

        @Nested
        class Create {

                @Test
                @DisplayName("should throw an exception when user does not exist")
                public void shouldThrowExceptionInvalidUser() {
                        doReturn(Optional.empty())
                                        .when(userRepository)
                                        .findById(any());

                        assertThrows(BadRequestException.class, () -> paymentService.create(mockMultiPartFile(),
                                        UUID.randomUUID().toString(), UUID.randomUUID().toString(), "1"));
                }

                @Test
                @DisplayName("should throw an exception when split does not exist")
                public void shouldThrowExceptionInvalidSplit() {
                        doReturn(Optional.of(new User()))
                                        .when(userRepository)
                                        .findById(any());
                        doReturn(Optional.empty())
                                        .when(splitRepository)
                                        .findById(any());

                        assertThrows(BadRequestException.class, () -> paymentService.create(mockMultiPartFile(),
                                        UUID.randomUUID().toString(), UUID.randomUUID().toString(), "1"));
                }

                @Test
                @DisplayName("should throw an exception when file upload fails")
                public void shouldThrowExceptionFileUploadFail() {
                        doReturn(Optional.of(new User()))
                                        .when(userRepository)
                                        .findById(any());
                        doReturn(Optional.of(new Split()))
                                        .when(splitRepository)
                                        .findById(any());
                        doReturn(null)
                                        .when(s3Service)
                                        .uploadFile(any());

                        assertThrows(BadRequestException.class, () -> paymentService.create(mockMultiPartFile(),
                                        UUID.randomUUID().toString(), UUID.randomUUID().toString(), "1"));
                }

                @Test
                @DisplayName("should create a payment successfully")
                public void shouldCreateSuccessfully() {
                        doReturn(Optional.of(new User()))
                                        .when(userRepository)
                                        .findById(any());
                        doReturn(Optional.of(new Split()))
                                        .when(splitRepository)
                                        .findById(any());
                        doReturn("mocked-url")
                                        .when(s3Service)
                                        .uploadFile(any());

                        Payment payment = new Payment();
                        UUID id = UUID.randomUUID();
                        payment.setId(id);
                        doReturn(payment)
                                        .when(paymentRepository)
                                        .save(any());

                        var output = paymentService.create(mockMultiPartFile(), UUID.randomUUID().toString(),
                                        UUID.randomUUID().toString(), "1");

                        assertEquals(id, output);
                        verify(paymentRepository, times(1)).save(any());
                }

        }

        @Nested
        class GetById {

                @Test
                @DisplayName("should return an optional empty when payment does not exist")
                public void shouldThrowExceptionInvalidPayment() {
                        doReturn(Optional.empty())
                                        .when(paymentRepository)
                                        .findById(any());

                        var output = paymentService.getPaymentById(UUID.randomUUID().toString());
                        assertEquals(Optional.empty(), output);
                }

                @Test
                @DisplayName("should return a payment successfully")
                public void shouldGetPaymentById() {
                        Payment payment = new Payment();
                        UUID id = UUID.randomUUID();
                        payment.setId(id);
                        doReturn(Optional.of(payment))
                                        .when(paymentRepository)
                                        .findById(any());

                        var output = paymentService.getPaymentById(UUID.randomUUID().toString());

                        assertEquals(id, output.get().getId());
                }

        }

        @Nested
        class GetAll {

                @Test
                @DisplayName("should return a list of payments based on criteria")
                public void shouldGetAllPaymentsByCriteria() {
                        // Arrange
                        String receipt = "mocked-receipt";
                        String userId = UUID.randomUUID().toString();
                        String splitId = UUID.randomUUID().toString();

                        // Create mock payments
                        Payment payment1 = new Payment();
                        payment1.setId(UUID.randomUUID());
                        Payment payment2 = new Payment();
                        payment2.setId(UUID.randomUUID());

                        // Mock repository behavior
                        when(paymentRepository.findAll(any(Specification.class)))
                                .thenReturn(List.of(payment1, payment2));

                        // Act
                        List<PaymentDTO> payments = paymentService.getAll(receipt, userId, splitId);

                        // Assert
                        assertEquals(2, payments.size());
                        verify(paymentRepository, times(1)).findAll(any(Specification.class));
                }

                @Test
                @DisplayName("should return an empty list when no payments are found")
                public void shouldReturnEmptyListWhenNoPaymentsFound() {
                        // Arrange
                        String receipt = "nonexistent-receipt";
                        String userId = UUID.randomUUID().toString();
                        String splitId = UUID.randomUUID().toString();

                        // Mock repository to return empty list
                        when(paymentRepository.findAll(any(Specification.class)))
                                .thenReturn(List.of());

                        // Act
                        List<PaymentDTO> payments = paymentService.getAll(receipt, userId, splitId);

                        // Assert
                        assertTrue(payments.isEmpty());
                        verify(paymentRepository, times(1)).findAll(any(Specification.class));
                }
        }

        @Nested
        class UpdateById {

                @Test
                @DisplayName("should throw an exception when payment is not found")
                public void shouldThrowExceptionPaymentNotFound(){
                        doReturn(Optional.empty())
                                .when(paymentRepository)
                                .findById(any());

                        assertThrows(NotFoundException.class, () -> paymentService.updateById(UUID.randomUUID().toString(), new UpdatePaymentDTO()));
                }

                @Test
                @DisplayName("should update fields and save correctly")
                public void shouldUpdateFieldsAndSave(){
                        Payment oldPayment = new Payment();
                        UUID id = UUID.randomUUID();
                        oldPayment.setId(id);
                        oldPayment.setTotal(10);
                        oldPayment.setReceipt("old-receipt.pdf");

                        doReturn(Optional.of(oldPayment))
                                .when(paymentRepository)
                                        .findById(any());

                        UpdatePaymentDTO paymentToUpdate = new UpdatePaymentDTO();
                        paymentToUpdate.setReceipt("new-receipt.pdf");
                        paymentToUpdate.setTotal(15);

                        paymentService.updateById(id.toString(), paymentToUpdate);

                        Payment paymentUpdated = oldPayment;
                        paymentUpdated.setReceipt("new-payment.pdf");
                        paymentUpdated.setTotal(15);
                        verify(paymentRepository, times(1)).save(oldPayment);



                }

        }

        @Nested
        class DeleteById {
                @Test
                @DisplayName("should call deleteById with the given id")
                public void shouldDeleteById() {
                        UUID id = UUID.randomUUID();
                        paymentService.deleteById(id.toString());

                        verify(paymentRepository, times(1)).deleteById(id);
                }
        }

        private MockMultipartFile mockMultiPartFile() {
                return new MockMultipartFile(
                                "file",
                                "test contract.pdf",
                                MediaType.APPLICATION_PDF_VALUE,
                                "<<pdf data>>".getBytes(StandardCharsets.UTF_8));
        }
}