import React from "react";
import Title from "../../../components/Title";
import Input from "../../../components/Input";
import Spaced from "../../../components/Spaced";
import { Screen } from "../../../components/Screen";
import { useAppSelector } from "../../../redux/hooks";
import { Button } from "react-native-paper";

const MyData = () => {
  const user = useAppSelector((state) => state.user);

  const [newEmail, setNewEmail] = React.useState<string>(user.username);
  const [password, setPassword] = React.useState<string>("");
  const [passwordConfirmation, setPasswordConfirmation] = React.useState<string>("");

  const handleEmailChange = (email: string) => {
    setNewEmail(email);
  };

  const handlePasswordChange = (password: string) => {
    setPassword(password);
  };

  const handlePasswordConfirmationChange = (password: string) => {
    setPasswordConfirmation(password);
  };

  const isButtonDisabled = (): boolean => {
    if (!newEmail || !password || !passwordConfirmation) return true;
    if (newEmail.length < 5) return true;
    if (password !== passwordConfirmation) return true;
    if (password.length < 6) return true;

    return false;
  };

  return (
    <Screen.Root>
      <Screen.Header>
        <Title>Meus dados</Title>
      </Screen.Header>
      <Screen.Content>
        <Spaced gap={15}>
          <Input label='Email' value={newEmail} onChangeText={handleEmailChange} />
          <Input label='Senha' value={password} onChangeText={handlePasswordChange} />
          <Input label='Confirmar senha' value={passwordConfirmation} onChangeText={handlePasswordConfirmationChange} />
          <Button mode='contained' disabled={isButtonDisabled()}>
            Atualizar dados
          </Button>
        </Spaced>
      </Screen.Content>
    </Screen.Root>
  );
};

export default MyData;
