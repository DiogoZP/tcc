import { UsuariosService } from './usuarios.service';
import { CreateUsuarioDto } from './dto/create-usuario.dto';
import { UpdateUsuarioDto } from './dto/update-usuario.dto';
export declare class UsuariosController {
    private readonly usuariosService;
    constructor(usuariosService: UsuariosService);
    create(createUsuarioDto: CreateUsuarioDto): Promise<{
        setor: {
            id: number;
            nome: string;
            deleted: boolean;
        };
        id: number;
        nome: string;
        email: string;
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
    findOne(id: string): Promise<{
        setor: {
            id: number;
            nome: string;
            deleted: boolean;
        };
        id: number;
        nome: string;
        email: string;
        setorId: number;
        deleted: boolean;
    }>;
    update(id: string, updateUsuarioDto: UpdateUsuarioDto): Promise<{
        setor: {
            id: number;
            nome: string;
            deleted: boolean;
        };
        id: number;
        nome: string;
        email: string;
        setorId: number;
        deleted: boolean;
    }>;
    remove(id: string): Promise<{
        setor: {
            id: number;
            nome: string;
            deleted: boolean;
        };
        id: number;
        nome: string;
        email: string;
        setorId: number;
        deleted: boolean;
    }>;
}
