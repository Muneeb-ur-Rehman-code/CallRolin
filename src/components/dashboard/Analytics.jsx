import React from 'react';
import { TrendingUp, TrendingDown } from 'lucide-react';

const Analytics = () => {
  const mainStats = [
    { label: 'Success Rate', value: '94%', change: '+5%', trend: 'up' },
    { label: 'Avg Response Time', value: '1.2s', change: '-3%', trend: 'down' },
    { label: 'Conversations', value: '2,541', change: '+5%', trend: 'up' },
    { label: 'Escalation Rate', value: '8%', change: '-3%', trend: 'down' }
  ];

  const intentAccuracy = [
    { label: 'Support Requests', value: 96 },
    { label: 'Billing Questions', value: 88 },
    { label: 'Feature Inquiries', value: 91 },
    { label: 'Complaints', value: 78 }
  ];

  const unresolvedQueries = [
    { label: 'Policy questions', value: 12 },
    { label: 'Technical issues', value: 8 },
    { label: 'Complex scenarios', value: 15 }
  ];

  const sentimentData = [
    { label: 'Positive', value: 72, color: 'bg-green-500' },
    { label: 'Neutral', value: 20, color: 'bg-yellow-500' },
    { label: 'Negative', value: 8, color: 'bg-red-500' }
  ];

  return (
    <div className="p-6 h-full overflow-hidden">
      {/* Header */}
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-white mb-2">Analytics Dashboard</h1>
        <p className="text-white/60">Monitor your agent's performance and improvement opportunities</p>
      </div>

      {/* Main Stats Grid */}
      <div className="grid grid-cols-4 gap-6 mb-8">
        {mainStats.map((stat, index) => (
          <div key={index} className="relative bg-gray-700/20 backdrop-blur-xl border border-white/10 rounded-2xl p-6"
            style={{ backdropFilter: 'blur(20px)', WebkitBackdropFilter: 'blur(20px)' }}
          >
            <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent rounded-2xl pointer-events-none"></div>
            <div className="relative z-10">
              <p className="text-white/60 text-sm mb-2">{stat.label}</p>
              <div className="flex items-end gap-3">
                <span className="text-4xl font-bold text-white">{stat.value}</span>
                <span className={`flex items-center gap-1 text-sm font-semibold mb-1 ${
                  stat.trend === 'up' ? 'text-green-400' : 'text-green-400'
                }`}>
                  {stat.trend === 'up' ? (
                    <TrendingUp className="w-4 h-4" />
                  ) : (
                    <TrendingDown className="w-4 h-4" />
                  )}
                  {stat.change}
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="grid grid-cols-3 gap-6">
        {/* Intent Accuracy */}
        <div className="relative bg-gray-700/20 backdrop-blur-xl border border-white/10 rounded-2xl p-6"
          style={{ backdropFilter: 'blur(20px)', WebkitBackdropFilter: 'blur(20px)' }}
        >
          <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent rounded-2xl pointer-events-none"></div>
          <div className="relative z-10">
            <h3 className="text-xl font-bold text-white mb-6">Intent Accuracy</h3>
            <div className="space-y-4">
              {intentAccuracy.map((item, index) => (
                <div key={index}>
                  <div className="flex justify-between mb-2">
                    <span className="text-white/80 text-sm">{item.label}</span>
                    <span className="text-white font-semibold text-sm">{item.value}%</span>
                  </div>
                  <div className="w-full h-2 bg-white/10 rounded-full overflow-hidden">
                    <div 
                      className="h-full bg-gradient-to-r from-blue-500 to-cyan-400 rounded-full transition-all"
                      style={{ width: `${item.value}%` }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Unresolved Queries */}
        <div className="relative bg-gray-700/20 backdrop-blur-xl border border-white/10 rounded-2xl p-6"
          style={{ backdropFilter: 'blur(20px)', WebkitBackdropFilter: 'blur(20px)' }}
        >
          <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent rounded-2xl pointer-events-none"></div>
          <div className="relative z-10">
            <h3 className="text-xl font-bold text-white mb-6">Unresolved Queries</h3>
            <div className="space-y-4">
              {unresolvedQueries.map((item, index) => (
                <div key={index}>
                  <div className="flex justify-between mb-2">
                    <span className="text-white/80 text-sm">{item.label}</span>
                    <span className="text-white font-semibold text-sm">{item.value}%</span>
                  </div>
                  <div className="w-full h-2 bg-white/10 rounded-full overflow-hidden">
                    <div 
                      className="h-full bg-gradient-to-r from-orange-500 to-red-400 rounded-full transition-all"
                      style={{ width: `${item.value}%` }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Sentiment Analysis */}
        <div className="relative bg-gray-700/20 backdrop-blur-xl border border-white/10 rounded-2xl p-6"
          style={{ backdropFilter: 'blur(20px)', WebkitBackdropFilter: 'blur(20px)' }}
        >
          <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent rounded-2xl pointer-events-none"></div>
          <div className="relative z-10">
            <h3 className="text-xl font-bold text-white mb-6">Sentiment Analysis</h3>
            
            {/* Donut Chart Representation */}
            <div className="flex items-center justify-center mb-6">
              <div className="relative w-40 h-40">
                <svg className="w-full h-full transform -rotate-90" viewBox="0 0 100 100">
                  {/* Background circle */}
                  <circle cx="50" cy="50" r="40" fill="none" stroke="rgba(255,255,255,0.1)" strokeWidth="12" />
                  {/* Positive segment */}
                  <circle 
                    cx="50" cy="50" r="40" fill="none" 
                    stroke="#22c55e" strokeWidth="12"
                    strokeDasharray={`${72 * 2.51} ${100 * 2.51}`}
                    strokeDashoffset="0"
                  />
                  {/* Neutral segment */}
                  <circle 
                    cx="50" cy="50" r="40" fill="none" 
                    stroke="#eab308" strokeWidth="12"
                    strokeDasharray={`${20 * 2.51} ${100 * 2.51}`}
                    strokeDashoffset={`${-72 * 2.51}`}
                  />
                  {/* Negative segment */}
                  <circle 
                    cx="50" cy="50" r="40" fill="none" 
                    stroke="#ef4444" strokeWidth="12"
                    strokeDasharray={`${8 * 2.51} ${100 * 2.51}`}
                    strokeDashoffset={`${-92 * 2.51}`}
                  />
                </svg>
              </div>
            </div>

            {/* Legend */}
            <div className="space-y-3">
              {sentimentData.map((item, index) => (
                <div key={index} className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className={`w-3 h-3 rounded-full ${item.color}`}></div>
                    <span className="text-white/80 text-sm">{item.label}</span>
                  </div>
                  <span className="text-white font-semibold text-sm">{item.value}%</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Analytics;
