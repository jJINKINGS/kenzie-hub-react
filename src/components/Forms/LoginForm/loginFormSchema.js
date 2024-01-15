import { z } from "zod";

export const loginFormSchema = z.object({
    email: z
        .string()
        .email("Forneça um e-mail válido!")
        .trim()
        .min(1, "Campo Obrigatório!"),

    password: z
        .string()
        .min(1, "Campo Obrigatório!"),
});
