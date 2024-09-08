import React from "react";
import { Text } from "react-native-paper";
import { IFormError } from "./types";
import styles from "./styles";

const FormError: React.FC<IFormError> = ({ children }) => {
  return <Text style={styles.messageText}>{children}</Text>;
};

export default FormError;
