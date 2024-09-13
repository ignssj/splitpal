import React from "react";
import { ISpaced } from "./types";
import { View } from "react-native";

const Spaced: React.FC<ISpaced> = ({ gap, children }) => {
  return (
    <View testID='Spaced' style={{ gap: gap }}>
      {children}
    </View>
  );
};

export default Spaced;
