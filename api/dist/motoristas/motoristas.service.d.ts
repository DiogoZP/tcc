import { CreateMotoristaDto } from './dto/create-motorista.dto';
import { UpdateMotoristaDto } from './dto/update-motorista.dto';
import { PrismaService } from '@/database/prisma.service';
export declare class MotoristasService {
    private readonly prisma;
    constructor(prisma: PrismaService);
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
    findOne(id: number): Promise<{
        id: number;
        nome: string;
        cpf: string;
        rg: string;
        categoriaCNH: string;
        numeroCNH: string;
        validadeCNH: string;
        telefone: string;
        setorId: number;
    } | null>;
    update(id: number, updateMotoristaDto: UpdateMotoristaDto): Promise<{
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
    remove(id: number): Promise<{
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
