package com.garcia.splitpal.repository;

import com.garcia.splitpal.domain.split.Split;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.UUID;

public interface SplitRepository extends JpaRepository<Split, UUID> {}
