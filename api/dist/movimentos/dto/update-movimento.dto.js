"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateMovimentoDto = void 0;
const mapped_types_1 = require("@nestjs/mapped-types");
const create_movimento_dto_1 = require("./create-movimento.dto");
class UpdateMovimentoDto extends (0, mapped_types_1.PartialType)(create_movimento_dto_1.CreateMovimentoDto) {
}
exports.UpdateMovimentoDto = UpdateMovimentoDto;
//# sourceMappingURL=update-movimento.dto.js.map