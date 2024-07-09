import { Request, Response } from 'express';
import { sign } from 'jsonwebtoken';
import config from '../../config';

export const jwtTokenGen = async (
  request: Request<{}, {}, { email: string }>,
  response: Response
) => {
  const user = request.body;
  console.log(user);
  const jwt = sign(user, config.SECRET_TOKEN, {
    expiresIn: '1h',
  });
  response.cookie('token', jwt, {
    httpOnly: true,
    maxAge: 60000 * 60,
    secure: config.ENVIRONMENT === 'prod' ? true : false,
    sameSite: 'none',
  });
  response.status(201).send(user);
};
