import { Injectable } from '@nestjs/common';
import { CreateMovimentoDto } from './dto/create-movimento.dto';
import { UpdateMovimentoDto } from './dto/update-movimento.dto';
import { PrismaService } from '@/database/prisma.service';

@Injectable()
export class MovimentosService {
    constructor(private readonly prisma: PrismaService) {}

    async create(createMovimentoDto: CreateMovimentoDto) {
        return await this.prisma.movimento.create({
            data: createMovimentoDto,
        });
    }

    async findAll() {
        return await this.prisma.movimento.findMany({
            include: {
                veiculo: true,
                motorista: true,
            },
            where: {
                deleted: false,
            },
        });
    }

    async findOne(id: number) {
        return await this.prisma.movimento.findUnique({
            include: {
                veiculo: true,
                motorista: true,
            },
            where: { id, deleted: false },
        });
    }

    async update(id: number, updateMovimentoDto: UpdateMovimentoDto) {
        return await this.prisma.movimento.update({
            include: {
                veiculo: true,
                motorista: true,
            },
            where: { id, deleted: false },
            data: updateMovimentoDto,
        });
    }

    async remove(id: number) {
        return await this.prisma.movimento.update({
            data: {
                deleted: true,
            },
            include: {
                veiculo: true,
                motorista: true,
            },
            where: { id, deleted: false },
        });
    }
}
