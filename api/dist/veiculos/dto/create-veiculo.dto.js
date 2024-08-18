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
exports.CreateVeiculoDto = void 0;
const class_validator_1 = require("class-validator");
class CreateVeiculoDto {
}
exports.CreateVeiculoDto = CreateVeiculoDto;
__decorate([
    (0, class_validator_1.IsString)({ message: 'placa deve ser uma string' }),
    __metadata("design:type", String)
], CreateVeiculoDto.prototype, "placa", void 0);
__decorate([
    (0, class_validator_1.IsString)({ message: 'marca deve ser uma string' }),
    __metadata("design:type", String)
], CreateVeiculoDto.prototype, "marca", void 0);
__decorate([
    (0, class_validator_1.IsString)({ message: 'modelo deve ser uma string' }),
    __metadata("design:type", String)
], CreateVeiculoDto.prototype, "modelo", void 0);
__decorate([
    (0, class_validator_1.IsString)({ message: 'tipo deve ser uma string' }),
    (0, class_validator_1.IsIn)(['Automóvel', 'Motocicleta', 'Van', 'Caminhão', 'Micro-Ônibus', 'Ônibus'], {
        message: 'tipo deve ser um dos seguintes: Automóvel, Motocicleta, Van, Caminhão, Micro-Ônibus, Ônibus',
    }),
    __metadata("design:type", String)
], CreateVeiculoDto.prototype, "tipo", void 0);
__decorate([
    (0, class_validator_1.IsInt)({ message: 'ano deve ser um número inteiro' }),
    __metadata("design:type", Number)
], CreateVeiculoDto.prototype, "ano", void 0);
__decorate([
    (0, class_validator_1.IsString)({ message: 'cor deve ser uma string' }),
    __metadata("design:type", String)
], CreateVeiculoDto.prototype, "cor", void 0);
__decorate([
    (0, class_validator_1.IsString)({ message: 'renavam deve ser uma string' }),
    __metadata("design:type", String)
], CreateVeiculoDto.prototype, "renavam", void 0);
__decorate([
    (0, class_validator_1.IsString)({ message: 'chassi deve ser uma string' }),
    __metadata("design:type", String)
], CreateVeiculoDto.prototype, "chassi", void 0);
__decorate([
    (0, class_validator_1.IsInt)({ message: 'km deve ser um número inteiro' }),
    __metadata("design:type", Number)
], CreateVeiculoDto.prototype, "km", void 0);
__decorate([
    (0, class_validator_1.IsString)({ message: 'combustivel deve ser uma string' }),
    (0, class_validator_1.IsIn)(['Álcool', 'Gasolina', 'Flex', 'Diesel', 'Diesel S10', 'Elétrico'], {
        message: 'combustivel deve ser um dos seguintes: Álcool, Gasolina, Flex, Diesel, Diesel S10, Elétrico',
    }),
    __metadata("design:type", String)
], CreateVeiculoDto.prototype, "combustivel", void 0);
__decorate([
    (0, class_validator_1.IsString)({ message: 'categoriaCNH deve ser uma string' }),
    (0, class_validator_1.IsIn)(['A', 'B', 'C', 'D', 'E', 'AB', 'AC', 'AD', 'AE'], {
        message: 'categoriaCNH deve ser uma das seguintes: A, B, C, D, E, AB, AC, AD, AE',
    }),
    __metadata("design:type", String)
], CreateVeiculoDto.prototype, "categoriaCNH", void 0);
__decorate([
    (0, class_validator_1.IsString)({ message: 'status deve ser uma string' }),
    (0, class_validator_1.IsIn)(['Disponível', 'Em Manutenção', 'Em Uso'], {
        message: 'status deve ser um dos seguintes: Disponível, Em Manutenção, Em Uso',
    }),
    __metadata("design:type", String)
], CreateVeiculoDto.prototype, "status", void 0);
__decorate([
    (0, class_validator_1.IsInt)({ message: 'setorId deve ser um número inteiro' }),
    __metadata("design:type", Number)
], CreateVeiculoDto.prototype, "setorId", void 0);
//# sourceMappingURL=create-veiculo.dto.js.map