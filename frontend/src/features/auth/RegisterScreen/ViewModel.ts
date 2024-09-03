import { useNavigation } from "@react-navigation/native";
import useAuthService from "../../../services/auth";
import { PropsStack } from "../../../infra/navigation/models";
import { useState } from "react";
import { ErrorToast, SuccessToast } from "../../../helpers/ToastHelper";
import { isError } from "../../../helpers/ServiceHelper";

const useRegisterViewModel = () => {
  const navigation = useNavigation<PropsStack>();
  const { register } = useAuthService();

  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");

  const handleEmailChange = (value: string) => setEmail(value);
  const handlePasswordChange = (value: string) => setPassword(value);

  const navigateToLogin = () => navigation.navigate("LoginScreen");

  const handleSignup = async () => {
    const response = await register({ username: email, password });
    if (isError(response)) return ErrorToast("Problema ao cadastrar usuário!");

    SuccessToast("Usuário cadastrado com sucesso!");
    navigation.goBack();
  };

  return {
    state: {
      email,
      password,
    },
    handlers: {
      handleEmailChange,
      handlePasswordChange,
      handleSignup,
      navigateToLogin,
    },
  };
};

export default useRegisterViewModel;
