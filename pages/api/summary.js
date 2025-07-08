import { connectDB } from '@/lib/db';
import { Transaction } from '@/models/transaction';

export default async function handler(req, res) {
  await connectDB();

  const transactions = await Transaction.find();

  let total = 0;
  const categoryTotals = {};

  transactions.forEach(tx => {
    total += tx.amount;
    categoryTotals[tx.category] = (categoryTotals[tx.category] || 0) + tx.amount;
  });

  const topCategory = Object.entries(categoryTotals)
    .sort((a, b) => b[1] - a[1])[0]?.[0] || 'N/A';

  res.status(200).json({ total, topCategory });
}
