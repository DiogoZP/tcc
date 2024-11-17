import { Module } from '@nestjs/common';
import { VeiculosModule } from './veiculos/veiculos.module';
import { MotoristasModule } from './motoristas/motoristas.module';
import { MovimentosModule } from './movimentos/movimentos.module';
import { UploadsModule } from './uploads/uploads.module';
import { SetoresModule } from './setores/setores.module';
import { AuthModule } from './auth/auth.module';
import { UsuariosModule } from './usuarios/usuarios.module';
import { ConfigModule } from '@nestjs/config';
import { JwtAuthGuard } from './auth/jwt-auth.guard';
import { APP_GUARD } from '@nestjs/core';

@Module({
    imports: [
        VeiculosModule,
        MotoristasModule,
        MovimentosModule,
        UploadsModule,
        SetoresModule,
        AuthModule,
        UsuariosModule,
        ConfigModule.forRoot(),
    ],
    controllers: [],
    providers: [{ provide: APP_GUARD, useClass: JwtAuthGuard }],
})
export class AppModule {}
