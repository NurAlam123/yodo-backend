import { Router } from 'express';

// Import routes
import todo from '../lib/todos/todos.route';
import auth from '../lib/auth/auth.route';
import { tokenVerify } from '../middlewares/tokenVerify.middleware';

const router = Router();
// Routes
router.use(auth);
router.use(tokenVerify, todo);

export default router;
