import { Module } from '@nestjs/common';
import { MovimentosService } from './movimentos.service';
import { MovimentosController } from './movimentos.controller';
import { PrismaService } from '@/database/prisma.service';

@Module({
    controllers: [MovimentosController],
    providers: [MovimentosService, PrismaService],
})
export class MovimentosModule {}
