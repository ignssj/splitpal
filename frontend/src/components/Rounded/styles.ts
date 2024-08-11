import { StyleSheet } from "react-native";
import { MD3Theme } from "react-native-paper";

const styles = (theme: MD3Theme) =>
  StyleSheet.create({
    container: {
      alignItems: "center",
      justifyContent: "center",
      height: 30,
      width: 30,
      borderRadius: 15,
      backgroundColor: theme.colors.primary,
    },
    icon: {
      color: theme.colors.onPrimary,
    },
  });

export default styles;
