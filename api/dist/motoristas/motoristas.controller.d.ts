import { MotoristasService } from './motoristas.service';
import { CreateMotoristaDto } from './dto/create-motorista.dto';
import { UpdateMotoristaDto } from './dto/update-motorista.dto';
export declare class MotoristasController {
    private readonly motoristasService;
    constructor(motoristasService: MotoristasService);
    create(createMotoristaDto: CreateMotoristaDto): Promise<{
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
    findAll(): Promise<{
        id: number;
        nome: string;
        cpf: string;
        rg: string;
        categoriaCNH: string;
        numeroCNH: string;
        validadeCNH: string;
        telefone: string;
        setorId: number;
    }[]>;
    findOne(id: string): Promise<{
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
