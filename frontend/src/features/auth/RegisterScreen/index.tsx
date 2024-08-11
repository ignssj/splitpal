import React from "react";
import createStyle from "./styles";
import LoginNavigation from "./components/LoginNavigation";
import RegisterButton from "./components/RegisterButton";
import useThemedStyles from "../../../hooks/useThemedStyles";
import { Image } from "react-native";
import { Text } from "react-native-paper";
import { useNavigation } from "@react-navigation/native";
import { PropsStack } from "../../../infra/navigation/models";
import { UserForm } from "../components/UserForm";
import { Screen } from "../../../components/Screen";

const RegisterScreen = () => {
  const navigation = useNavigation<PropsStack>();
  const styles = useThemedStyles(createStyle);

  return (
    <Screen.Root>
      <Image source={require("../../../../assets/logo.png")} style={styles.logo} />
      <Text style={styles.title}>Cadastro</Text>
      <UserForm.Root>
        <UserForm.Email value='' onChange={() => null} />
        <UserForm.Password value='' onChange={() => null} />
        <RegisterButton action={() => null} />
        <LoginNavigation action={() => navigation.navigate("LoginScreen")} />
      </UserForm.Root>
    </Screen.Root>
  );
};

export default RegisterScreen;
