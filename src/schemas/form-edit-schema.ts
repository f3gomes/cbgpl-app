import { z } from "zod";

export const formEditSchema = z.object({
  name: z.string().min(2, {
    message: "Nome completo deve ter pelo menos 2 caracteres",
  }),
  email: z
    .string()
    .email({
      message: "Email inválido",
    })
    .optional(),
  phone: z.string().min(10, {
    message: "Número de telefone inválido",
  }),
  role: z.string(),
  company: z.string(),
  linkedin: z.string().optional(),
  instagram: z.string().optional(),
  twitter: z.string().optional(),
  pmiId: z.string(),
  visible: z.boolean(),
  profileImgUrl: z.string(),
});
