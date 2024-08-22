package com.garcia.splitpal.repository;

import com.garcia.splitpal.domain.SplitParticipant;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.UUID;

public interface SplitParticipantRepository extends JpaRepository<SplitParticipant, UUID> {
}
