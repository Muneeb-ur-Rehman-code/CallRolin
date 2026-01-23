// src/components/dashboard/DefineLogics.jsx
import { useState } from 'react';
import {
  Search,
  ChevronRight,
  ChevronDown,
  FolderTree,
  Database,
  Brain,
  FileText,
  Shield,
  AlertTriangle,
  Plus,
  Settings,
  Zap,
  Users,
  MessageSquare,
  CreditCard,
  UserPlus,
  AlertCircle,
  CheckCircle2,
  Clock,
  ArrowRight,
  Layers,
  GitBranch,
  Target,
} from 'lucide-react';

export default function DefineLogics() {
  const [activeCategory, setActiveCategory] = useState('scenarios');
  const [expandedItem, setExpandedItem] = useState(null);
  const [searchQuery, setSearchQuery] = useState('');

  // Categories for sidebar
  const categories = [
    { id: 'scenarios', icon: FolderTree, label: 'Scenarios', badge: 'New', badgeColor: 'green' },
    { id: 'policies', icon: Shield, label: 'Policies', count: 4 },
    { id: 'datasources', icon: Database, label: 'Data Sources', count: 3 },
    { id: 'personalization', icon: Brain, label: 'Personalization' },
    { id: 'fraud', icon: AlertTriangle, label: 'Fraud Alert Handling', badge: 'Critical', badgeColor: 'red' },
    { id: 'docs', icon: FileText, label: 'Supporting Docs', count: 12 },
    { id: 'brand', icon: Layers, label: 'Brand Guidelines' },
    { id: 'rules', icon: GitBranch, label: 'Business Rules', count: 8 },
  ];

  // Content data for each category
  const contentData = {
    scenarios: {
      title: 'Scenarios',
      description: 'Define conversation flows and business logic for each use-case',
      items: [
        {
          id: 1,
          title: 'New Account Onboarding',
          icon: UserPlus,
          status: 'active',
          steps: 5,
          lastUpdated: '2 hours ago',
          description: 'Guide new customers through account setup, KYC verification, and initial configuration.',
          details: {
            triggers: ['New signup detected', 'Welcome email opened', 'App first launch'],
            actions: ['Collect personal info', 'Verify identity', 'Set preferences', 'Create account'],
            escalation: 'If verification fails 3 times, escalate to human agent',
          },
        },
        {
          id: 2,
          title: 'Loan Application Support',
          icon: CreditCard,
          status: 'active',
          steps: 8,
          lastUpdated: '1 day ago',
          description: 'Assist customers with loan applications, document collection, and status updates.',
          details: {
            triggers: ['Loan inquiry', 'Application started', 'Document upload'],
            actions: ['Explain loan options', 'Collect documents', 'Submit application', 'Track status'],
            escalation: 'Complex cases or amounts > $50,000 go to loan officer',
          },
        },
        {
          id: 3,
          title: 'Fraud Alert Handling',
          icon: AlertTriangle,
          status: 'new',
          steps: 6,
          lastUpdated: 'Just now',
          description: 'Handle suspicious activity alerts, verify transactions, and secure accounts.',
          details: {
            triggers: ['Unusual transaction pattern', 'Login from new device', 'Multiple failed attempts'],
            actions: ['Verify customer identity', 'Review transactions', 'Block/unblock card', 'Update security'],
            escalation: 'Confirmed fraud immediately escalates to security team',
          },
        },
        {
          id: 4,
          title: 'Credit Card Replacement',
          icon: CreditCard,
          status: 'active',
          steps: 4,
          lastUpdated: '3 days ago',
          description: 'Process lost/stolen card reports and issue replacements.',
          details: {
            triggers: ['Card reported lost', 'Card reported stolen', 'Card damaged'],
            actions: ['Block old card', 'Verify identity', 'Issue new card', 'Update linked services'],
            escalation: 'Unauthorized transactions trigger fraud investigation',
          },
        },
      ],
    },
    policies: {
      title: 'Policies',
      description: 'Manage automation policies and compliance rules',
      items: [
        {
          id: 1,
          title: 'Auto-Approval Policy',
          icon: CheckCircle2,
          status: 'active',
          lastUpdated: '5 days ago',
          description: 'Automatically approve low-risk transactions and requests.',
          details: {
            conditions: ['Amount < $1,000', 'Account age > 30 days', 'No fraud flags'],
            actions: ['Auto-approve transaction', 'Send confirmation', 'Log decision'],
          },
        },
        {
          id: 2,
          title: 'Escalation Policy',
          icon: ArrowRight,
          status: 'active',
          lastUpdated: '1 week ago',
          description: 'Define when and how to escalate to human agents.',
          details: {
            conditions: ['Customer requests human', 'Sentiment negative', 'Complex query detected'],
            actions: ['Transfer to agent', 'Provide context summary', 'Notify supervisor'],
          },
        },
      ],
    },
    datasources: {
      title: 'Data Sources',
      description: 'Connected databases and knowledge bases',
      items: [
        {
          id: 1,
          title: 'Customer Database',
          icon: Database,
          status: 'connected',
          lastUpdated: 'Live',
          description: 'Real-time customer information and account details.',
          details: {
            type: 'PostgreSQL',
            records: '2.5M customers',
            sync: 'Real-time',
          },
        },
        {
          id: 2,
          title: 'Product Catalog',
          icon: Layers,
          status: 'connected',
          lastUpdated: 'Live',
          description: 'Complete product and service catalog.',
          details: {
            type: 'REST API',
            records: '1,200 products',
            sync: 'Every 15 minutes',
          },
        },
        {
          id: 3,
          title: 'Knowledge Base',
          icon: FileText,
          status: 'connected',
          lastUpdated: '2 hours ago',
          description: 'FAQ, documentation, and support articles.',
          details: {
            type: 'Vector DB',
            records: '5,000 articles',
            sync: 'Daily',
          },
        },
      ],
    },
    personalization: {
      title: 'Personalization',
      description: 'Configure AI personality and response style',
      items: [
        {
          id: 1,
          title: 'Tone & Voice',
          icon: MessageSquare,
          status: 'configured',
          description: 'Define how the AI communicates with customers.',
          details: {
            tone: 'Professional yet friendly',
            formality: 'Medium',
            empathy: 'High',
          },
        },
        {
          id: 2,
          title: 'Customer Segments',
          icon: Users,
          status: 'configured',
          description: 'Customize responses based on customer type.',
          details: {
            segments: ['VIP', 'Standard', 'New Customer', 'At-Risk'],
            customization: 'Greeting, urgency, offers',
          },
        },
      ],
    },
    fraud: {
      title: 'Fraud Alert Handling',
      description: 'Configure fraud detection and response protocols',
      items: [
        {
          id: 1,
          title: 'High-Risk Transaction Alert',
          icon: AlertCircle,
          status: 'critical',
          lastUpdated: 'Active',
          description: 'Immediate response for high-risk transactions.',
          details: {
            triggers: ['Amount > $5,000', 'New recipient', 'Unusual location'],
            response: 'Block + Verify + Notify',
            sla: '< 30 seconds',
          },
        },
        {
          id: 2,
          title: 'Account Takeover Prevention',
          icon: Shield,
          status: 'active',
          lastUpdated: 'Active',
          description: 'Detect and prevent unauthorized account access.',
          details: {
            triggers: ['Multiple failed logins', 'Password change + transfer', 'New device + sensitive action'],
            response: 'Lock account + SMS verify + Security review',
            sla: 'Immediate',
          },
        },
      ],
    },
    docs: {
      title: 'Supporting Documents',
      description: 'Reference materials and documentation',
      items: [
        { id: 1, title: 'Product Guide 2025', icon: FileText, status: 'active', type: 'PDF', size: '2.4 MB' },
        { id: 2, title: 'Compliance Handbook', icon: Shield, status: 'active', type: 'PDF', size: '5.1 MB' },
        { id: 3, title: 'FAQ Database', icon: MessageSquare, status: 'active', type: 'JSON', size: '890 KB' },
        { id: 4, title: 'Training Transcripts', icon: Users, status: 'active', type: 'TXT', size: '12.3 MB' },
      ],
    },
    brand: {
      title: 'Brand Guidelines',
      description: 'Maintain consistent brand voice and messaging',
      items: [
        { id: 1, title: 'Voice & Tone Guide', icon: MessageSquare, status: 'active', description: 'How we communicate with customers' },
        { id: 2, title: 'Prohibited Phrases', icon: AlertCircle, status: 'active', description: 'Words and phrases to avoid' },
        { id: 3, title: 'Approved Responses', icon: CheckCircle2, status: 'active', description: 'Pre-approved response templates' },
      ],
    },
    rules: {
      title: 'Business Rules',
      description: 'Core business logic and decision rules',
      items: [
        { id: 1, title: 'Discount Eligibility', icon: Target, status: 'active', description: 'Rules for applying discounts' },
        { id: 2, title: 'Refund Policy', icon: CreditCard, status: 'active', description: 'Automated refund decisions' },
        { id: 3, title: 'Priority Routing', icon: GitBranch, status: 'active', description: 'Customer priority assignment' },
      ],
    },
  };

  const currentContent = contentData[activeCategory] || contentData.scenarios;

  // Toggle expanded item
  const toggleExpand = (itemId) => {
    setExpandedItem(expandedItem === itemId ? null : itemId);
  };

  // Get status styles
  const getStatusStyles = (status) => {
    switch (status) {
      case 'active':
      case 'connected':
      case 'configured':
        return 'bg-green-900/40 text-green-400 border-green-700/50';
      case 'new':
        return 'bg-blue-900/40 text-blue-400 border-blue-700/50';
      case 'critical':
        return 'bg-red-900/40 text-red-400 border-red-700/50';
      default:
        return 'bg-gray-800 text-gray-400 border-gray-700';
    }
  };

  return (
    <div className="h-full flex flex-col lg:flex-row overflow-hidden bg-gray-950">
      {/* Left Sidebar - Categories */}
      <div className="w-full lg:w-80 bg-gray-950 border-b lg:border-b-0 lg:border-r border-gray-900/70 flex flex-col">
        {/* Search */}
        <div className="p-4 border-b border-gray-900/70">
          <div className="relative">
            <Search
              className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500"
              size={18}
            />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search logic..."
              className="w-full bg-gray-900/50 border border-gray-800 rounded-xl pl-10 pr-4 py-2.5 text-sm focus:outline-none focus:border-purple-500 focus:ring-1 focus:ring-purple-500/20 transition-all placeholder-gray-500"
            />
          </div>
        </div>

        {/* Category List */}
        <div className="flex-1 overflow-y-auto p-3 space-y-1">
          {categories.map((item) => {
            const isActive = activeCategory === item.id;
            const IconComponent = item.icon;

            return (
              <button
                key={item.id}
                onClick={() => {
                  setActiveCategory(item.id);
                  setExpandedItem(null);
                }}
                className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl text-sm transition-all duration-200
                  ${
                    isActive
                      ? 'bg-gradient-to-r from-purple-900/50 to-indigo-900/30 border border-purple-500/40 text-white shadow-lg shadow-purple-500/10'
                      : 'hover:bg-gray-900/70 text-gray-400 hover:text-white border border-transparent'
                  }`}
              >
                <div
                  className={`p-2 rounded-lg ${
                    isActive ? 'bg-purple-500/20' : 'bg-gray-800/50'
                  }`}
                >
                  <IconComponent
                    size={16}
                    className={isActive ? 'text-purple-400' : 'text-gray-500'}
                  />
                </div>
                <span className="flex-1 text-left">{item.label}</span>

                {/* Badge */}
                {item.badge && (
                  <span
                    className={`text-xs px-2 py-0.5 rounded-full ${
                      item.badgeColor === 'green'
                        ? 'bg-green-900/50 text-green-400'
                        : item.badgeColor === 'red'
                        ? 'bg-red-900/50 text-red-400'
                        : 'bg-gray-800 text-gray-400'
                    }`}
                  >
                    {item.badge}
                  </span>
                )}

                {/* Count */}
                {item.count && (
                  <span className="text-xs text-gray-500 bg-gray-800 px-2 py-0.5 rounded-full">
                    {item.count}
                  </span>
                )}

                <ChevronRight
                  size={16}
                  className={`transition-transform ${
                    isActive ? 'text-purple-400 rotate-90' : 'text-gray-600'
                  }`}
                />
              </button>
            );
          })}
        </div>

        {/* Footer Stats */}
        <div className="p-4 border-t border-gray-900/70 bg-gray-900/30">
          <div className="space-y-3">
            <div className="flex justify-between text-xs">
              <span className="text-gray-500">Memory Usage</span>
              <span className="text-green-400 font-medium">Low</span>
            </div>
            <div className="w-full h-1.5 bg-gray-800 rounded-full overflow-hidden">
              <div className="h-full w-1/4 bg-gradient-to-r from-green-500 to-emerald-400 rounded-full" />
            </div>
            <div className="flex justify-between text-xs text-gray-500">
              <span>Last sync: 2 min ago</span>
              <span className="flex items-center gap-1">
                <span className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse" />
                Live
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex-1 flex flex-col overflow-hidden">
        {/* Content Header */}
        <div className="p-6 lg:p-8 border-b border-gray-900/70 bg-gray-900/20">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div>
              <h1 className="text-2xl lg:text-3xl font-bold text-white mb-1">
                {currentContent.title}
              </h1>
              <p className="text-sm lg:text-base text-gray-400">
                {currentContent.description}
              </p>
            </div>

            {/* <button className="flex items-center gap-2 px-5 py-2.5 bg-gradient-to-r from-purple-600 to-indigo-600 rounded-xl font-medium text-white shadow-lg shadow-purple-500/25 hover:shadow-purple-500/40 hover:scale-[1.02] transition-all duration-200">
              <Plus size={18} />
              <span>Add New</span>
            </button> */}
          </div>

          {/* Quick Stats */}
          <div className="flex flex-wrap gap-4 mt-6">
            <div className="flex items-center gap-2 px-3 py-1.5 bg-gray-800/50 rounded-lg text-sm">
              <CheckCircle2 size={14} className="text-green-400" />
              <span className="text-gray-400">
                {currentContent.items.filter((i) => i.status === 'active' || i.status === 'connected' || i.status === 'configured').length} Active
              </span>
            </div>
            <div className="flex items-center gap-2 px-3 py-1.5 bg-gray-800/50 rounded-lg text-sm">
              <Clock size={14} className="text-blue-400" />
              <span className="text-gray-400">
                Last updated: Just now
              </span>
            </div>
            <div className="flex items-center gap-2 px-3 py-1.5 bg-gray-800/50 rounded-lg text-sm">
              <Layers size={14} className="text-purple-400" />
              <span className="text-gray-400">
                {currentContent.items.length} Items
              </span>
            </div>
          </div>
        </div>

        {/* Scrollable Content */}
        <div className="flex-1 overflow-y-auto p-6 lg:p-8">
          <div className="space-y-4">
            {currentContent.items.map((item) => {
              const IconComponent = item.icon;
              const isExpanded = expandedItem === item.id;

              return (
                <div
                  key={item.id}
                  className={`bg-gray-900/60 backdrop-blur-sm border rounded-2xl overflow-hidden transition-all duration-300 ${
                    isExpanded
                      ? 'border-purple-500/50 shadow-lg shadow-purple-500/10'
                      : 'border-gray-900/70 hover:border-gray-700'
                  }`}
                >
                  {/* Item Header - Clickable */}
                  <div
                    onClick={() => toggleExpand(item.id)}
                    className="p-5 flex items-center justify-between cursor-pointer group"
                  >
                    <div className="flex items-center gap-4 flex-1 min-w-0">
                      <div
                        className={`w-12 h-12 rounded-xl flex items-center justify-center transition-all ${
                          isExpanded
                            ? 'bg-purple-500/20'
                            : 'bg-gray-800/70 group-hover:bg-gray-800'
                        }`}
                      >
                        <IconComponent
                          size={22}
                          className={
                            isExpanded
                              ? 'text-purple-400'
                              : 'text-gray-400 group-hover:text-purple-400'
                          }
                        />
                      </div>

                      <div className="flex-1 min-w-0">
                        <div className="flex items-center gap-3 flex-wrap">
                          <h3 className="font-semibold text-white">
                            {item.title}
                          </h3>
                          {item.status && (
                            <span
                              className={`text-xs px-2.5 py-1 rounded-full border ${getStatusStyles(
                                item.status
                              )}`}
                            >
                              {item.status.charAt(0).toUpperCase() + item.status.slice(1)}
                            </span>
                          )}
                        </div>
                        {item.description && (
                          <p className="text-sm text-gray-500 mt-1 truncate">
                            {item.description}
                          </p>
                        )}
                      </div>
                    </div>

                    <div className="flex items-center gap-4">
                      {/* Meta info */}
                      <div className="hidden sm:flex items-center gap-4 text-xs text-gray-500">
                        {item.steps && (
                          <span className="flex items-center gap-1">
                            <GitBranch size={14} />
                            {item.steps} steps
                          </span>
                        )}
                        {item.lastUpdated && (
                          <span className="flex items-center gap-1">
                            <Clock size={14} />
                            {item.lastUpdated}
                          </span>
                        )}
                        {item.type && (
                          <span className="px-2 py-1 bg-gray-800 rounded">
                            {item.type}
                          </span>
                        )}
                        {item.size && <span>{item.size}</span>}
                      </div>

                      {/* Expand Icon */}
                      <div
                        className={`p-2 rounded-lg transition-all ${
                          isExpanded
                            ? 'bg-purple-500/20 text-purple-400'
                            : 'text-gray-500 group-hover:text-white'
                        }`}
                      >
                        <ChevronDown
                          size={20}
                          className={`transition-transform duration-300 ${
                            isExpanded ? 'rotate-180' : ''
                          }`}
                        />
                      </div>
                    </div>
                  </div>

                  {/* Expanded Details */}
                  {isExpanded && item.details && (
                    <div className="border-t border-gray-800 bg-gray-950/50">
                      <div className="p-5 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                        {Object.entries(item.details).map(([key, value]) => (
                          <div
                            key={key}
                            className="bg-gray-900/50 rounded-xl p-4 border border-gray-800/50"
                          >
                            <h4 className="text-xs font-medium text-gray-500 uppercase tracking-wide mb-2">
                              {key.replace(/([A-Z])/g, ' $1').trim()}
                            </h4>
                            {Array.isArray(value) ? (
                              <ul className="space-y-1.5">
                                {value.map((v, i) => (
                                  <li
                                    key={i}
                                    className="flex items-start gap-2 text-sm text-gray-300"
                                  >
                                    <span className="text-purple-400 mt-1">•</span>
                                    {v}
                                  </li>
                                ))}
                              </ul>
                            ) : (
                              <p className="text-sm text-gray-300">{value}</p>
                            )}
                          </div>
                        ))}
                      </div>

                      {/* Action Buttons */}
                      <div className="px-5 py-4 border-t border-gray-800/50 flex justify-end gap-3">
                        <button className="px-4 py-2 text-sm text-gray-400 hover:text-white hover:bg-gray-800 rounded-lg transition-all">
                          <Settings size={16} className="inline mr-2" />
                          Configure
                        </button>
                        <button className="px-4 py-2 text-sm bg-purple-600/20 text-purple-400 hover:bg-purple-600/30 rounded-lg transition-all">
                          <Zap size={16} className="inline mr-2" />
                          Test Flow
                        </button>
                      </div>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}