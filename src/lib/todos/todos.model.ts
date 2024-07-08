import { model, Schema } from 'mongoose';
import { Todo } from '../../@types/todo';

const TodoSchema = new Schema<Todo>({
  id: {
    type: Number,
  },
  email: {
    type: String,
    required: true,
    lowercase: true,
  },
  content: {
    type: String,
    required: true,
  },
  done: {
    type: Boolean,
    default: false,
  },
  createdAt: {
    type: Number,
    default: Date.now(),
  },
});

const TodoModel = model('Todo', TodoSchema);
export default TodoModel;
