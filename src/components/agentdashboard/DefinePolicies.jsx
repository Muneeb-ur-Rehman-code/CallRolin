// src/components/dashboard/DefinePolicies.jsx
import { useState } from 'react';
import {
  Plus,
  CheckCircle2,
  Edit2,
  Trash2,
  X,
  AlertTriangle,
  Shield,
  Zap,
  ArrowUpRight,
  FileText,
  Clock,
  Tag,
} from 'lucide-react';

export default function DefinePolicies() {
  const [activeFilter, setActiveFilter] = useState('all');
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [policies, setPolicies] = useState([
    {
      id: 1,
      title: 'Auto-Approve Simple Transfers',
      type: 'automation',
      description:
        'Automatically approve transfers under $1,000 with verified accounts',
      rules: [
        'Amount < $1,000',
        'Account verified > 30 days',
        'No fraud flags',
      ],
      status: 'Active',
    },
    {
      id: 2,
      title: 'Identity Verification Required',
      type: 'compliance',
      description: 'Require government ID for new account opening',
      rules: [
        'Upload valid government ID',
        'Liveness check passed',
        'Age verification confirmed',
      ],
      status: 'Active',
    },
    {
      id: 3,
      title: 'High-Value Transaction Escalation',
      type: 'escalation',
      description:
        'Escalate to human agent for transactions above threshold',
      rules: [
        'Amount > $10,000',
        'New recipient account',
        'International transfer',
        'Notify supervisor immediately',
      ],
      status: 'Active',
    },
    {
      id: 4,
      title: 'Automated Refund Processing',
      type: 'automation',
      description:
        'Auto-process refunds for eligible orders within policy window',
      rules: [
        'Order within 30 days',
        'Item not marked as final sale',
        'Customer in good standing',
      ],
      status: 'Inactive',
    },
  ]);

  // New policy form state
  const [newPolicy, setNewPolicy] = useState({
    title: '',
    type: 'automation',
    description: '',
    rules: '',
  });

  const filterOptions = [
    { id: 'all', label: 'All', icon: FileText },
    { id: 'automation', label: 'Automation', icon: Zap },
    { id: 'escalation', label: 'Escalation', icon: ArrowUpRight },
    { id: 'compliance', label: 'Compliance', icon: Shield },
  ];

  const typeConfig = {
    automation: {
      icon: Zap,
      color: 'text-blue-400',
      bg: 'bg-blue-900/30',
      border: 'border-blue-700/50',
    },
    escalation: {
      icon: ArrowUpRight,
      color: 'text-orange-400',
      bg: 'bg-orange-900/30',
      border: 'border-orange-700/50',
    },
    compliance: {
      icon: Shield,
      color: 'text-purple-400',
      bg: 'bg-purple-900/30',
      border: 'border-purple-700/50',
    },
  };

  const filteredPolicies =
    activeFilter === 'all'
      ? policies
      : policies.filter((p) => p.type === activeFilter);

  // Handle create new policy
  const handleCreatePolicy = () => {
    if (!newPolicy.title.trim() || !newPolicy.description.trim()) {
      return;
    }

    const rulesArray = newPolicy.rules
      .split('\n')
      .filter((rule) => rule.trim() !== '');

    const policy = {
      id: Date.now(),
      title: newPolicy.title,
      type: newPolicy.type,
      description: newPolicy.description,
      rules: rulesArray.length > 0 ? rulesArray : ['No rules defined'],
      status: 'Active',
    };

    setPolicies((prev) => [...prev, policy]);
    setNewPolicy({ title: '', type: 'automation', description: '', rules: '' });
    setIsModalOpen(false);
  };

  // Handle delete policy
  const handleDeletePolicy = (id) => {
    setPolicies((prev) => prev.filter((p) => p.id !== id));
  };

  // Close modal
  const closeModal = () => {
    setIsModalOpen(false);
    setNewPolicy({ title: '', type: 'automation', description: '', rules: '' });
  };

  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="space-y-2">
        <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold text-white">
          Define Policies
        </h1>
        <p className="text-sm md:text-base text-gray-400 max-w-2xl">
          Set clear guardrails for your Agent. Define what should be automated,
          when to escalate, and compliance requirements.
        </p>
      </div>

      {/* Filters & Add button */}
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
        {/* Filter Pills */}
        <div className="flex flex-wrap gap-2">
          {filterOptions.map((filter) => {
            const IconComponent = filter.icon;
            const isActive = activeFilter === filter.id;
            const count =
              filter.id === 'all'
                ? policies.length
                : policies.filter((p) => p.type === filter.id).length;

            return (
              <button
                key={filter.id}
                onClick={() => setActiveFilter(filter.id)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 flex items-center gap-2
                  ${
                    isActive
                      ? 'bg-gradient-to-r from-purple-600 to-indigo-600 text-white shadow-lg shadow-purple-500/25'
                      : 'bg-gray-800/70 text-gray-300 hover:bg-gray-700 border border-gray-700/50'
                  }`}
              >
                <IconComponent size={16} />
                <span>{filter.label}</span>
                <span
                  className={`px-1.5 py-0.5 rounded-full text-xs ${
                    isActive
                      ? 'bg-white/20'
                      : 'bg-gray-700 text-gray-400'
                  }`}
                >
                  {count}
                </span>
              </button>
            );
          })}
        </div>

        {/* New Policy Button */}
        <button
          onClick={() => setIsModalOpen(true)}
          className="bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-500 hover:to-indigo-500 px-5 py-2.5 rounded-xl flex items-center gap-2 font-medium shadow-lg shadow-purple-500/25 hover:shadow-purple-500/40 hover:scale-[1.02] transition-all duration-200 text-white"
        >
          <Plus size={18} />
          <span>New Policy</span>
        </button>
      </div>

      {/* Policy Cards */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 md:gap-6">
        {filteredPolicies.length === 0 ? (
          <div className="col-span-full flex flex-col items-center justify-center py-16 text-center">
            <div className="w-16 h-16 rounded-full bg-gray-800 flex items-center justify-center mb-4">
              <FileText size={32} className="text-gray-500" />
            </div>
            <h3 className="text-lg font-medium text-gray-300 mb-2">
              No policies found
            </h3>
            <p className="text-sm text-gray-500 mb-4">
              No policies match the selected filter.
            </p>
            <button
              onClick={() => setActiveFilter('all')}
              className="text-purple-400 hover:text-purple-300 text-sm font-medium"
            >
              View all policies
            </button>
          </div>
        ) : (
          filteredPolicies.map((policy) => {
            const config = typeConfig[policy.type];
            const TypeIcon = config.icon;

            return (
              <div
                key={policy.id}
                className="bg-gray-900/60 backdrop-blur-sm border border-gray-900/70 rounded-2xl overflow-hidden hover:border-purple-500/40 transition-all duration-300 group"
              >
                <div className="p-5 md:p-6">
                  {/* Header */}
                  <div className="flex items-start justify-between gap-4 mb-4">
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center gap-3 mb-2">
                        <div
                          className={`p-2 rounded-lg ${config.bg} ${config.border} border`}
                        >
                          <TypeIcon size={18} className={config.color} />
                        </div>
                        <h3 className="font-semibold text-base md:text-lg text-white truncate">
                          {policy.title}
                        </h3>
                      </div>
                      <p className="text-gray-400 text-sm line-clamp-2">
                        {policy.description}
                      </p>
                    </div>

                    {/* Status Badge */}
                    <span
                      className={`flex-shrink-0 px-3 py-1 text-xs font-medium rounded-full flex items-center gap-1.5
                        ${
                          policy.status === 'Active'
                            ? 'bg-green-900/40 text-green-400 border border-green-700/50'
                            : 'bg-gray-800 text-gray-400 border border-gray-700'
                        }`}
                    >
                      <span
                        className={`w-1.5 h-1.5 rounded-full ${
                          policy.status === 'Active'
                            ? 'bg-green-400'
                            : 'bg-gray-500'
                        }`}
                      />
                      {policy.status}
                    </span>
                  </div>

                  {/* Type Tag */}
                  <div className="flex items-center gap-2 mb-4">
                    <Tag size={14} className="text-gray-500" />
                    <span className="text-xs text-gray-500 capitalize">
                      {policy.type}
                    </span>
                  </div>

                  {/* Rules */}
                  <div className="space-y-2">
                    <p className="text-xs font-medium text-gray-500 uppercase tracking-wide">
                      Rules
                    </p>
                    <div className="space-y-2">
                      {policy.rules.map((rule, idx) => (
                        <div
                          key={idx}
                          className="flex items-start gap-2 text-sm text-gray-300"
                        >
                          <CheckCircle2
                            size={16}
                            className="text-green-500 mt-0.5 flex-shrink-0"
                          />
                          <span>{rule}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Actions Footer */}
                <div className="px-5 md:px-6 py-4 bg-black/30 border-t border-gray-800/50 flex items-center justify-between">
                  <div className="flex items-center gap-2 text-xs text-gray-500">
                    <Clock size={14} />
                    <span>Updated 2 days ago</span>
                  </div>

                  <div className="flex items-center gap-2">
                    <button className="p-2 rounded-lg text-gray-400 hover:text-white hover:bg-gray-700/50 transition-all duration-200 flex items-center gap-1.5 text-sm">
                      <Edit2 size={16} />
                      <span className="hidden sm:inline">Edit</span>
                    </button>
                    <button
                      onClick={() => handleDeletePolicy(policy.id)}
                      className="p-2 rounded-lg text-gray-400 hover:text-red-400 hover:bg-red-500/10 transition-all duration-200 flex items-center gap-1.5 text-sm"
                    >
                      <Trash2 size={16} />
                      <span className="hidden sm:inline">Delete</span>
                    </button>
                  </div>
                </div>
              </div>
            );
          })
        )}
      </div>

      {/* Summary Stats */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {filterOptions.slice(1).map((filter) => {
          const count = policies.filter((p) => p.type === filter.id).length;
          const activeCount = policies.filter(
            (p) => p.type === filter.id && p.status === 'Active'
          ).length;
          const IconComponent = filter.icon;

          return (
            <div
              key={filter.id}
              className="bg-gray-900/60 backdrop-blur-sm border border-gray-900/70 rounded-xl p-4"
            >
              <div className="flex items-center gap-3 mb-2">
                <div className="p-2 rounded-lg bg-gray-800">
                  <IconComponent size={16} className="text-gray-400" />
                </div>
                <span className="text-sm text-gray-400 capitalize">
                  {filter.label}
                </span>
              </div>
              <div className="flex items-baseline gap-2">
                <span className="text-2xl font-bold text-white">{count}</span>
                <span className="text-xs text-green-400">
                  {activeCount} active
                </span>
              </div>
            </div>
          );
        })}

        <div className="bg-gray-900/60 backdrop-blur-sm border border-gray-900/70 rounded-xl p-4">
          <div className="flex items-center gap-3 mb-2">
            <div className="p-2 rounded-lg bg-gray-800">
              <CheckCircle2 size={16} className="text-gray-400" />
            </div>
            <span className="text-sm text-gray-400">Total</span>
          </div>
          <div className="flex items-baseline gap-2">
            <span className="text-2xl font-bold text-white">
              {policies.length}
            </span>
            <span className="text-xs text-green-400">
              {policies.filter((p) => p.status === 'Active').length} active
            </span>
          </div>
        </div>
      </div>

      {/* New Policy Modal */}
      {isModalOpen && (
        <div className="fixed  inset-0 z-50 flex items-center justify-center p-4">
          {/* Backdrop */}
          <div
            className="absolute inset-0 bg-black/70 backdrop-blur-sm"
            onClick={closeModal}
          />

          {/* Modal */}
          <div className="relative h-[500px] overflow-y-auto max-w-lg bg-gray-900 border border-gray-800 rounded-2xl shadow-2xl shadow-black/50 overflow-hidden animate-in fade-in zoom-in duration-200">
            {/* Modal Header */}
            <div className="flex items-center justify-between p-5 border-b border-gray-800">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-purple-600 to-indigo-600 flex items-center justify-center">
                  <Plus size={20} className="text-white" />
                </div>
                <div>
                  <h2 className="text-lg font-semibold text-white">
                    Create New Policy
                  </h2>
                  <p className="text-xs text-gray-500">
                    Define rules and guardrails
                  </p>
                </div>
              </div>

              <button
                onClick={closeModal}
                className="p-2 rounded-lg text-gray-400 hover:text-white hover:bg-gray-800 transition-all duration-200"
              >
                <X size={20} />
              </button>
            </div>

            {/* Modal Body */}
            <div className="p-5 space-y-5">
              {/* Policy Title */}
              <div className="space-y-2">
                <label className="block text-sm font-medium text-gray-300">
                  Policy Title <span className="text-red-400">*</span>
                </label>
                <input
                  type="text"
                  value={newPolicy.title}
                  onChange={(e) =>
                    setNewPolicy({ ...newPolicy, title: e.target.value })
                  }
                  placeholder="e.g., Auto-Approve Small Refunds"
                  className="w-full px-4 py-3 bg-gray-800/50 border border-gray-700 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-200"
                />
              </div>

              {/* Policy Type */}
              <div className="space-y-2">
                <label className="block text-sm font-medium text-gray-300">
                  Policy Type
                </label>
                <div className="grid grid-cols-3 gap-2">
                  {['automation', 'escalation', 'compliance'].map((type) => {
                    const config = typeConfig[type];
                    const TypeIcon = config.icon;
                    const isSelected = newPolicy.type === type;

                    return (
                      <button
                        key={type}
                        type="button"
                        onClick={() =>
                          setNewPolicy({ ...newPolicy, type: type })
                        }
                        className={`p-3 rounded-xl border-2 transition-all duration-200 flex flex-col items-center gap-2
                          ${
                            isSelected
                              ? 'border-purple-500 bg-purple-500/10'
                              : 'border-gray-700 hover:border-gray-600 bg-gray-800/30'
                          }`}
                      >
                        <TypeIcon
                          size={20}
                          className={isSelected ? config.color : 'text-gray-400'}
                        />
                        <span
                          className={`text-xs font-medium capitalize ${
                            isSelected ? 'text-white' : 'text-gray-400'
                          }`}
                        >
                          {type}
                        </span>
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* Policy Description */}
              <div className="space-y-2">
                <label className="block text-sm font-medium text-gray-300">
                  Description <span className="text-red-400">*</span>
                </label>
                <textarea
                  value={newPolicy.description}
                  onChange={(e) =>
                    setNewPolicy({ ...newPolicy, description: e.target.value })
                  }
                  placeholder="Describe what this policy does..."
                  rows={3}
                  className="w-full px-4 py-3 bg-gray-800/50 border border-gray-700 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-200 resize-none"
                />
              </div>

              {/* Policy Rules */}
              <div className="space-y-2">
                <label className="block text-sm font-medium text-gray-300">
                  Rules{' '}
                  <span className="text-gray-500 font-normal">
                    (one per line)
                  </span>
                </label>
                <textarea
                  value={newPolicy.rules}
                  onChange={(e) =>
                    setNewPolicy({ ...newPolicy, rules: e.target.value })
                  }
                  placeholder={`e.g.,\nAmount less than $500\nCustomer verified\nNo previous disputes`}
                  rows={4}
                  className="w-full px-4 py-3 bg-gray-800/50 border border-gray-700 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-200 resize-none font-mono text-sm"
                />
              </div>

              {/* Info Box */}
              <div className="flex items-start gap-3 p-4 bg-blue-500/10 border border-blue-500/20 rounded-xl">
                <AlertTriangle size={18} className="text-blue-400 mt-0.5" />
                <p className="text-xs text-blue-300">
                  Policies help your agent make consistent decisions. Be
                  specific with rules to ensure accurate automation.
                </p>
              </div>
            </div>

            {/* Modal Footer */}
            <div className="flex items-center justify-end gap-3 p-5 border-t border-gray-800 bg-gray-900/50">
              <button
                onClick={closeModal}
                className="px-5 py-2.5 rounded-xl border border-gray-700 text-gray-300 hover:bg-gray-800 hover:border-gray-600 transition-all duration-200 font-medium"
              >
                Cancel
              </button>
              <button
                onClick={handleCreatePolicy}
                disabled={!newPolicy.title.trim() || !newPolicy.description.trim()}
                className="px-5 py-2.5 rounded-xl bg-gradient-to-r from-purple-600 to-indigo-600 text-white font-semibold shadow-lg shadow-purple-500/25 hover:shadow-purple-500/40 hover:scale-[1.02] transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100"
              >
                Create Policy
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}