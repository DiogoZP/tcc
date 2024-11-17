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
exports.VeiculosController = void 0;
const openapi = require("@nestjs/swagger");
const common_1 = require("@nestjs/common");
const veiculos_service_1 = require("./veiculos.service");
const create_veiculo_dto_1 = require("./dto/create-veiculo.dto");
const update_veiculo_dto_1 = require("./dto/update-veiculo.dto");
const swagger_1 = require("@nestjs/swagger");
let VeiculosController = class VeiculosController {
    constructor(veiculosService) {
        this.veiculosService = veiculosService;
    }
    async create(createVeiculoDto) {
        const veiculo = await this.veiculosService.create(createVeiculoDto);
        return veiculo;
    }
    async findAll() {
        const veiculos = await this.veiculosService.findAll();
        return veiculos;
    }
    async findOne(id) {
        const veiculo = await this.veiculosService.findOne(+id);
        if (!veiculo) {
            throw new common_1.HttpException('Veículo não encontrado', common_1.HttpStatus.NOT_FOUND);
        }
        return veiculo;
    }
    async update(id, updateVeiculoDto) {
        const veiculoExiste = await this.veiculosService.findOne(+id);
        if (!veiculoExiste) {
            throw new common_1.HttpException('Veículo não encontrado', common_1.HttpStatus.NOT_FOUND);
        }
        const veiculo = await this.veiculosService.update(+id, updateVeiculoDto);
        return veiculo;
    }
    async remove(id) {
        const veiculoExiste = await this.veiculosService.findOne(+id);
        if (!veiculoExiste) {
            throw new common_1.HttpException('Veículo não encontrado', common_1.HttpStatus.NOT_FOUND);
        }
        const veiculo = await this.veiculosService.remove(+id);
        return veiculo;
    }
};
exports.VeiculosController = VeiculosController;
__decorate([
    (0, swagger_1.ApiCreatedResponse)({ description: 'Veículo criado com sucesso' }),
    (0, swagger_1.ApiBadRequestResponse)({ description: 'Valores inválidos' }),
    (0, common_1.Post)(),
    openapi.ApiResponse({ status: 201, type: Object }),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_veiculo_dto_1.CreateVeiculoDto]),
    __metadata("design:returntype", Promise)
], VeiculosController.prototype, "create", null);
__decorate([
    (0, swagger_1.ApiOkResponse)({ description: 'Veículos encontrados' }),
    (0, common_1.Get)(),
    openapi.ApiResponse({ status: 200, type: [Object] }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], VeiculosController.prototype, "findAll", null);
__decorate([
    (0, swagger_1.ApiOkResponse)({ description: 'Veículo encontrado com sucesso' }),
    (0, swagger_1.ApiNotFoundResponse)({ description: 'Veículo não encontrado' }),
    (0, common_1.Get)(':id'),
    openapi.ApiResponse({ status: 200, type: Object }),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], VeiculosController.prototype, "findOne", null);
__decorate([
    (0, swagger_1.ApiOkResponse)({ description: 'Veículo atualizado com sucesso' }),
    (0, swagger_1.ApiNotFoundResponse)({ description: 'Veículo não encontrado' }),
    (0, common_1.Patch)(':id'),
    openapi.ApiResponse({ status: 200, type: Object }),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, update_veiculo_dto_1.UpdateVeiculoDto]),
    __metadata("design:returntype", Promise)
], VeiculosController.prototype, "update", null);
__decorate([
    (0, swagger_1.ApiOkResponse)({ description: 'Veículo removido com sucesso' }),
    (0, swagger_1.ApiNotFoundResponse)({ description: 'Veículo não encontrado' }),
    (0, common_1.Delete)(':id'),
    openapi.ApiResponse({ status: 200, type: Object }),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], VeiculosController.prototype, "remove", null);
exports.VeiculosController = VeiculosController = __decorate([
    (0, swagger_1.ApiTags)('Veículos'),
    (0, swagger_1.ApiBearerAuth)(),
    (0, common_1.Controller)('veiculos'),
    __metadata("design:paramtypes", [veiculos_service_1.VeiculosService])
], VeiculosController);
//# sourceMappingURL=veiculos.controller.js.map