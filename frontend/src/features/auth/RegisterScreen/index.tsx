import React from "react";
import Screen from "../../../components/Screen";
import createStyle from "./styles";
import useThemedStyles from "../../../hooks/useThemedStyles";
import LoginNavigation from "./components/LoginNavigation";
import { Text, Image } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { PropsStack } from "../../../infra/navigation/models";
import { UserForm } from "../components/UserForm";
import RegisterButton from "./components/RegisterButton";
import useAuthService from "../../../services/auth";

const RegisterScreen = () => {
  const navigation = useNavigation<PropsStack>();
  const styles = useThemedStyles(createStyle);

  const { register } = useAuthService();
  const [email, setEmail] = React.useState<string>("");
  const [password, setPassword] = React.useState<string>("");

  const handleEmailChange = (string: string) => {
    setEmail(string);
    console.log(string);
  }
  const handlePasswordChange = (string: string) => {
    setPassword(string);
  }
  const navigateToLogin = () => {
    navigation.navigate("LoginScreen");
  }
  const handleRegister = async () => {
    const authResponse = await register ({username: email, password: password})
    if (!authResponse){
      return alert("Usuario em uso. Tente outro.");
    }
    navigateToLogin();
  }

  return (
    <Screen>
      <Image source={require("../../../../assets/logo.png")} style={styles.logo} />
      <Text style={styles.title}>Cadastro</Text>
      <UserForm.Root>
        <UserForm.Email value= {email} onChange={handleEmailChange} />
        <UserForm.Password value= {password} onChange={handlePasswordChange} />
        <RegisterButton action={handleRegister} />
        <LoginNavigation action={navigateToLogin} />
      </UserForm.Root>
    </Screen>
  );
};

export default RegisterScreen;
