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
    <form
      onSubmit={handleSubmit}
      className="space-y-4 bg-black/30 p-4 rounded-xl backdrop-blur-sm"
    >
      <input
        type="number"
        placeholder="Amount"
        value={form.amount}
        onChange={(e) => setForm({ ...form, amount: e.target.value })}
        className="w-full p-3 rounded bg-white/20 text-white placeholder-white outline-none"
      />
      <input
        type="date"
        value={form.date}
        onChange={(e) => setForm({ ...form, date: e.target.value })}
        className="w-full p-3 rounded bg-white/20 text-white outline-none"
      />
      <input
        type="text"
        placeholder="Description"
        value={form.description}
        onChange={(e) => setForm({ ...form, description: e.target.value })}
        className="w-full p-3 rounded bg-white/20 text-white placeholder-white outline-none"
      />
      <select
        value={form.category}
        onChange={(e) => setForm({ ...form, category: e.target.value })}
        className="w-full p-3 rounded bg-white/20 text-white outline-none"
      >
        <option value="">Select Category</option>
        {categories.map((c) => (
          <option key={c} value={c}>
            {c}
          </option>
        ))}
      </select>
      <Button type="submit" className="w-full bg-white text-black hover:bg-gray-200">
        Add Transaction
      </Button>
    </form>
  );
}
