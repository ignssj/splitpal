import { useState } from "react";
import { isError } from "../../../helpers/ServiceHelper";
import { ErrorToast, SuccessToast } from "../../../helpers/ToastHelper";
import useUserService from "../../../services/users";
import { useAppSelector } from "../../../redux/hooks";

const useMyDataViewModel = () => {
  const user = useAppSelector((state) => state.user);
  const [newEmail, setNewEmail] = useState<string>(user.username);
  const [newPassword, setNewPassword] = useState<string>("");
  const [currentPassword, setCurrentPassword] = useState<string>("");
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

  return {
    state: {
      newEmail,
      newPassword,
      currentPassword,
      isButtonDisabled: isButtonDisabled(),
    },
    handlers: {
      handleEmailChange,
      handleNewPasswordChange,
      handleCurrentPasswordChange,
      handleUpdate,
    },
  };
};

export default useMyDataViewModel;
