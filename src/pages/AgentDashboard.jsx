// src/pages/AgentDashboard.tsx
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  LayoutDashboard,
  Bot,
  Beaker,
  BarChart3,
  Shield,
  Rocket,
  ArrowLeft,
  PlusCircle,
  GitBranch,
} from "lucide-react";
import logo from "../../public/logo-1.jpg"; // adjust path if needed

// Dashboard views
import Overview from "../components/agentdashboard/Overview";
import Agents from "../components/dashboard/Agents";
import TestingLab from "../components/dashboard/TestingLab";
import Analytics from "../components/dashboard/Analytics";
import Policies from "../components/dashboard/Policies";
import Deployment from "../components/dashboard/Deployment";
import CreateAgent from "../components/agentdashboard/CreateAgent";
import DefinePolicies from "../components/agentdashboard/DefinePolicies";
import DefineLogics from "../components/agentdashboard/DefineLogics";
import MonitorImprove from "../components/agentdashboard/MonitorImprove";

const navItems = [
  { id: "overview", label: "Overview", icon: LayoutDashboard },
  { id: "create", label: "Create Agent", icon: PlusCircle },
  { id: "policies", label: "Policies", icon: Shield },
  { id: "logics", label: "Logics", icon: GitBranch },

  {
    id: "monitor",
    label: "Monitor & Improve",
    icon: BarChart3, // or use Headphones, Mic, etc.
  },
];

export default function AgentDashboard() {
  const navigate = useNavigate();
  const [activePage, setActivePage] = useState("overview");

  const renderPage = () => {
    switch (activePage) {
      case "overview":
        return <Overview />;
      case "create":
        return <CreateAgent />;
      case "policies":
        return <DefinePolicies />;
      case "logics":
        return <DefineLogics />;
      case "monitor":
        return <MonitorImprove />;
      default:
        return <Overview />;
    }
  };

  return (
    <div
      data-lenis-prevent
      className="flex h-screen bg-[#0a0a0a] text-white overflow-hidden"
    >
      {/* Sidebar */}
      <aside className="w-64 bg-gray-900/40 backdrop-blur-xl border-r border-white/8 flex flex-col">
        {/* Logo + title */}
        <div className="p-6 border-b border-white/10">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-lg overflow-hidden bg-gray-800 border border-gray-700">
              <img
                src={logo}
                alt="CallRolin"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="font-bold text-xl tracking-tight">
              Call<span className="">Rolin</span>
            </div>
          </div>
        </div>

        {/* Navigation */}
        <nav className="flex-1 px-3 py-6 space-y-1.5 overflow-y-auto">
          {navItems.map((item) => {
            const isActive = activePage === item.id;
            return (
              <button
                key={item.id}
                onClick={() => setActivePage(item.id)}
                className={`
                  w-full flex items-center gap-3 px-4 py-3 rounded-lg text-sm font-medium transition-all
                  ${
                    isActive
                      ? "bg-purple-600 border border-indigo-500/30 text-white"
                      : "text-gray-400 hover:bg-white/5 hover:text-gray-200"
                  }
                `}
              >
                <item.icon size={20} />
                {item.label}
              </button>
            );
          })}
        </nav>

        {/* Back button */}
        <div className="p-4 border-t border-white/10 mt-auto">
          <button
            onClick={() => navigate("/")}
            className="w-full flex items-center gap-3 px-4 py-3 rounded-lg text-gray-400 hover:bg-white/5 hover:text-gray-200 transition-all"
          >
            <ArrowLeft size={18} />
            <span className="text-sm font-medium">Back to Home</span>
          </button>
        </div>
      </aside>

      {/* Main content */}
      <main className="flex-1 overflow-y-auto bg-gradient-to-br from-gray-950 via-black to-gray-950">
        <div className="p-8">{renderPage()}</div>
      </main>
    </div>
  );
}
