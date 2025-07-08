import { connectDB } from '@/lib/db';
import { Transaction } from '@/models/transaction';

export default async function handler(req, res) {
  await connectDB();

  const transactions = await Transaction.find();

  const monthlyTotals = {};

  transactions.forEach((tx) => {
    const date = new Date(tx.date);
    const month = `${date.getFullYear()}-${String(date.getMonth() + 1).padStart(2, '0')}`;

    if (!monthlyTotals[month]) {
      monthlyTotals[month] = 0;
    }
    monthlyTotals[month] += tx.amount;
  });

  const chartData = Object.keys(monthlyTotals).map((month) => ({
    month,
    amount: monthlyTotals[month],
  })).sort((a, b) => a.month.localeCompare(b.month));

  res.status(200).json(chartData);
}
