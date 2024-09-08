import { Injectable } from '@nestjs/common';
import { CreateVeiculoDto } from './dto/create-veiculo.dto';
import { UpdateVeiculoDto } from './dto/update-veiculo.dto';
import { PrismaService } from '@/database/prisma.service';

@Injectable()
export class VeiculosService {
    constructor(private readonly prisma: PrismaService) {}

    async create(createVeiculoDto: CreateVeiculoDto) {
        return await this.prisma.veiculo.create({
            data: createVeiculoDto,
        });
    }

    async findAll() {
        return await this.prisma.veiculo.findMany({
            include: {
                setor: true,
            },
        });
    }

    async findOne(id: number) {
        return await this.prisma.veiculo.findUnique({
            where: { id },
        });
    }

    async update(id: number, updateVeiculoDto: UpdateVeiculoDto) {
        return await this.prisma.veiculo.update({
            where: { id },
            data: updateVeiculoDto,
        });
    }

    async remove(id: number) {
        return await this.prisma.veiculo.delete({
            where: { id },
        });
    }
}
