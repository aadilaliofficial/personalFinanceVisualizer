"use client";

import React, { useState } from 'react';
import { Button } from '@/components/ui/button';

export default function TransactionForm() {
  const [form, setForm] = useState({ amount: '', date: '', description: '', category: '' });
  const categories = ['Food', 'Transport', 'Rent', 'Shopping', 'Bills', 'Other'];

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!form.amount || !form.date || !form.description || !form.category)
      return alert('All fields required');

    await fetch('/api/transactions', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(form),
    });

    setForm({ amount: '', date: '', description: '', category: '' });
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4 p-4 bg-white/10 backdrop-blur-md rounded-xl border-2 border-cyan-400 shadow-[0_0_15px_#22d3ee] w-full max-w-md mx-auto">
      <input
        type="number"
        placeholder="Amount"
        value={form.amount}
        onChange={(e) => setForm({ ...form, amount: e.target.value })}
        className="w-full p-3 bg-transparent border border-cyan-300 rounded-md text-white placeholder:text-cyan-200"
      />
      <input
        type="date"
        value={form.date}
        onChange={(e) => setForm({ ...form, date: e.target.value })}
        className="w-full p-3 bg-transparent border border-cyan-300 rounded-md text-white"
      />
      <input
        type="text"
        placeholder="Description"
        value={form.description}
        onChange={(e) => setForm({ ...form, description: e.target.value })}
        className="w-full p-3 bg-transparent border border-cyan-300 rounded-md text-white placeholder:text-cyan-200"
      />
      <select
        value={form.category}
        onChange={(e) => setForm({ ...form, category: e.target.value })}
        className="w-full p-3 bg-transparent border border-cyan-300 rounded-md text-white"
      >
        <option value="" className="bg-black text-white">Select Category</option>
        {categories.map((c) => (
          <option key={c} value={c} className="bg-black text-white">
            {c}
          </option>
        ))}
      </select>
      <Button type="submit" className="bg-gradient-to-r from-purple-500 to-pink-500 text-white shadow-[0_0_10px_#ec4899] w-full">
        Add Transaction
      </Button>
    </form>
  );
}