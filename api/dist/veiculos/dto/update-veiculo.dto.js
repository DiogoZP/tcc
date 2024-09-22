"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateVeiculoDto = void 0;
const openapi = require("@nestjs/swagger");
const swagger_1 = require("@nestjs/swagger");
const create_veiculo_dto_1 = require("./create-veiculo.dto");
class UpdateVeiculoDto extends (0, swagger_1.PartialType)(create_veiculo_dto_1.CreateVeiculoDto) {
    static _OPENAPI_METADATA_FACTORY() {
        return {};
    }
}
exports.UpdateVeiculoDto = UpdateVeiculoDto;
//# sourceMappingURL=update-veiculo.dto.js.map