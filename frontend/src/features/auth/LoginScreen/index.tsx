import React from "react";
import useThemedStyles from "../../../hooks/useThemedStyles";
import stylesheet from "./styles";
import useLoginViewModel from "./ViewModel";
import { Image } from "react-native";
import { Button, Text } from "react-native-paper";
import { UserForm } from "../components/UserForm";
import { Screen } from "../../../components/Screen";

const LoginScreen = () => {
  const styles = useThemedStyles(stylesheet);
  const { state, handlers } = useLoginViewModel();
  return (
    <Screen.Root>
      <Image source={require("../../../../assets/logo.png")} style={styles.logo} />
      <Text style={styles.title}>Login</Text>
      <UserForm.Root>
        <UserForm.Email value={state.email} onChange={handlers.handleEmailChange} />
        <UserForm.Password value={state.password} onChange={handlers.handlePasswordChange} />
        <Button mode='contained' onPress={handlers.handleLogin}>
          Entrar
        </Button>
        <Button mode='text' onPress={handlers.navigateToRegister}>
          Não tem uma conta? Cadastre-se
        </Button>
      </UserForm.Root>
    </Screen.Root>
  );
};

export default LoginScreen;
