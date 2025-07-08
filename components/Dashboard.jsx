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

// Data fetcher using native fetch
const fetcher = (url) => fetch(url).then(res => res.json());

export default function Dashboard() {
  const { data: transactions = [], mutate, isLoading, error } = useSWR('/api/transactions', fetcher);

  const handleDelete = async (id) => {
    try {
      await fetch(`/api/transactions/${id}`, { method: 'DELETE' });
      mutate(); // Refresh data
    } catch (err) {
      console.error("Error deleting transaction:", err);
    }
  };

  if (isLoading) {
    return <p className="text-center text-cyan-400 mt-6">Loading...</p>;
  }

  if (error) {
    return <p className="text-center text-red-400 mt-6">Failed to load data.</p>;
  }

  return (
    <div className="p-4 grid grid-cols-1 md:grid-cols-2 gap-4 text-white">
      {/* Left Column: Form & List */}
      <div className="space-y-4">
        <SummaryCards transactions={transactions} />
        <TransactionForm mutate={mutate} />
        <TransactionList transactions={transactions} onDelete={handleDelete} />
      </div>

      {/* Right Column: Charts */}
      <div className="space-y-4">
        <MonthlyExpensesBarChart transactions={transactions} />
        <CategoryPieChart transactions={transactions} />
        <BudgetComparisonChart transactions={transactions} />
        <SpendingInsights transactions={transactions} />
      </div>
    </div>
  );
}
