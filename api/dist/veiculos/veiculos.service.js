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
exports.VeiculosService = void 0;
const common_1 = require("@nestjs/common");
const prisma_service_1 = require("../database/prisma.service");
let VeiculosService = class VeiculosService {
    constructor(prisma) {
        this.prisma = prisma;
    }
    async create(createVeiculoDto) {
        return await this.prisma.veiculo.create({
            data: createVeiculoDto,
        });
    }
    async findAll() {
        return await this.prisma.veiculo.findMany({
            include: {
                setor: {
                    select: {
                        nome: true,
                    },
                },
            },
        });
    }
    async findOne(id) {
        return await this.prisma.veiculo.findUnique({
            where: { id },
        });
    }
    async update(id, updateVeiculoDto) {
        return await this.prisma.veiculo.update({
            where: { id },
            data: updateVeiculoDto,
        });
    }
    async remove(id) {
        return await this.prisma.veiculo.delete({
            where: { id },
        });
    }
};
exports.VeiculosService = VeiculosService;
exports.VeiculosService = VeiculosService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService])
], VeiculosService);
//# sourceMappingURL=veiculos.service.js.map