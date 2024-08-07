import React from "react";
import { View, Text, TextInput, TouchableOpacity, Image } from "react-native";
import { useNavigation } from "@react-navigation/native";
import Screen from "../../../components/Screen";
import createStyle from "./styles";
import useThemedStyles from "../../../hooks/useThemedStyles";
import useAuthService from "../../../services/auth";

const LoginScreen = () => {
  const navigation = useNavigation();
  const styles = useThemedStyles(createStyle);

  const { login } = useAuthService
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");

  const handleEmailChange = (string: string) => {
    setEmail(string);
  }
  const handlePasswordChange = (string: string) => {
    setPassword(string);
  }

  const handleEmail = async () => {
    const authResponse = await login(email, password);
    if (authResponse) {
      navigation.navigate("homeScreen");
    }
    else {
      alert("Email ou senha incorretos!!")
    }
  }

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
            value={email}
            onChangeText={handleEmailChange}
            style={styles.input}
            placeholder="Email"
            placeholderTextColor="#CCCCCC"
          />
          <TextInput
            value={password}
            onChangeText={handlePasswordChange}
            style={styles.input}
            placeholder="Senha"
            secureTextEntry
            placeholderTextColor="#CCCCCC"
          />
          <TouchableOpacity style={styles.button} onPress={handleEmail}>
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
