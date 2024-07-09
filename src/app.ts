import express from 'express';
import api from './routes';
import logging from './middlewares/logging.middleware';
import cors from 'cors';
import cookieParser from 'cookie-parser';

const app = express();

// Middlewares
app.use(express.json());
app.use(
  cors({
    credentials: true,
    origin: ['http://localhost:5173'],
  })
);
app.use(cookieParser());
app.use(logging);

// API Routes
app.use(api);

export default app;
