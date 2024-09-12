import React from "react";
import Row from "../Row";
import styles from "./styles";
import { TouchableOpacity, View } from "react-native";
import { IListedButton } from "./types";
import { Divider, Text, useTheme } from "react-native-paper";
import { Ionicons } from "@expo/vector-icons";

const ListedButton: React.FC<IListedButton> = ({ title, onPress, icon }) => {
  const theme = useTheme();
  return (
    <TouchableOpacity testID='ListedButton' onPress={onPress}>
      <View style={styles.container}>
        <Row style={styles.row}>
          {icon}
          <Text style={styles.title}>{title}</Text>
        </Row>
        <Ionicons name='chevron-forward' size={10} color={theme.colors.onBackground} />
      </View>
      <Divider />
    </TouchableOpacity>
  );
};

export default ListedButton;
