import { UsuariosService } from '@/usuarios/usuarios.service';
import { JwtService } from '@nestjs/jwt';
export declare class AuthService {
    private readonly prisma;
    private readonly jwt;
    constructor(prisma: UsuariosService, jwt: JwtService);
    login(email: string, senha: string): Promise<{
        access_token: string;
    }>;
}
