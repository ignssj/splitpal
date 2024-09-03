import React from "react";
import stylesheet from "./styles";
import useThemedStyles from "../../../hooks/useThemedStyles";
import useRegisterViewModel from "./ViewModel";
import { Image } from "react-native";
import { Button, Text } from "react-native-paper";
import { UserForm } from "../components/UserForm";
import { Screen } from "../../../components/Screen";

const RegisterScreen = () => {
  const styles = useThemedStyles(stylesheet);
  const { state, handlers } = useRegisterViewModel();
  return (
    <Screen.Root>
      <Image source={require("../../../../assets/logo.png")} style={styles.logo} />
      <Text style={styles.title}>Cadastro</Text>
      <UserForm.Root>
        <UserForm.Email value={state.email} onChange={handlers.handleEmailChange} />
        <UserForm.Password value={state.password} onChange={handlers.handlePasswordChange} />
        <Button mode='contained' onPress={handlers.handleSignup}>
          Cadastrar
        </Button>
        <Button onPress={handlers.navigateToLogin}>Já tem uma conta? Faça login</Button>
      </UserForm.Root>
    </Screen.Root>
  );
};

export default RegisterScreen;
