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
        return await this.prisma.setor.findMany({
            where: {
                deleted: false,
            },
        });
    }

    async findOne(id: number) {
        return await this.prisma.setor.findUnique({
            where: { id, deleted: false },
        });
    }

    async update(id: number, updateSetorDto: UpdateSetorDto) {
        return await this.prisma.setor.update({
            where: { id, deleted: false },
            data: updateSetorDto,
        });
    }

    async remove(id: number) {
        return await this.prisma.setor.update({
            data: {
                deleted: true,
            },
            where: { id, deleted: false },
        });
    }
}
