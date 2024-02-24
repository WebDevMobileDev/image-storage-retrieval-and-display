"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.School = void 0;
const openapi = require("@nestjs/swagger");
class School {
    static _OPENAPI_METADATA_FACTORY() {
        return { id: { required: true, type: () => String }, name: { required: true, type: () => String }, logoUrl: { required: true, type: () => String } };
    }
}
exports.School = School;
//# sourceMappingURL=school.entity.js.map