import { useNavigation } from "@react-navigation/native";
import { PropsStack } from "../../../infra/navigation/models";
import { useAppDispatch } from "../../../redux/hooks";
import { useState } from "react";
import { isError } from "../../../helpers/ServiceHelper";
import { authenticate } from "../../../redux/slices/usersSlice";
import { ILoginForm } from "../../../types/Login";
import useAuthService from "../../../services/auth";
import useStorage from "../../../hooks/useStorage";

const useLoginViewModel = () => {
  const navigation = useNavigation<PropsStack>();
  const dispatch = useAppDispatch();
  const { write } = useStorage();
  const { login } = useAuthService();

  const [hidePassword, setHidePassword] = useState(true);

  const togglePasswordVisibility = () => {
    setHidePassword((prev) => !prev);
  };

  const handleLogin = async (loginForm: ILoginForm) => {
    const authResponse = await login({ ...loginForm });
    if (isError(authResponse)) {
      return alert("Email ou senha incorretos!");
    }

    dispatch(authenticate(authResponse));
    write("id", authResponse.id);
    write("token", authResponse.token);
    navigation.navigate("Tab");
  };

  const navigateToRegister = () => {
    navigation.navigate("RegisterScreen");
  };

  return {
    state: {
      loginInitialValue: {
        username: "",
        password: "",
      },
      hidePassword,
    },
    handlers: {
      handleLogin,
      navigateToRegister,
      togglePasswordVisibility,
    },
  };
};

export default useLoginViewModel;
