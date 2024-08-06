import React from "react";
import { IScreen } from "./types";
import { SafeAreaView } from "react-native-safe-area-context";
import styles from "./styles";

const Screen: React.FC<IScreen> = ({ children }) => {
  return <SafeAreaView style={styles.container}>{children}</SafeAreaView>;
};

export default Screen;
