import { Injectable } from '@nestjs/common';
import { CreateUploadDto } from './dto/create-upload.dto';
import { UpdateUploadDto } from './dto/update-upload.dto';
import { PrismaService } from 'src/database/prisma.service';

@Injectable()
export class UploadsService {
    constructor(private readonly prisma: PrismaService) {}

    async create(createUploadDto: CreateUploadDto, filename: string, mimetype: string) {
        return await this.prisma.upload.create({
            data: {
                ...createUploadDto,
                filename,
                mimetype,
            },
        });
    }

    async findAll() {
        return await this.prisma.upload.findMany();
    }

    async findOne(id: number) {
        return await this.prisma.upload.findUnique({
            where: { id },
        });
    }

    async update(
        id: number,
        updateUploadDto: UpdateUploadDto,
        filename?: string,
        mimetype?: string,
    ) {
        return await this.prisma.upload.update({
            where: { id },
            data: {
                ...updateUploadDto,
                filename,
                mimetype,
            },
        });
    }

    async remove(id: number) {
        return await this.prisma.upload.delete({
            where: { id },
        });
    }
}
