import dotenv from 'dotenv';
import path from 'path';

// Set the NODE_ENV to 'development' by default
process.env.NODE_ENV = process.env.NODE_ENV || 'development';

const ENV_PATH = path.resolve(__dirname, '.env');
const envFound = dotenv.config({ path: ENV_PATH });
if (envFound.error) {
  // This error should crash whole process

  throw new Error("⚠️  Couldn't find .env file  ⚠️");
}

export default {
  host: process.env.SERVER_HOST,
  port: process.env.SERVER_PORT,
};
