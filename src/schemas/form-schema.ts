import { z } from "zod";

export const formSchema = z
  .object({
    name: z.string().min(2, {
      message: "Nome completo deve ter pelo menos 2 caracteres.",
    }),
    email: z.string().email({
      message: "Email inválido.",
    }),
    phone: z.string().min(10, {
      message: "Número de telefone inválido.",
    }),
    role: z.string().min(2, {
      message: "Cargo deve ter pelo menos 2 caracteres.",
    }),
    company: z.string().min(2, {
      message: "Organização deve ter pelo menos 2 caracteres.",
    }),
    areas: z.array(z.string()).min(1, {
      message: "Selecione pelo menos uma área de interesse.",
    }),

    linkedin: z.string(),
    instagram: z.string(),
    twitter: z.string(),
    idPmi: z.string(),

    password: z
      .string()
      .min(8, {
        message: "A senha deve ter no mínimo 8 caracteres.",
      })
      .regex(/[0-9]/, {
        message: "A senha deve conter pelo menos um número.",
      })
      .regex(/[a-zA-Z]/, {
        message: "A senha deve conter pelo menos uma letra.",
      }),

    confirmPassword: z
      .string()
      .min(8, {
        message: "A confirmação de senha deve ter no mínimo 8 caracteres.",
      })
      .regex(/[0-9]/, {
        message: "A confirmação de senha deve conter pelo menos um número.",
      })
      .regex(/[a-zA-Z]/, {
        message: "A confirmação de senha deve conter pelo menos uma letra.",
      }),
  })
  .refine((fields) => fields.password === fields.confirmPassword, {
    message: "As senhas não correspondem.",
    path: ["confirmPassword"],
  });
