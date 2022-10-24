import { ErrorRequestHandler } from 'express';
import { ZodError } from 'zod';
import { ErrorTypes, customError } from '../errors/customError';

const errorHandler: ErrorRequestHandler = ( 
  err: Error | ZodError, 
  _req,
  res,
  _next,
) => {
  if (err instanceof ZodError) { 
    // return res.status(400).json({ message: err.issues });
    return res.status(400).json({ error: err.issues });
  }

  const messageAsErrorType = err.message as keyof typeof ErrorTypes;
  const mappedError = customError[messageAsErrorType];

  if (mappedError) {
    const { httpStatus, message } = mappedError;
    // return res.status(httpStatus).json({ message });
    return res.status(httpStatus).json({ error: message });
  }

  console.error(err);

  // return res.status(500).json({ message: 'internal error' });
  // return res.status(500).json({ error: 'internal error' });
  return res.status(400).json({ error: 'internal error' });
};

export default errorHandler;

// import { ErrorRequestHandler } from 'express';

// const errorHandler: ErrorRequestHandler = (error, _req, res, _next) => {
//   if (error.status) {
//     return res.status(error.status).json({ error: error.message });
//   }

//   return res.status(500).json({ error: 'Server error' });
// };

// export default errorHandler;