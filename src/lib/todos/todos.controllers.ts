import { Request, Response } from 'express';
import TodoModel from './todos.model';

// Get todo from the database
export const getTodo = async (request: Request, response: Response) => {
  const { email } = request.user;
  const data = await TodoModel.where({ email });
  response.status(200).send(data);
};

// Add todo to the database
export const addTodo = async (
  request: Request<{}, {}, TodoPostRequestBodyType>,
  response: Response
) => {
  const { email } = request.user;
  const { content, id } = request.body;

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
  const { email } = request.user;
  const { id } = request.body;
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
  const { email } = request.user;
  const { id, content, done } = request.body;

  console.log('patching', { id, content, done})

  const foundTodo = await TodoModel.findOne({ email, id });
  if (!foundTodo) {
    response
      .status(404)
      .send({ success: false, message: 'Todo not found.', data: null });
    return;
  }
  await foundTodo.updateOne({ content, done });
  response
    .status(200)
    .send({ success: true, message: 'Todo updated', data: null });
};

export const todoExist = async (
  request: Request<{}, {}, TodoExistRequestBodyType>,
  response: Response
) => {
  const { email } = request.user;
  const { id } = request.body;
  const foundTodo = await TodoModel.findOne({ email, id });
  if (!foundTodo) {
    response.send({ success: false, message: 'Not found.', data: { id } });
    return;
  }
  response.send({ success: true, message: 'found', data: foundTodo });
};
