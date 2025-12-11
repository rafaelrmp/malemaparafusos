import { z } from "zod";

export const quoteFormSchema = z.object({
  nome: z
    .string()
    .trim()
    .min(3, "Nome deve ter no mínimo 3 caracteres")
    .max(100, "Nome deve ter no máximo 100 caracteres"),
  email: z
    .string()
    .trim()
    .email("E-mail inválido")
    .max(255, "E-mail muito longo"),
  telefone: z
    .string()
    .trim()
    .min(10, "Telefone deve ter no mínimo 10 dígitos")
    .max(20, "Telefone inválido")
    .regex(/^[\d\s\(\)\-\+]+$/, "Telefone contém caracteres inválidos"),
  mensagem: z
    .string()
    .trim()
    .min(10, "Mensagem deve ter no mínimo 10 caracteres")
    .max(1000, "Mensagem deve ter no máximo 1000 caracteres"),
});

export type QuoteFormData = z.infer<typeof quoteFormSchema>;
