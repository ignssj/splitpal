package com.garcia.splitpal.domain.SplitParticipant;

import com.garcia.splitpal.domain.split.Split;
import com.garcia.splitpal.domain.user.User;
import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

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

    @ManyToOne
    @JoinColumn(name = "split_id")
    private Split split;

    @ManyToOne
    @JoinColumn(name = "user_id")
    private User user;
}
