import { connectDB } from '@/lib/db'; // or @/lib/mongodb if you renamed it
import { Budget } from '@/models/budget';

export async function GET() {
  await connectDB();
  const budgets = await Budget.find({});
  return Response.json(budgets);
}

export async function POST(req) {
  await connectDB();
  const data = await req.json();
  const newBudget = await Budget.create(data);
  return Response.json(newBudget);
}
