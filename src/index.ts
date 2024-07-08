import mongoose from 'mongoose';
import app from './app';
import config from './config';

const PORT = config.PORT;
const DB_URI = config.DB_URI;

async function run() {
  await mongoose.connect(DB_URI);

  app.listen(PORT, () => {
    console.log(`Server listening to https://localhost:${PORT}/`);
  });
}

run();
