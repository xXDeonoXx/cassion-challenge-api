import 'reflect-metadata';

import express from 'express';
import cors from 'cors';
import { SERVER_PORT } from './config';
import { routes } from './routes';

const app = express();

app.use(cors());
app.use(express.json());

routes(app);

app.listen(SERVER_PORT, async () => {
  console.log(`Server started on ${SERVER_PORT}`);
});
