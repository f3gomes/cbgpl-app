// src/schemas/login-schema.ts

import * as z from "zod";

export const loginSchema = z.object({
  email: z.string().email("E-mail inválido").nonempty("E-mail é obrigatório"),
  password: z.string().min(8, "A senha deve ter pelo menos 8 caracteres"),
});
