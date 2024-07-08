import { Router } from 'express';

// Import routes
import todo from '../lib/todos/todos.route';

const router = Router();
// Routes
router.use(todo);

export default router;
