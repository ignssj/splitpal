import React from "react";
import { View } from "react-native";
import { Text } from "react-native-paper";
import { Payment } from "../../../../../services/payments/types";

const PaymentItem: React.FC<Payment> = (payment) => {
  return (
    <View>
      <Text>{payment.id}</Text>
    </View>
  );
};

export default PaymentItem;
