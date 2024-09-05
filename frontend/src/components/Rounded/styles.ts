import { StyleSheet } from "react-native";
import { MD3Theme } from "react-native-paper";

const styles = (theme: MD3Theme) =>
  StyleSheet.create({
    container: {
      zIndex: 1,
      position: "absolute",
      alignItems: "center",
      justifyContent: "center",
      padding: 5,
      borderRadius: 15,
      marginLeft: "5%",
      backgroundColor: theme.colors.primary,
    },
    icon: {
      color: theme.colors.onPrimary,
    },
  });

export default styles;
