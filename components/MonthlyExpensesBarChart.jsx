"use client";

import React from 'react';
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer } from 'recharts';

export default function MonthlyExpensesBarChart({ data }) {
  return (
    <div className="bg-white/10 backdrop-blur-md border border-cyan-400 shadow-[0_0_10px_#22d3ee] rounded-xl p-4 max-w-4xl mx-auto mt-6">
      <h2 className="text-lg text-cyan-200 font-semibold mb-2">Monthly Expenses</h2>
      <ResponsiveContainer width="100%" height={250}>
        <BarChart data={data}>
          <XAxis dataKey="month" stroke="#67e8f9"/>
          <YAxis stroke="#67e8f9"/>
          <Tooltip wrapperStyle={{ color: '#000' }}/>
          <Bar dataKey="total" fill="#22d3ee" radius={[5, 5, 0, 0]} />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}