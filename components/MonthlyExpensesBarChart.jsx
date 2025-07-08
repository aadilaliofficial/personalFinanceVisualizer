"use client";

import { BarChart, Bar, XAxis, YAxis, Tooltip } from 'recharts';
import useSWR from 'swr';

export default function MonthlyExpensesBarChart() {
  const { data = [] } = useSWR('/api/transactions/monthly', (url) => fetch(url).then(res => res.json()));

  return (
    <div>
      <h2 className="text-lg font-bold mb-2">Monthly Expenses</h2>
      <BarChart width={350} height={200} data={data}>
        <XAxis dataKey="month" />
        <YAxis />
        <Tooltip />
        <Bar dataKey="amount" fill="#4f46e5" />
      </BarChart>
    </div>
  );
}