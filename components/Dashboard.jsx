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
import BudgetForm from './BudgetForm';

const fetcher = (url) => fetch(url).then(res => res.json());

export default function Dashboard() {
  const { data: transactions = [], mutate: mutateTransactions } = useSWR('/api/transactions', fetcher);
  const { data: budgets = [], mutate: mutateBudgets } = useSWR('/api/budgets', fetcher);

  const handleDelete = async (id) => {
    await fetch(`/api/transactions/${id}`, { method: 'DELETE' });
    mutateTransactions();
  };

  return (
    <div className="p-4 grid grid-cols-1 md:grid-cols-2 gap-4">
      {/* Left: Forms and List */}
      <div className="space-y-4">
        <SummaryCards transactions={transactions} />
        <TransactionForm mutate={mutateTransactions} />
        <BudgetForm mutate={mutateBudgets} />
        <TransactionList transactions={transactions} onDelete={handleDelete} />
      </div>

      {/* Right: Charts and Insights */}
      <div className="space-y-4">
        <div className="bg-black/30 p-4 rounded-xl backdrop-blur-sm border border-cyan-400 shadow-[0_0_10px_#22d3ee]">
          <MonthlyExpensesBarChart transactions={transactions} />
        </div>
        <div className="bg-black/30 p-4 rounded-xl backdrop-blur-sm border border-cyan-400 shadow-[0_0_10px_#22d3ee]">
          <CategoryPieChart transactions={transactions} />
        </div>
        <div className="bg-black/30 p-4 rounded-xl backdrop-blur-sm border border-cyan-400 shadow-[0_0_10px_#22d3ee]">
          <BudgetComparisonChart transactions={transactions} budgets={budgets} />
        </div>
        <div className="bg-black/30 p-4 rounded-xl backdrop-blur-sm border border-cyan-400 shadow-[0_0_10px_#22d3ee]">
          <SpendingInsights transactions={transactions} budgets={budgets} />
        </div>
      </div>
    </div>
  );
}
