"use client";
import React from 'react';
import { PieChart, Pie, Cell, Tooltip, Legend } from 'recharts';

const COLORS = ['#00FFFF', '#FF69B4', '#FFD700', '#ADFF2F', '#FF4500'];

export default function CategoryPieChart({ transactions = [] }) {
  if (!transactions.length) {
    return (
      <div className="text-center text-cyan-300 bg-white/5 p-4 rounded shadow">
        No transactions to show.
      </div>
    );
  }

  const categoryData = transactions.reduce((acc, tx) => {
    const cat = tx.category || 'Uncategorized';
    acc[cat] = (acc[cat] || 0) + Number(tx.amount);
    return acc;
  }, {});

  const data = Object.entries(categoryData).map(([name, value]) => ({ name, value }));

  return (
    <div className="bg-white/5 p-4 rounded shadow-[0_0_10px_#0ff]">
      <h3 className="text-lg font-bold text-cyan-300 mb-2">Category Breakdown</h3>
      <PieChart width={300} height={300}>
        <Pie data={data} dataKey="value" nameKey="name" cx="50%" cy="50%" outerRadius={100} label>
          {data.map((_, index) => (
            <Cell key={index} fill={COLORS[index % COLORS.length]} />
          ))}
        </Pie>
        <Tooltip />
        <Legend />
      </PieChart>
    </div>
  );
}
