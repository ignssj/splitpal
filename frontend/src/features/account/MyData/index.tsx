import React from "react";
import Title from "../../../components/Title";
import Input from "../../../components/Input";
import Spaced from "../../../components/Spaced";
import useUserService from "../../../services/users";
import { Screen } from "../../../components/Screen";
import { useAppSelector } from "../../../redux/hooks";
import { Button } from "react-native-paper";
import { isError } from "../../../helpers/ServiceHelper";
import { ErrorToast, SuccessToast } from "../../../helpers/ToastHelper";

const MyData = () => {
  const user = useAppSelector((state) => state.user);

  const [newEmail, setNewEmail] = React.useState<string>(user.username);
  const [newPassword, setNewPassword] = React.useState<string>("");
  const [currentPassword, setCurrentPassword] = React.useState<string>("");
  const { updateMyData } = useUserService();

  const handleEmailChange = (email: string) => {
    setNewEmail(email);
  };

  const handleNewPasswordChange = (password: string) => {
    setNewPassword(password);
  };

  const handleCurrentPasswordChange = (curr: string) => {
    setCurrentPassword(curr);
  };

  const isButtonDisabled = (): boolean => {
    if (!newEmail || !newPassword || !currentPassword) return true;
    if (newEmail.length < 5 || newPassword.length < 5) return true;

    return false;
  };

  const handleUpdate = () => {
    const updatedData = updateMyData({ userId: user.id, body: { username: newEmail, password: newPassword, currentPassword } });
    if (isError(updatedData)) return ErrorToast("Erro ao atualizar dados", "Tente novamente");

    setNewEmail("");
    setNewPassword("");
    setCurrentPassword("");

    SuccessToast("Dados atualizados", "Seus dados foram atualizados com sucesso");
  };

  return (
    <Screen.Root>
      <Screen.Header>
        <Title>Meus dados</Title>
      </Screen.Header>
      <Screen.Content>
        <Spaced gap={15}>
          <Input label='Email' value={newEmail} onChangeText={handleEmailChange} />
          <Input label='Senha atual' value={currentPassword} onChangeText={handleCurrentPasswordChange} />
          <Input label='Nova senha' value={newPassword} onChangeText={handleNewPasswordChange} />
          <Button mode='contained' disabled={isButtonDisabled()} onPress={handleUpdate}>
            Atualizar dados
          </Button>
        </Spaced>
      </Screen.Content>
    </Screen.Root>
  );
};

export default MyData;
