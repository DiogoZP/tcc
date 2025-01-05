import { CreateVeiculoDto } from './dto/create-veiculo.dto';
import { UpdateVeiculoDto } from './dto/update-veiculo.dto';
import { PrismaService } from '@/database/prisma.service';
export declare class VeiculosService {
    private readonly prisma;
    constructor(prisma: PrismaService);
    create(createVeiculoDto: CreateVeiculoDto): Promise<{
        setor: {
            id: number;
            deleted: boolean;
            nome: string;
        };
        movimentos: {
            id: number;
            deleted: boolean;
            dataSaida: string;
            dataRetorno: string;
            kmSaida: number;
            kmRetorno: number;
            itinerario: string;
            motoristaId: number;
            veiculoId: number;
        }[];
        uploads: {
            id: number;
            deleted: boolean;
            motoristaId: number | null;
            veiculoId: number | null;
            itemId: number | null;
            filename: string;
            mimetype: string;
        }[];
        infracoes: {
            id: number;
            deleted: boolean;
            data: string;
            motoristaId: number;
            veiculoId: number;
            descricao: string;
            valor: number;
        }[];
    } & {
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
        id: number;
        deleted: boolean;
    }>;
    findAll(): Promise<({
        setor: {
            id: number;
            deleted: boolean;
            nome: string;
        };
        movimentos: {
            id: number;
            deleted: boolean;
            dataSaida: string;
            dataRetorno: string;
            kmSaida: number;
            kmRetorno: number;
            itinerario: string;
            motoristaId: number;
            veiculoId: number;
        }[];
        uploads: {
            id: number;
            deleted: boolean;
            motoristaId: number | null;
            veiculoId: number | null;
            itemId: number | null;
            filename: string;
            mimetype: string;
        }[];
        infracoes: {
            id: number;
            deleted: boolean;
            data: string;
            motoristaId: number;
            veiculoId: number;
            descricao: string;
            valor: number;
        }[];
    } & {
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
        id: number;
        deleted: boolean;
    })[]>;
    findOne(id: number): Promise<({
        setor: {
            id: number;
            deleted: boolean;
            nome: string;
        };
        movimentos: {
            id: number;
            deleted: boolean;
            dataSaida: string;
            dataRetorno: string;
            kmSaida: number;
            kmRetorno: number;
            itinerario: string;
            motoristaId: number;
            veiculoId: number;
        }[];
        uploads: {
            id: number;
            deleted: boolean;
            motoristaId: number | null;
            veiculoId: number | null;
            itemId: number | null;
            filename: string;
            mimetype: string;
        }[];
        infracoes: {
            id: number;
            deleted: boolean;
            data: string;
            motoristaId: number;
            veiculoId: number;
            descricao: string;
            valor: number;
        }[];
    } & {
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
        id: number;
        deleted: boolean;
    }) | null>;
    update(id: number, updateVeiculoDto: UpdateVeiculoDto): Promise<{
        setor: {
            id: number;
            deleted: boolean;
            nome: string;
        };
        movimentos: {
            id: number;
            deleted: boolean;
            dataSaida: string;
            dataRetorno: string;
            kmSaida: number;
            kmRetorno: number;
            itinerario: string;
            motoristaId: number;
            veiculoId: number;
        }[];
        uploads: {
            id: number;
            deleted: boolean;
            motoristaId: number | null;
            veiculoId: number | null;
            itemId: number | null;
            filename: string;
            mimetype: string;
        }[];
        infracoes: {
            id: number;
            deleted: boolean;
            data: string;
            motoristaId: number;
            veiculoId: number;
            descricao: string;
            valor: number;
        }[];
    } & {
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
        id: number;
        deleted: boolean;
    }>;
    remove(id: number): Promise<{
        setor: {
            id: number;
            deleted: boolean;
            nome: string;
        };
        movimentos: {
            id: number;
            deleted: boolean;
            dataSaida: string;
            dataRetorno: string;
            kmSaida: number;
            kmRetorno: number;
            itinerario: string;
            motoristaId: number;
            veiculoId: number;
        }[];
        uploads: {
            id: number;
            deleted: boolean;
            motoristaId: number | null;
            veiculoId: number | null;
            itemId: number | null;
            filename: string;
            mimetype: string;
        }[];
        infracoes: {
            id: number;
            deleted: boolean;
            data: string;
            motoristaId: number;
            veiculoId: number;
            descricao: string;
            valor: number;
        }[];
    } & {
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
        id: number;
        deleted: boolean;
    }>;
}
