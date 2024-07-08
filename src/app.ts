import express from 'express';
import api from './routes';
import logging from './middlewares/logging.middleware';

const app = express();

// Middlewares
app.use(express.json());
app.use(logging);

// API Routes
app.use(api);

export default app;
