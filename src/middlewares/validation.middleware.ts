import { matchedData, validationResult } from 'express-validator';
import { NextFunction, Request, Response } from 'express';

export const validation = (
  request: Request,
  response: Response,
  next: NextFunction
) => {
  const result = validationResult(request);
  if (!result.isEmpty()) {
    const errors = result.array();
    const error = {
      success: false,
      message: errors.map((error) => error.msg),
    };
    response.status(400).send(error);
    return;
  }
  request.body = matchedData(request);
  next();
};
