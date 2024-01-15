import { z } from "zod";

export const registerFormSchema = z.object({
    name: z.string().trim().min(1, "Campo Obrigatório!"),
    email: z
        .string()
        .email("Forneça um e-mail válido!")
        .min(1, "Campo Obrigatório!"),

    password: z
        .string()
        .min(8, "São necessários pelo menos 8 caracteres!")
        .regex(/[a-z]+/, "É necessário conter pelo menos uma letra minúscula!")
        .regex(/[A-Z]+/, "É necessário conter pelo menos uma letra maiúscula!")
        .regex(/[0-9]+/, "É necessário conter pelo menos um número!"),

    confirmPassword: z
        .string()
        .min(1, "Campo Obrigatório!"),

    bio: z
    .string()
    .min(1, "Campo Obrigatório!"),

    contact: z
    .string()
    .min(1, "Campo Obrigatório!"),

    course_module: z
    .string(),
})
.refine(({ password, confirmPassword }) => password === confirmPassword, {
    message: "As senhas não correspondem!",
    path: ["confirmPassword"]
});