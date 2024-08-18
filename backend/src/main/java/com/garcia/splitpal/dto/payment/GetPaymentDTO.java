package com.garcia.splitpal.dto.payment;

import lombok.Getter;
import lombok.Setter;

@Setter
@Getter
public class GetPaymentDTO {
    private String id;
    private String receipt;
    private float total;
    private String user_id;
    private String split_id;
    private String created_at;
    private String updated_at;
}
