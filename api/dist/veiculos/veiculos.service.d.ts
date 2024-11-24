import { CreateVeiculoDto } from './dto/create-veiculo.dto';
import { UpdateVeiculoDto } from './dto/update-veiculo.dto';
import { PrismaService } from '@/database/prisma.service';
export declare class VeiculosService {
    private readonly prisma;
    constructor(prisma: PrismaService);
    create(createVeiculoDto: CreateVeiculoDto): Promise<{
        setor: {
            id: number;
            nome: string;
            deleted: boolean;
        };
        movimentos: {
            id: number;
            dataSaida: string;
            dataRetorno: string;
            kmSaida: number;
            kmRetorno: number;
            itinerario: string;
            motoristaId: number;
            veiculoId: number;
            deleted: boolean;
        }[];
        uploads: {
            id: number;
            filename: string;
            mimetype: string;
            motoristaId: number | null;
            veiculoId: number | null;
            itemId: number | null;
            deleted: boolean;
        }[];
        infracoes: {
            id: number;
            data: string;
            descricao: string;
            valor: number;
            motoristaId: number;
            veiculoId: number;
            deleted: boolean;
        }[];
    } & {
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
        setorId: number;
        deleted: boolean;
    }>;
    findAll(): Promise<({
        setor: {
            id: number;
            nome: string;
            deleted: boolean;
        };
        movimentos: {
            id: number;
            dataSaida: string;
            dataRetorno: string;
            kmSaida: number;
            kmRetorno: number;
            itinerario: string;
            motoristaId: number;
            veiculoId: number;
            deleted: boolean;
        }[];
        uploads: {
            id: number;
            filename: string;
            mimetype: string;
            motoristaId: number | null;
            veiculoId: number | null;
            itemId: number | null;
            deleted: boolean;
        }[];
        infracoes: {
            id: number;
            data: string;
            descricao: string;
            valor: number;
            motoristaId: number;
            veiculoId: number;
            deleted: boolean;
        }[];
    } & {
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
        setorId: number;
        deleted: boolean;
    })[]>;
    findOne(id: number): Promise<({
        setor: {
            id: number;
            nome: string;
            deleted: boolean;
        };
        movimentos: {
            id: number;
            dataSaida: string;
            dataRetorno: string;
            kmSaida: number;
            kmRetorno: number;
            itinerario: string;
            motoristaId: number;
            veiculoId: number;
            deleted: boolean;
        }[];
        uploads: {
            id: number;
            filename: string;
            mimetype: string;
            motoristaId: number | null;
            veiculoId: number | null;
            itemId: number | null;
            deleted: boolean;
        }[];
        infracoes: {
            id: number;
            data: string;
            descricao: string;
            valor: number;
            motoristaId: number;
            veiculoId: number;
            deleted: boolean;
        }[];
    } & {
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
        setorId: number;
        deleted: boolean;
    }) | null>;
    update(id: number, updateVeiculoDto: UpdateVeiculoDto): Promise<{
        setor: {
            id: number;
            nome: string;
            deleted: boolean;
        };
        movimentos: {
            id: number;
            dataSaida: string;
            dataRetorno: string;
            kmSaida: number;
            kmRetorno: number;
            itinerario: string;
            motoristaId: number;
            veiculoId: number;
            deleted: boolean;
        }[];
        uploads: {
            id: number;
            filename: string;
            mimetype: string;
            motoristaId: number | null;
            veiculoId: number | null;
            itemId: number | null;
            deleted: boolean;
        }[];
        infracoes: {
            id: number;
            data: string;
            descricao: string;
            valor: number;
            motoristaId: number;
            veiculoId: number;
            deleted: boolean;
        }[];
    } & {
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
        setorId: number;
        deleted: boolean;
    }>;
    remove(id: number): Promise<{
        setor: {
            id: number;
            nome: string;
            deleted: boolean;
        };
        movimentos: {
            id: number;
            dataSaida: string;
            dataRetorno: string;
            kmSaida: number;
            kmRetorno: number;
            itinerario: string;
            motoristaId: number;
            veiculoId: number;
            deleted: boolean;
        }[];
        uploads: {
            id: number;
            filename: string;
            mimetype: string;
            motoristaId: number | null;
            veiculoId: number | null;
            itemId: number | null;
            deleted: boolean;
        }[];
        infracoes: {
            id: number;
            data: string;
            descricao: string;
            valor: number;
            motoristaId: number;
            veiculoId: number;
            deleted: boolean;
        }[];
    } & {
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
        setorId: number;
        deleted: boolean;
    }>;
}
