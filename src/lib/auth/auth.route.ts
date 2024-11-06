import { Router } from 'express';
import { jwtTokenGen } from './auth.controllers';
import { checkSchema } from 'express-validator';
import { authValidationSchema } from './auth.schema';
import { validation } from '../../middlewares/validation.middleware';

const router = Router();

router.post(
  '/auth',
  checkSchema(authValidationSchema),
  validation,
  jwtTokenGen
);

export default router;
