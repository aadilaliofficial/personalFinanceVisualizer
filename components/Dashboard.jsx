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
      <div className="space-y-4">
        <SummaryCards />
        <TransactionForm />
        <TransactionList />
      </div>
      <div className="space-y-4">
        <MonthlyExpensesBarChart />
        <CategoryPieChart />
        <BudgetComparisonChart />
        <SpendingInsights />
      </div>
    </div>
  );
}