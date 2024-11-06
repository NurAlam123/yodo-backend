import { model, Schema } from 'mongoose';

const TodoSchema = new Schema<Todo>({
  id: {
    type: String,
    required: true,
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
