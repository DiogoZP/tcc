import { CreateMotoristaDto } from './dto/create-motorista.dto';
import { UpdateMotoristaDto } from './dto/update-motorista.dto';
import { PrismaService } from '@/database/prisma.service';
export declare class MotoristasService {
    private readonly prisma;
    constructor(prisma: PrismaService);
    create(createMotoristaDto: CreateMotoristaDto): Promise<{
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
        nome: string;
        cpf: string;
        rg: string;
        categoriaCNH: string;
        numeroCNH: string;
        validadeCNH: Date;
        telefone: string;
        endereco: string;
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
        nome: string;
        cpf: string;
        rg: string;
        categoriaCNH: string;
        numeroCNH: string;
        validadeCNH: Date;
        telefone: string;
        endereco: string;
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
        nome: string;
        cpf: string;
        rg: string;
        categoriaCNH: string;
        numeroCNH: string;
        validadeCNH: Date;
        telefone: string;
        endereco: string;
        setorId: number;
        deleted: boolean;
    }) | null>;
    update(id: number, updateMotoristaDto: UpdateMotoristaDto): Promise<{
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
        nome: string;
        cpf: string;
        rg: string;
        categoriaCNH: string;
        numeroCNH: string;
        validadeCNH: Date;
        telefone: string;
        endereco: string;
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
        nome: string;
        cpf: string;
        rg: string;
        categoriaCNH: string;
        numeroCNH: string;
        validadeCNH: Date;
        telefone: string;
        endereco: string;
        setorId: number;
        deleted: boolean;
    }>;
}
