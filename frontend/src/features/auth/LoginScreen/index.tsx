import React from "react";
import LoginButton from "./components/LoginButton";
import RegisterNavigation from "./components/RegisterNavigation";
import useAuthService from "../../../services/auth";
import useThemedStyles from "../../../hooks/useThemedStyles";
import stylesheet from "./styles";
import { Image } from "react-native";
import { Text } from "react-native-paper";
import { useNavigation } from "@react-navigation/native";
import { UserForm } from "../components/UserForm";
import { PropsStack } from "../../../infra/navigation/models";
import { useAppDispatch } from "../../../redux/hooks";
import { authenticate } from "../../../redux/slices/usersSlice";
import { isError } from "../../../helpers/ServiceHelper";
import { Screen } from "../../../components/Screen";

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
    <Screen.Root>
      <Screen.Content>
        <Image source={require("../../../../assets/logo.png")} style={styles.logo} />
        <Text style={styles.title}>Login</Text>
        <UserForm.Root>
          <UserForm.Email value={email} onChange={handleEmailChange} />
          <UserForm.Password value={password} onChange={handlePasswordChange} />
          <LoginButton action={handleLogin} />
          <RegisterNavigation action={navigateToRegister} />
        </UserForm.Root>
      </Screen.Content>
    </Screen.Root>
  );
};

export default LoginScreen;
