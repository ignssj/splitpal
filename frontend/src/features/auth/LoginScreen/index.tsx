import React from "react";
import { Text, Image } from "react-native";
import LoginButton from "./components/LoginButton";
import { useNavigation } from "@react-navigation/native";
import Screen from "../../../components/Screen";
import { UserForm } from "../components/UserForm";
import stylesheet from "./styles";
import useThemedStyles from "../../../hooks/useThemedStyles";
import { PropsStack } from "../../../infra/navigation/models";
import RegisterNavigation from "./components/RegisterNavigation";
import useAuthService from "../../../services/auth";
import { useAppDispatch } from "../../../redux/hooks";
import { authenticate } from "../../../redux/slices/usersSlice";
import { ErrorMessage } from "../../../services/types";
import { isError } from "../../../helpers/ServiceHelper";

const LoginScreen = () => {
  const styles = useThemedStyles(stylesheet);
  const navigation = useNavigation<PropsStack>();
  const dispatch = useAppDispatch();

  const { login } = useAuthService();
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");

  const handleEmailChange = (string: string) => {
    setEmail(string);
  };
  const handlePasswordChange = (string: string) => {
    setPassword(string);
  };

  const handleLogin = async () => {
    const authResponse = await login({ username: email, password: password });
    if (isError(authResponse)) {
      return alert("Email ou senha incorretos!");
    }

    dispatch(authenticate(authResponse.data));
    navigation.navigate("Tab");
  };

  const navigateToRegister = () => {
    navigation.navigate("RegisterScreen");
  };

  return (
    <Screen>
      <Image source={require("../../../../assets/logo.png")} style={styles.logo} />
      <Text style={styles.title}>Login</Text>
      <UserForm.Root>
        <UserForm.Email value={email} onChange={handleEmailChange} />
        <UserForm.Password value={password} onChange={handlePasswordChange} />
        <LoginButton action={handleLogin} />
        <RegisterNavigation action={navigateToRegister} />
      </UserForm.Root>
    </Screen>
  );
};

export default LoginScreen;
