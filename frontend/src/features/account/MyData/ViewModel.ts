import useUserService from "../../../services/users";
import { useAppSelector } from "../../../redux/hooks";
import { ErrorToast, SuccessToast } from "../../../helpers/ToastHelper";
import { isError } from "../../../helpers/ServiceHelper";
import { IUpdateUser } from "../../../types/UpdateUser";

const useMyDataViewModel = () => {
  const user = useAppSelector((state) => state.user);
  const { updateMyData } = useUserService();

  const handleUpdate = async (form: IUpdateUser) => {
    const updatedData = await updateMyData({
      userId: user.id,
      body: { username: form.newEmail, password: form.newPassword, currentPassword: form.currentPassword },
    });
    console.log(updatedData);
    if (isError(updatedData)) return ErrorToast("Erro ao atualizar dados", "Tente novamente");

    SuccessToast("Dados atualizados", "Seus dados foram atualizados com sucesso");
  };

  return {
    state: {
      initialValues: {
        newEmail: "",
        newPassword: "",
        currentPassword: "",
      },
    },
    handlers: {
      handleUpdate,
    },
  };
};

export default useMyDataViewModel;
