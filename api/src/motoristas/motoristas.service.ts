import { Injectable } from '@nestjs/common';
import { CreateMotoristaDto } from './dto/create-motorista.dto';
import { UpdateMotoristaDto } from './dto/update-motorista.dto';
import { PrismaService } from '@/database/prisma.service';

@Injectable()
export class MotoristasService {
    constructor(private readonly prisma: PrismaService) {}

    async create(createMotoristaDto: CreateMotoristaDto) {
        return await this.prisma.motorista.create({
            include: {
                setor: true,
                movimentos: true,
                uploads: true,
                infracoes: true,
            },
            data: createMotoristaDto,
        });
    }

    async findAll() {
        return await this.prisma.motorista.findMany({
            include: {
                setor: true,
                movimentos: true,
                uploads: true,
                infracoes: true,
            },
            where: {
                deleted: false,
            },
        });
    }

    async findOne(id: number) {
        return await this.prisma.motorista.findUnique({
            include: {
                setor: true,
                movimentos: true,
                uploads: true,
                infracoes: true,
            },
            where: { id, deleted: false },
        });
    }

    async update(id: number, updateMotoristaDto: UpdateMotoristaDto) {
        return await this.prisma.motorista.update({
            include: {
                setor: true,
                movimentos: true,
                uploads: true,
                infracoes: true,
            },
            where: { id, deleted: false },
            data: updateMotoristaDto,
        });
    }

    async remove(id: number) {
        return await this.prisma.motorista.update({
            data: {
                deleted: true,
            },
            include: {
                setor: true,
                movimentos: true,
                uploads: true,
                infracoes: true,
            },
            where: { id, deleted: false },
        });
    }
}
