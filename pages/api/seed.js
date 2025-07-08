import { connectDB } from '@/lib/db';
import { Transaction } from '@/models/transaction';

export default async function handler(req, res) {
  try {
    await connectDB();

    await Transaction.insertMany([
      { amount: 500, category: 'Food', description: 'Pizza', date: '2024-01-10' },
      { amount: 1000, category: 'Rent', description: 'Jan Rent', date: '2024-01-01' },
      { amount: 150, category: 'Transport', description: 'Bus fare', date: '2024-02-05' },
      { amount: 200, category: 'Shopping', description: 'T-shirt', date: '2024-02-18' },
      { amount: 300, category: 'Food', description: 'Lunch', date: '2024-03-12' }
    ]);

    res.status(200).json({ message: 'Dummy transactions added ✅' });
  } catch (err) {
    console.error("❌ Seed Error:", err.message);
    res.status(500).json({ error: 'Failed to seed data' });
  }
}
