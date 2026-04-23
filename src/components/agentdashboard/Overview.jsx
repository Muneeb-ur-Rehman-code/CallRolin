// src/components/dashboard/Overview.tsx
import React from 'react';
import { CheckCircle2, XCircle } from 'lucide-react';

export default function Overview() {
  return (
    <div className="space-y-8">
      {/* Header */}
      <div>
        <h1 className="text-2xl font-bold">Test Results</h1>
        <p className="text-gray-400 mt-1">
          Review your agent performance metrics
        </p>
      </div>

      {/* Top stats cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
        {/* Pass Rate */}
        <div className="bg-gray-900/10 border border-gray-900/70 rounded-xl p-6">
          <div className="text-sm text-gray-400 mb-1">Pass rate</div>
          <div className="text-4xl font-bold ">99%</div>
          <div className="text-sm text-gray-500 mt-2">
            Based on 1,250 simulations
          </div>
        </div>

        {/* Simulations passed */}
        <div className="bg-gray-900/10 border border-gray-900/70 rounded-xl p-6">
          <div className="text-sm text-gray-400 mb-1">Simulations passed</div>
          <div className="text-4xl font-bold text-white">1,240</div>
          <div className="text-sm text-gray-500 mt-2">
            All conditions met
          </div>
        </div>

        {/* Simulations failed */}
        <div className="bg-gray-900/10 border border-gray-900/70 rounded-xl p-6">
          <div className="text-sm text-gray-400 mb-1">Simulations failed</div>
          <div className="text-4xl font-bold">10</div>
          <div className="text-sm text-gray-500 mt-2">
            Failure conditions detected
          </div>
        </div>
      </div>

      {/* Test cases table */}
      <div className="bg-gray-900/10 border border-gray-900/70 rounded-xl overflow-hidden">
        {/* <div className="px-6 py-4 border-b border-gray-800">
          <h2 className="text-lg font-semibold">Recent Test Cases</h2>
        </div> */}

        <div className="divide-y divide-gray-800">
          {/* Header row */}
          <div className="grid grid-cols-12 gap-4 px-6 py-3.5 bg-gray-900/40 text-sm font-bold">
            <div className="col-span-5">Test case</div>
            <div className="col-span-3">Status</div>
            <div className="col-span-2">Pass rate</div>
          </div>

          {/* Rows */}
          {[
            {
              name: 'Response Accuracy Test',
              status: 'Passed',
              rate: '100%',
              good: true,
            },
            {
              name: 'User Interaction Simulation',
              status: 'Passed',
              rate: '100%',
              good: true,
            },
            // You can add more rows here...
          ].map((item, i) => (
            <div
              key={i}
              className="grid grid-cols-12 gap-4 px-6 py-10 hover:bg-gray-800/30 transition-colors"
            >
              <div className="col-span-5 font-medium">{item.name}</div>

              <div className="col-span-3 flex items-center gap-2">
                {item.good ? (
                  <CheckCircle2 className="text-green-500" size={18} />
                ) : (
                  <XCircle className="text-red-500" size={18} />
                )}
                <span className={item.good ? '' : ''}>
                  {item.status}
                </span>
              </div>

              <div className="col-span-2 font-medium ">
                {item.rate}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}