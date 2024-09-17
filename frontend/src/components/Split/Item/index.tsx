import React from "react";
import Card from "../../../../../components/Card";
import Row from "../../../../../components/Row";
import styles from "../styles";
import { Text } from "react-native-paper";
import { ISplitItem } from "../types";
import { formatValue } from "../../../../../helpers/ValueHelper";

const SplitItem: React.FC<ISplitItem> = ({ split, title }) => {
  return (
    <Card title={title}>
      <Row style={styles.row}>
        <Text style={styles.title}>Nome: </Text>
        <Text>{split.name}</Text>
      </Row>
      <Row style={styles.row}>
        <Text style={styles.title}>Categoria: </Text>
        <Text>{split.category || "Geral"}</Text>
      </Row>
      <Row style={styles.row}>
        <Text style={styles.title}>Valor: </Text>
        <Text>{formatValue(split.total)}</Text>
      </Row>
    </Card>
  );
};

export default SplitItem;
