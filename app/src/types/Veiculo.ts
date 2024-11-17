import { Movimento } from './Movimento';
import { Upload } from './Upload';
import { Solicitacao } from './Solicitacao';
import { Infracao } from './Infracao';
import { Setor } from './Setor';
import z from 'zod';

export type Veiculo = {
    id: number;
    placa: string;
    marca: string;
    modelo: string;
    tipo: string;
    ano: number;
    cor: string;
    renavam: string;
    chassi: string;
    km: number;
    combustivel: string;
    categoriaCNH: string;
    status: string;
    setor: Setor;
    setorId: number;
    movimentos: Movimento[];
    uploads: Upload[];
    solicitacoes: Solicitacao[];
    infracoes: Infracao[];
};

export const veiculoSchema = z.object({
    id: z.coerce.number().optional(),
    placa: z.string({ required_error: 'Placa é obrigatória'}).min(1, { message: 'Placa deve ter no mínimo 1 caractere' }).max(8, { message: 'Placa deve ter no máximo 8 caracteres' }),
    marca: z.string({ required_error: 'Marca é obrigatória' }).min(1, { message: 'Marca deve ter no mínimo 1 caractere' }).max(50, { message: 'Marca deve ter no máximo 50 caracteres' }),
    modelo: z.string({ required_error: 'Modelo é obrigatório' }).min(1, { message: 'Modelo deve ter no mínimo 1 caractere' }).max(50, { message: 'Modelo deve ter no máximo 50 caracteres' }),
    tipo: z.string({ required_error: 'Tipo é obrigatório' }).min(1, { message: 'Tipo deve ter no mínimo 1 caractere' }).max(50, { message: 'Tipo deve ter no máximo 50 caracteres' }),
    ano: z.number({ required_error: 'Ano é obrigatório' }).min(1900, { message: 'Ano deve ser maior que 1900' }).max(3000, { message: 'Ano deve ser menor que 3000' }),
    cor: z.string({ required_error: 'Cor é obrigatória' }).min(1, { message: 'Cor deve ter no mínimo 1 caractere' }).max(50, { message: 'Cor deve ter no máximo 50 caracteres' }),
    renavam: z.string({ required_error: 'Renavam é obrigatório' }).min(1, { message: 'Renavam deve ter no mínimo 1 caractere' }).max(50, { message: 'Renavam deve ter no máximo 50 caracteres' }),
    chassi: z.string({ required_error: 'Chassi é obrigatório' }).min(1, { message: 'Chassi deve ter no mínimo 1 caractere' }).max(50, { message: 'Chassi deve ter no máximo 50 caracteres' }),
    km: z.number({ required_error: 'Km é obrigatório' }).min(0, { message: 'Km deve ser maior ou igual a 0' }),
    combustivel: z.string({ required_error: 'Combustível é obrigatório' }).min(1, { message: 'Combustível deve ter no mínimo 1 caractere' }).max(50, { message: 'Combustível deve ter no máximo 50 caracteres' }),
    categoriaCNH: z.string({ required_error: 'Categoria CNH é obrigatória' }).min(1, { message: 'Categoria CNH deve ter no mínimo 1 caractere' }).max(50, { message: 'Categoria CNH deve ter no máximo 50 caracteres' }),
    status: z.string({ required_error: 'Status é obrigatório' }).min(1, { message: 'Status deve ter no mínimo 1 caractere' }).max(50, { message: 'Status deve ter no máximo 50 caracteres' }),
    setorId: z.coerce.number({ required_error: 'Setor é obrigatório', message: 'Setor é obrigatório' }),
});

export type VeiculoForm = z.infer<typeof veiculoSchema>;
