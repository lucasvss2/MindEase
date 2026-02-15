import * as yup from "yup";


export const loginSchema = yup.object({
  email: yup.string().required("O Campo é obrigatório!"),
  password: yup.string().required("O campo é obrigatório!")
});

export const createAccountSchema = yup.object({
  fullname: yup.string().required("O Campo é obrigatório!"),
  email: yup
    .string()
    .email(
      "Email inválido. Por favor, insira um email no formato email@email.com",
    )
    .required("O Campo é obrigatório!"),
  password: yup
    .string()
    .required("O campo é obrigatório!")
    .min(6, "A senha deve ter no mínimo 6 caracteres.")
    .matches(
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[^a-zA-Z0-9]).*$/,
      "Sua senha não atende aos requisitos. Consulte o ícone i ao lado do campo para mais detalhes.",
    ),
});

export type TLogin = yup.InferType<typeof loginSchema>;
export type TCreateAccount = yup.InferType<typeof createAccountSchema>;



