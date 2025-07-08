"use client";

import useSWR from 'swr';

export default function TransactionList() {
  const { data: transactions = [], mutate } = useSWR('/api/transactions', (url) => fetch(url).then(res => res.json()));

  const handleDelete = async (id) => {
    await fetch(`/api/transactions/${id}`, { method: 'DELETE' });
    mutate();
  };

  return (
    <div>
      <h2 className="text-lg font-bold mb-2">Transactions</h2>
      <ul className="space-y-2">
        {transactions.map((t) => (
          <li key={t._id} className="p-2 border flex justify-between items-center">
            <div>
              <p>{t.description} - ₹{t.amount}</p>
              <p className="text-sm text-gray-500">{t.date.slice(0, 10)} - {t.category}</p>
            </div>
            <button onClick={() => handleDelete(t._id)} className="text-red-500">Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
}