import React from "react";
import { View, Text } from "react-native";
import { Payment } from "../../../../../services/payments/types";

const PaymentItem: React.FC<Payment> = (payment) => {
  return (
    <View>
      <Text>{payment.id}</Text>
    </View>
  );
};

export default PaymentItem;
