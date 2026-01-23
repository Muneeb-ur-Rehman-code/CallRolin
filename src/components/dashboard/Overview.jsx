import React, { useState } from 'react';
import { Sparkles, Bot, BarChart3, ChevronRight } from 'lucide-react';

const Overview = () => {
  const [hoveredCard, setHoveredCard] = useState(null);

  const recentActivities = [
    { 
      name: 'Banking AI support agent', 
      time: '2 hours ago', 
      status: 'deployed',
      statusColor: 'bg-green-500/20 text-green-400 border-green-500/30'
    },
    { 
      name: 'HR onboarding bot', 
      time: '5 hours ago', 
      status: 'draft',
      statusColor: 'bg-yellow-500/20 text-yellow-400 border-yellow-500/30'
    },
    { 
      name: 'Sales qualification agent', 
      time: '1 day ago', 
      status: 'testing',
      statusColor: 'bg-blue-500/20 text-blue-400 border-blue-500/30'
    }
  ];

  const mainCards = [
    {
      id: 1,
      icon: Sparkles,
      title: 'Create New Agent',
      description: 'Set up a new AI agent with custom training',
      bgGradient: 'from-purple-500/10 to-pink-500/10',
      iconColor: 'text-purple-400',
      borderColor: 'border-purple-500/20',
      hoverBorder: 'hover:border-purple-500/40'
    },
    {
      id: 2,
      icon: Bot,
      title: 'View Agents',
      description: 'Manage existing agents and workflows',
      bgGradient: 'from-blue-500/10 to-cyan-500/10',
      iconColor: 'text-blue-400',
      borderColor: 'border-blue-500/20',
      hoverBorder: 'hover:border-blue-500/40'
    },
    {
      id: 3,
      icon: BarChart3,
      title: 'Analytics',
      description: 'Monitor agent performance metrics',
      bgGradient: 'from-green-500/10 to-emerald-500/10',
      iconColor: 'text-green-400',
      borderColor: 'border-green-500/20',
      hoverBorder: 'hover:border-green-500/40'
    }
  ];

  return (
    <div className="p-6 h-full overflow-hidden">
      {/* Header */}
      <div className="mb-6">
        <h1 className="text-2xl font-bold text-white mb-1 tracking-tight">CallRollins</h1>
        <p className="text-white/60 text-sm">Build, manage, and deploy intelligent AI agents</p>
      </div>

      {/* Main Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
        {mainCards.map((card) => (
          <div
            key={card.id}
            className={`relative bg-gradient-to-br ${card.bgGradient} backdrop-blur-xl bg-gray-700/30 border ${card.borderColor} ${card.hoverBorder} rounded-xl p-4 transition-all duration-300 hover:scale-[1.02] hover:shadow-xl cursor-pointer group`}
            onMouseEnter={() => setHoveredCard(card.id)}
            onMouseLeave={() => setHoveredCard(null)}
            style={{
              backdropFilter: 'blur(16px)',
              WebkitBackdropFilter: 'blur(16px)',
            }}
          >
            {/* Glassy overlay effect */}
            <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent rounded-xl pointer-events-none"></div>
            
            {/* Content */}
            <div className="relative z-10">
              <div className={`w-10 h-10 ${card.iconColor} mb-3 flex items-center justify-center bg-white/5 backdrop-blur-sm rounded-lg border border-white/10 transition-transform duration-300 ${hoveredCard === card.id ? 'scale-110' : ''}`}>
                <card.icon className="w-5 h-5" strokeWidth={2} />
              </div>
              <h3 className="text-lg font-bold text-white mb-1 flex items-center gap-2">
                {card.title}
                <ChevronRight className={`w-4 h-4 transition-transform duration-300 ${hoveredCard === card.id ? 'translate-x-1' : ''}`} />
              </h3>
              <p className="text-white/70 text-xs leading-relaxed">{card.description}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Recent Activity Section */}
      <div className="relative bg-gray-700/30 backdrop-blur-xl border border-white/10 rounded-xl p-4"
        style={{
          backdropFilter: 'blur(16px)',
          WebkitBackdropFilter: 'blur(16px)',
        }}
      >
        {/* Glassy overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent rounded-xl pointer-events-none"></div>
        
        {/* Content */}
        <div className="relative z-10">
          <h2 className="text-lg font-bold text-white mb-4">Recent Activity</h2>
          <div className="space-y-2">
            {recentActivities.map((activity, index) => (
              <div 
                key={index}
                className="flex items-center justify-between p-3 bg-white/5 backdrop-blur-sm rounded-lg border border-white/10 hover:bg-white/10 hover:border-white/20 transition-all duration-300 group cursor-pointer"
              >
                <div className="flex-1">
                  <h3 className="text-sm font-semibold text-white mb-0.5 group-hover:text-white/90">{activity.name}</h3>
                  <p className="text-xs text-white/50">{activity.time}</p>
                </div>
                <div className={`px-3 py-1 rounded-full text-xs font-medium border ${activity.statusColor} backdrop-blur-sm`}>
                  {activity.status}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Overview;
