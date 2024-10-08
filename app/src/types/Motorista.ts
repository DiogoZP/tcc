import { Movimento } from './Movimento';
import { Upload } from './Upload';
import { Infracao } from './Infracao';
import { Setor } from './Setor';
import z from 'zod';

export type Motorista = {
    id: number;
    nome: string;
    cpf: string;
    rg: string;
    categoriaCNH: string;
    numeroCNH: string;
    validadeCNH: string;
    telefone: string;
    setor: Setor;
    setorId: number;
    movimentos: Movimento[];
    uploads: Upload[];
    infracoes: Infracao[];
};

export const motoristaSchema = z.object({
    id: z.coerce.number().optional(),
    nome: z.string(),
    cpf: z.string(),
    rg: z.string(),
    categoriaCNH: z.string(),
    numeroCNH: z.string(),
    validadeCNH: z.string(),
    telefone: z.string(),
    setorId: z.coerce.number(),
});

export type MotoristaForm = z.infer<typeof motoristaSchema>;
