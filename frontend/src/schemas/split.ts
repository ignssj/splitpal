import * as Yup from "yup";

export const splitSchema = Yup.object().shape({
  name: Yup.string().required("O nome é obrigatório"),
  category: Yup.string().optional(),
  total: Yup.string()
    .required("O valor total é obrigatório")
    .transform((value) => {
      return value.replace(/\D/g, "");
    })
    .test("min", "O valor total deve ser maior que R$ 10,00", (value) => {
      return parseInt(value) >= 1000;
    }),
  qrcode: Yup.string()
    .required("O QRCode é obrigatório")
    .min(15, "O QRCode deve ter no mínimo 15 caracteres")
    .max(255, "O QRCode deve ter no máximo 255 caracteres"),
});
