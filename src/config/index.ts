import path from 'path';
import dotenv from 'dotenv';

dotenv.config({ path: path.join(__dirname, '..', '..', '.env') });

const { DB_HOST, DB_PORT, DB_USERNAME, DB_PASSWORD, DB_NAME } = process.env;

const SERVER_PORT = Number(process.env.SERVER_PORT);
const DB_LOGGING_LEVEL = process.env.DB_LOGGING_LEVEL.split(',');

export {
  SERVER_PORT,
  DB_HOST,
  DB_PORT,
  DB_USERNAME,
  DB_PASSWORD,
  DB_NAME,
  DB_LOGGING_LEVEL,
};
