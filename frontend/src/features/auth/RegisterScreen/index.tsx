import React from "react";
import FormError from "../../../components/FormError";
import stylesheet from "./styles";
import useThemedStyles from "../../../hooks/useThemedStyles";
import useRegisterViewModel from "./ViewModel";
import { Image } from "react-native";
import { Button, Text } from "react-native-paper";
import { UserForm } from "../components/UserForm";
import { Screen } from "../../../components/Screen";
import { Formik } from "formik";
import { signupSchema } from "../../../schemas/signup";

const RegisterScreen = () => {
  const styles = useThemedStyles(stylesheet);
  const { signupInitialValue, state, handlers } = useRegisterViewModel();
  return (
    <Screen.Root>
      <Image source={require("../../../../assets/logo.png")} style={styles.logo} />
      <Text style={styles.title}>Cadastro</Text>
      <Formik initialValues={signupInitialValue} validationSchema={signupSchema} onSubmit={(values) => handlers.handleSignup({ ...values })}>
        {({ handleChange, handleSubmit, values, errors, isValid }) => (
          <UserForm.Root>
            <UserForm.Email value={values.username} onChange={handleChange("username")} />
            {errors.username && <FormError>{errors.username}</FormError>}
            <UserForm.Password
              value={values.password}
              onChange={handleChange("password")}
              visible={state.hide}
              toggleVisibility={handlers.togglePasswordVisibility}
            />
            {errors.password && <FormError>{errors.password}</FormError>}
            <UserForm.Confirmation
              value={values.confirmation}
              onChange={handleChange("confirmation")}
              visible={state.hide}
              toggleVisibility={handlers.togglePasswordVisibility}
            />
            {errors.confirmation && <FormError>{errors.confirmation}</FormError>}
            <Button mode='contained' onPress={() => handleSubmit()} disabled={!isValid}>
              Cadastrar
            </Button>
            <Button onPress={handlers.navigateToLogin}>Já tem uma conta? Faça login</Button>
          </UserForm.Root>
        )}
      </Formik>
    </Screen.Root>
  );
};

export default RegisterScreen;
