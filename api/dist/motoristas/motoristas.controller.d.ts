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
        }[];
        uploads: {
            id: number;
            filename: string;
            mimetype: string;
            motoristaId: number | null;
            veiculoId: number | null;
            itemId: number | null;
        }[];
        infracoes: {
            id: number;
            data: string;
            descricao: string;
            valor: number;
            motoristaId: number;
            veiculoId: number;
        }[];
    } & {
        id: number;
        nome: string;
        cpf: string;
        rg: string;
        categoriaCNH: string;
        numeroCNH: string;
        validadeCNH: string;
        telefone: string;
        setorId: number;
    }>;
    findAll(): Promise<({
        setor: {
            id: number;
            nome: string;
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
        }[];
        uploads: {
            id: number;
            filename: string;
            mimetype: string;
            motoristaId: number | null;
            veiculoId: number | null;
            itemId: number | null;
        }[];
        infracoes: {
            id: number;
            data: string;
            descricao: string;
            valor: number;
            motoristaId: number;
            veiculoId: number;
        }[];
    } & {
        id: number;
        nome: string;
        cpf: string;
        rg: string;
        categoriaCNH: string;
        numeroCNH: string;
        validadeCNH: string;
        telefone: string;
        setorId: number;
    })[]>;
    findOne(id: string): Promise<{
        setor: {
            id: number;
            nome: string;
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
        }[];
        uploads: {
            id: number;
            filename: string;
            mimetype: string;
            motoristaId: number | null;
            veiculoId: number | null;
            itemId: number | null;
        }[];
        infracoes: {
            id: number;
            data: string;
            descricao: string;
            valor: number;
            motoristaId: number;
            veiculoId: number;
        }[];
    } & {
        id: number;
        nome: string;
        cpf: string;
        rg: string;
        categoriaCNH: string;
        numeroCNH: string;
        validadeCNH: string;
        telefone: string;
        setorId: number;
    }>;
    update(id: string, updateMotoristaDto: UpdateMotoristaDto): Promise<{
        setor: {
            id: number;
            nome: string;
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
        }[];
        uploads: {
            id: number;
            filename: string;
            mimetype: string;
            motoristaId: number | null;
            veiculoId: number | null;
            itemId: number | null;
        }[];
        infracoes: {
            id: number;
            data: string;
            descricao: string;
            valor: number;
            motoristaId: number;
            veiculoId: number;
        }[];
    } & {
        id: number;
        nome: string;
        cpf: string;
        rg: string;
        categoriaCNH: string;
        numeroCNH: string;
        validadeCNH: string;
        telefone: string;
        setorId: number;
    }>;
    remove(id: string): Promise<{
        setor: {
            id: number;
            nome: string;
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
        }[];
        uploads: {
            id: number;
            filename: string;
            mimetype: string;
            motoristaId: number | null;
            veiculoId: number | null;
            itemId: number | null;
        }[];
        infracoes: {
            id: number;
            data: string;
            descricao: string;
            valor: number;
            motoristaId: number;
            veiculoId: number;
        }[];
    } & {
        id: number;
        nome: string;
        cpf: string;
        rg: string;
        categoriaCNH: string;
        numeroCNH: string;
        validadeCNH: string;
        telefone: string;
        setorId: number;
    }>;
}
