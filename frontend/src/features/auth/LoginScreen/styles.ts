import { StyleSheet, Dimensions } from "react-native";
import { MD3Theme } from "react-native-paper";

const { width, height } = Dimensions.get("window");

const stylesheet = (theme: MD3Theme) =>
  StyleSheet.create({
    logo: {
      alignSelf: "center",
      width: 220,
      height: 220,
      marginBottom: 10,
    },
    title: {
      fontSize: 24,
      fontWeight: "bold",
      color: theme.colors.primary,
      marginBottom: 10,
      textAlign: "center",
    },
  });

export default stylesheet;
