"use client";

import React from 'react';

export default function TransactionList({ transactions = [], onDelete }) {
  return (
    <div className="space-y-3 w-full max-w-3xl mx-auto mt-6">
      {transactions.map((tx) => (
        <div key={tx._id} className="flex justify-between items-center bg-white/10 backdrop-blur-md p-4 rounded-lg border border-cyan-400 shadow-[0_0_10px_#22d3ee]">
          <div>
            <div className="text-lg font-bold">₹{tx.amount}</div>
            <div className="text-sm text-cyan-200">{tx.description} - {tx.category}</div>
            <div className="text-xs text-cyan-300">{new Date(tx.date).toLocaleDateString()}</div>
          </div>
          <button onClick={() => onDelete(tx._id)} className="text-red-400 hover:text-red-500 font-semibold">Delete</button>
        </div>
      ))}
    </div>
  );
}