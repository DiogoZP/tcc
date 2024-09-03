import { Injectable } from '@nestjs/common';
import { CreateSetorDto } from './dto/create-setor.dto';
import { UpdateSetorDto } from './dto/update-setor.dto';
import { PrismaService } from '@/database/prisma.service';

@Injectable()
export class SetoresService {
    constructor(private readonly prisma: PrismaService) {}

    async create(createSetorDto: CreateSetorDto) {
        return await this.prisma.setor.create({
            data: createSetorDto,
        });
    }

    async findAll() {
        return await this.prisma.setor.findMany();
    }

    async findOne(id: number) {
        return await this.prisma.setor.findUnique({
            where: { id },
        });
    }

    async update(id: number, updateSetorDto: UpdateSetorDto) {
        return await this.prisma.setor.update({
            where: { id },
            data: updateSetorDto,
        });
    }

    async remove(id: number) {
        return await this.prisma.setor.delete({
            where: { id },
        });
    }
}
