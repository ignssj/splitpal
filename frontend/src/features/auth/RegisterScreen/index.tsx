import React from "react";
import { View, Text, TouchableOpacity, Image } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { TextInput } from "react-native-paper";
import Screen from "../../../components/Screen";
import useAuthService from "../../../services/auth";
import createStyle from "./styles";
import useThemedStyles from "../../../hooks/useThemedStyles";

const RegisterScreen = () => {
  const navigation = useNavigation();
  const styles = useThemedStyles(createStyle);
  const { register } = useAuthService();

  return (
    <Screen>
      <Image
        source={require("../../../../assets/logo.png")}
        style={styles.logo}
      />
      <View style={styles.innerContainer}>
        <View style={styles.formContainer}>
          <Text style={styles.title}>Cadastro</Text>
          <TextInput label="Email" mode="flat" style={styles.input} />
          <TouchableOpacity style={styles.button} onPress={() => null}>
            <Text style={styles.buttonText}>Cadastrar</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => navigation.navigate("LoginScreen")}>
            <Text style={styles.linkText}>Já tem uma conta? Faça login</Text>
          </TouchableOpacity>
        </View>
      </View>
    </Screen>
  );
};

export default RegisterScreen;
