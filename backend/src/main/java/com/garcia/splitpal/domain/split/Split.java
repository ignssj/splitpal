package com.garcia.splitpal.domain.split;

import com.garcia.splitpal.domain.splitParticipant.SplitParticipant;
import com.garcia.splitpal.domain.payment.Payment;
import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.sql.Timestamp;
import java.util.List;
import java.util.UUID;

@Entity
@Table(name="splits")
@AllArgsConstructor
@NoArgsConstructor
@Setter
@Getter
public class Split {
    @Id
    @GeneratedValue
    private UUID id;
    private String name;
    private String category;
    private double total;
    private String qrcode;

    @OneToMany(mappedBy = "split", cascade = CascadeType.ALL, orphanRemoval = true)
    private List<SplitParticipant> participants;

    @OneToMany(mappedBy = "split", cascade = CascadeType.ALL, orphanRemoval = true)
    private List<Payment> payments;

    private Timestamp created_at;
    private Timestamp updated_at;

}
