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
    placa: z.string({ required_error: 'Placa é obrigatória'}),
    marca: z.string({ required_error: 'Marca é obrigatória' }),
    modelo: z.string({ required_error: 'Modelo é obrigatório' }),
    tipo: z.string({ required_error: 'Tipo é obrigatório' }),
    ano: z.number({ required_error: 'Ano é obrigatório' }),
    cor: z.string({ required_error: 'Cor é obrigatória' }),
    renavam: z.string({ required_error: 'Renavam é obrigatório' }),
    chassi: z.string({ required_error: 'Chassi é obrigatório' }),
    km: z.number({ required_error: 'Km é obrigatório' }),
    combustivel: z.string({ required_error: 'Combustível é obrigatório' }),
    categoriaCNH: z.string({ required_error: 'Categoria CNH é obrigatória' }),
    status: z.string({ required_error: 'Status é obrigatório' }),
    setorId: z.coerce.number({ required_error: 'Setor é obrigatório', message: 'Setor é obrigatório' }),
});

export type VeiculoForm = z.infer<typeof veiculoSchema>;
