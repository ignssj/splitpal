import React from "react";
import { SafeAreaView } from "react-native";
import { IScreenRoot } from "../types";
import styles from "../styles";
import View from "../../View";

const ScreenRoot: React.FC<IScreenRoot> = ({ children }) => {
  return (
    <View>
      <SafeAreaView style={styles.container}>{children}</SafeAreaView>
    </View>
  );
};

export default ScreenRoot;
