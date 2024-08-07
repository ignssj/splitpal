import React from "react";
import { Text, Image } from "react-native";
import LoginButton from "./components/LoginButton";
import { useNavigation } from "@react-navigation/native";
import Screen from "../../../components/Screen";
import { UserForm } from "../components/UserForm";
import stylesheet from "./styles";
import useThemedStyles from "../../../hooks/useThemedStyles";
import RegisterButton from "./components/RegisterButton";
import { PropsStack } from "../../../infra/navigation/models";

const LoginScreen = () => {
  const navigation = useNavigation<PropsStack>();
  const styles = useThemedStyles(stylesheet);

  return (
    <Screen>
      <Image
        source={require("../../../../assets/logo.png")}
        style={styles.logo}
      />
      <Text style={styles.title}>Login</Text>
      <UserForm.Root>
        <UserForm.Email value="" onChange={() => null} />
        <UserForm.Password value="" onChange={() => null} />
        <LoginButton action={() => null} />
        <RegisterButton action={() => navigation.navigate("RegisterScreen")} />
      </UserForm.Root>
    </Screen>
  );
};

export default LoginScreen;
