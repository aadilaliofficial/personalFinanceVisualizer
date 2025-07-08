import mongoose from 'mongoose';

const MONGODB_URI = process.env.MONGODB_URI;

if (!MONGODB_URI) {
  throw new Error("❌ MONGODB_URI is not defined in environment variables");
}

let cached = global.mongoose;

if (!cached) {
  cached = global.mongoose = { conn: null, promise: null };
}

export async function connectDB() {
  if (cached.conn) {
    return cached.conn;
  }

  if (!cached.promise) {
    cached.promise = mongoose.connect(MONGODB_URI, {
      dbName: 'financeApp',
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
  }

  try {
    cached.conn = await cached.promise;
    console.log("✅ MongoDB connected");
  } catch (e) {
    console.error("❌ MongoDB connection error:", e.message);
    throw e;
  }

  return cached.conn;
}
