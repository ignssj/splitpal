import { MD3Theme } from "react-native-paper";
import { StyleSheet } from "react-native";

const createStyles = (theme: MD3Theme) =>
  StyleSheet.create({
    container: {
      flex: 1,
      flexDirection: "row",
    },
  });

export default createStyles;
