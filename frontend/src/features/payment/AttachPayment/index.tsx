import React from "react";
import Title from "../../../components/Title";
import Input from "../../../components/Input";
import { Text } from "react-native-paper";
import { Screen } from "../../../components/Screen";
import { Rounded } from "../../../components/Rounded";

const AttachPayment = () => {
  return (
    <Screen.Root>
      <Screen.Header>
        <Rounded.Back />
        <Title>Adicionar comprovante</Title>
      </Screen.Header>
      <Screen.Content>
        <Text>Comprovante</Text>
        <Input label='Valor' value='' onChangeText={() => null} />
      </Screen.Content>
    </Screen.Root>
  );
};

export default AttachPayment;
