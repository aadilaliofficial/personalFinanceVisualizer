import { connectDB } from '@/lib/db';
import { Transaction } from '@/models/transaction';

export default async function handler(req, res) {
  try {
    await connectDB();

    const transactions = await Transaction.find();

    const monthlyTotals = {};

    transactions.forEach((tx) => {
      if (!tx.date || !tx.amount) return; // skip invalid entries

      const date = new Date(tx.date);
      if (isNaN(date)) return; // skip if date is not parsable

      const month = `${date.getFullYear()}-${String(date.getMonth() + 1).padStart(2, '0')}`;
      monthlyTotals[month] = (monthlyTotals[month] || 0) + tx.amount;
    });

    const chartData = Object.entries(monthlyTotals)
      .map(([month, amount]) => ({ month, amount }))
      .sort((a, b) => a.month.localeCompare(b.month));

    return res.status(200).json(chartData);
  } catch (err) {
    console.error('❌ Error in /api/transactions/monthly:', err.message);
    return res.status(500).json({ error: 'Failed to load chart data' });
  }
}
