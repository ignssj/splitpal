import { View, Text } from "react-native";
import React from "react";
import { Button } from "react-native-paper";
import { useNavigation } from "@react-navigation/native";
import { PropsStack } from "../../../../../infra/navigation/models";
import { ILoginNavigation } from "./types";

const LoginNavigation: React.FC<ILoginNavigation> = () => {
  const navigation = useNavigation<PropsStack>();
  return (
    <Button mode="text" onPress={() => navigation.navigate("LoginScreen")}>
      Já tem uma conta? Faça login
    </Button>
  );
};

export default LoginNavigation;
