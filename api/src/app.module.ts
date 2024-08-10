import { Module } from '@nestjs/common';
import { VeiculosModule } from './veiculos/veiculos.module';
import { MotoristasModule } from './motoristas/motoristas.module';
import { MovimentosModule } from './movimentos/movimentos.module';
import { UploadsModule } from './uploads/uploads.module';
import { SetoresModule } from './setores/setores.module';

@Module({
    imports: [VeiculosModule, MotoristasModule, MovimentosModule, UploadsModule, SetoresModule],
    controllers: [],
    providers: [],
})
export class AppModule {}
