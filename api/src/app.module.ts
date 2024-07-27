import { Module } from '@nestjs/common';
import { VeiculosModule } from './veiculos/veiculos.module';
import { MotoristasModule } from './motoristas/motoristas.module';
import { MovimentosModule } from './movimentos/movimentos.module';

@Module({
    imports: [VeiculosModule, MotoristasModule, MovimentosModule],
    controllers: [],
    providers: [],
})
export class AppModule {}
