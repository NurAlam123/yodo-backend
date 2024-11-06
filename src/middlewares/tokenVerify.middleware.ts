import { NextFunction, Request, Response } from 'express';
import { verify } from 'jsonwebtoken';
import config from '../config';

export const tokenVerify = (
  request: Request,
  response: Response,
  next: NextFunction
) => {
  try {
    const { token } = request.cookies;
    const user = verify(token, config.SECRET_TOKEN);
    request.user = user;
    next();
  } catch (err) {
    response.status(401).send({ success: false, message: 'Not Authorized.' });
  }
};
