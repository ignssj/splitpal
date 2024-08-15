package com.garcia.splitpal.domain;

import com.fasterxml.jackson.annotation.JsonIgnore;
import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import org.springframework.data.annotation.CreatedDate;
import org.springframework.data.annotation.LastModifiedDate;

import java.time.LocalDateTime;
import java.util.UUID;

@Table(name="split_has_participant")
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
    @CreatedDate
    private LocalDateTime created_at;
    @LastModifiedDate
    private LocalDateTime updated_at;
}
