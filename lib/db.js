import mongoose from 'mongoose';

const MONGODB_URI = process.env.MONGODB_URI;

export async function connectDB() {
  if (!MONGODB_URI) {
    console.error("❌ MONGODB_URI not set");
    throw new Error("MONGODB_URI not set");
  }

  if (mongoose.connection.readyState >= 1) {
    console.log("✅ MongoDB already connected (state:", mongoose.connection.readyState, ")");
    return;
  }

  try {
    await mongoose.connect(MONGODB_URI);
    console.log("✅ Connected to MongoDB");
  } catch (err) {
    console.error("❌ MongoDB connection error:", err.message);
    throw err;
  }
}
