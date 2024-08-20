import React, { useCallback } from "react";
import PaymentItem from "./PaymentItem";
import { FlatList } from "react-native";
import { Payment } from "../../../../services/payments/types";
import { IPaymentList } from "./types";

const PaymentList: React.FC<IPaymentList> = ({ data }) => {
  const RenderItem = useCallback(({ item }: { item: Payment }) => <PaymentItem {...item} />, []);

  return <FlatList data={data} keyExtractor={(i) => i.id} renderItem={RenderItem} />;
};

export default PaymentList;
