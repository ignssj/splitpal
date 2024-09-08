import { useNavigation } from "@react-navigation/native";
import useAuthService from "../../../services/auth";
import { PropsStack } from "../../../infra/navigation/models";
import { ErrorToast, SuccessToast } from "../../../helpers/ToastHelper";
import { isError } from "../../../helpers/ServiceHelper";
import { RegisterRequest } from "../../../services/auth/types";

const useRegisterViewModel = () => {
  const navigation = useNavigation<PropsStack>();
  const { register } = useAuthService();

  const navigateToLogin = () => navigation.navigate("LoginScreen");

  const handleSignup = async (form: RegisterRequest) => {
    console.log(form);
    const response = await register({ ...form });
    if (isError(response)) return ErrorToast("Problema ao cadastrar usuário!");

    SuccessToast("Usuário cadastrado com sucesso!");
    navigation.goBack();
  };

  return {
    signupInitialValue: {
      username: "",
      password: "",
    },
    handlers: {
      handleSignup,
      navigateToLogin,
    },
  };
};

export default useRegisterViewModel;
