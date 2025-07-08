"use client";

import { PieChart, Pie, Tooltip } from 'recharts';
import useSWR from 'swr';

export default function CategoryPieChart() {
  const { data = [] } = useSWR('/api/transactions/categories', (url) => fetch(url).then(res => res.json()));

  return (
    <div>
      <h2 className="text-lg font-bold mb-2">Category Breakdown</h2>
      <PieChart width={300} height={200}>
        <Pie data={data} dataKey="amount" nameKey="category" outerRadius={80} fill="#6366f1" label />
        <Tooltip />
      </PieChart>
    </div>
  );
}