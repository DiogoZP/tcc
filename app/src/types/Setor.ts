import { Veiculo } from './Veiculo';
import { Motorista } from './Motorista';

type Setor = {
    id: number;
    nome: string;
    veiculos: Veiculo[];
    motoristas: Motorista[];
}

export { type Setor };