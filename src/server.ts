import 'reflect-metadata';

import express from 'express';
import cors from 'cors';
import { SERVER_PORT, DB_URI } from './config';
import { routes } from './routes';
import mongoose from 'mongoose';

const app = express();

app.use(cors());
app.use(express.json());

routes(app);
mongoose
  .connect(DB_URI)
  .then(err => {
    console.log('Connected to database!');
  })
  .catch(err => {
    console.log(err);
  });

app.listen(SERVER_PORT, async () => {
  console.log(`Server started on ${SERVER_PORT}`);
});
