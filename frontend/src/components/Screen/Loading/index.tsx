import React from "react";
import styles from "./styles";
import { ActivityIndicator } from "react-native-paper";
import { IScreenLoading } from "../types";

const ScreenLoading: React.FC<IScreenLoading> = ({ style }) => {
  return <ActivityIndicator animating size={"large"} style={style || styles.activity} />;
};

export default ScreenLoading;
