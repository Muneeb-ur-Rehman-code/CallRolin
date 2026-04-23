import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Home, Bot, Workflow, Shield, Beaker, Rocket, BarChart3, ArrowLeft } from 'lucide-react';
import logo from '../../public/logo-1.jpg'
// Import dashboard pages
import Overview from '../components/dashboard/Overview';
import Agents from '../components/dashboard/Agents';
import CanvasBuilder from '../components/dashboard/CanvasBuilder';
import Policies from '../components/dashboard/Policies';
import TestingLab from '../components/dashboard/TestingLab';
import Deployment from '../components/dashboard/Deployment';
import Analytics from '../components/dashboard/Analytics';

const Dashboard = () => {
  const navigate = useNavigate();
  const [activePage, setActivePage] = useState('overview');

  const navItems = [
    { id: 'overview', label: 'Overview', icon: Home },
    { id: 'agents', label: 'Agents', icon: Bot },
    { id: 'canvas', label: 'Canvas Builder', icon: Workflow },
    { id: 'policies', label: 'Policies', icon: Shield },
    { id: 'testing', label: 'Testing Lab', icon: Beaker },
    { id: 'deployment', label: 'Deployment', icon: Rocket },
    { id: 'analytics', label: 'Analytics', icon: BarChart3 },
  ];

  const renderPage = () => {
    switch (activePage) {
      case 'overview':
        return <Overview />;
      case 'agents':
        return <Agents />;
      case 'canvas':
        return <CanvasBuilder />;
      case 'policies':
        return <Policies />;
      case 'testing':
        return <TestingLab />;
      case 'deployment':
        return <Deployment />;
      case 'analytics':
        return <Analytics />;
      default:
        return <Overview />;
    }
  };

  return (
    <div className="flex h-screen bg-black overflow-hidden">
      {/* Sidebar */}
      <div className="w-64 relative bg-gray-800/20 backdrop-blur-2xl border-r border-white/10"
        style={{
          backdropFilter: 'blur(24px)',
          WebkitBackdropFilter: 'blur(24px)',
        }}
      >
        {/* Enhanced glassy overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-white/10 via-white/5 to-transparent pointer-events-none"></div>
        
        <div className="relative z-10 flex flex-col h-full">
          {/* Logo Section */}
          <div className="p-6 border-b border-white/10">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-white/10 border border-white/20 rounded-lg flex items-center justify-center backdrop-blur-sm overflow-hidden">
                <img src={logo} alt="CallRolin Logo" className="w-full h-full object-cover" />
              </div>
              <div>
                <span className="text-lg font-bold text-white tracking-tight">
                  Call<span className="">Rolin</span>
                </span>
              </div>
            </div>
          </div>

          {/* Navigation */}
          <nav className="flex-1 p-4 space-y-2 overflow-y-auto">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => setActivePage(item.id)}
                className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl transition-all duration-300 group ${
                  activePage === item.id
                    ? 'bg-white/10 border border-white/20 text-white backdrop-blur-sm shadow-lg'
                    : 'hover:bg-white/5 text-white/60 hover:text-white border border-transparent'
                }`}
              >
                <item.icon className={`w-5 h-5 transition-transform duration-300 ${
                  activePage === item.id ? 'scale-110' : 'group-hover:scale-105'
                }`} />
                <span className="font-semibold text-sm">{item.label}</span>
              </button>
            ))}
          </nav>

          {/* Back to Home Button */}
          <div className="p-4 border-t border-white/10">
            <button
              onClick={() => navigate('/')}
              className="w-full flex items-center gap-3 px-4 py-3 bg-white/5 hover:bg-white/10 border border-white/10 hover:border-white/20 text-white/60 hover:text-white rounded-xl transition-all duration-300"
            >
              <ArrowLeft className="w-5 h-5" />
              <span className="font-semibold text-sm">Back to Home</span>
            </button>
          </div>
        </div>
      </div>

      {/* Main Content Area */}
      <div className="flex-1 overflow-y-auto relative dashboard-content"
        style={{
          background: 'radial-gradient(ellipse at top right, rgba(55, 65, 81, 0.15) 0%, transparent 50%), radial-gradient(ellipse at bottom left, rgba(55, 65, 81, 0.15) 0%, transparent 50%)',
          scrollbarWidth: 'none',
          msOverflowStyle: 'none'
        }}
      >
        {/* Enhanced glassy background overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-gray-900/40 via-black/20 to-gray-900/40 pointer-events-none"></div>
        
        <div className="relative z-10">
          {renderPage()}
        </div>
      </div>
    </div>
  );
};

export default Dashboard;