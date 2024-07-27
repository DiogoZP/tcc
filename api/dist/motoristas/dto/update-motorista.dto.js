"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateMotoristaDto = void 0;
const mapped_types_1 = require("@nestjs/mapped-types");
const create_motorista_dto_1 = require("./create-motorista.dto");
class UpdateMotoristaDto extends (0, mapped_types_1.PartialType)(create_motorista_dto_1.CreateMotoristaDto) {
}
exports.UpdateMotoristaDto = UpdateMotoristaDto;
//# sourceMappingURL=update-motorista.dto.js.map