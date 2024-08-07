import { View as RNView, ViewProps } from "react-native";
import React from "react";
import createStyle from "./styles";
import useThemedStyles from "../../hooks/useThemedStyles";

const View: React.FC<ViewProps> = ({ children, style, ...props }) => {
  const styles = useThemedStyles(createStyle);

  return (
    <RNView style={[styles.root, style]} {...props}>
      {children}
    </RNView>
  );
};

export default View;
