import { Injectable } from '@nestjs/common';
import { CreateMotoristaDto } from './dto/create-motorista.dto';
import { UpdateMotoristaDto } from './dto/update-motorista.dto';
import { PrismaService } from 'src/database/prisma.service';

@Injectable()
export class MotoristasService {
    constructor(private readonly prisma: PrismaService) {}

    async create(createMotoristaDto: CreateMotoristaDto) {
        return await this.prisma.motorista.create({
            data: createMotoristaDto,
        });
    }

    async findAll() {
        return await this.prisma.motorista.findMany();
    }

    async findOne(id: number) {
        return await this.prisma.motorista.findUnique({
            where: { id },
        });
    }

    async update(id: number, updateMotoristaDto: UpdateMotoristaDto) {
        return await this.prisma.motorista.update({
            where: { id },
            data: updateMotoristaDto,
        });
    }

    async remove(id: number) {
        return await this.prisma.motorista.delete({
            where: { id },
        });
    }
}
