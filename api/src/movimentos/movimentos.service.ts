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
        return await this.prisma.movimento.findMany();
    }

    async findOne(id: number) {
        return await this.prisma.movimento.findUnique({
            where: { id },
        });
    }

    async update(id: number, updateMovimentoDto: UpdateMovimentoDto) {
        return await this.prisma.movimento.update({
            where: { id },
            data: updateMovimentoDto,
        });
    }

    async remove(id: number) {
        return await this.prisma.movimento.delete({
            where: { id },
        });
    }
}
