import mongoose from 'mongoose';

const TransactionSchema = new mongoose.Schema(
  {
    amount: {
      type: Number,
      required: true,
    },
    date: {
      type: String, // or Date if you're storing real dates
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    category: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true, // adds createdAt and updatedAt fields
  }
);

// Prevent model overwrite error in dev (due to hot reload)
export const Transaction =
  mongoose.models.Transaction || mongoose.model('Transaction', TransactionSchema);
