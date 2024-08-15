import { StyleSheet } from "react-native";
import { MD3Theme } from "react-native-paper";

const createStyle = (theme: MD3Theme) =>
  StyleSheet.create({
    container: {
      backgroundColor: theme.colors.surfaceVariant,
    },
  });

export default createStyle;
