import * as Yup from "yup";

export const splitSchema = Yup.object().shape({
  name: Yup.string().required("O nome é obrigatório"),
  category: Yup.string().optional(),
  total: Yup.number().required("O valor total é obrigatório").min(10, "O valor mínimo é R$ 10"),
  qrcode: Yup.string()
    .required("O QRCode é obrigatório")
    .min(15, "O QRCode deve ter no mínimo 15 caracteres")
    .max(255, "O QRCode deve ter no máximo 255 caracteres"),
});
