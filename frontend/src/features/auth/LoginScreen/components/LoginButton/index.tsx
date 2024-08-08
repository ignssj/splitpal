import React from "react";
import { Button } from "react-native-paper";
import { ILoginButton } from "./types";

const LoginButton: React.FC<ILoginButton> = ({ action }) => {
  return (
    <Button mode="contained" onPress={action}>
      Entrar
    </Button>
  );
};

export default LoginButton;
