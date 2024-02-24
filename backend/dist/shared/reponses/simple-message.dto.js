"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SimpleMessage = void 0;
const openapi = require("@nestjs/swagger");
class SimpleMessage {
    static _OPENAPI_METADATA_FACTORY() {
        return { message: { required: true, type: () => String } };
    }
}
exports.SimpleMessage = SimpleMessage;
//# sourceMappingURL=simple-message.dto.js.map