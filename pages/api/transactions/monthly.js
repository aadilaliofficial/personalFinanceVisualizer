import { connectDB } from '@/lib/db';
import { Transaction } from '@/models/transaction';

export default async function handler(req, res) {
  try {
    console.log("📊 Monthly API called");

    await connectDB();

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

    console.log("✅ Chart data:", chartData);
    res.status(200).json(chartData);
  } catch (err) {
    console.error("❌ API Error:", err.message);
    res.status(500).json({ error: "Failed to load chart data" });
  }
}
