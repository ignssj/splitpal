import React, { useCallback } from "react";
import PaymentItem from "./PaymentItem";
import { FlatList } from "react-native";
import { Payment } from "../../../../services/payments/types";
import { IPaymentList } from "./types";
import { Screen } from "../../../../components/Screen";
import styles from "./styles";

const PaymentList: React.FC<IPaymentList> = ({ data, loading }) => {
  const RenderItem = useCallback(({ item }: { item: Payment }) => <PaymentItem {...item} />, []);

  if (loading) return <Screen.Loading style={styles.loading} />;
  return <FlatList data={data} keyExtractor={(i) => i.id} renderItem={RenderItem} />;
};

export default PaymentList;
