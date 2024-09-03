import React from "react";
import Title from "../../../components/Title";
import Input from "../../../components/Input";
import Spaced from "../../../components/Spaced";
import useMyDataViewModel from "./ViewModel";
import { Screen } from "../../../components/Screen";
import { Button } from "react-native-paper";

const MyData = () => {
  const { state, handlers } = useMyDataViewModel();
  return (
    <Screen.Root>
      <Screen.Header>
        <Title>Meus dados</Title>
      </Screen.Header>
      <Screen.Content>
        <Spaced gap={15}>
          <Input label='Email' value={state.newEmail} onChangeText={handlers.handleEmailChange} />
          <Input label='Senha atual' value={state.currentPassword} onChangeText={handlers.handleCurrentPasswordChange} />
          <Input label='Nova senha' value={state.newPassword} onChangeText={handlers.handleNewPasswordChange} />
          <Button mode='contained' disabled={state.isButtonDisabled} onPress={handlers.handleUpdate}>
            Atualizar dados
          </Button>
        </Spaced>
      </Screen.Content>
    </Screen.Root>
  );
};

export default MyData;
