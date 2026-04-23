import React, { useState } from 'react';
import { X, ArrowRight, Check, Link2, FileText } from 'lucide-react';

const Policies = () => {
  const [activeTab, setActiveTab] = useState('brand');
  const [restrictedTopics, setRestrictedTopics] = useState([
    'Pricing negotiations',
    'Account deletion',
    'Legal disputes',
    'Personal financial advice'
  ]);
  const [newTopic, setNewTopic] = useState('');

  const removeTopic = (topic) => {
    setRestrictedTopics(restrictedTopics.filter(t => t !== topic));
  };

  const addTopic = () => {
    if (newTopic.trim()) {
      setRestrictedTopics([...restrictedTopics, newTopic.trim()]);
      setNewTopic('');
    }
  };

  const tabs = [
    { id: 'brand', label: 'Brand Voice & Persona' },
    { id: 'compliance', label: 'Compliance Rules' },
    { id: 'workflows', label: 'Workflow Automations' }
  ];

  const escalationRules = [
    { trigger: 'User frustration detected', action: 'Transfer to senior agent' },
    { trigger: 'Legal topic mentioned', action: 'Route to compliance team' },
    { trigger: 'Failed 3 resolution attempts', action: 'Create support ticket' }
  ];

  const automations = [
    { name: 'Lead Qualification', description: 'Automatically qualify and score leads based on responses', active: true },
    { name: 'Ticket Escalation', description: 'Route complex issues to appropriate departments', active: true },
    { name: 'Appointment Booking', description: 'Autonomous scheduling with calendar integration', active: false },
    { name: 'CRM Data Sync', description: 'Automatically update customer records', active: true },
    { name: 'Email Notification', description: 'Send follow-up emails after conversations', active: false }
  ];

  const integrations = [
    { name: 'Salesforce', status: 'connected' },
    { name: 'Zendesk', status: 'connected' },
    { name: 'HubSpot', status: 'pending' },
    { name: 'Slack', status: 'disconnected' }
  ];

  return (
    <div className="p-6 h-full overflow-hidden">
      {/* Header */}
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-white mb-2">Policies & Workflows</h1>
        <p className="text-white/60">Configure brand voice, compliance rules, and automation workflows</p>
      </div>

      {/* Tabs */}
      <div className="flex gap-2 mb-8">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id)}
            className={`px-6 py-3 rounded-xl font-semibold text-sm transition-all duration-300 ${
              activeTab === tab.id
                ? 'bg-white/10 border border-white/20 text-white'
                : 'bg-white/5 border border-transparent text-white/60 hover:text-white hover:bg-white/10'
            }`}
          >
            {tab.label}
          </button>
        ))}
      </div>

      {/* Brand Voice & Persona Tab */}
      {activeTab === 'brand' && (
        <div className="grid grid-cols-2 gap-6">
          {/* Tone & Personality */}
          <div className="relative bg-gray-700/20 backdrop-blur-xl border border-white/10 rounded-2xl p-6"
            style={{ backdropFilter: 'blur(20px)', WebkitBackdropFilter: 'blur(20px)' }}
          >
            <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent rounded-2xl pointer-events-none"></div>
            <div className="relative z-10">
              <h3 className="text-xl font-bold text-white mb-4">Tone & Personality</h3>
              
              <div className="mb-6">
                <h4 className="text-white font-semibold mb-3">Professional Tone:</h4>
                <ul className="space-y-2 text-white/70 text-sm">
                  <li>- Empathetic and solution-focused</li>
                  <li>- Respectful and courteous</li>
                  <li>- Clear and concise communication</li>
                  <li>- Uses customer's name when appropriate</li>
                  <li>- Maintains professional boundaries</li>
                </ul>
              </div>

              <div className="mb-6">
                <h4 className="text-white font-semibold mb-3">Personality:</h4>
                <ul className="space-y-2 text-white/70 text-sm">
                  <li>- Helpful advisor</li>
                  <li>- Patient listener</li>
                  <li>- Problem solver</li>
                  <li>- Enthusiastic about solutions</li>
                </ul>
              </div>

              <button className="w-full px-6 py-3 bg-white/10 hover:bg-white/20 border border-white/20 text-white rounded-xl font-semibold transition-all">
                Save Changes
              </button>
            </div>
          </div>

          {/* Speaking Style */}
          <div className="relative bg-gray-700/20 backdrop-blur-xl border border-white/10 rounded-2xl p-6"
            style={{ backdropFilter: 'blur(20px)', WebkitBackdropFilter: 'blur(20px)' }}
          >
            <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent rounded-2xl pointer-events-none"></div>
            <div className="relative z-10">
              <h3 className="text-xl font-bold text-white mb-6">Speaking Style</h3>

              <div className="mb-6">
                <label className="block text-sm font-semibold text-white/80 mb-2">Accent</label>
                <select className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white focus:outline-none focus:border-white/30 transition-all">
                  <option>Neutral American</option>
                  <option>British English</option>
                  <option>Australian</option>
                </select>
              </div>

              <div className="mb-6">
                <label className="block text-sm font-semibold text-white/80 mb-2">Speech Pace</label>
                <select className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white focus:outline-none focus:border-white/30 transition-all">
                  <option>Normal</option>
                  <option>Slow</option>
                  <option>Fast</option>
                </select>
              </div>

              <div className="flex items-center gap-3 p-4 bg-white/5 border border-white/10 rounded-xl">
                <input type="checkbox" id="contractions" defaultChecked className="w-5 h-5 rounded" />
                <label htmlFor="contractions" className="text-white text-sm cursor-pointer">
                  Allow contractions (can't, won't, etc.)
                </label>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Compliance Rules Tab */}
      {activeTab === 'compliance' && (
        <div className="space-y-6">
          {/* Restricted Topics */}
          <div className="relative bg-gray-700/20 backdrop-blur-xl border border-white/10 rounded-2xl p-6"
            style={{ backdropFilter: 'blur(20px)', WebkitBackdropFilter: 'blur(20px)' }}
          >
            <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent rounded-2xl pointer-events-none"></div>
            <div className="relative z-10">
              <h3 className="text-xl font-bold text-white mb-2">Restricted Topics</h3>
              <p className="text-white/60 text-sm mb-6">Topics that should trigger escalation or specific disclaimers</p>

              <div className="flex flex-wrap gap-3 mb-4">
                {restrictedTopics.map((topic, index) => (
                  <span key={index} className="flex items-center gap-2 px-4 py-2 bg-white/10 border border-white/20 rounded-full text-white text-sm">
                    {topic}
                    <button onClick={() => removeTopic(topic)} className="hover:text-red-400 transition-all">
                      <X className="w-4 h-4" />
                    </button>
                  </span>
                ))}
              </div>

              <input
                type="text"
                value={newTopic}
                onChange={(e) => setNewTopic(e.target.value)}
                onKeyPress={(e) => e.key === 'Enter' && addTopic()}
                placeholder="Add new restricted topic..."
                className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white placeholder-white/40 focus:outline-none focus:border-white/30 transition-all"
              />
            </div>
          </div>

          {/* Compliance Disclaimers */}
          <div className="relative bg-gray-700/20 backdrop-blur-xl border border-white/10 rounded-2xl p-6"
            style={{ backdropFilter: 'blur(20px)', WebkitBackdropFilter: 'blur(20px)' }}
          >
            <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent rounded-2xl pointer-events-none"></div>
            <div className="relative z-10">
              <h3 className="text-xl font-bold text-white mb-4">Compliance Disclaimers</h3>
              <div className="p-4 bg-white/5 border border-white/10 rounded-xl mb-4">
                <p className="text-white/80 text-sm">
                  Please note: This is an automated service. For complex issues, you may be transferred to a human representative. All interactions are logged for quality and compliance purposes.
                </p>
              </div>
              <button className="px-6 py-3 bg-white/10 hover:bg-white/20 border border-white/20 text-white rounded-xl font-semibold transition-all">
                Update Disclaimers
              </button>
            </div>
          </div>

          {/* Escalation Rules */}
          <div className="relative bg-gray-700/20 backdrop-blur-xl border border-white/10 rounded-2xl p-6"
            style={{ backdropFilter: 'blur(20px)', WebkitBackdropFilter: 'blur(20px)' }}
          >
            <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent rounded-2xl pointer-events-none"></div>
            <div className="relative z-10">
              <h3 className="text-xl font-bold text-white mb-6">Escalation Rules</h3>
              <div className="space-y-3">
                {escalationRules.map((rule, index) => (
                  <div key={index} className="flex items-center gap-4 p-4 bg-white/5 border border-white/10 rounded-xl">
                    <ArrowRight className="w-5 h-5 text-orange-400 flex-shrink-0" />
                    <div className="flex-1">
                      <span className="font-semibold text-white">{rule.trigger}</span>
                    </div>
                    <span className="text-white/60 text-sm">{rule.action}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Workflow Automations Tab */}
      {activeTab === 'workflows' && (
        <div className="space-y-6">
          {/* Available Automations */}
          <div className="relative bg-gray-700/20 backdrop-blur-xl border border-white/10 rounded-2xl p-6"
            style={{ backdropFilter: 'blur(20px)', WebkitBackdropFilter: 'blur(20px)' }}
          >
            <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent rounded-2xl pointer-events-none"></div>
            <div className="relative z-10">
              <h3 className="text-xl font-bold text-white mb-6">Available Automations</h3>
              <div className="grid grid-cols-2 gap-4">
                {automations.map((automation, index) => (
                  <div key={index} className="flex items-start gap-4 p-4 bg-white/5 border border-white/10 rounded-xl hover:bg-white/10 transition-all cursor-pointer">
                    <div className="flex-1">
                      <h4 className="font-semibold text-white mb-1">{automation.name}</h4>
                      <p className="text-white/60 text-sm">{automation.description}</p>
                    </div>
                    <div className={`w-12 h-6 rounded-full flex items-center p-1 transition-all ${
                      automation.active ? 'bg-green-500/30' : 'bg-white/10'
                    }`}>
                      <div className={`w-4 h-4 rounded-full transition-all ${
                        automation.active ? 'bg-green-400 translate-x-6' : 'bg-white/40'
                      }`}></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Custom Workflow */}
          <div className="relative bg-gray-700/20 backdrop-blur-xl border border-white/10 rounded-2xl p-6"
            style={{ backdropFilter: 'blur(20px)', WebkitBackdropFilter: 'blur(20px)' }}
          >
            <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent rounded-2xl pointer-events-none"></div>
            <div className="relative z-10">
              <h3 className="text-xl font-bold text-white mb-6">Custom Workflow</h3>
              <div className="grid grid-cols-2 gap-6 mb-6">
                <div>
                  <label className="block text-sm font-semibold text-white/80 mb-2">Trigger Event</label>
                  <select className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white focus:outline-none focus:border-white/30 transition-all">
                    <option>Conversation completed</option>
                    <option>User frustrated</option>
                    <option>Escalation requested</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-semibold text-white/80 mb-2">Action</label>
                  <select className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white focus:outline-none focus:border-white/30 transition-all">
                    <option>Send notification</option>
                    <option>Create ticket</option>
                    <option>Update CRM</option>
                  </select>
                </div>
              </div>
              <button className="px-6 py-3 bg-white text-black hover:bg-white/90 rounded-xl font-semibold transition-all">
                Create Workflow
              </button>
            </div>
          </div>

          {/* Integrations */}
          <div className="relative bg-gray-700/20 backdrop-blur-xl border border-white/10 rounded-2xl p-6"
            style={{ backdropFilter: 'blur(20px)', WebkitBackdropFilter: 'blur(20px)' }}
          >
            <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent rounded-2xl pointer-events-none"></div>
            <div className="relative z-10">
              <h3 className="text-xl font-bold text-white mb-6">Integrations</h3>
              <div className="grid grid-cols-4 gap-4 mb-6">
                {integrations.map((integration, index) => (
                  <div key={index} className="p-4 bg-white/5 border border-white/10 rounded-xl text-center">
                    <div className="w-10 h-10 bg-white/10 rounded-lg mx-auto mb-3 flex items-center justify-center">
                      <Link2 className="w-5 h-5 text-white" />
                    </div>
                    <p className="font-semibold text-white text-sm mb-1">{integration.name}</p>
                    <span className={`text-xs font-medium ${
                      integration.status === 'connected' ? 'text-green-400' :
                      integration.status === 'pending' ? 'text-yellow-400' :
                      'text-white/40'
                    }`}>
                      {integration.status}
                    </span>
                  </div>
                ))}
              </div>

              <div className="border-t border-white/10 pt-6">
                <h4 className="font-semibold text-white mb-4">API Endpoints</h4>
                <div className="space-y-2 mb-4">
                  <code className="block px-4 py-2 bg-white/5 border border-white/10 rounded-lg text-white/80 text-sm font-mono">
                    /api/webhook/conversation-end
                  </code>
                  <code className="block px-4 py-2 bg-white/5 border border-white/10 rounded-lg text-white/80 text-sm font-mono">
                    /api/events/escalation
                  </code>
                </div>
                <button className="flex items-center gap-2 text-white/60 hover:text-white text-sm font-semibold transition-all">
                  <FileText className="w-4 h-4" />
                  View Documentation
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Policies;
