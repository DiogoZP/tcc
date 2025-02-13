import { Injectable } from '@nestjs/common';
import { CreateVeiculoDto } from './dto/create-veiculo.dto';
import { UpdateVeiculoDto } from './dto/update-veiculo.dto';
import { PrismaService } from '@/database/prisma.service';

@Injectable()
export class VeiculosService {
    constructor(private readonly prisma: PrismaService) {}

    async create(createVeiculoDto: CreateVeiculoDto) {
        return await this.prisma.veiculo.create({
            include: {
                setor: true,
                movimentos: true,
                uploads: true,
                infracoes: true,
            },
            data: createVeiculoDto,
        });
    }

    async findAll() {
        return await this.prisma.veiculo.findMany({
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
        return await this.prisma.veiculo.findUnique({
            include: {
                setor: true,
                movimentos: true,
                uploads: true,
                infracoes: true,
            },
            where: { id, deleted: false },
        });
    }

    async update(id: number, updateVeiculoDto: UpdateVeiculoDto) {
        return await this.prisma.veiculo.update({
            include: {
                setor: true,
                movimentos: true,
                uploads: true,
                infracoes: true,
            },
            where: { id, deleted: false },
            data: updateVeiculoDto,
        });
    }

    async remove(id: number) {
        return await this.prisma.veiculo.update({
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
