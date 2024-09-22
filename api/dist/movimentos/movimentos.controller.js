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
exports.MovimentosController = void 0;
const openapi = require("@nestjs/swagger");
const common_1 = require("@nestjs/common");
const movimentos_service_1 = require("./movimentos.service");
const create_movimento_dto_1 = require("./dto/create-movimento.dto");
const update_movimento_dto_1 = require("./dto/update-movimento.dto");
const swagger_1 = require("@nestjs/swagger");
let MovimentosController = class MovimentosController {
    constructor(movimentosService) {
        this.movimentosService = movimentosService;
    }
    async create(createMovimentoDto) {
        const movimento = await this.movimentosService.create(createMovimentoDto);
        return movimento;
    }
    async findAll() {
        const movimentos = await this.movimentosService.findAll();
        return movimentos;
    }
    async findOne(id) {
        const movimento = await this.movimentosService.findOne(+id);
        if (!movimento) {
            throw new common_1.HttpException('Movimento não encontrado', common_1.HttpStatus.NOT_FOUND);
        }
        return movimento;
    }
    async update(id, updateMovimentoDto) {
        const movimentoExiste = await this.movimentosService.findOne(+id);
        if (!movimentoExiste) {
            throw new common_1.HttpException('Movimento não encontrado', common_1.HttpStatus.NOT_FOUND);
        }
        const movimento = await this.movimentosService.update(+id, updateMovimentoDto);
        return movimento;
    }
    async remove(id) {
        const movimentoExiste = await this.movimentosService.findOne(+id);
        if (!movimentoExiste) {
            throw new common_1.HttpException('Movimento não encontrado', common_1.HttpStatus.NOT_FOUND);
        }
        const movimento = await this.movimentosService.remove(+id);
        return movimento;
    }
};
exports.MovimentosController = MovimentosController;
__decorate([
    (0, swagger_1.ApiCreatedResponse)({ description: 'Movimento criado com sucesso' }),
    (0, swagger_1.ApiBadRequestResponse)({ description: 'Valores inválidos' }),
    (0, common_1.Post)(),
    openapi.ApiResponse({ status: 201 }),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_movimento_dto_1.CreateMovimentoDto]),
    __metadata("design:returntype", Promise)
], MovimentosController.prototype, "create", null);
__decorate([
    (0, swagger_1.ApiOkResponse)({ description: 'Movimentos encontrados' }),
    (0, common_1.Get)(),
    openapi.ApiResponse({ status: 200 }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], MovimentosController.prototype, "findAll", null);
__decorate([
    (0, swagger_1.ApiOkResponse)({ description: 'Movimento encontrado com sucesso' }),
    (0, swagger_1.ApiNotFoundResponse)({ description: 'Movimento não encontrado' }),
    (0, common_1.Get)(':id'),
    openapi.ApiResponse({ status: 200 }),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], MovimentosController.prototype, "findOne", null);
__decorate([
    (0, swagger_1.ApiOkResponse)({ description: 'Movimento atualizado com sucesso' }),
    (0, swagger_1.ApiNotFoundResponse)({ description: 'Movimento não encontrado' }),
    (0, swagger_1.ApiBadRequestResponse)({ description: 'Valores inválidos' }),
    (0, common_1.Patch)(':id'),
    openapi.ApiResponse({ status: 200 }),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, update_movimento_dto_1.UpdateMovimentoDto]),
    __metadata("design:returntype", Promise)
], MovimentosController.prototype, "update", null);
__decorate([
    (0, swagger_1.ApiOkResponse)({ description: 'Movimento deletado com sucesso' }),
    (0, swagger_1.ApiNotFoundResponse)({ description: 'Movimento não encontrado' }),
    (0, common_1.Delete)(':id'),
    openapi.ApiResponse({ status: 200 }),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], MovimentosController.prototype, "remove", null);
exports.MovimentosController = MovimentosController = __decorate([
    (0, swagger_1.ApiTags)('Movimentos'),
    (0, common_1.Controller)('movimentos'),
    __metadata("design:paramtypes", [movimentos_service_1.MovimentosService])
], MovimentosController);
//# sourceMappingURL=movimentos.controller.js.map