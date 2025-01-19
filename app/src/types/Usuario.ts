import z from 'zod';
import { Setor } from './Setor';

export type Usuario = {
    id: number;
    nome: string;
    email: string;
    senha: string;
    setor: Setor;
    setorId: number;
};

export const usuarioSchema = z.object({
    id: z.coerce.number().optional(),
    nome: z.string({ required_error: 'nome é obrigatório' }),
    email: z.string({ required_error: 'email é obrigatório' }),
    senha: z.string({ required_error: 'senha é obrigatório' }),
    setorId: z.coerce.number({ required_error: 'setor é obrigatório' }),
});

export type UsuarioForm = z.infer<typeof usuarioSchema>;
