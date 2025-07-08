import { connectDB } from '@/lib/db';
import { Transaction } from '@/models/transaction';

export default async function handler(req, res) {
  await connectDB();

  const transactions = await Transaction.find();
  const totalSpent = transactions.reduce((sum, t) => sum + t.amount, 0);

  const insights = [];

  if (totalSpent > 10000) {
    insights.push("You're spending a lot this month. Consider setting tighter budgets.");
  } else {
    insights.push("Great job staying under ₹10,000 this month!");
  }

  const categoryCount = {};
  transactions.forEach(t => {
    categoryCount[t.category] = (categoryCount[t.category] || 0) + 1;
  });

  const mostFrequentCategory = Object.entries(categoryCount)
    .sort((a, b) => b[1] - a[1])[0]?.[0];

  if (mostFrequentCategory) {
    insights.push(`You're spending most frequently in '${mostFrequentCategory}' category.`);
  }

  res.status(200).json(insights);
}
