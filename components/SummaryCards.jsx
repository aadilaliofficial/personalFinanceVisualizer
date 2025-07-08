"use client";

import useSWR from 'swr';

export default function SummaryCards() {
  const { data = {} } = useSWR('/api/summary', (url) => fetch(url).then(res => res.json()));

  return (
    <div className="grid grid-cols-2 gap-2">
      <div className="bg-black/40 text-white backdrop-blur-sm">Total: ₹{data.total || 0}</div>
      <div className="bg-black/40 text-white backdrop-blur-sm">Top Category: {data.topCategory || '-'}</div>
    </div>
  );
}
