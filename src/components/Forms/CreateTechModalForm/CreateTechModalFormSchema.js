import { z } from "zod";

export const CreateTechModalFormSchema = z.object({
    title: z
        .string()
        .min(1, "Campo Obrigatório!"),

    status: z
        .string(),
});