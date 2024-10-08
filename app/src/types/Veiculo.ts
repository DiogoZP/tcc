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
    placa: z.string(),
    marca: z.string(),
    modelo: z.string(),
    tipo: z.string(),
    ano: z.number(),
    cor: z.string(),
    renavam: z.string(),
    chassi: z.string(),
    km: z.number(),
    combustivel: z.string(),
    categoriaCNH: z.string(),
    status: z.string(),
    setorId: z.coerce.number(),
});

export type VeiculoForm = z.infer<typeof veiculoSchema>;
