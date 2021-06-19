import path from 'path';
import dotenv from 'dotenv';

dotenv.config({ path: path.join(__dirname, '..', '..', '.env') });

const {
  DB_URI,
  AWS_ACCESS_KEY_ID,
  AWS_SECRET_ACCESS_KEY,
  AWS_REGION,
  AWS_BUCKET,
} = process.env;

const SERVER_PORT = Number(process.env.SERVER_PORT);

export {
  SERVER_PORT,
  DB_URI,
  AWS_ACCESS_KEY_ID,
  AWS_SECRET_ACCESS_KEY,
  AWS_REGION,
  AWS_BUCKET,
};
