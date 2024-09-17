import React from "react";
import Row from "../../Row";
import styles from "../styles";
import { Linking, View } from "react-native";
import { Text } from "react-native-paper";
import { formatValue } from "../../../helpers/ValueHelper";
import { Payment } from "../../../services/payments/types";
import { formatDate } from "../../../helpers/DateHelper";

const PaymentItem: React.FC<Payment> = (payment) => {
  return (
    <View testID='PaymentItem' style={styles.itemContainer}>
      <Row style={styles.row}>
        <Text>Usuário: </Text>
        <Text>{payment.user_id.substring(24)}</Text>
      </Row>
      <Row style={styles.row}>
        <Text>Valor: </Text>
        <Text>{formatValue(payment.total)}</Text>
      </Row>
      <Row style={styles.row}>
        <Text>Data: </Text>
        <Text>{formatDate(new Date(payment.created_at))}</Text>
      </Row>
      <Row style={styles.row}>
        <Text>Comprovante: </Text>
        <Text style={styles.link} onPress={() => Linking.openURL(payment.receipt)}>
          Acessar link
        </Text>
      </Row>
    </View>
  );
};

export default PaymentItem;
