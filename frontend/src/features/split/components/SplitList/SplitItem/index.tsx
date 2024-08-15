import React from "react";
import Card from "../../../../../components/Card";
import { Text } from "react-native-paper";
import { ISplitItem } from "../types";
import Row from "../../../../../components/Row";
import styles from "../styles";
import { formatValue } from "../../../../../helpers/FormatHelper";

const SplitItem: React.FC<ISplitItem> = ({ split }) => {
  return (
    <Card>
      <Row style={styles.row}>
        <Text style={styles.title}>Nome: </Text>
        <Text>{split.name}</Text>
      </Row>
      <Row style={styles.row}>
        <Text style={styles.title}>Categoria: </Text>
        <Text>{split.category}</Text>
      </Row>
      <Row style={styles.row}>
        <Text style={styles.title}>Valor: </Text>
        <Text>{formatValue(split.total)}</Text>
      </Row>
    </Card>
  );
};

export default SplitItem;
