import { z } from "zod";

export const formSchema = z.object({
  nomeCompleto: z.string().min(2, {
    message: "Nome completo deve ter pelo menos 2 caracteres.",
  }),
  email: z.string().email({
    message: "Email inválido.",
  }),
  telefone: z.string().min(10, {
    message: "Número de telefone inválido.",
  }),
  cargo: z.string().min(2, {
    message: "Cargo deve ter pelo menos 2 caracteres.",
  }),
  organizacao: z.string().min(2, {
    message: "Organização deve ter pelo menos 2 caracteres.",
  }),
  areasInteresse: z.array(z.string()).min(1, {
    message: "Selecione pelo menos uma área de interesse.",
  }),
});
