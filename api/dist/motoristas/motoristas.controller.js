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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.MotoristasController = void 0;
const common_1 = require("@nestjs/common");
const motoristas_service_1 = require("./motoristas.service");
const create_motorista_dto_1 = require("./dto/create-motorista.dto");
const update_motorista_dto_1 = require("./dto/update-motorista.dto");
let MotoristasController = class MotoristasController {
    constructor(motoristasService) {
        this.motoristasService = motoristasService;
    }
    async create(createMotoristaDto) {
        const motorista = await this.motoristasService.create(createMotoristaDto);
        return motorista;
    }
    async findAll() {
        const motoristas = await this.motoristasService.findAll();
        return motoristas;
    }
    async findOne(id) {
        const motorista = await this.motoristasService.findOne(+id);
        if (!motorista) {
            throw new common_1.HttpException('Motorista não encontrado', common_1.HttpStatus.NOT_FOUND);
        }
        return motorista;
    }
    async update(id, updateMotoristaDto) {
        const motoristaExiste = await this.motoristasService.findOne(+id);
        if (!motoristaExiste) {
            throw new common_1.HttpException('Motorista não encontrado', common_1.HttpStatus.NOT_FOUND);
        }
        const motorista = await this.motoristasService.update(+id, updateMotoristaDto);
        return motorista;
    }
    async remove(id) {
        const motoristaExiste = await this.motoristasService.findOne(+id);
        if (!motoristaExiste) {
            throw new common_1.HttpException('Motorista não encontrado', common_1.HttpStatus.NOT_FOUND);
        }
        const motorista = await this.motoristasService.remove(+id);
        return motorista;
    }
};
exports.MotoristasController = MotoristasController;
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_motorista_dto_1.CreateMotoristaDto]),
    __metadata("design:returntype", Promise)
], MotoristasController.prototype, "create", null);
__decorate([
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], MotoristasController.prototype, "findAll", null);
__decorate([
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], MotoristasController.prototype, "findOne", null);
__decorate([
    (0, common_1.Patch)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, update_motorista_dto_1.UpdateMotoristaDto]),
    __metadata("design:returntype", Promise)
], MotoristasController.prototype, "update", null);
__decorate([
    (0, common_1.Delete)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], MotoristasController.prototype, "remove", null);
exports.MotoristasController = MotoristasController = __decorate([
    (0, common_1.Controller)('motoristas'),
    __metadata("design:paramtypes", [motoristas_service_1.MotoristasService])
], MotoristasController);
//# sourceMappingURL=motoristas.controller.js.map