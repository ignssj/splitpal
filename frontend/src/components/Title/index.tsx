import React from "react";
import styles from "./styles";
import { ITitle } from "./types";
import { Text } from "react-native-paper";
import { View } from "react-native";

const Title: React.FC<ITitle> = ({ children }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{children}</Text>
    </View>
  );
};

export default Title;
