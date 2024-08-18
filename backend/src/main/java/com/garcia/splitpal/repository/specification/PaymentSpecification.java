package com.garcia.splitpal.repository.specification;

import com.garcia.splitpal.domain.Payment;
import org.springframework.data.jpa.domain.Specification;
import java.util.UUID;

public class PaymentSpecification {
    public static Specification<Payment> hasReceipt(String receipt) {
        return (root, query, cb) -> receipt == null ? cb.conjunction()
                : cb.equal(root.get("receipt"), receipt);
    }

    public static Specification<Payment> hasUserID(UUID user_id) {
        return (root, query, cb) -> user_id == null ? cb.conjunction()
                : cb.equal(root.get("user_id"), user_id);
    }

    public static Specification<Payment> hasSplitID(UUID split_id) {
        return (root, query, cb) -> split_id == null ? cb.conjunction()
                : cb.equal(root.get("split_id"), split_id);
    }
}
