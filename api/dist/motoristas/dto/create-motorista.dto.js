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
exports.CreateMotoristaDto = void 0;
const openapi = require("@nestjs/swagger");
const class_validator_1 = require("class-validator");
class CreateMotoristaDto {
    static _OPENAPI_METADATA_FACTORY() {
        return { nome: { required: true, type: () => String }, cpf: { required: true, type: () => String }, rg: { required: true, type: () => String }, categoriaCNH: { required: true, type: () => String, enum: ['A', 'B', 'C', 'D', 'E', 'AB', 'AC', 'AD', 'AE'] }, numeroCNH: { required: true, type: () => String }, validadeCNH: { required: true, type: () => String }, telefone: { required: true, type: () => String }, endereco: { required: true, type: () => String }, setorId: { required: true, type: () => Number } };
    }
}
exports.CreateMotoristaDto = CreateMotoristaDto;
__decorate([
    (0, class_validator_1.IsString)({ message: 'nome deve ser uma string' }),
    __metadata("design:type", String)
], CreateMotoristaDto.prototype, "nome", void 0);
__decorate([
    (0, class_validator_1.IsString)({ message: 'cpf deve ser uma string' }),
    __metadata("design:type", String)
], CreateMotoristaDto.prototype, "cpf", void 0);
__decorate([
    (0, class_validator_1.IsString)({ message: 'rg deve ser uma string' }),
    __metadata("design:type", String)
], CreateMotoristaDto.prototype, "rg", void 0);
__decorate([
    (0, class_validator_1.IsString)({ message: 'categoriaCNH deve ser uma string' }),
    (0, class_validator_1.IsIn)(['A', 'B', 'C', 'D', 'E', 'AB', 'AC', 'AD', 'AE'], {
        message: 'categoriaCNH deve ser uma das seguintes: A, B, C, D, E, AB, AC, AD, AE',
    }),
    __metadata("design:type", String)
], CreateMotoristaDto.prototype, "categoriaCNH", void 0);
__decorate([
    (0, class_validator_1.IsString)({ message: 'numeroCNH deve ser uma string' }),
    __metadata("design:type", String)
], CreateMotoristaDto.prototype, "numeroCNH", void 0);
__decorate([
    (0, class_validator_1.IsDateString)(),
    __metadata("design:type", String)
], CreateMotoristaDto.prototype, "validadeCNH", void 0);
__decorate([
    (0, class_validator_1.IsString)({ message: 'telefone deve ser uma string' }),
    __metadata("design:type", String)
], CreateMotoristaDto.prototype, "telefone", void 0);
__decorate([
    (0, class_validator_1.IsString)({ message: 'endereco deve ser uma string ' }),
    __metadata("design:type", String)
], CreateMotoristaDto.prototype, "endereco", void 0);
__decorate([
    (0, class_validator_1.IsInt)({ message: 'setorId deve ser um número inteiro' }),
    __metadata("design:type", Number)
], CreateMotoristaDto.prototype, "setorId", void 0);
//# sourceMappingURL=create-motorista.dto.js.map