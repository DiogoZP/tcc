import { CreateUsuarioDto } from './dto/create-usuario.dto';
import { UpdateUsuarioDto } from './dto/update-usuario.dto';
import { PrismaService } from '@/database/prisma.service';
export declare class UsuariosService {
    private readonly prisma;
    constructor(prisma: PrismaService);
    create(createUsuarioDto: CreateUsuarioDto): Promise<{
        setor: {
            id: number;
            deleted: boolean;
            nome: string;
        };
    } & {
        setorId: number;
        id: number;
        deleted: boolean;
        nome: string;
        email: string;
        senha: string;
    }>;
    findAll(): Promise<({
        setor: {
            id: number;
            deleted: boolean;
            nome: string;
        };
    } & {
        setorId: number;
        id: number;
        deleted: boolean;
        nome: string;
        email: string;
        senha: string;
    })[]>;
    findOne(params: {
        id?: number;
        email?: string;
    }): Promise<({
        setor: {
            id: number;
            deleted: boolean;
            nome: string;
        };
    } & {
        setorId: number;
        id: number;
        deleted: boolean;
        nome: string;
        email: string;
        senha: string;
    }) | null>;
    update(id: number, updateUsuarioDto: UpdateUsuarioDto): Promise<{
        setor: {
            id: number;
            deleted: boolean;
            nome: string;
        };
    } & {
        setorId: number;
        id: number;
        deleted: boolean;
        nome: string;
        email: string;
        senha: string;
    }>;
    remove(id: number): Promise<{
        setor: {
            id: number;
            deleted: boolean;
            nome: string;
        };
    } & {
        setorId: number;
        id: number;
        deleted: boolean;
        nome: string;
        email: string;
        senha: string;
    }>;
}
