import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { UsuariosService } from '@/usuarios/usuarios.service';
import { JwtService } from '@nestjs/jwt';
import * as bcrypt from 'bcrypt';

@Injectable()
export class AuthService {
    constructor(
        private readonly usuarioService: UsuariosService,
        private readonly jwt: JwtService,
    ) {}

    async login(email: string, senha: string) {
        const usuario = await this.usuarioService.findOne({ email: email });
        if (!usuario) {
            throw new HttpException('Autenticação inválida', HttpStatus.UNAUTHORIZED);
        }

        const senhaValida = await bcrypt.compare(senha, usuario.senha);
        if (!senhaValida) {
            throw new HttpException('Autenticação inválida', HttpStatus.UNAUTHORIZED);
        }

        const user = { id: usuario.id, email: usuario.email, nome: usuario.nome };
        return { token: this.jwt.sign(user), user };
    }
}
