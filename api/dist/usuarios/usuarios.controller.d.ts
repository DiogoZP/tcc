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
        };
        id: number;
        nome: string;
        email: string;
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
    findOne(id: string): Promise<{
        setor: {
            id: number;
            nome: string;
        };
        id: number;
        nome: string;
        email: string;
        setorId: number;
    }>;
    update(id: string, updateUsuarioDto: UpdateUsuarioDto): Promise<{
        setor: {
            id: number;
            nome: string;
        };
        id: number;
        nome: string;
        email: string;
        setorId: number;
    }>;
    remove(id: string): Promise<{
        setor: {
            id: number;
            nome: string;
        };
        id: number;
        nome: string;
        email: string;
        setorId: number;
    }>;
}
