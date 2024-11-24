import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthController } from './auth.controller';
import { PassportModule } from '@nestjs/passport';
import { UsuariosService } from '@/usuarios/usuarios.service';
import { JwtModule } from '@nestjs/jwt';
import { PrismaService } from '@/database/prisma.service';
import { JwtStrategy } from './jwt.strategy';

@Module({
    imports: [
        PassportModule,
        JwtModule.register({
            secret: process.env.JWT_SECRET,
            signOptions: { expiresIn: '3h' },
        }),
    ],
    controllers: [AuthController],
    providers: [AuthService, UsuariosService, PrismaService, JwtStrategy],
})
export class AuthModule {}
