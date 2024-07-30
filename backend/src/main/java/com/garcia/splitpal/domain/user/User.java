package com.garcia.splitpal.domain.user;

import com.garcia.splitpal.domain.splitParticipant.SplitParticipant;
import com.garcia.splitpal.domain.payment.Payment;
import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.util.List;
import java.util.UUID;

@AllArgsConstructor
@NoArgsConstructor
@Getter
@Setter
@Entity
@Table(name="users")

public class User {
    @GeneratedValue
    @Id
    private UUID id;
    private String username;
    private String password;

    @OneToMany(cascade = CascadeType.ALL, orphanRemoval = true)
    private List<SplitParticipant> splits;

    @OneToMany(cascade = CascadeType.ALL, orphanRemoval = true)
    private List<Payment> payments;
}
