import { MotoristasService } from './motoristas.service';
import { CreateMotoristaDto } from './dto/create-motorista.dto';
import { UpdateMotoristaDto } from './dto/update-motorista.dto';
export declare class MotoristasController {
    private readonly motoristasService;
    constructor(motoristasService: MotoristasService);
    create(createMotoristaDto: CreateMotoristaDto): Promise<{
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
        categoriaCNH: string;
        setorId: number;
        id: number;
        deleted: boolean;
        nome: string;
        cpf: string;
        rg: string;
        numeroCNH: string;
        validadeCNH: Date;
        telefone: string;
        endereco: string;
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
        categoriaCNH: string;
        setorId: number;
        id: number;
        deleted: boolean;
        nome: string;
        cpf: string;
        rg: string;
        numeroCNH: string;
        validadeCNH: Date;
        telefone: string;
        endereco: string;
    })[]>;
    findOne(id: string): Promise<{
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
        categoriaCNH: string;
        setorId: number;
        id: number;
        deleted: boolean;
        nome: string;
        cpf: string;
        rg: string;
        numeroCNH: string;
        validadeCNH: Date;
        telefone: string;
        endereco: string;
    }>;
    update(id: string, updateMotoristaDto: UpdateMotoristaDto): Promise<{
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
        categoriaCNH: string;
        setorId: number;
        id: number;
        deleted: boolean;
        nome: string;
        cpf: string;
        rg: string;
        numeroCNH: string;
        validadeCNH: Date;
        telefone: string;
        endereco: string;
    }>;
    remove(id: string): Promise<{
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
        categoriaCNH: string;
        setorId: number;
        id: number;
        deleted: boolean;
        nome: string;
        cpf: string;
        rg: string;
        numeroCNH: string;
        validadeCNH: Date;
        telefone: string;
        endereco: string;
    }>;
}
