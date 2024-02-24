"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CustomBadRequestException = exports.CustomNotFoundException = void 0;
const common_1 = require("@nestjs/common");
class CustomNotFoundException extends common_1.NotFoundException {
    constructor({ message, messages, actualServerError, }) {
        let errorObjMessage;
        if (message) {
            errorObjMessage = [message];
        }
        else if (messages.length) {
            errorObjMessage = [...messages.filter((message) => message != '')];
        }
        let errorObj = {
            error: 'Not found',
            statusCode: common_1.HttpStatus.NOT_FOUND,
            message: errorObjMessage,
            actualServerError,
        };
        super(errorObj);
    }
}
exports.CustomNotFoundException = CustomNotFoundException;
class CustomBadRequestException extends common_1.BadRequestException {
    constructor({ message, messages, actualServerError, }) {
        let errorObjMessage;
        if (message) {
            errorObjMessage = [message];
        }
        else if (messages.length) {
            errorObjMessage = [...messages.filter((message) => message != '')];
        }
        let errorObj = {
            error: 'Bad request',
            statusCode: common_1.HttpStatus.BAD_REQUEST,
            message: errorObjMessage,
            actualServerError,
        };
        super(errorObj);
    }
}
exports.CustomBadRequestException = CustomBadRequestException;
//# sourceMappingURL=custom-exceptions.js.map