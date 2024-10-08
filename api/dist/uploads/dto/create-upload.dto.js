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
exports.CreateUploadDto = void 0;
const openapi = require("@nestjs/swagger");
const class_validator_1 = require("class-validator");
const class_transformer_1 = require("class-transformer");
const swagger_1 = require("@nestjs/swagger");
class CreateUploadDto {
    static _OPENAPI_METADATA_FACTORY() {
        return { motoristaId: { required: false, type: () => Number }, veiculoId: { required: false, type: () => Number }, itemId: { required: false, type: () => Number }, file: { required: true, type: () => Object } };
    }
}
exports.CreateUploadDto = CreateUploadDto;
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_transformer_1.Transform)(({ value }) => parseInt(value)),
    (0, class_validator_1.IsInt)(),
    __metadata("design:type", Number)
], CreateUploadDto.prototype, "motoristaId", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_transformer_1.Transform)(({ value }) => parseInt(value)),
    (0, class_validator_1.IsInt)(),
    __metadata("design:type", Number)
], CreateUploadDto.prototype, "veiculoId", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_transformer_1.Transform)(({ value }) => parseInt(value)),
    (0, class_validator_1.IsInt)(),
    __metadata("design:type", Number)
], CreateUploadDto.prototype, "itemId", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ type: 'string', format: 'binary' }),
    __metadata("design:type", Object)
], CreateUploadDto.prototype, "file", void 0);
//# sourceMappingURL=create-upload.dto.js.map