import { StyleSheet } from "react-native";
import { MD3Theme } from "react-native-paper";

const styles = (theme: MD3Theme) =>
  StyleSheet.create({
    dialog: {
      height: "40%",
      width: "90%",
      paddingHorizontal: "5%",
      alignSelf: "center",
      gap: 15,
      backgroundColor: theme.colors.surface,
    },
    row: {
      justifyContent: "space-between",
      alignItems: "center",
    },
  });

export default styles;
