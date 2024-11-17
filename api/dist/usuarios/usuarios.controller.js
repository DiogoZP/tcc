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
exports.UsuariosController = void 0;
const openapi = require("@nestjs/swagger");
const common_1 = require("@nestjs/common");
const usuarios_service_1 = require("./usuarios.service");
const create_usuario_dto_1 = require("./dto/create-usuario.dto");
const update_usuario_dto_1 = require("./dto/update-usuario.dto");
const swagger_1 = require("@nestjs/swagger");
let UsuariosController = class UsuariosController {
    constructor(usuariosService) {
        this.usuariosService = usuariosService;
    }
    async create(createUsuarioDto) {
        const { senha, ...usuario } = await this.usuariosService.create(createUsuarioDto);
        return usuario;
    }
    async findAll() {
        const usuarios = await this.usuariosService.findAll();
        return usuarios;
    }
    async findOne(id) {
        const usuario = await this.usuariosService.findOne({ id: +id });
        if (!usuario) {
            throw new common_1.HttpException('Usuario não encontrado', common_1.HttpStatus.NOT_FOUND);
        }
        const { senha, ...result } = usuario;
        return result;
    }
    async update(id, updateUsuarioDto) {
        const usuarioExiste = await this.usuariosService.findOne({ id: +id });
        if (!usuarioExiste) {
            throw new common_1.HttpException('Usuario não encontrado', common_1.HttpStatus.NOT_FOUND);
        }
        const { senha, ...usuario } = await this.usuariosService.update(+id, updateUsuarioDto);
        return usuario;
    }
    async remove(id) {
        const usuarioExiste = await this.usuariosService.findOne({ id: +id });
        if (!usuarioExiste) {
            throw new common_1.HttpException('Usuario não encontrado', common_1.HttpStatus.NOT_FOUND);
        }
        const { senha, ...usuario } = await this.usuariosService.remove(+id);
        return usuario;
    }
};
exports.UsuariosController = UsuariosController;
__decorate([
    (0, swagger_1.ApiCreatedResponse)({ description: 'Usuario criado com sucesso' }),
    (0, swagger_1.ApiBadRequestResponse)({ description: 'Valores inválidos' }),
    (0, swagger_1.ApiUnauthorizedResponse)({ description: 'Autenticação inválida' }),
    (0, common_1.Post)(),
    openapi.ApiResponse({ status: 201 }),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_usuario_dto_1.CreateUsuarioDto]),
    __metadata("design:returntype", Promise)
], UsuariosController.prototype, "create", null);
__decorate([
    (0, swagger_1.ApiOkResponse)({ description: 'Usuarios encontrados' }),
    (0, swagger_1.ApiUnauthorizedResponse)({ description: 'Autenticação inválida' }),
    (0, common_1.Get)(),
    openapi.ApiResponse({ status: 200, type: [Object] }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], UsuariosController.prototype, "findAll", null);
__decorate([
    (0, swagger_1.ApiOkResponse)({ description: 'Usuario encontrado com sucesso' }),
    (0, swagger_1.ApiNotFoundResponse)({ description: 'Usuario não encontrado' }),
    (0, swagger_1.ApiUnauthorizedResponse)({ description: 'Autenticação inválida' }),
    (0, common_1.Get)(':id'),
    openapi.ApiResponse({ status: 200 }),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], UsuariosController.prototype, "findOne", null);
__decorate([
    (0, swagger_1.ApiOkResponse)({ description: 'Usuario atualizado com sucesso' }),
    (0, swagger_1.ApiNotFoundResponse)({ description: 'Usuario não encontrado' }),
    (0, swagger_1.ApiBadRequestResponse)({ description: 'Valores inválidos' }),
    (0, swagger_1.ApiUnauthorizedResponse)({ description: 'Autenticação inválida' }),
    (0, common_1.Patch)(':id'),
    openapi.ApiResponse({ status: 200 }),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, update_usuario_dto_1.UpdateUsuarioDto]),
    __metadata("design:returntype", Promise)
], UsuariosController.prototype, "update", null);
__decorate([
    (0, swagger_1.ApiOkResponse)({ description: 'Usuario deletado com sucesso' }),
    (0, swagger_1.ApiNotFoundResponse)({ description: 'Usuario não encontrado' }),
    (0, swagger_1.ApiUnauthorizedResponse)({ description: 'Autenticação inválida' }),
    (0, common_1.Delete)(':id'),
    openapi.ApiResponse({ status: 200 }),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], UsuariosController.prototype, "remove", null);
exports.UsuariosController = UsuariosController = __decorate([
    (0, swagger_1.ApiTags)('Usuarios'),
    (0, swagger_1.ApiBearerAuth)(),
    (0, common_1.Controller)('usuarios'),
    __metadata("design:paramtypes", [usuarios_service_1.UsuariosService])
], UsuariosController);
//# sourceMappingURL=usuarios.controller.js.map