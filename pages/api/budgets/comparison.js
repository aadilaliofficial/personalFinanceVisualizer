import { connectDB } from '@/lib/db';
import { Budget } from '@/models/budget';
import { Transaction } from '@/models/transaction';

export default async function handler(req, res) {
  await connectDB();

  const transactions = await Transaction.find();
  const budgets = await Budget.find();

  const actualTotals = {};
  transactions.forEach(tx => {
    actualTotals[tx.category] = (actualTotals[tx.category] || 0) + tx.amount;
  });

  const budgetMap = {};
  budgets.forEach(b => {
    budgetMap[b.category] = b.amount;
  });

  const categories = new Set([...Object.keys(budgetMap), ...Object.keys(actualTotals)]);

  const result = Array.from(categories).map(category => ({
    category,
    budget: budgetMap[category] || 0,
    actual: actualTotals[category] || 0,
  }));

  res.status(200).json(result);
}
