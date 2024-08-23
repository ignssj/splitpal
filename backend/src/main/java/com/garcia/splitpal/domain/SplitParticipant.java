package com.garcia.splitpal.domain;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import org.springframework.data.annotation.CreatedDate;
import org.springframework.data.annotation.LastModifiedDate;
import org.springframework.data.jpa.domain.support.AuditingEntityListener;

import java.time.LocalDateTime;
import java.util.UUID;

@Table(name = "split_has_participant")
@EntityListeners(AuditingEntityListener.class)
@Entity
@Setter
@Getter
@AllArgsConstructor
@NoArgsConstructor
public class SplitParticipant {
    @Id
    @GeneratedValue
    private UUID id;
    private boolean organizer;

    @ManyToOne
    @JoinColumn(name = "split_id", insertable = false, updatable = false)
    private Split split;

    UUID user_id;
    UUID split_id;

    @CreatedDate
    private LocalDateTime created_at;
    @LastModifiedDate
    private LocalDateTime updated_at;
}
