import { Router } from 'express';
import {
  addTodo,
  deleteTodo,
  getTodo,
  todoExist,
  updateTodo,
} from './todos.controllers';
import { checkSchema } from 'express-validator';
import {
  checkExistTodoValidationSchema,
  createTodoValidationSchema,
  deleteTodoValidationSchema,
  updateTodoValidationSchema,
} from './todos.schema';
import { validation } from '../../middlewares/validation.middleware';
import { tokenVerify } from '../../middlewares/tokenVerify.middleware';

const router = Router();

router.use(tokenVerify);

router
  .route('/api/todo')
  .get(getTodo)
  .post(checkSchema(createTodoValidationSchema), validation, addTodo)
  .patch(checkSchema(updateTodoValidationSchema), validation, updateTodo)
  .delete(checkSchema(deleteTodoValidationSchema), validation, deleteTodo);

router.post(
  '/api/todo/exist',
  checkSchema(checkExistTodoValidationSchema),
  validation,
  todoExist
);

export default router;
