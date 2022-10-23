export enum ErrorTypes {
  NotFound = 'NotFound',
  InvalidId = 'InvalidId',
}

const customError = {
  NotFound: {
    message: 'Object not found',
    httpStatus: 404,
  },
  InvalidId: {
    message: 'Id must have 24 hexadecimal characters',
    httpStatus: 400,
  },
};

export default customError;