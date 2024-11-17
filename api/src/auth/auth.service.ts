import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { UsuariosService } from '@/usuarios/usuarios.service';
import { JwtService } from '@nestjs/jwt';
import * as bcrypt from 'bcrypt';

@Injectable()
export class AuthService {
    constructor(
        private readonly prisma: UsuariosService,
        private readonly jwt: JwtService,
    ) {}

    async login(email: string, senha: string) {
        const usuario = await this.prisma.findOne({ email: email });
        if (!usuario) {
            throw new HttpException('Autenticação inválida', HttpStatus.UNAUTHORIZED);
        }

        const senhaValida = await bcrypt.compare(senha, usuario.senha);
        if (!senhaValida) {
            throw new HttpException('Autenticação inválida', HttpStatus.UNAUTHORIZED);
        }

        const payload = { username: usuario.email, sub: usuario.id };
        return {
            access_token: this.jwt.sign(payload),
        };
    }
}
