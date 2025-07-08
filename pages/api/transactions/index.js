import { connectDB } from '@/lib/db';
import { Transaction } from '@/models/transaction';

export default async function handler(req, res) {
  await connectDB();

  if (req.method === 'GET') {
    const transactions = await Transaction.find().sort({ createdAt: -1 });
    return res.status(200).json(transactions);
  }

  if (req.method === 'POST') {
    const { amount, date, description, category } = req.body;
    const newTransaction = await Transaction.create({ amount, date, description, category });
    return res.status(201).json(newTransaction);
  }

  return res.status(405).json({ message: 'Method not allowed' });
}
