import { connectDB } from '@/lib/db';
import { Transaction } from '@/models/transaction';

export default async function handler(req, res) {
  try {
    console.log("📊 /api/transactions/monthly called");

    await connectDB();
    console.log("✅ Connected to MongoDB");

    const transactions = await Transaction.find();
    console.log("📦 Found", transactions.length, "transactions");

    const monthlyTotals = {};

    transactions.forEach((tx, i) => {
      if (!tx.date || !tx.amount) {
        console.warn(`⚠️ Skipping tx[${i}] - missing date or amount`);
        return;
      }

      const date = new Date(tx.date);
      if (isNaN(date)) {
        console.warn(`⚠️ Skipping tx[${i}] - invalid date:`, tx.date);
        return;
      }

      const month = `${date.getFullYear()}-${String(date.getMonth() + 1).padStart(2, '0')}`;
      monthlyTotals[month] = (monthlyTotals[month] || 0) + tx.amount;
    });

    const chartData = Object.entries(monthlyTotals)
      .map(([month, amount]) => ({ month, amount }))
      .sort((a, b) => a.month.localeCompare(b.month));

    console.log("📊 Final Chart Data:", chartData);

    return res.status(200).json(chartData);
  } catch (err) {
    console.error("❌ Error in /api/transactions/monthly:", err);
    return res.status(500).json({ error: "Failed to load chart data" });
  }
}
