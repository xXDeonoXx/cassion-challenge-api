import path from 'path';
import dotenv from 'dotenv';

dotenv.config({ path: path.join(__dirname, '..', '..', '.env') });

const { DB_URI } = process.env;

const SERVER_PORT = Number(process.env.SERVER_PORT);

export { SERVER_PORT, DB_URI };
