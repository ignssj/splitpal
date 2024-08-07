import React from "react";
import { View, Text, TextInput, TouchableOpacity, Image } from "react-native";
import { useNavigation } from "@react-navigation/native";
import Screen from "../../../components/Screen";
import createStyle from "./styles";
import useThemedStyles from "../../../hooks/useThemedStyles";

const LoginScreen = () => {
  const navigation = useNavigation();
  const styles = useThemedStyles(createStyle);

  return (
    <Screen>
      <Image
        source={require("../../../../assets/logo.png")}
        style={styles.logo}
      />
      <View style={styles.innerContainer}>
        <View style={styles.formContainer}>
          <Text style={styles.title}>Login</Text>
          <TextInput
            style={styles.input}
            placeholder="Email"
            placeholderTextColor="#CCCCCC"
          />
          <TextInput
            style={styles.input}
            placeholder="Senha"
            secureTextEntry
            placeholderTextColor="#CCCCCC"
          />
          <TouchableOpacity style={styles.button}>
            <Text style={styles.buttonText}>Entrar</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => navigation.navigate("RegisterScreen")}
          >
            <Text style={styles.linkText}>Não tem uma conta? Cadastre-se</Text>
          </TouchableOpacity>
        </View>
      </View>
    </Screen>
  );
};

export default LoginScreen;
