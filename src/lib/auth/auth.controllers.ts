import { Request, Response } from 'express';
import { sign } from 'jsonwebtoken';
import config from '../../config';

export const jwtTokenGen = async (
  request: Request<{}, {}, { email: string }>,
  response: Response
) => {
  const user = request.body;
  const jwt = sign(user, config.SECRET_TOKEN, {
    expiresIn: '1h',
  });
  response
    .cookie('token', jwt, {
      httpOnly: true,
      maxAge: 60 * 60 * 1000,
      secure: config.ENVIRONMENT === 'prod' ? true : false,
    })
    .status(201)
    .send({ success: true, message: 'Successful' });
};
