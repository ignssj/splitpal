import React from "react";
import styles from "./styles";
import { AnimatedFAB } from "react-native-paper";
import { IFab } from "./types";

const FabNew: React.FC<IFab> = ({ label, visible, onPress }) => {
  return (
    <AnimatedFAB
      label={label || " "}
      icon='plus'
      animateFrom='right'
      iconMode='dynamic'
      style={styles.fabStyle}
      onPress={onPress}
      visible={visible}
      extended
    />
  );
};

export default FabNew;
