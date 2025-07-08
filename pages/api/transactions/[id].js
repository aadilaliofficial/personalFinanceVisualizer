import { connectDB } from '@/lib/db';
import { Transaction } from '@/models/transaction';

export default async function handler(req, res) {
  await connectDB();

  if (req.method === 'DELETE') {
    const { id } = req.query;
    await Transaction.findByIdAndDelete(id);
    return res.status(200).json({ message: 'Deleted' });
  }

  return res.status(405).json({ message: 'Method not allowed' });
}
