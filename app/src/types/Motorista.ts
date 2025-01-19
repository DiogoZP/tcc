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
    validadeCNH: Date;
    telefone: string;
    endereco: string;
    setor: Setor;
    setorId: number;
    movimentos: Movimento[];
    uploads: Upload[];
    infracoes: Infracao[];
};

export const motoristaSchema = z.object({
    id: z.coerce.number().optional(),
    nome: z.string({ required_error: 'nome é obrigatório' }),
    cpf: z.string({ required_error: 'cpf é obrigatório' }),
    rg: z.string({ required_error: 'rg é obrigatório' }),
    categoriaCNH: z.string({ required_error: 'categoria da CNH é obrigatório' }),
    numeroCNH: z.string({ required_error: 'numero da CNH é obrigatório' }),
    validadeCNH: z.date({ required_error: 'validade da CNH é obrigatório' }),
    telefone: z.string({ required_error: 'telefone é obrigatório' }),
    endereco: z.string({ required_error: 'endereço é obrigatório' }),
    setorId: z.coerce.number({ required_error: 'setor é obrigatório', message: 'Setor é obrigatório' }),
});

export type MotoristaForm = z.infer<typeof motoristaSchema>;
