package com.garcia.splitpal.domain;

import com.garcia.splitpal.domain.Split;
import com.garcia.splitpal.domain.User;
import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.sql.Timestamp;
import java.util.UUID;

@Entity
@Table(name="payments")
@AllArgsConstructor
@NoArgsConstructor
@Getter
@Setter
public class Payment {
    @Id
    @GeneratedValue
    private UUID id;
    private String receipt;
    private double value;

    @ManyToOne
    @JoinColumn(name = "user_id")
    private User user;

    private Timestamp created_at;
    private Timestamp updated_at;
}
