import { NextFunction, Request, Response } from 'express';

const logging = (request: Request, response: Response, next: NextFunction) => {
  const reqPath = request.path;
  const reqMethod = request.method;
  const format = `[${Date.now()}] ${reqMethod} - ${reqPath}`;
  console.log(format);
  next();
};

export default logging;
