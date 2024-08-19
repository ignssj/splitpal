package com.garcia.splitpal.repository.specification;

import com.garcia.splitpal.domain.Payment;

import java.util.UUID;

import org.springframework.data.jpa.domain.Specification;

public class PaymentSpecification {
    public static Specification<Payment> hasReceipt(String receipt) {
        return (root, query, cb) -> receipt == null ? cb.conjunction()
                : cb.equal(root.get("receipt"), receipt);
    }

    public static Specification<Payment> hasUserID(String user_id) {
        return (root, query, cb) -> user_id == null ? cb.conjunction()
                : cb.equal(root.get("user_id"), UUID.fromString(user_id));
    }

    public static Specification<Payment> hasSplitID(String split_id) {
        return (root, query, cb) -> split_id == null ? cb.conjunction()
                : cb.equal(root.get("split_id"), UUID.fromString(split_id));
    }
}
