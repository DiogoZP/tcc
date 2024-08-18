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
exports.UploadsController = void 0;
const common_1 = require("@nestjs/common");
const platform_express_1 = require("@nestjs/platform-express");
const multer_1 = require("multer");
const uploads_service_1 = require("./uploads.service");
const create_upload_dto_1 = require("./dto/create-upload.dto");
const update_upload_dto_1 = require("./dto/update-upload.dto");
const fs_1 = require("fs");
const path_1 = require("path");
let UploadsController = class UploadsController {
    constructor(uploadsService) {
        this.uploadsService = uploadsService;
    }
    async create(createUploadDto, file) {
        const upload = await this.uploadsService.create(createUploadDto, file.filename, file.mimetype);
        return upload;
    }
    async findAll() {
        const uploads = await this.uploadsService.findAll();
        return uploads;
    }
    async findOne(id, res) {
        const upload = await this.uploadsService.findOne(+id);
        if (!upload) {
            throw new common_1.HttpException('Upload não encontrado', common_1.HttpStatus.NOT_FOUND);
        }
        res.setHeader('Content-Type', upload.mimetype);
        res.sendFile((0, path_1.resolve)(__dirname, '..', '..', 'arquivos', upload.filename));
    }
    async update(id, updateUploadDto, file) {
        const uploadExiste = await this.uploadsService.findOne(+id);
        if (!uploadExiste) {
            throw new common_1.HttpException('Upload não encontrado', common_1.HttpStatus.NOT_FOUND);
        }
        if (file) {
            (0, fs_1.unlink)((0, path_1.resolve)(__dirname, '..', '..', 'arquivos', uploadExiste.filename), (error) => {
                if (error) {
                    throw new common_1.HttpException('Erro ao atualizar o arquivo: ' + error.message, common_1.HttpStatus.INTERNAL_SERVER_ERROR);
                }
            });
        }
        const upload = await this.uploadsService.update(+id, updateUploadDto, file?.filename, file?.mimetype);
        return upload;
    }
    async remove(id) {
        const uploadExiste = await this.uploadsService.findOne(+id);
        if (!uploadExiste) {
            throw new common_1.HttpException('Upload não encontrado', common_1.HttpStatus.NOT_FOUND);
        }
        const upload = await this.uploadsService.remove(+id);
        (0, fs_1.unlink)((0, path_1.resolve)(__dirname, '..', '..', 'arquivos'), (error) => {
            if (error) {
                throw new common_1.HttpException('Erro ao deletar o arquivo: ' + error.message, common_1.HttpStatus.INTERNAL_SERVER_ERROR);
            }
        });
        return upload;
    }
};
exports.UploadsController = UploadsController;
__decorate([
    (0, common_1.Post)(),
    (0, common_1.UseInterceptors)((0, platform_express_1.FileInterceptor)('file', {
        storage: (0, multer_1.diskStorage)({
            destination: (0, path_1.resolve)(__dirname, '..', '..', 'arquivos'),
            filename: (_req, file, cb) => {
                cb(null, Date.now() + '-' + file.originalname);
            },
        }),
        limits: { fileSize: 1024 * 1024 * 10 },
    })),
    __param(0, (0, common_1.Body)()),
    __param(1, (0, common_1.UploadedFile)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_upload_dto_1.CreateUploadDto, Object]),
    __metadata("design:returntype", Promise)
], UploadsController.prototype, "create", null);
__decorate([
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], UploadsController.prototype, "findAll", null);
__decorate([
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Res)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Object]),
    __metadata("design:returntype", Promise)
], UploadsController.prototype, "findOne", null);
__decorate([
    (0, common_1.Patch)(':id'),
    (0, common_1.UseInterceptors)((0, platform_express_1.FileInterceptor)('file', {
        storage: (0, multer_1.diskStorage)({
            destination: (0, path_1.resolve)(__dirname, '..', '..', 'arquivos'),
            filename: (_req, file, cb) => {
                cb(null, file.originalname + '-' + Date.now());
            },
        }),
        limits: { fileSize: 1024 * 1024 * 10 },
    })),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __param(2, (0, common_1.UploadedFile)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, update_upload_dto_1.UpdateUploadDto, Object]),
    __metadata("design:returntype", Promise)
], UploadsController.prototype, "update", null);
__decorate([
    (0, common_1.Delete)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], UploadsController.prototype, "remove", null);
exports.UploadsController = UploadsController = __decorate([
    (0, common_1.Controller)('uploads'),
    __metadata("design:paramtypes", [uploads_service_1.UploadsService])
], UploadsController);
//# sourceMappingURL=uploads.controller.js.map