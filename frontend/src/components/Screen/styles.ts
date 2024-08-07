import { StyleSheet } from "react-native";
import { MD3Theme } from "react-native-paper";

const createStyle = (theme: MD3Theme) =>
  StyleSheet.create({
    container: {
      flex: 1,
      marginHorizontal: "8%",
      backgroundColor: theme.colors.background,
    },
  });

export default createStyle;
