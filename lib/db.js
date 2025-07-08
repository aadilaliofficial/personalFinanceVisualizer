import mongoose from 'mongoose';

const MONGODB_URI = process.env.MONGODB_URI;

export async function connectDB() {
  if (!MONGODB_URI) {
    console.error("❌ MONGODB_URI not set in env");
    throw new Error("MONGODB_URI not set");
  }

  if (mongoose.connection.readyState >= 1) {
    console.log("✅ Mongo already connected");
    return;
  }

  try {
    await mongoose.connect(MONGODB_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("✅ Connected to MongoDB");
  } catch (err) {
    console.error("❌ MongoDB connection error:", err.message);
    throw err;
  }
}
