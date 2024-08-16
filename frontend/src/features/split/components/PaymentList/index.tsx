import React, { useCallback } from "react";
import PaymentItem from "./PaymentItem";
import { FlatList } from "react-native";
import { Payment } from "../../../../services/payments/types";
import usePayments from "../../../../hooks/usePayments";

const PaymentList: React.FC = () => {
  const RenderItem = useCallback(({ item }: { item: Payment }) => <PaymentItem {...item} />, []);
  const { data } = usePayments();
  return <FlatList data={data} keyExtractor={(i) => i.id} renderItem={RenderItem} />;
};

export default PaymentList;
