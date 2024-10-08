import { Module } from '@nestjs/common';
import { VeiculosService } from './veiculos.service';
import { VeiculosController } from './veiculos.controller';
import { PrismaService } from '@/database/prisma.service';

@Module({
    controllers: [VeiculosController],
    providers: [VeiculosService, PrismaService],
})
export class VeiculosModule {}
