import { StyleSheet } from "react-native";
import { MD3Theme } from "react-native-paper";

const createStyle = (theme: MD3Theme) =>
  StyleSheet.create({
    root: {
      backgroundColor: theme.colors.surface,
    },
  });

export default createStyle;
