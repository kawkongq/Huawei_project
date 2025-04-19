// lib/mongodb.ts
import mongoose from 'mongoose';

const MONGODB_URI = process.env.MONGODB_URI!;
if (!MONGODB_URI) {

    throw new Error('กรุณากำหนด MONGODB_URI ใน .env.local');
}

export default async function connectDB() {
  mongoose.set('strictQuery', true);
  if (mongoose.connection.readyState >= 1) {
    return mongoose.connection;
  }
  const conn = await mongoose.connect(MONGODB_URI);
  console.log(`MongoDB Connected: ${conn.connection.host}`);
  return conn;
}
