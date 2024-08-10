import { CreateMovimentoDto } from './dto/create-movimento.dto';
import { UpdateMovimentoDto } from './dto/update-movimento.dto';
import { PrismaService } from 'src/database/prisma.service';
export declare class MovimentosService {
    private readonly prisma;
    constructor(prisma: PrismaService);
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
    findOne(id: number): Promise<{
        id: number;
        dataSaida: string;
        dataRetorno: string;
        kmSaida: number;
        kmRetorno: number;
        itinerario: string;
        motoristaId: number;
        veiculoId: number;
    } | null>;
    update(id: number, updateMovimentoDto: UpdateMovimentoDto): Promise<{
        id: number;
        dataSaida: string;
        dataRetorno: string;
        kmSaida: number;
        kmRetorno: number;
        itinerario: string;
        motoristaId: number;
        veiculoId: number;
    }>;
    remove(id: number): Promise<{
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
