package com.garcia.splitpal.mapper;

import com.garcia.splitpal.domain.Split;
import com.garcia.splitpal.dto.split.SplitDTO;

public class SplitMapper {

    public static SplitDTO toSplitDTO(Split split) {
        return new SplitDTO(split.getId(), split.getName(), split.getCategory(), split.getQrcode(),
                split.getTotal(),
                split.getCreated_at(), split.getUpdated_at(), split.getPayments());
    }

}
