import { Router } from 'express';
import { addTodo, deleteTodo, getTodo, updateTodo } from './todos.controllers';
import { checkSchema } from 'express-validator';
import {
  createTodoValidationSchema,
  deleteTodoValidationSchema,
  updateTodoValidationSchema,
} from './todos.schema';
import { validation } from '../../middlewares/validation.middleware';
import { convertID } from '../../middlewares/convertID.middleware';

const router = Router();

router
  .route('/api/todo')
  .get(getTodo)
  .post(checkSchema(createTodoValidationSchema), validation, addTodo)
  .patch(
    checkSchema(updateTodoValidationSchema),
    validation,
    convertID,
    updateTodo
  )
  .delete(
    checkSchema(deleteTodoValidationSchema),
    validation,
    convertID,
    deleteTodo
  );

export default router;
