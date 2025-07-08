"use client";

import React from 'react';
import TransactionForm from './TransactionForm';
import TransactionList from './TransactionList';
import MonthlyExpensesBarChart from './MonthlyExpensesBarChart';
import CategoryPieChart from './CategoryPieChart';
import SummaryCards from './SummaryCards';
import BudgetComparisonChart from './BudgetComparisonChart';
import SpendingInsights from './SpendingInsights';

export default function Dashboard() {
  return (
    <div className="p-4 grid grid-cols-1 md:grid-cols-2 gap-4">
      {/* Left side: form and transactions */}
      <div className="space-y-4">
        <SummaryCards />
        <TransactionForm />
        <TransactionList />
      </div>

      {/* Right side: charts */}
      <div className="space-y-4">
        <div className="bg-black/30 p-4 rounded-xl backdrop-blur-sm">
          <MonthlyExpensesBarChart />
        </div>
        <div className="bg-black/30 p-4 rounded-xl backdrop-blur-sm">
          <CategoryPieChart />
        </div>
        <div className="bg-black/30 p-4 rounded-xl backdrop-blur-sm">
          <BudgetComparisonChart />
        </div>
        <div className="bg-black/30 p-4 rounded-xl backdrop-blur-sm">
          <SpendingInsights />
        </div>
      </div>
    </div>
  );
}
