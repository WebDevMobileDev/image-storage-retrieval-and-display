// import { PrismaClientKnownRequestError } from '@prisma/client/runtime/library';
import { ErrorObject } from './type';
import { BadRequestException, HttpStatus, NotFoundException } from '@nestjs/common';

export class CustomNotFoundException extends NotFoundException {
  constructor({
    message,
    messages,
    actualServerError,
  }: {
    message?: string;
    messages?: string[];
    actualServerError?: any;
  }) {
    let errorObjMessage: string[];

    if (message) {
      errorObjMessage = [message];
    } else if (messages.length) {
      errorObjMessage = [...messages.filter((message) => message != '')];
    }

    let errorObj: ErrorObject = {
      error: 'Not found',
      statusCode: HttpStatus.NOT_FOUND,
      message: errorObjMessage,
      actualServerError,
    };

    super(errorObj);
  }
}

export class CustomBadRequestException extends BadRequestException {
  constructor({
    message,
    messages,
    actualServerError,
  }: {
    message?: string;
    messages?: string[];
    actualServerError?: any;
  }) {
    let errorObjMessage: string[];

    if (message) {
      errorObjMessage = [message];
    } else if (messages.length) {
      errorObjMessage = [...messages.filter((message) => message != '')];
    }

    let errorObj: ErrorObject = {
      error: 'Bad request',
      statusCode: HttpStatus.BAD_REQUEST,
      message: errorObjMessage,
      actualServerError,
    };

    // if(actualServerError instanceof PrismaClientKnownRequestError){
    //   const prismaError: PrismaClientKnownRequestError = actualServerError;
    //   errorObj.serverMessage = prismaError.message
    // }

    super(errorObj);
  }
}

// error: 'Not found',
// message: [`no ${element.relationName} exist with that id`],
// statusCode: HttpStatus.NOT_FOUND,
