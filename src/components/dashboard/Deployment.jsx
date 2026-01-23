import React, { useState } from 'react';
import { Copy, ExternalLink, Plus, Key, RotateCcw, FileText, Check, Clock, X } from 'lucide-react';

const Deployment = () => {
  const [activeTab, setActiveTab] = useState('channels');

  const tabs = [
    { id: 'channels', label: 'Integration Channels' },
    { id: 'api', label: 'API Keys & Credentials' },
    { id: 'versioning', label: 'Versioning & Rollback' }
  ];

  const deploymentStatus = [
    { channel: 'Website', status: 'deployed', time: '2 hours ago' },
    { channel: 'WhatsApp', status: 'pending', time: 'Waiting for approval' },
    { channel: 'Messenger', status: 'disconnected', time: 'Not connected' },
    { channel: 'Voice (SIP)', status: 'disconnected', time: 'Not configured' }
  ];

  const apiKeys = [
    { name: 'Production Key', status: 'active', created: 'Jan 15, 2024' },
    { name: 'Development Key', status: 'active', created: 'Jan 10, 2024' },
    { name: 'Staging Key', status: 'inactive', created: 'Jan 1, 2024' }
  ];

  const webhooks = [
    { event: 'conversation.completed', url: 'https://your-app.com/webhooks/conversations' },
    { event: 'agent.error', url: 'https://your-app.com/webhooks/errors' },
    { event: 'escalation.triggered', url: 'https://your-app.com/webhooks/escalation' }
  ];

  const versions = [
    { version: 'v1.2.0', time: '2 hours ago', status: 'active', description: 'Updated compliance rules, improved intent detection' },
    { version: 'v1.1.5', time: '1 week ago', status: 'stable', description: 'Bug fixes, performance improvements' },
    { version: 'v1.1.0', time: '2 weeks ago', status: 'outdated', description: 'Added WhatsApp integration' },
    { version: 'v1.0.0', time: '1 month ago', status: 'outdated', description: 'Initial release' }
  ];

  return (
    <div className="p-6 h-full overflow-hidden">
      {/* Header */}
      <div className="flex items-center justify-between mb-8">
        <div>
          <h1 className="text-3xl font-bold text-white mb-2">Deployment Hub</h1>
          <p className="text-white/60">Deploy your agent across multiple channels</p>
        </div>
        <button className="px-6 py-3 bg-green-600 hover:bg-green-700 text-white rounded-xl font-semibold transition-all">
          Publish Agent
        </button>
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

      {/* Integration Channels Tab */}
      {activeTab === 'channels' && (
        <div className="space-y-6">
          <div className="grid grid-cols-2 gap-6">
            {/* Web Widget */}
            <div className="relative bg-gray-700/20 backdrop-blur-xl border border-white/10 rounded-2xl p-6"
              style={{ backdropFilter: 'blur(20px)', WebkitBackdropFilter: 'blur(20px)' }}
            >
              <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent rounded-2xl pointer-events-none"></div>
              <div className="relative z-10">
                <h3 className="text-xl font-bold text-white mb-2">Web Widget</h3>
                <p className="text-white/60 text-sm mb-4">Embed the agent directly on your website</p>
                
                <code className="block w-full px-4 py-3 bg-black/30 border border-white/10 rounded-lg text-green-400 text-sm font-mono mb-4 overflow-x-auto">
                  {'<script src="https://agents.studio/widget.js?agent=banking-ai"></script>'}
                </code>
                
                <div className="flex gap-3">
                  <button className="flex items-center gap-2 px-4 py-2 bg-white/10 hover:bg-white/20 border border-white/20 text-white rounded-lg font-semibold text-sm transition-all">
                    <Copy className="w-4 h-4" />
                    Copy Script
                  </button>
                  <button className="flex items-center gap-2 px-4 py-2 text-white/60 hover:text-white text-sm font-semibold transition-all">
                    <ExternalLink className="w-4 h-4" />
                    View Documentation
                  </button>
                </div>
              </div>
            </div>

            {/* WhatsApp Integration */}
            <div className="relative bg-gray-700/20 backdrop-blur-xl border border-white/10 rounded-2xl p-6"
              style={{ backdropFilter: 'blur(20px)', WebkitBackdropFilter: 'blur(20px)' }}
            >
              <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent rounded-2xl pointer-events-none"></div>
              <div className="relative z-10">
                <h3 className="text-xl font-bold text-white mb-2">WhatsApp Integration</h3>
                <p className="text-white/60 text-sm mb-4">Deploy to WhatsApp Business API</p>
                
                <div className="space-y-4 mb-4">
                  <div>
                    <label className="block text-sm font-semibold text-white/80 mb-2">Phone Number</label>
                    <input type="text" defaultValue="+1 (555) 123-4567" className="w-full px-4 py-2 bg-white/5 border border-white/10 rounded-lg text-white text-sm focus:outline-none focus:border-white/30" />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-white/80 mb-2">WhatsApp Business Account ID</label>
                    <input type="text" placeholder="Business account ID" className="w-full px-4 py-2 bg-white/5 border border-white/10 rounded-lg text-white placeholder-white/40 text-sm focus:outline-none focus:border-white/30" />
                  </div>
                </div>
                
                <button className="px-4 py-2 bg-green-600 hover:bg-green-700 text-white rounded-lg font-semibold text-sm transition-all">
                  Connect WhatsApp
                </button>
              </div>
            </div>

            {/* Messenger Integration */}
            <div className="relative bg-gray-700/20 backdrop-blur-xl border border-white/10 rounded-2xl p-6"
              style={{ backdropFilter: 'blur(20px)', WebkitBackdropFilter: 'blur(20px)' }}
            >
              <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent rounded-2xl pointer-events-none"></div>
              <div className="relative z-10">
                <h3 className="text-xl font-bold text-white mb-2">Messenger Integration</h3>
                <p className="text-white/60 text-sm mb-4">Deploy to Facebook Messenger</p>
                
                <div className="space-y-4 mb-4">
                  <div>
                    <label className="block text-sm font-semibold text-white/80 mb-2">Facebook Page ID</label>
                    <input type="text" placeholder="Page ID" className="w-full px-4 py-2 bg-white/5 border border-white/10 rounded-lg text-white placeholder-white/40 text-sm focus:outline-none focus:border-white/30" />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-white/80 mb-2">Access Token</label>
                    <input type="text" placeholder="Your access token" className="w-full px-4 py-2 bg-white/5 border border-white/10 rounded-lg text-white placeholder-white/40 text-sm focus:outline-none focus:border-white/30" />
                  </div>
                </div>
                
                <button className="px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg font-semibold text-sm transition-all">
                  Connect Messenger
                </button>
              </div>
            </div>

            {/* Deployment Status */}
            <div className="relative bg-gray-700/20 backdrop-blur-xl border border-white/10 rounded-2xl p-6"
              style={{ backdropFilter: 'blur(20px)', WebkitBackdropFilter: 'blur(20px)' }}
            >
              <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent rounded-2xl pointer-events-none"></div>
              <div className="relative z-10">
                <h3 className="text-xl font-bold text-white mb-6">Deployment Status</h3>
                
                <div className="space-y-3">
                  {deploymentStatus.map((item, index) => (
                    <div key={index} className="flex items-center justify-between p-3 bg-white/5 border border-white/10 rounded-lg">
                      <span className="font-semibold text-white text-sm">{item.channel}</span>
                      <div className="flex items-center gap-3">
                        <span className={`px-3 py-1 rounded-full text-xs font-semibold ${
                          item.status === 'deployed' ? 'bg-green-500/20 text-green-400 border border-green-500/30' :
                          item.status === 'pending' ? 'bg-yellow-500/20 text-yellow-400 border border-yellow-500/30' :
                          'bg-white/10 text-white/40 border border-white/10'
                        }`}>
                          {item.status}
                        </span>
                        <span className="text-white/50 text-xs">{item.time}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Quick Stats */}
          <div className="relative bg-gray-700/20 backdrop-blur-xl border border-white/10 rounded-2xl p-6"
            style={{ backdropFilter: 'blur(20px)', WebkitBackdropFilter: 'blur(20px)' }}
          >
            <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent rounded-2xl pointer-events-none"></div>
            <div className="relative z-10">
              <h3 className="text-xl font-bold text-white mb-6">Quick Stats</h3>
              <div className="grid grid-cols-3 gap-6">
                <div className="text-center">
                  <p className="text-white/60 text-sm mb-1">Active Deployments</p>
                  <p className="text-3xl font-bold text-white">1</p>
                </div>
                <div className="text-center">
                  <p className="text-white/60 text-sm mb-1">API Calls (24h)</p>
                  <p className="text-3xl font-bold text-white">12.4K</p>
                </div>
                <div className="text-center">
                  <p className="text-white/60 text-sm mb-1">Uptime</p>
                  <p className="text-3xl font-bold text-green-400">99.9%</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* API Keys Tab */}
      {activeTab === 'api' && (
        <div className="space-y-6">
          {/* API Keys */}
          <div className="relative bg-gray-700/20 backdrop-blur-xl border border-white/10 rounded-2xl p-6"
            style={{ backdropFilter: 'blur(20px)', WebkitBackdropFilter: 'blur(20px)' }}
          >
            <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent rounded-2xl pointer-events-none"></div>
            <div className="relative z-10">
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-xl font-bold text-white">API Keys</h3>
                <button className="flex items-center gap-2 px-4 py-2 bg-white/10 hover:bg-white/20 border border-white/20 text-white rounded-lg font-semibold text-sm transition-all">
                  <Plus className="w-4 h-4" />
                  Generate New Key
                </button>
              </div>
              
              <div className="space-y-3">
                {apiKeys.map((key, index) => (
                  <div key={index} className="flex items-center justify-between p-4 bg-white/5 border border-white/10 rounded-xl">
                    <div className="flex items-center gap-4">
                      <div className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center">
                        <Key className="w-5 h-5 text-white" />
                      </div>
                      <div>
                        <div className="flex items-center gap-3">
                          <span className="font-semibold text-white">{key.name}</span>
                          <span className={`px-2 py-0.5 rounded text-xs font-semibold ${
                            key.status === 'active' ? 'bg-green-500/20 text-green-400' : 'bg-white/10 text-white/40'
                          }`}>
                            {key.status}
                          </span>
                        </div>
                        <p className="text-white/50 text-sm">Created: {key.created}</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-2">
                      <button className="px-4 py-2 bg-white/10 hover:bg-white/20 text-white rounded-lg text-sm font-semibold transition-all">
                        Copy
                      </button>
                      <button className="px-4 py-2 text-red-400 hover:bg-red-500/10 rounded-lg text-sm font-semibold transition-all">
                        Revoke
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Webhook URLs */}
          <div className="relative bg-gray-700/20 backdrop-blur-xl border border-white/10 rounded-2xl p-6"
            style={{ backdropFilter: 'blur(20px)', WebkitBackdropFilter: 'blur(20px)' }}
          >
            <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent rounded-2xl pointer-events-none"></div>
            <div className="relative z-10">
              <h3 className="text-xl font-bold text-white mb-2">Webhook URLs</h3>
              <p className="text-white/60 text-sm mb-6">Configure endpoints to receive agent events</p>
              
              <div className="space-y-4">
                {webhooks.map((webhook, index) => (
                  <div key={index} className="p-4 bg-white/5 border border-white/10 rounded-xl">
                    <p className="font-semibold text-orange-400 text-sm mb-2">{webhook.event}</p>
                    <code className="text-white/70 text-sm font-mono">{webhook.url}</code>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Versioning Tab */}
      {activeTab === 'versioning' && (
        <div className="space-y-6">
          {/* Version History */}
          <div className="relative bg-gray-700/20 backdrop-blur-xl border border-white/10 rounded-2xl p-6"
            style={{ backdropFilter: 'blur(20px)', WebkitBackdropFilter: 'blur(20px)' }}
          >
            <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent rounded-2xl pointer-events-none"></div>
            <div className="relative z-10">
              <h3 className="text-xl font-bold text-white mb-6">Version History</h3>
              
              <div className="space-y-3">
                {versions.map((ver, index) => (
                  <div key={index} className="flex items-start gap-4 p-4 bg-white/5 border border-white/10 rounded-xl">
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-1">
                        <span className="font-bold text-white">{ver.version}</span>
                        <span className="text-white/50 text-sm">{ver.time}</span>
                        <span className={`px-2 py-0.5 rounded text-xs font-semibold ${
                          ver.status === 'active' ? 'bg-green-500/20 text-green-400' :
                          ver.status === 'stable' ? 'bg-blue-500/20 text-blue-400' :
                          'bg-white/10 text-white/40'
                        }`}>
                          {ver.status}
                        </span>
                      </div>
                      <p className="text-white/60 text-sm">{ver.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-6">
            {/* Rollback */}
            <div className="relative bg-gray-700/20 backdrop-blur-xl border border-white/10 rounded-2xl p-6"
              style={{ backdropFilter: 'blur(20px)', WebkitBackdropFilter: 'blur(20px)' }}
            >
              <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent rounded-2xl pointer-events-none"></div>
              <div className="relative z-10">
                <div className="flex items-center gap-3 mb-2">
                  <RotateCcw className="w-5 h-5 text-white" />
                  <h3 className="text-xl font-bold text-white">Rollback</h3>
                </div>
                <p className="text-white/60 text-sm mb-6">Revert to a previous stable version if needed</p>
                
                <select className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white mb-4 focus:outline-none focus:border-white/30">
                  <option>Select a version to rollback to</option>
                  <option>v1.1.5 - stable</option>
                  <option>v1.1.0 - outdated</option>
                  <option>v1.0.0 - outdated</option>
                </select>
                
                <button className="w-full px-6 py-3 bg-orange-600 hover:bg-orange-700 text-white rounded-xl font-semibold transition-all">
                  Initiate Rollback
                </button>
              </div>
            </div>

            {/* Deployment Info */}
            <div className="relative bg-gray-700/20 backdrop-blur-xl border border-white/10 rounded-2xl p-6"
              style={{ backdropFilter: 'blur(20px)', WebkitBackdropFilter: 'blur(20px)' }}
            >
              <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent rounded-2xl pointer-events-none"></div>
              <div className="relative z-10">
                <h3 className="text-xl font-bold text-white mb-6">Deployment Info</h3>
                
                <div className="space-y-4">
                  <div className="flex justify-between">
                    <span className="text-white/60 text-sm">Current Version</span>
                    <span className="font-semibold text-white">1.2.0</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-white/60 text-sm">Environment</span>
                    <span className="font-semibold text-white">Production</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-white/60 text-sm">Last Updated</span>
                    <span className="font-semibold text-white">2 hours ago</span>
                  </div>
                </div>
                
                <button className="flex items-center gap-2 mt-6 text-white/60 hover:text-white text-sm font-semibold transition-all">
                  <FileText className="w-4 h-4" />
                  View Changelog
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Deployment;
