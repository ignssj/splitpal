import React from "react";
import Screen from "../../../components/Screen";
import createStyle from "./styles";
import useThemedStyles from "../../../hooks/useThemedStyles";
import { View, Text, TouchableOpacity, Image } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { TextInput } from "react-native-paper";
import { PropsStack } from "../../../infra/navigation/models";

const RegisterScreen = () => {
  const navigation = useNavigation<PropsStack>();
  const styles = useThemedStyles(createStyle);

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
