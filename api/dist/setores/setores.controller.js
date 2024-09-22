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
exports.SetoresController = void 0;
const openapi = require("@nestjs/swagger");
const common_1 = require("@nestjs/common");
const setores_service_1 = require("./setores.service");
const create_setor_dto_1 = require("./dto/create-setor.dto");
const update_setor_dto_1 = require("./dto/update-setor.dto");
const swagger_1 = require("@nestjs/swagger");
let SetoresController = class SetoresController {
    constructor(setoresService) {
        this.setoresService = setoresService;
    }
    async create(createSetorDto) {
        const setor = await this.setoresService.create(createSetorDto);
        return setor;
    }
    async findAll() {
        const setores = await this.setoresService.findAll();
        return setores;
    }
    async findOne(id) {
        const setor = await this.setoresService.findOne(+id);
        if (!setor) {
            throw new common_1.HttpException('Setor não encontrado', common_1.HttpStatus.NOT_FOUND);
        }
        return setor;
    }
    async update(id, updateSetorDto) {
        const setorExiste = await this.setoresService.findOne(+id);
        if (!setorExiste) {
            throw new common_1.HttpException('Setor não encontrado', common_1.HttpStatus.NOT_FOUND);
        }
        const setor = await this.setoresService.update(+id, updateSetorDto);
        return setor;
    }
    async remove(id) {
        const setorExiste = await this.setoresService.findOne(+id);
        if (!setorExiste) {
            throw new common_1.HttpException('Setor não encontrado', common_1.HttpStatus.NOT_FOUND);
        }
        const setor = await this.setoresService.remove(+id);
        return setor;
    }
};
exports.SetoresController = SetoresController;
__decorate([
    (0, swagger_1.ApiCreatedResponse)({ description: 'Setor criado com sucesso' }),
    (0, swagger_1.ApiBadRequestResponse)({ description: 'Valores inválidos' }),
    (0, common_1.Post)(),
    openapi.ApiResponse({ status: 201 }),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_setor_dto_1.CreateSetorDto]),
    __metadata("design:returntype", Promise)
], SetoresController.prototype, "create", null);
__decorate([
    (0, swagger_1.ApiOkResponse)({ description: 'Setores encontrados' }),
    (0, common_1.Get)(),
    openapi.ApiResponse({ status: 200 }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], SetoresController.prototype, "findAll", null);
__decorate([
    (0, swagger_1.ApiOkResponse)({ description: 'Setor encontrado com sucesso' }),
    (0, swagger_1.ApiNotFoundResponse)({ description: 'Setor não encontrado' }),
    (0, common_1.Get)(':id'),
    openapi.ApiResponse({ status: 200 }),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], SetoresController.prototype, "findOne", null);
__decorate([
    (0, swagger_1.ApiOkResponse)({ description: 'Setor atualizado com sucesso' }),
    (0, swagger_1.ApiNotFoundResponse)({ description: 'Setor não encontrado' }),
    (0, swagger_1.ApiBadRequestResponse)({ description: 'Valores inválidos' }),
    (0, common_1.Patch)(':id'),
    openapi.ApiResponse({ status: 200 }),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, update_setor_dto_1.UpdateSetorDto]),
    __metadata("design:returntype", Promise)
], SetoresController.prototype, "update", null);
__decorate([
    (0, swagger_1.ApiOkResponse)({ description: 'Setor deletado com sucesso' }),
    (0, swagger_1.ApiNotFoundResponse)({ description: 'Setor não encontrado' }),
    (0, common_1.Delete)(':id'),
    openapi.ApiResponse({ status: 200 }),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], SetoresController.prototype, "remove", null);
exports.SetoresController = SetoresController = __decorate([
    (0, swagger_1.ApiTags)('Setores'),
    (0, common_1.Controller)('setores'),
    __metadata("design:paramtypes", [setores_service_1.SetoresService])
], SetoresController);
//# sourceMappingURL=setores.controller.js.map