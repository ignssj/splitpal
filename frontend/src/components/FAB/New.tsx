import React from "react";
import styles from "./styles";
import { AnimatedFAB } from "react-native-paper";
import { IFab } from "./types";
import { View } from "react-native";

const FabNew: React.FC<IFab> = ({ label, right, bottom, visible, onPress }) => {
  if (!visible) return <View />;
  return (
    <AnimatedFAB
      testID='FabNew'
      label={label || " "}
      icon='plus'
      animateFrom='right'
      iconMode='dynamic'
      style={[styles.fabStyle, right && { right }, bottom && { bottom }]}
      onPress={onPress}
      extended
    />
  );
};

export default FabNew;
