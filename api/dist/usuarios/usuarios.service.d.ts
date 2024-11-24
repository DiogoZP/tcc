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
            deleted: boolean;
        };
    } & {
        id: number;
        nome: string;
        email: string;
        senha: string;
        setorId: number;
        deleted: boolean;
    }>;
    findAll(): Promise<({
        setor: {
            id: number;
            nome: string;
            deleted: boolean;
        };
    } & {
        id: number;
        nome: string;
        email: string;
        senha: string;
        setorId: number;
        deleted: boolean;
    })[]>;
    findOne(params: {
        id?: number;
        email?: string;
    }): Promise<({
        setor: {
            id: number;
            nome: string;
            deleted: boolean;
        };
    } & {
        id: number;
        nome: string;
        email: string;
        senha: string;
        setorId: number;
        deleted: boolean;
    }) | null>;
    update(id: number, updateUsuarioDto: UpdateUsuarioDto): Promise<{
        setor: {
            id: number;
            nome: string;
            deleted: boolean;
        };
    } & {
        id: number;
        nome: string;
        email: string;
        senha: string;
        setorId: number;
        deleted: boolean;
    }>;
    remove(id: number): Promise<{
        setor: {
            id: number;
            nome: string;
            deleted: boolean;
        };
    } & {
        id: number;
        nome: string;
        email: string;
        senha: string;
        setorId: number;
        deleted: boolean;
    }>;
}
