import * as Yup from "yup";

export const updateUserSchema = Yup.object().shape({
  newEmail: Yup.string().required("O email é obrigatório").min(5, "O email deve ter no mínimo 5 caracteres"),
  currentPassword: Yup.string().required("Informe a senha atual").min(5, "A nova senha deve ter no mínimo 6 caracteres"),
  newPassword: Yup.string().required("Informe a nova senha").min(5, "A nova senha deve ter no mínimo 6 caracteres"),
});
