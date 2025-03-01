import { z } from "zod";

export const resetSchema = z
  .object({
    password: z
      .string()
      .min(8, {
        message: "A senha deve ter no mínimo 8 caracteres",
      })
      .regex(/[0-9]/, {
        message: "A senha deve conter pelo menos um número",
      })
      .regex(/[a-zA-Z]/, {
        message: "A senha deve conter pelo menos uma letra",
      }),

    confirmPassword: z
      .string()
      .min(8, {
        message: "A confirmação de senha deve ter no mínimo 8 caracteres",
      })
      .regex(/[0-9]/, {
        message: "A confirmação de senha deve conter pelo menos um número",
      })
      .regex(/[a-zA-Z]/, {
        message: "A confirmação de senha deve conter pelo menos uma letra",
      }),
  })
  .refine((fields) => fields.password === fields.confirmPassword, {
    message: "As senhas não correspondem",
    path: ["confirmPassword"],
  });
