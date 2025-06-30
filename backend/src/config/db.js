import mongoose from 'mongoose';
import { EVN } from './env.js';

export const connectDB = async () => {
  try {
    await mongoose.connect(EVN.MONGO_URI);
    console.log("Connected to DB SUCCESSFULLY ✅");
  } catch (error) {
    console.log("Error connecting to MONGODB");
    process.exit(1);
  }
};
