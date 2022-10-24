export class ShowError extends Error {
  constructor(public status: number, message: string) {
    super(message);
  }
}

export enum ErrorTypes {
  NotFound = 'NotFound',
  InvalidId = 'InvalidId',
}

type ErrorResponseObject = { 
  message: string;
  httpStatus: number,
};

export type ErrorCatalog = {
  [key in ErrorTypes]: ErrorResponseObject
};

export const customError: ErrorCatalog = {
  NotFound: {
    message: 'Object not found',
    httpStatus: 404,
  },
  InvalidId: {
    message: 'Id must have 24 hexadecimal characters',
    httpStatus: 400,
  },
};