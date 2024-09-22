"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateSetorDto = void 0;
const openapi = require("@nestjs/swagger");
const swagger_1 = require("@nestjs/swagger");
const create_setor_dto_1 = require("./create-setor.dto");
class UpdateSetorDto extends (0, swagger_1.PartialType)(create_setor_dto_1.CreateSetorDto) {
    static _OPENAPI_METADATA_FACTORY() {
        return {};
    }
}
exports.UpdateSetorDto = UpdateSetorDto;
//# sourceMappingURL=update-setor.dto.js.map