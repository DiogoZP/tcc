import { UsuariosService } from '@/usuarios/usuarios.service';
import { JwtService } from '@nestjs/jwt';
export declare class AuthService {
    private readonly usuarioService;
    private readonly jwt;
    constructor(usuarioService: UsuariosService, jwt: JwtService);
    login(email: string, senha: string): Promise<{
        token: string;
        user: {
            id: number;
            email: string;
            nome: string;
        };
    }>;
}
