import React from "react";
import styles from "./styles";
import { ActivityIndicator } from "react-native-paper";

const ScreenLoading: React.FC = () => {
  return <ActivityIndicator animating size={"large"} style={styles.activity} />;
};

export default ScreenLoading;
