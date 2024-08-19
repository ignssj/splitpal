package com.garcia.splitpal.repository.specification;

import org.springframework.data.jpa.domain.Specification;

import com.garcia.splitpal.domain.Split;

public class SplitSpecification {

    public static Specification<Split> hasName(String name) {
        return (root, query, cb) -> name == null ? cb.conjunction()
                : cb.equal(root.get("name"), name);
    }

    public static Specification<Split> hasCategory(String category) {
        return (root, query, cb) -> category == null ? cb.conjunction()
                : cb.equal(root.get("category"), category);
    }

    public static Specification<Split> hasQRCode(String qrcode) {
        return (root, query, cb) -> qrcode == null ? cb.conjunction()
                : cb.equal(root.get("qrcode"), qrcode);
    }
}
