"use client";

import { useState } from 'react';

export default function BudgetForm({ mutate }) {
  const [category, setCategory] = useState('');
  const [amount, setAmount] = useState('');
  const [month, setMonth] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    await fetch('/api/budgets', {
      method: 'POST',
      body: JSON.stringify({ category, amount, month }),
    });
    setCategory('');
    setAmount('');
    setMonth('');
    if (mutate) mutate();
  };

  return (
    <form onSubmit={handleSubmit} className="bg-white/10 p-4 rounded border border-cyan-400 shadow-[0_0_10px_#0ff] space-y-3">
      <h3 className="text-lg font-bold text-cyan-300">Set Budget</h3>
      <input type="text" value={category} onChange={(e) => setCategory(e.target.value)} placeholder="Category" className="w-full p-2 rounded bg-black/30 text-white" required />
      <input type="number" value={amount} onChange={(e) => setAmount(e.target.value)} placeholder="Amount" className="w-full p-2 rounded bg-black/30 text-white" required />
      <input type="month" value={month} onChange={(e) => setMonth(e.target.value)} className="w-full p-2 rounded bg-black/30 text-white" required />
      <button type="submit" className="bg-cyan-500 text-black px-4 py-2 rounded hover:bg-cyan-400">Add Budget</button>
    </form>
  );
}
