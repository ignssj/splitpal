import { StyleSheet } from "react-native";
import { MD3Theme } from "react-native-paper";

const styles = (theme: MD3Theme) =>
  StyleSheet.create({
    card: {
      borderRadius: 8,
      padding: "5%",
      backgroundColor: theme.colors.surfaceVariant,
    },
  });

export default styles;
