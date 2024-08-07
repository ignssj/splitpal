import { StyleSheet, Dimensions } from "react-native";
import { MD3Theme } from "react-native-paper";

const { width, height } = Dimensions.get("window");

const createStyle = (theme: MD3Theme) =>
  StyleSheet.create({
    innerContainer: {
      padding: 20,
      backgroundColor: "#001F3F",
      borderRadius: 10,
      marginHorizontal: 20,
      width: "100%",
      maxWidth: 400,
      alignItems: "center",
    },
    logo: {
      width: 220,
      height: 220,
      marginBottom: 10,
    },
    formContainer: {
      width: "100%",
      alignItems: "center",
    },
    title: {
      fontSize: 24,
      fontWeight: "bold",
      color: "#66B2FF",
      marginBottom: 10,
      textAlign: "center",
    },
    input: {
      height: 50,
      borderWidth: 1,
      borderRadius: 5,
      marginBottom: 10,
      paddingHorizontal: 10,
      width: "100%",
    },
    button: {
      backgroundColor: "#007BFF",
      padding: 15,
      borderRadius: 5,
      alignItems: "center",
      marginBottom: 10,
      width: "100%",
    },
    buttonText: {
      color: "#F0F8FF",
      fontSize: 16,
      fontWeight: "bold",
    },
    linkText: {
      color: "#66B2FF",
      textAlign: "center",
    },
  });

export default createStyle;
