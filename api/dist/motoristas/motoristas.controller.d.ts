import { MotoristasService } from './motoristas.service';
import { CreateMotoristaDto } from './dto/create-motorista.dto';
import { UpdateMotoristaDto } from './dto/update-motorista.dto';
export declare class MotoristasController {
    private readonly motoristasService;
    constructor(motoristasService: MotoristasService);
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
    findOne(id: string): Promise<{
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
    update(id: string, updateMotoristaDto: UpdateMotoristaDto): Promise<{
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
    remove(id: string): Promise<{
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
