"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppModule = void 0;
const common_1 = require("@nestjs/common");
const veiculos_module_1 = require("./veiculos/veiculos.module");
const motoristas_module_1 = require("./motoristas/motoristas.module");
const movimentos_module_1 = require("./movimentos/movimentos.module");
const uploads_module_1 = require("./uploads/uploads.module");
const setores_module_1 = require("./setores/setores.module");
const auth_module_1 = require("./auth/auth.module");
const usuarios_module_1 = require("./usuarios/usuarios.module");
const config_1 = require("@nestjs/config");
const jwt_auth_guard_1 = require("./auth/jwt-auth.guard");
const core_1 = require("@nestjs/core");
let AppModule = class AppModule {
};
exports.AppModule = AppModule;
exports.AppModule = AppModule = __decorate([
    (0, common_1.Module)({
        imports: [
            veiculos_module_1.VeiculosModule,
            motoristas_module_1.MotoristasModule,
            movimentos_module_1.MovimentosModule,
            uploads_module_1.UploadsModule,
            setores_module_1.SetoresModule,
            auth_module_1.AuthModule,
            usuarios_module_1.UsuariosModule,
            config_1.ConfigModule.forRoot(),
        ],
        controllers: [],
        providers: [{ provide: core_1.APP_GUARD, useClass: jwt_auth_guard_1.JwtAuthGuard }],
    })
], AppModule);
//# sourceMappingURL=app.module.js.map