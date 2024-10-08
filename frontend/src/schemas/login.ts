import * as Yup from "yup";

export const loginSchema = Yup.object().shape({
  username: Yup.string().required("O email é obrigatório").min(5, "O email deve ter no mínimo 5 caracteres"),
  password: Yup.string().required("A senha é obrigatória").min(5, "A senha deve ter no mínimo 5 caracteres"),
});
