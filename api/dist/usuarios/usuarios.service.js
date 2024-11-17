"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UsuariosService = void 0;
const common_1 = require("@nestjs/common");
const prisma_service_1 = require("../database/prisma.service");
const bcrypt = require("bcrypt");
let UsuariosService = class UsuariosService {
    constructor(prisma) {
        this.prisma = prisma;
    }
    async create(createUsuarioDto) {
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
    async findOne(params) {
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
    async update(id, updateUsuarioDto) {
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
    async remove(id) {
        return await this.prisma.usuario.delete({
            where: {
                id: id,
            },
            include: {
                setor: true,
            },
        });
    }
};
exports.UsuariosService = UsuariosService;
exports.UsuariosService = UsuariosService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService])
], UsuariosService);
//# sourceMappingURL=usuarios.service.js.map