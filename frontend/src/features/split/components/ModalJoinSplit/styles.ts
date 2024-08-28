import { StyleSheet } from "react-native";
import { MD3Theme } from "react-native-paper";

const styles = (theme: MD3Theme) =>
  StyleSheet.create({
    dialog: {
      height: "40%",
      paddingHorizontal: "5%",
      gap: 15,
      backgroundColor: theme.colors.surface,
    },
  });

export default styles;
