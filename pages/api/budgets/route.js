import { connectDB } from '@/lib/db'; 
import { Budget } from '@/models/budget';
import { Transaction } from '@/models/transaction';

export async function GET() {
  try {
    await connectDB();

    const currentMonth = new Date().toISOString().slice(0, 7); 

    // Fetch budgets for the current month
    const budgets = await Budget.find({ month: currentMonth });

    // Fetch transactions for the current month
    const transactions = await Transaction.find({
      date: { $regex: `^${currentMonth}` }
    });

    // Group spending by category
    const actualSpending = {};
    transactions.forEach(tx => {
      actualSpending[tx.category] = (actualSpending[tx.category] || 0) + tx.amount;
    });

    // Prepare comparison data
    const data = budgets.map(b => ({
      category: b.category,
      budget: b.amount,
      actual: actualSpending[b.category] || 0
    }));

    return Response.json(data);
  } catch (err) {
    console.error('Budget comparison error:', err);
    return new Response(JSON.stringify({ error: 'Server error' }), { status: 500 });
  }
}
