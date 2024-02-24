"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateSchoolDto = void 0;
const openapi = require("@nestjs/swagger");
const swagger_1 = require("@nestjs/swagger");
const create_school_dto_1 = require("./create-school.dto");
class UpdateSchoolDto extends (0, swagger_1.PartialType)(create_school_dto_1.CreateSchoolDto) {
    static _OPENAPI_METADATA_FACTORY() {
        return {};
    }
}
exports.UpdateSchoolDto = UpdateSchoolDto;
//# sourceMappingURL=update-school.dto.js.map