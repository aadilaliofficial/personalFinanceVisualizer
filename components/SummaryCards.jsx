"use client";

import useSWR from 'swr';

export default function SummaryCards() {
  const { data = {} } = useSWR('/api/summary', (url) => fetch(url).then(res => res.json()));

  return (
    <div className="grid grid-cols-2 gap-2">
      <div className="p-4 bg-gray-100 rounded-xl">Total: ₹{data.total || 0}</div>
      <div className="p-4 bg-gray-100 rounded-xl">Top Category: {data.topCategory || '-'}</div>
    </div>
  );
}