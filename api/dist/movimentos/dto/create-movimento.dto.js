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
exports.CreateMovimentoDto = void 0;
const class_validator_1 = require("class-validator");
class CreateMovimentoDto {
}
exports.CreateMovimentoDto = CreateMovimentoDto;
__decorate([
    (0, class_validator_1.IsString)({ message: 'dataSaida deve ser uma string' }),
    __metadata("design:type", String)
], CreateMovimentoDto.prototype, "dataSaida", void 0);
__decorate([
    (0, class_validator_1.IsString)({ message: 'dataRetorno deve ser uma string' }),
    __metadata("design:type", String)
], CreateMovimentoDto.prototype, "dataRetorno", void 0);
__decorate([
    (0, class_validator_1.IsInt)({ message: 'kmSaida deve ser um número inteiro' }),
    __metadata("design:type", Number)
], CreateMovimentoDto.prototype, "kmSaida", void 0);
__decorate([
    (0, class_validator_1.IsInt)({ message: 'kmRetorno deve ser um número inteiro' }),
    __metadata("design:type", Number)
], CreateMovimentoDto.prototype, "kmRetorno", void 0);
__decorate([
    (0, class_validator_1.IsString)({ message: 'itinerario deve ser uma string' }),
    __metadata("design:type", String)
], CreateMovimentoDto.prototype, "itinerario", void 0);
__decorate([
    (0, class_validator_1.IsInt)({ message: 'motoristaId deve ser um número inteiro' }),
    __metadata("design:type", Number)
], CreateMovimentoDto.prototype, "motoristaId", void 0);
__decorate([
    (0, class_validator_1.IsInt)({ message: 'veiculoId deve ser um número inteiro' }),
    __metadata("design:type", Number)
], CreateMovimentoDto.prototype, "veiculoId", void 0);
//# sourceMappingURL=create-movimento.dto.js.map