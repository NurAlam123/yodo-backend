import { Request, Response } from 'express';
import TodoModel from './todos.model';
import {
  TodoDeleteRequestBodyType,
  TodoPostRequestBodyType,
  TodoUpdateRequestBodyType,
} from '../../@types/request';

// Get todo from the database
export const getTodo = async (request: Request, response: Response) => {
  const email = 'nuralam.rsc@gmail.com';
  const data = await TodoModel.where({ email });
  response.status(200).send(data);
};

// Add todo to the database
export const addTodo = async (
  request: Request<{}, {}, TodoPostRequestBodyType>,
  response: Response
) => {
  const { email, content } = request.body;

  const lastID = (await TodoModel.where({ email })).length;
  const id = lastID + 1;

  const todo = new TodoModel({
    id,
    email,
    content,
  });

  const savedTodo = await todo.save();
  response
    .status(201)
    .send({ success: true, message: 'Todo created.', data: savedTodo });
};

// Delete a todo by id
export const deleteTodo = async (
  request: Request<{}, {}, TodoDeleteRequestBodyType>,
  response: Response
) => {
  const { id, email } = request.body;
  const foundTodo = await TodoModel.findOne({
    email,
    id,
  });
  if (!foundTodo) {
    response
      .status(404)
      .send({ success: false, message: 'Todo not found.', data: null });
    return;
  }

  await foundTodo.deleteOne();
  response
    .status(200)
    .send({ success: true, message: 'successfully deleted.', data: foundTodo });
};

// Update a todo
export const updateTodo = async (
  request: Request<{}, {}, TodoUpdateRequestBodyType>,
  response: Response
) => {
  const { id, email, content } = request.body;

  const foundTodo = await TodoModel.findOne({ email, id });
  if (!foundTodo) {
    response
      .status(404)
      .send({ success: false, message: 'Todo not found.', data: null });
    return;
  }
  await foundTodo.updateOne({ content });
  response
    .status(200)
    .send({ success: true, message: 'Todo updated', data: null });
};
