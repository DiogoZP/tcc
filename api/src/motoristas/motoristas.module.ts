import { Module } from '@nestjs/common';
import { MotoristasService } from './motoristas.service';
import { MotoristasController } from './motoristas.controller';
import { PrismaService } from 'src/database/prisma.service';

@Module({
    controllers: [MotoristasController],
    providers: [MotoristasService, PrismaService],
})
export class MotoristasModule {}
