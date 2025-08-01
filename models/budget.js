import mongoose from 'mongoose';

const BudgetSchema = new mongoose.Schema({
  category: String,
  amount: Number,
  month: String, 
});

export const Budget = mongoose.models.Budget || mongoose.model('Budget', BudgetSchema);
