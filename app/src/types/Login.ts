import z from 'zod';

export const loginSchema = z.object({
    email: z.string(),
    senha: z.string(),
});

export type LoginForm = z.infer<typeof loginSchema>;