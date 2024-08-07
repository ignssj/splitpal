import React from "react";
import useThemedStyles from "../../hooks/useThemedStyles";
import { TextInput, TextInputProps } from "react-native-paper";
import createStyle from "./styles";

const Input: React.FC<TextInputProps> = (props) => {
  const styles = useThemedStyles(createStyle);
  return <TextInput style={[styles.container, props.style]} {...props} />;
};

export default Input;
