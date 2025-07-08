"use client";

import React from 'react';
import { PieChart, Pie, Cell, Tooltip, ResponsiveContainer } from 'recharts';

const COLORS = ['#22d3ee', '#a855f7', '#ec4899', '#facc15', '#34d399', '#f87171'];

export default function CategoryPieChart({ data = [] }) {
  if (!data || !Array.isArray(data) || data.length === 0) {
    return (
      <div className="bg-white/10 backdrop-blur-md border border-cyan-400 shadow-[0_0_10px_#22d3ee] rounded-xl p-4 max-w-4xl mx-auto mt-6 text-center text-cyan-200">
        No category data to display
      </div>
    );
  }

  return (
    <div className="bg-white/10 backdrop-blur-md border border-cyan-400 shadow-[0_0_10px_#22d3ee] rounded-xl p-4 max-w-4xl mx-auto mt-6">
      <h2 className="text-lg text-cyan-200 font-semibold mb-2">Spending by Category</h2>
      <ResponsiveContainer width="100%" height={250}>
        <PieChart>
          <Pie
            data={data}
            dataKey="value"
            nameKey="name"
            cx="50%"
            cy="50%"
            outerRadius={80}
            label
          >
            {data.map((_, index) => (
              <Cell key={index} fill={COLORS[index % COLORS.length]} />
            ))}
          </Pie>
          <Tooltip wrapperStyle={{ color: '#000' }} />
        </PieChart>
      </ResponsiveContainer>
    </div>
  );
}
