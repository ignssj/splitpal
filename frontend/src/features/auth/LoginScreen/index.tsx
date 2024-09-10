import React from "react";
import useThemedStyles from "../../../hooks/useThemedStyles";
import stylesheet from "./styles";
import useLoginViewModel from "./ViewModel";
import { Image } from "react-native";
import { Button, Text } from "react-native-paper";
import { UserForm } from "../components/UserForm";
import { Screen } from "../../../components/Screen";
import { Formik } from "formik";
import { loginSchema } from "../../../schemas/login";

const LoginScreen = () => {
  const styles = useThemedStyles(stylesheet);
  const { state, handlers } = useLoginViewModel();
  return (
    <Screen.Root>
      <Image source={require("../../../../assets/logo.png")} style={styles.logo} />
      <Text style={styles.title}>Login</Text>
      <Formik initialValues={state.loginInitialValue} validationSchema={loginSchema} onSubmit={(values) => handlers.handleLogin({ ...values })}>
        {({ handleChange, handleSubmit, values, isValid }) => (
          <UserForm.Root>
            <UserForm.Email value={values.username} onChange={handleChange("username")} />
            <UserForm.Password
              value={values.password}
              onChange={handleChange("password")}
              visible={!state.hidePassword}
              toggleVisibility={handlers.togglePasswordVisibility}
            />
            <Button mode='contained' onPress={() => handleSubmit()} disabled={!isValid}>
              Entrar
            </Button>
            <Button mode='text' onPress={handlers.navigateToRegister}>
              Não tem uma conta? Cadastre-se
            </Button>
          </UserForm.Root>
        )}
      </Formik>
    </Screen.Root>
  );
};

export default LoginScreen;
