import { MovimentosService } from './movimentos.service';
import { CreateMovimentoDto } from './dto/create-movimento.dto';
import { UpdateMovimentoDto } from './dto/update-movimento.dto';
export declare class MovimentosController {
    private readonly movimentosService;
    constructor(movimentosService: MovimentosService);
    create(createMovimentoDto: CreateMovimentoDto): Promise<{
        id: number;
        dataSaida: string;
        dataRetorno: string;
        kmSaida: number;
        kmRetorno: number;
        itinerario: string;
        motoristaId: number;
        veiculoId: number;
    }>;
    findAll(): Promise<{
        id: number;
        dataSaida: string;
        dataRetorno: string;
        kmSaida: number;
        kmRetorno: number;
        itinerario: string;
        motoristaId: number;
        veiculoId: number;
    }[]>;
    findOne(id: string): Promise<{
        id: number;
        dataSaida: string;
        dataRetorno: string;
        kmSaida: number;
        kmRetorno: number;
        itinerario: string;
        motoristaId: number;
        veiculoId: number;
    }>;
    update(id: string, updateMovimentoDto: UpdateMovimentoDto): Promise<{
        id: number;
        dataSaida: string;
        dataRetorno: string;
        kmSaida: number;
        kmRetorno: number;
        itinerario: string;
        motoristaId: number;
        veiculoId: number;
    }>;
    remove(id: string): Promise<{
        id: number;
        dataSaida: string;
        dataRetorno: string;
        kmSaida: number;
        kmRetorno: number;
        itinerario: string;
        motoristaId: number;
        veiculoId: number;
    }>;
}
