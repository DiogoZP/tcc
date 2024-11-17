import { CreateUsuarioDto } from './dto/create-usuario.dto';
import { UpdateUsuarioDto } from './dto/update-usuario.dto';
import { PrismaService } from '@/database/prisma.service';
export declare class UsuariosService {
    private readonly prisma;
    constructor(prisma: PrismaService);
    create(createUsuarioDto: CreateUsuarioDto): Promise<{
        setor: {
            id: number;
            nome: string;
        };
    } & {
        id: number;
        nome: string;
        email: string;
        senha: string;
        setorId: number;
    }>;
    findAll(): Promise<({
        setor: {
            id: number;
            nome: string;
        };
    } & {
        id: number;
        nome: string;
        email: string;
        senha: string;
        setorId: number;
    })[]>;
    findOne(params: {
        id?: number;
        email?: string;
    }): Promise<({
        setor: {
            id: number;
            nome: string;
        };
    } & {
        id: number;
        nome: string;
        email: string;
        senha: string;
        setorId: number;
    }) | null>;
    update(id: number, updateUsuarioDto: UpdateUsuarioDto): Promise<{
        setor: {
            id: number;
            nome: string;
        };
    } & {
        id: number;
        nome: string;
        email: string;
        senha: string;
        setorId: number;
    }>;
    remove(id: number): Promise<{
        setor: {
            id: number;
            nome: string;
        };
    } & {
        id: number;
        nome: string;
        email: string;
        senha: string;
        setorId: number;
    }>;
}
