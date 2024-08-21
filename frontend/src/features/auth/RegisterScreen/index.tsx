import React from "react";
import createStyle from "./styles";
import LoginNavigation from "./components/LoginNavigation";
import RegisterButton from "./components/RegisterButton";
import useThemedStyles from "../../../hooks/useThemedStyles";
import useAuthService from "../../../services/auth";
import { Image } from "react-native";
import { Text } from "react-native-paper";
import { useNavigation } from "@react-navigation/native";
import { PropsStack } from "../../../infra/navigation/models";
import { UserForm } from "../components/UserForm";
import { Screen } from "../../../components/Screen";
import { isError } from "../../../helpers/ServiceHelper";
import { ErrorToast, SuccessToast } from "../../../helpers/ToastHelper";

const RegisterScreen = () => {
  const navigation = useNavigation<PropsStack>();
  const styles = useThemedStyles(createStyle);
  const { register } = useAuthService();

  const [email, setEmail] = React.useState<string>("");
  const [password, setPassword] = React.useState<string>("");

  const handleEmailChange = (value: string) => setEmail(value);
  const handlePasswordChange = (value: string) => setPassword(value);

  const navigateToLogin = () => navigation.navigate("LoginScreen");

  const handlePress = async () => {
    const response = await register({ username: email, password });
    if (isError(response)) return ErrorToast("Problema ao cadastrar usuário!");

    SuccessToast("Usuário cadastrado com sucesso!");
    navigation.goBack();
  };

  return (
    <Screen.Root>
      <Image source={require("../../../../assets/logo.png")} style={styles.logo} />
      <Text style={styles.title}>Cadastro</Text>
      <UserForm.Root>
        <UserForm.Email value={email} onChange={handleEmailChange} />
        <UserForm.Password value={password} onChange={handlePasswordChange} />
        <RegisterButton action={handlePress} />
        <LoginNavigation action={navigateToLogin} />
      </UserForm.Root>
    </Screen.Root>
  );
};

export default RegisterScreen;
