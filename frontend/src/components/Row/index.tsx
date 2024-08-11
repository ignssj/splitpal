import React from "react";
import useThemedStyles from "../../hooks/useThemedStyles";
import { View, ViewProps } from "react-native";
import createStyle from "./styles";

const Row: React.FC<ViewProps> = ({ children, style, ...props }) => {
  const styles = useThemedStyles(createStyle);
  return (
    <View style={[styles.container, style]} {...props}>
      {children}
    </View>
  );
};

export default Row;
