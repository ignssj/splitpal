package com.garcia.splitpal.service;
import com.garcia.splitpal.domain.Payment;
import com.garcia.splitpal.domain.Split;
import com.garcia.splitpal.domain.User;
import com.garcia.splitpal.exception.BadRequestException;
import com.garcia.splitpal.repository.PaymentRepository;
import com.garcia.splitpal.repository.SplitRepository;
import com.garcia.splitpal.repository.UserRepository;
import org.junit.jupiter.api.*;
import org.junit.jupiter.api.extension.ExtendWith;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.junit.jupiter.MockitoExtension;
import org.springframework.http.MediaType;
import org.springframework.mock.web.MockMultipartFile;
import java.nio.charset.StandardCharsets;
import java.util.Optional;
import java.util.UUID;
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

            assertThrows(BadRequestException.class, () -> paymentService.create(mockMultiPartFile(), UUID.randomUUID().toString(), UUID.randomUUID().toString(), "1"));
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

            assertThrows(BadRequestException.class, () -> paymentService.create(mockMultiPartFile(), UUID.randomUUID().toString(), UUID.randomUUID().toString(), "1"));
        }

        @Test
        @DisplayName("should throw an exception when file upload fails")
        public void shouldThrowExceptionFileUploadFail(){
            doReturn(Optional.of(new User()))
                    .when(userRepository)
                    .findById(any());
            doReturn(Optional.of(new Split()))
                    .when(splitRepository)
                    .findById(any());
            doReturn(null)
                    .when(s3Service)
                    .uploadFile(any());

            assertThrows(BadRequestException.class, () -> paymentService.create(mockMultiPartFile(), UUID.randomUUID().toString(), UUID.randomUUID().toString(), "1"));
        }

        @Test
        @DisplayName("should create a payment successfully")
        public void shouldCreateSuccessfully(){
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

            var output = paymentService.create(mockMultiPartFile(), UUID.randomUUID().toString(), UUID.randomUUID().toString(), "1");

            assertEquals(id, output);
            verify(paymentRepository, times(1)).save(any());
        }

    }

    @Test
    void getPaymentById() {
    }

    @Test
    void getAll() {
    }

    @Test
    void updateById() {
    }

    @Test
    void deleteById() {
    }

    private MockMultipartFile mockMultiPartFile(){
            return new MockMultipartFile(
                    "file",
                    "test contract.pdf",
                    MediaType.APPLICATION_PDF_VALUE,
                    "<<pdf data>>".getBytes(StandardCharsets.UTF_8));
    }
}