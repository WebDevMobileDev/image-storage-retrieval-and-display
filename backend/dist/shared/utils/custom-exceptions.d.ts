import { BadRequestException, NotFoundException } from '@nestjs/common';
export declare class CustomNotFoundException extends NotFoundException {
    constructor({ message, messages, actualServerError, }: {
        message?: string;
        messages?: string[];
        actualServerError?: any;
    });
}
export declare class CustomBadRequestException extends BadRequestException {
    constructor({ message, messages, actualServerError, }: {
        message?: string;
        messages?: string[];
        actualServerError?: any;
    });
}
