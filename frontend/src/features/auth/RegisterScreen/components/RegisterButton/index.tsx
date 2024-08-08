import { View, Text } from "react-native";
import React from "react";
import { Button } from "react-native-paper";
import { IRegisterButton } from "./types";

const RegisterButton: React.FC<IRegisterButton> = ({ action }) => {
  return (
    <Button mode="contained" onPress={action}>
      Cadastrar
    </Button>
  );
};

export default RegisterButton;
