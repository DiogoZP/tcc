"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateMotoristaDto = void 0;
const openapi = require("@nestjs/swagger");
const swagger_1 = require("@nestjs/swagger");
const create_motorista_dto_1 = require("./create-motorista.dto");
class UpdateMotoristaDto extends (0, swagger_1.PartialType)(create_motorista_dto_1.CreateMotoristaDto) {
    static _OPENAPI_METADATA_FACTORY() {
        return {};
    }
}
exports.UpdateMotoristaDto = UpdateMotoristaDto;
//# sourceMappingURL=update-motorista.dto.js.map