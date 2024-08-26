import React, { useCallback } from "react";
import PaymentItem from "../Item";
import styles from "../styles";
import { Text } from "react-native-paper";
import { IPaymentList } from "../types";
import { Payment } from "../../../../../services/payments/types";
import { Screen } from "../../../../../components/Screen";
import { FlatList } from "react-native";

const PaymentList: React.FC<IPaymentList> = ({ data, loading }) => {
  const RenderItem = useCallback(({ item }: { item: Payment }) => <PaymentItem {...item} />, []);

  if (loading) return <Screen.Loading style={styles.loading} />;
  return (
    <FlatList
      data={data}
      keyExtractor={(i) => i.id}
      renderItem={RenderItem}
      contentContainerStyle={styles.listContent}
      ListEmptyComponent={<Text style={styles.centeredText}>Nenhum comprovante disponível</Text>}
    />
  );
};

export default PaymentList;
