import { NextFunction, Request, Response } from 'express';

export const convertID = (
  request: Request,
  response: Response,
  next: NextFunction
) => {
  let { id } = request.body;
  if (typeof id !== 'number') {
    id = parseInt(id);
  }
  request.body.id = id;
  next();
};
