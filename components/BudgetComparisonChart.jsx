"use client";

import { BarChart, Bar, XAxis, YAxis, Tooltip, Legend } from 'recharts';
import useSWR from 'swr';

export default function BudgetComparisonChart() {
  const { data = [] } = useSWR('/api/budgets/comparison', (url) => fetch(url).then(res => res.json()));

  return (
    <div>
      <h2 className="text-lg font-bold mb-2">Budget vs Actual</h2>
      <BarChart width={350} height={200} data={data}>
        <XAxis dataKey="category" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Bar dataKey="budget" fill="#22c55e" name="Budget" />
        <Bar dataKey="actual" fill="#ef4444" name="Actual" />
      </BarChart>
    </div>
  );
}