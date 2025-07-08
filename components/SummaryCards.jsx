"use client";

import React from 'react';

export default function SummaryCards({ total, recent }) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-6 max-w-6xl mx-auto">
      <div className="p-4 bg-white/10 backdrop-blur-md border border-cyan-400 shadow-[0_0_10px_#22d3ee] rounded-xl">
        <h3 className="text-cyan-300">Total Expenses</h3>
        <p className="text-2xl font-bold">₹{total}</p>
      </div>
      <div className="p-4 bg-white/10 backdrop-blur-md border border-cyan-400 shadow-[0_0_10px_#22d3ee] rounded-xl">
        <h3 className="text-cyan-300">Most Recent</h3>
        {recent ? (
          <p className="text-sm">{recent.description} - ₹{recent.amount}</p>
        ) : (
          <p className="text-sm text-cyan-200">No transactions</p>
        )}
      </div>
      <div className="p-4 bg-white/10 backdrop-blur-md border border-cyan-400 shadow-[0_0_10px_#22d3ee] rounded-xl">
        <h3 className="text-cyan-300">Powered by MongoDB</h3>
        <p className="text-sm">Dynamic data connected</p>
      </div>
    </div>
  );
}