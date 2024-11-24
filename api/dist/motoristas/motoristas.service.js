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
exports.MotoristasService = void 0;
const common_1 = require("@nestjs/common");
const prisma_service_1 = require("../database/prisma.service");
let MotoristasService = class MotoristasService {
    constructor(prisma) {
        this.prisma = prisma;
    }
    async create(createMotoristaDto) {
        return await this.prisma.motorista.create({
            include: {
                setor: true,
                movimentos: true,
                uploads: true,
                infracoes: true,
            },
            data: createMotoristaDto,
        });
    }
    async findAll() {
        return await this.prisma.motorista.findMany({
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
    async findOne(id) {
        return await this.prisma.motorista.findUnique({
            include: {
                setor: true,
                movimentos: true,
                uploads: true,
                infracoes: true,
            },
            where: { id, deleted: false },
        });
    }
    async update(id, updateMotoristaDto) {
        return await this.prisma.motorista.update({
            include: {
                setor: true,
                movimentos: true,
                uploads: true,
                infracoes: true,
            },
            where: { id, deleted: false },
            data: updateMotoristaDto,
        });
    }
    async remove(id) {
        return await this.prisma.motorista.update({
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
};
exports.MotoristasService = MotoristasService;
exports.MotoristasService = MotoristasService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService])
], MotoristasService);
//# sourceMappingURL=motoristas.service.js.map