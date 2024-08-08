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

const RegisterScreen = () => {
  const navigation = useNavigation<PropsStack>();
  const styles = useThemedStyles(createStyle);

  return (
    <Screen>
      <Image source={require("../../../../assets/logo.png")} style={styles.logo} />
      <Text style={styles.title}>Cadastro</Text>
      <UserForm.Root>
        <UserForm.Email value="" onChange={() => null} />
        <UserForm.Password value="" onChange={() => null} />
        <RegisterButton action={() => null} />
        <LoginNavigation action={() => navigation.navigate("LoginScreen")} />
      </UserForm.Root>
    </Screen>
  );
};

export default RegisterScreen;
