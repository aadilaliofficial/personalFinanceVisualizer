"use client";

import useSWR from 'swr';

export default function SpendingInsights() {
  const { data = [] } = useSWR('/api/insights', (url) => fetch(url).then(res => res.json()));
  return (
    <div>
      <h2 className="text-lg font-bold mb-2">Spending Insights</h2>
      <ul className="list-disc ml-5">
        {data.map((insight, i) => <li key={i}>{insight}</li>)}
      </ul>
    </div>
  );
}
