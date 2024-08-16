import React from "react";
import Card from "../../../../../components/Card";
import { Text } from "react-native-paper";
import { ISplitItem } from "../types";
import Row from "../../../../../components/Row";
import styles from "../styles";
import { formatValue } from "../../../../../helpers/FormatHelper";
import { TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { PropsStack } from "../../../../../infra/navigation/models";

const SplitItem: React.FC<ISplitItem> = ({ split }) => {
  const navigation = useNavigation<PropsStack>();

  const navigateToSplitDetails = () => {
    navigation.navigate("SplitDetails", { splitId: split.id });
  };

  return (
    <TouchableOpacity onPress={navigateToSplitDetails}>
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
    </TouchableOpacity>
  );
};

export default SplitItem;
