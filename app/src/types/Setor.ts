import z from 'zod';
import { Veiculo } from './Veiculo';
import { Motorista } from './Motorista';

export type Setor = {
    id: number;
    nome: string;
    veiculos: Veiculo[];
    motoristas: Motorista[];
}

export const setorSchema = z.object({
    id: z.coerce.number().optional(),
    nome: z.string({ required_error: 'Nome é obrigatório' }),
});

export type SetorForm = z.infer<typeof setorSchema>;

