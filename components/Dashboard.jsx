"use client";

import React from 'react';
import useSWR from 'swr';
import TransactionForm from './TransactionForm';
import TransactionList from './TransactionList';
import MonthlyExpensesBarChart from './MonthlyExpensesBarChart';
import CategoryPieChart from './CategoryPieChart';
import SummaryCards from './SummaryCards';
import BudgetComparisonChart from './BudgetComparisonChart';
import SpendingInsights from './SpendingInsights';

const fetcher = (url) => fetch(url).then(res => res.json());

export default function Dashboard() {
  const { data: transactions = [], mutate } = useSWR('/api/transactions', fetcher);

  const handleDelete = async (id) => {
    await fetch(`/api/transactions/${id}`, { method: 'DELETE' });
    mutate(); // re-fetch data
  };

  return (
    <div className="p-4 grid grid-cols-1 md:grid-cols-2 gap-4">
      <div className="space-y-4">
        <SummaryCards transactions={transactions} />
        <TransactionForm mutate={mutate} />
        <TransactionList transactions={transactions} onDelete={handleDelete} />
      </div>
      <div className="space-y-4">
        <MonthlyExpensesBarChart transactions={transactions} />
        <CategoryPieChart transactions={transactions} />
        <BudgetComparisonChart transactions={transactions} />
        <SpendingInsights transactions={transactions} />
      </div>
    </div>
  );
}
