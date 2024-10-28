import { config } from 'dotenv';
import mongoose from 'mongoose';
config();

mongoose.Promise = global.Promise;

const MONGO_DB_URI = process.env.MONGO_DB_URI;

const connectToDatabase = async (): Promise<void> => {
  await mongoose.connect(MONGO_DB_URI);
  console.log(`mongoose connected to ${MONGO_DB_URI}`);
};

export { connectToDatabase };
