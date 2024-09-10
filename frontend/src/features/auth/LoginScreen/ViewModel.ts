import { useNavigation } from "@react-navigation/native";
import { PropsStack } from "../../../infra/navigation/models";
import { useAppDispatch } from "../../../redux/hooks";
import { useState } from "react";
import { isError } from "../../../helpers/ServiceHelper";
import { authenticate } from "../../../redux/slices/usersSlice";
import useAuthService from "../../../services/auth";
import useStorage from "../../../hooks/useStorage";

const useLoginViewModel = () => {
  const navigation = useNavigation<PropsStack>();
  const dispatch = useAppDispatch();
  const { write } = useStorage();
  const { login } = useAuthService();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [hidePassword, setHidePassword] = useState(true);

  const handleEmailChange = (string: string) => {
    setEmail(string);
  };
  const handlePasswordChange = (string: string) => {
    setPassword(string);
  };

  const togglePasswordVisibility = () => {
    setHidePassword((prev) => !prev);
  };

  const handleLogin = async () => {
    const authResponse = await login({ username: email, password: password });
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
      email,
      password,
      hidePassword,
    },
    handlers: {
      handleEmailChange,
      handlePasswordChange,
      handleLogin,
      navigateToRegister,
      togglePasswordVisibility,
    },
  };
};

export default useLoginViewModel;
