import { UsuariosService } from './usuarios.service';
import { CreateUsuarioDto } from './dto/create-usuario.dto';
import { UpdateUsuarioDto } from './dto/update-usuario.dto';
export declare class UsuariosController {
    private readonly usuariosService;
    constructor(usuariosService: UsuariosService);
    create(createUsuarioDto: CreateUsuarioDto): Promise<{
        setor: {
            id: number;
            deleted: boolean;
            nome: string;
        };
        setorId: number;
        id: number;
        deleted: boolean;
        nome: string;
        email: string;
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
    findOne(id: string): Promise<{
        setor: {
            id: number;
            deleted: boolean;
            nome: string;
        };
        setorId: number;
        id: number;
        deleted: boolean;
        nome: string;
        email: string;
    }>;
    update(id: string, updateUsuarioDto: UpdateUsuarioDto): Promise<{
        setor: {
            id: number;
            deleted: boolean;
            nome: string;
        };
        setorId: number;
        id: number;
        deleted: boolean;
        nome: string;
        email: string;
    }>;
    remove(id: string): Promise<{
        setor: {
            id: number;
            deleted: boolean;
            nome: string;
        };
        setorId: number;
        id: number;
        deleted: boolean;
        nome: string;
        email: string;
    }>;
}
