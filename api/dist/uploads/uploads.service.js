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
exports.UploadsService = void 0;
const common_1 = require("@nestjs/common");
const prisma_service_1 = require("../database/prisma.service");
let UploadsService = class UploadsService {
    constructor(prisma) {
        this.prisma = prisma;
    }
    async create(createUploadDto, filename) {
        return await this.prisma.upload.create({
            data: {
                ...createUploadDto,
                filename,
            },
        });
    }
    async findAll() {
        return await this.prisma.upload.findMany();
    }
    async findOne(id) {
        return await this.prisma.upload.findUnique({
            where: { id },
        });
    }
    async update(id, updateUploadDto, filename) {
        return await this.prisma.upload.update({
            where: { id },
            data: {
                ...updateUploadDto,
                filename,
            },
        });
    }
    async remove(id) {
        return await this.prisma.upload.delete({
            where: { id },
        });
    }
};
exports.UploadsService = UploadsService;
exports.UploadsService = UploadsService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService])
], UploadsService);
//# sourceMappingURL=uploads.service.js.map