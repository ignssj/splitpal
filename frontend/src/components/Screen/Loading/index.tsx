import React from "react";
import styles from "../styles";
import { ActivityIndicator } from "react-native-paper";
import { IScreenLoading } from "../types";
import View from "../../View";

const ScreenLoading: React.FC<IScreenLoading> = ({ style }) => {
  return (
    <View>
      <ActivityIndicator testID='ActivityIndicator' animating size={"large"} style={style || styles.activity} />
    </View>
  );
};

export default ScreenLoading;
