import React from "react";
import { Button } from "react-native-paper";
import { IRegisterButton } from "./types";

const RegisterButton: React.FC<IRegisterButton> = ({ action }) => {
  return (
    <Button mode="text" onPress={action}>
      Não tem uma conta? Cadastre-se
    </Button>
  );
};

export default RegisterButton;
