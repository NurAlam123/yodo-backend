import { NextFunction, Request, Response } from 'express';
import { verify } from 'jsonwebtoken';
import config from '../config';

export const tokenVerify = (
  request: Request,
  response: Response,
  next: NextFunction
) => {
  try {
    const { jwt } = request.cookies;
    const user = verify(jwt, config.SECRET_TOKEN);
    request.user = user;
    response.status(200).send({ success: true });
    next();
  } catch (err) {
    response.status(401).send({ success: false, message: 'Not Authorized.' });
  }
};
