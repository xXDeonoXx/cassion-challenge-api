import { config } from 'aws-sdk';
import cors from 'cors';
import express from 'express';
import mongoose from 'mongoose';
import 'reflect-metadata';
import {
  AWS_ACCESS_KEY_ID,
  AWS_REGION,
  AWS_SECRET_ACCESS_KEY,
  DB_URI,
  SERVER_PORT,
} from './config';
import { routes } from './routes';

const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded());
routes(app);
mongoose
  .connect(DB_URI)
  .then(err => {
    console.log('Connected to database!');
  })
  .catch(err => {
    console.log(err);
  });

config.update({
  accessKeyId: AWS_ACCESS_KEY_ID,
  secretAccessKey: AWS_SECRET_ACCESS_KEY,
  region: AWS_REGION,
});

app.listen(SERVER_PORT, async () => {
  console.log(`Server started on ${SERVER_PORT}`);
});
