import { Injectable } from '@nestjs/common';
import { CreateUsuarioDto } from './dto/create-usuario.dto';
import { UpdateUsuarioDto } from './dto/update-usuario.dto';
import { PrismaService } from '@/database/prisma.service';
import * as bcrypt from 'bcrypt';

@Injectable()
export class UsuariosService {
    constructor(private readonly prisma: PrismaService) {}

    async create(createUsuarioDto: CreateUsuarioDto) {
        return await this.prisma.usuario.create({
            data: {
                nome: createUsuarioDto.nome,
                email: createUsuarioDto.email,
                senha: await bcrypt.hash(createUsuarioDto.senha, 3),
                setorId: createUsuarioDto.setorId,
            },
            include: {
                setor: true,
            },
        });
    }

    async findAll() {
        return await this.prisma.usuario.findMany({
            include: {
                setor: true,
            },
        });
    }

    async findOne(params: { id?: number; email?: string }) {
        return await this.prisma.usuario.findUnique({
            where: {
                id: params.id,
                email: params.email,
            },
            include: {
                setor: true,
            },
        });
    }

    async update(id: number, updateUsuarioDto: UpdateUsuarioDto) {
        return await this.prisma.usuario.update({
            where: {
                id: id,
            },
            data: {
                nome: updateUsuarioDto.nome,
                email: updateUsuarioDto.email,
                senha: updateUsuarioDto.senha
                    ? await bcrypt.hash(updateUsuarioDto.senha, 3)
                    : undefined,
                setorId: updateUsuarioDto.setorId,
            },
            include: {
                setor: true,
            },
        });
    }

    async remove(id: number) {
        return await this.prisma.usuario.delete({
            where: {
                id: id,
            },
            include: {
                setor: true,
            },
        });
    }
}
