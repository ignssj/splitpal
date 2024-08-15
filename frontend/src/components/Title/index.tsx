import React from "react";
import styles from "./styles";
import { ITitle } from "./types";
import { Text } from "react-native-paper";
import { View } from "react-native";

const Title: React.FC<ITitle> = ({ children }) => {
  return (
    <View style={{ flexGrow: 1, alignItems: "center" }}>
      <Text style={styles.title}>{children}</Text>
    </View>
  );
};

export default Title;
