package com.garcia.splitpal.repository;

import com.garcia.splitpal.domain.Split;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.JpaSpecificationExecutor;

import java.util.UUID;

public interface SplitRepository extends JpaRepository<Split, UUID>, JpaSpecificationExecutor<Split> {
}
