"use client";

import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer } from 'recharts';
import useSWR from 'swr';

export default function MonthlyExpensesBarChart() {
  const { data = [], error } = useSWR('/api/transactions/monthly', (url) => fetch(url).then(res => res.json()));

  if (error) return <p className="text-red-500">Failed to load chart</p>;
  if (!data || data.length === 0) return <p className="text-white">No data to display</p>;

  // Format month label: 2024-01 → Jan 2024
  const formattedData = data.map(item => {
    const [year, month] = item.month.split("-");
    const monthNames = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
    return {
      ...item,
      month: `${monthNames[parseInt(month) - 1]} ${year}`
    };
  });

  return (
    <div>
      <h2 className="text-lg font-bold mb-2 text-white">Monthly Expenses</h2>
      <ResponsiveContainer width="100%" height={250}>
        <BarChart data={formattedData}>
          <XAxis dataKey="month" stroke="#fff" />
          <YAxis stroke="#fff" />
          <Tooltip
            contentStyle={{ backgroundColor: "#1f2937", border: "none", color: "white" }}
            labelStyle={{ color: "white" }}
          />
          <Bar dataKey="amount" fill="#4f46e5" />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}
