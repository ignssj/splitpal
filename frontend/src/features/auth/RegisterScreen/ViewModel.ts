import useAuthService from "../../../services/auth";
import { useNavigation } from "@react-navigation/native";
import { PropsStack } from "../../../infra/navigation/models";
import { ErrorToast, SuccessToast } from "../../../helpers/ToastHelper";
import { isError } from "../../../helpers/ServiceHelper";
import { useState } from "react";

const useRegisterViewModel = () => {
  const navigation = useNavigation<PropsStack>();
  const [hide, setHide] = useState<boolean>(true);
  const { register } = useAuthService();

  const togglePasswordVisibility = () => {
    setHide((prev) => !prev);
  };

  const navigateToLogin = () => navigation.navigate("LoginScreen");

  const handleSignup = async (form: IUserSchemaType) => {
    const response = await register({ username: form.username, password: form.password });
    if (isError(response)) return ErrorToast("Problema ao cadastrar usuário!");

    SuccessToast("Usuário cadastrado com sucesso!");
    navigation.goBack();
  };

  return {
    signupInitialValue: {
      username: "",
      password: "",
      confirmation: "",
    },
    state: {
      hide,
    },
    handlers: {
      handleSignup,
      navigateToLogin,
      togglePasswordVisibility,
    },
  };
};

export default useRegisterViewModel;
