import * as Yup from "yup";

export const userSchema = Yup.object().shape({
  username: Yup.string().required("O email é obrigatório").min(5, "O email deve ter no mínimo 5 caracteres"),
  password: Yup.string().required("A senha é obrigatória").min(5, "A senha deve ter no mínimo 5 caracteres"),
  confirmation: Yup.string().required("Confirme sua senha").min(5, "A confirmação deve ter no mínimo 5 caracteres"),
});

export type IUserSchemaType = Yup.InferType<typeof userSchema>;
