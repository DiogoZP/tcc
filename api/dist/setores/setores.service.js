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
exports.SetoresService = void 0;
const common_1 = require("@nestjs/common");
const prisma_service_1 = require("../database/prisma.service");
let SetoresService = class SetoresService {
    constructor(prisma) {
        this.prisma = prisma;
    }
    async create(createSetorDto) {
        return await this.prisma.setor.create({
            data: createSetorDto,
        });
    }
    async findAll() {
        return await this.prisma.setor.findMany();
    }
    async findOne(id) {
        return await this.prisma.setor.findUnique({
            where: { id },
        });
    }
    async update(id, updateSetorDto) {
        return await this.prisma.setor.update({
            where: { id },
            data: updateSetorDto,
        });
    }
    async remove(id) {
        return await this.prisma.setor.delete({
            where: { id },
        });
    }
};
exports.SetoresService = SetoresService;
exports.SetoresService = SetoresService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService])
], SetoresService);
//# sourceMappingURL=setores.service.js.map