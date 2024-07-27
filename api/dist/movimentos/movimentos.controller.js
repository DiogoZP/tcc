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
const common_1 = require("@nestjs/common");
const movimentos_service_1 = require("./movimentos.service");
const create_movimento_dto_1 = require("./dto/create-movimento.dto");
const update_movimento_dto_1 = require("./dto/update-movimento.dto");
let MovimentosController = class MovimentosController {
    constructor(movimentosService) {
        this.movimentosService = movimentosService;
    }
    create(createMovimentoDto) {
        return this.movimentosService.create(createMovimentoDto);
    }
    findAll() {
        return this.movimentosService.findAll();
    }
    findOne(id) {
        return this.movimentosService.findOne(+id);
    }
    update(id, updateMovimentoDto) {
        return this.movimentosService.update(+id, updateMovimentoDto);
    }
    remove(id) {
        return this.movimentosService.remove(+id);
    }
};
exports.MovimentosController = MovimentosController;
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_movimento_dto_1.CreateMovimentoDto]),
    __metadata("design:returntype", void 0)
], MovimentosController.prototype, "create", null);
__decorate([
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], MovimentosController.prototype, "findAll", null);
__decorate([
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], MovimentosController.prototype, "findOne", null);
__decorate([
    (0, common_1.Patch)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, update_movimento_dto_1.UpdateMovimentoDto]),
    __metadata("design:returntype", void 0)
], MovimentosController.prototype, "update", null);
__decorate([
    (0, common_1.Delete)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], MovimentosController.prototype, "remove", null);
exports.MovimentosController = MovimentosController = __decorate([
    (0, common_1.Controller)('movimentos'),
    __metadata("design:paramtypes", [movimentos_service_1.MovimentosService])
], MovimentosController);
//# sourceMappingURL=movimentos.controller.js.map