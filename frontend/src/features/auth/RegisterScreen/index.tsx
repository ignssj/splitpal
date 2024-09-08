import React from "react";
import stylesheet from "./styles";
import useThemedStyles from "../../../hooks/useThemedStyles";
import useRegisterViewModel from "./ViewModel";
import { Image } from "react-native";
import { Button, Text } from "react-native-paper";
import { UserForm } from "../components/UserForm";
import { Screen } from "../../../components/Screen";
import { ErrorMessage, Formik } from "formik";
import Input from "../../../components/Input";
import { userSchema } from "../../../validation/user";
import FormError from "../../../components/FormError";

const RegisterScreen = () => {
  const styles = useThemedStyles(stylesheet);
  const { signupInitialValue, handlers } = useRegisterViewModel();
  return (
    <Screen.Root>
      <Image source={require("../../../../assets/logo.png")} style={styles.logo} />
      <Text style={styles.title}>Cadastro</Text>
      <Formik
        initialValues={signupInitialValue}
        validationSchema={userSchema}
        validateOnChange={false}
        onSubmit={(values) => handlers.handleSignup({ ...values })}
      >
        {({ handleChange, handleSubmit, values, errors }) => (
          <UserForm.Root>
            <UserForm.Email value={values.username} onChange={handleChange("username")} />
            {errors.username && <FormError>{errors.username}</FormError>}
            <UserForm.Password value={values.password} onChange={handleChange("password")} />
            {errors.password && <FormError>{errors.password}</FormError>}
            <Button mode='contained' onPress={() => handleSubmit()}>
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
