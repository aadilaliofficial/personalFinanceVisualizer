"use client";

import { BarChart, Bar, XAxis, YAxis, Tooltip } from 'recharts';
import useSWR from 'swr';

const fetcher = (url) => fetch(url).then((res) => res.json());

export default function MonthlyExpensesBarChart() {
  const { data, error, isLoading } = useSWR('/api/transactions/monthly', fetcher);

  if (error) return <p className="text-red-500">❌ Failed to load chart.</p>;
  if (isLoading || !Array.isArray(data)) return <p className="text-white">Loading chart...</p>;
  if (data.length === 0) return <p className="text-white">No chart data available.</p>;

  return (
    <div>
      <h2 className="text-lg font-bold mb-2 text-white">Monthly Expenses</h2>
      <BarChart width={350} height={200} data={data}>
        <XAxis dataKey="month" stroke="#fff" />
        <YAxis stroke="#fff" />
        <Tooltip
          contentStyle={{ backgroundColor: "#1f2937", border: "none", color: "white" }}
          labelStyle={{ color: "white" }}
        />
        <Bar dataKey="amount" fill="#4f46e5" />
      </BarChart>
    </div>
  );
}
