import React, { useState } from 'react';
import { Save } from 'lucide-react';

const CanvasBuilder = () => {
  const [selectedNode, setSelectedNode] = useState('greeting');
  const [nodeProperties, setNodeProperties] = useState({
    greeting: {
      type: 'Greeting',
      responseText: 'Welcome! How can I help you today?',
      conditions: [
        { condition: 'user_intent == "support"', action: '→ Data Capture' },
        { condition: 'user_intent == "sales"', action: '→ Escalation' }
      ]
    }
  });

  const nodes = [
    { id: 'greeting', label: 'Greeting', subtitle: 'Initial message', position: { x: 40, y: 130 }, type: 'start' },
    { id: 'intent', label: 'Intent Detection', subtitle: 'Analyze user intent', position: { x: 220, y: 130 }, type: 'process' },
    { id: 'datacapture', label: 'Data Capture', subtitle: 'Collect information', position: { x: 330, y: 230 }, type: 'process' },
    { id: 'success', label: '✓ Success', subtitle: 'Confirmation', position: { x: 220, y: 330 }, type: 'success' }
  ];

  return (
    <div className="p-6 h-full overflow-hidden">
      {/* Header */}
      <div className="flex items-center justify-between mb-8">
        <div>
          <h1 className="text-3xl font-bold text-white mb-2">Conversation Logic Canvas</h1>
          <p className="text-white/60">Design conversation flows and agent logic</p>
        </div>
        <div className="flex items-center gap-3">
          <button className="flex items-center gap-2 px-6 py-3 bg-white/10 hover:bg-white/20 border border-white/20 hover:border-white/30 text-white rounded-xl transition-all duration-300 backdrop-blur-sm font-semibold">
            <Save className="w-5 h-5" />
            Save Draft
          </button>
          <button className="px-6 py-3 bg-orange-600 hover:bg-orange-700 text-white rounded-xl transition-all duration-300 font-semibold">
            Publish
          </button>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex gap-6 h-[calc(100vh-200px)]">
        {/* Canvas Area */}
        <div className="flex-1 relative bg-gray-800/20 backdrop-blur-xl border border-white/10 rounded-2xl overflow-hidden"
          style={{
            backdropFilter: 'blur(20px)',
            WebkitBackdropFilter: 'blur(20px)',
            backgroundImage: 'linear-gradient(rgba(255,255,255,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.03) 1px, transparent 1px)',
            backgroundSize: '30px 30px'
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent pointer-events-none"></div>
          
          {/* Nodes */}
          <div className="relative z-10 w-full h-full">
            {nodes.map((node) => (
              <div
                key={node.id}
                onClick={() => setSelectedNode(node.id)}
                className={`absolute cursor-pointer transition-all duration-200 ${
                  selectedNode === node.id ? 'ring-2 ring-white/50' : ''
                }`}
                style={{
                  left: `${node.position.x}px`,
                  top: `${node.position.y}px`,
                }}
              >
                <div className={`px-6 py-4 rounded-xl min-w-[140px] backdrop-blur-sm transition-all ${
                  node.type === 'start' ? 'bg-white/10 border-2 border-orange-500/50' :
                  node.type === 'success' ? 'bg-green-500/10 border-2 border-green-500/50' :
                  'bg-white/5 border border-white/20'
                }`}>
                  <div className={`font-bold text-sm mb-1 ${
                    node.type === 'success' ? 'text-green-400' : 'text-white'
                  }`}>
                    {node.label}
                  </div>
                  <div className={`text-xs ${
                    node.type === 'success' ? 'text-green-300/70' : 'text-white/60'
                  }`}>
                    {node.subtitle}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Right Sidebar - Node Properties */}
        <div className="w-80 relative bg-gray-700/20 backdrop-blur-xl border border-white/10 rounded-2xl p-6 overflow-y-auto"
          style={{
            backdropFilter: 'blur(20px)',
            WebkitBackdropFilter: 'blur(20px)',
            scrollbarWidth: 'none',
            msOverflowStyle: 'none'
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent rounded-2xl pointer-events-none"></div>
          
          <div className="relative z-10">
            <h2 className="text-xl font-bold text-white mb-6">Node Properties</h2>

            {/* Node Type */}
            <div className="mb-6">
              <label className="block text-sm font-semibold text-white/80 mb-2">Node Type</label>
              <select className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white focus:outline-none focus:border-white/30 transition-all">
                <option>Greeting</option>
                <option>Intent Detection</option>
                <option>Data Capture</option>
                <option>Response</option>
                <option>Escalation</option>
              </select>
            </div>

            {/* Response Text */}
            <div className="mb-6">
              <label className="block text-sm font-semibold text-white/80 mb-2">Response Text</label>
              <textarea
                value={nodeProperties.greeting.responseText}
                onChange={(e) => setNodeProperties({
                  ...nodeProperties,
                  greeting: { ...nodeProperties.greeting, responseText: e.target.value }
                })}
                rows={4}
                className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white placeholder-white/40 focus:outline-none focus:border-white/30 transition-all resize-none"
              />
            </div>

            {/* Conditions */}
            <div>
              <label className="block text-sm font-semibold text-white/80 mb-3">Conditions</label>
              <div className="space-y-3">
                {nodeProperties.greeting.conditions.map((cond, index) => (
                  <div key={index} className="p-4 bg-white/5 border border-white/10 rounded-xl backdrop-blur-sm hover:bg-white/10 transition-all">
                    <div className="text-xs text-white/60 mb-1">
                      <span className="font-semibold text-white">IF</span> {cond.condition}
                    </div>
                    <div className="text-xs text-orange-400 font-medium">
                      {cond.action}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CanvasBuilder;
