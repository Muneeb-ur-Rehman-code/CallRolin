import React, { useState } from 'react';
import { Send, Bot } from 'lucide-react';

const TestingLab = () => {
  const [message, setMessage] = useState('');
  const [activeScenario, setActiveScenario] = useState('angry');

  const scenarios = [
    { id: 'angry', label: 'Angry Customer' },
    { id: 'confused', label: 'Confused User' },
    { id: 'silent', label: 'Silent Customer' },
    { id: 'edge', label: 'Edge Cases' }
  ];

  const handleSend = () => {
    if (message.trim()) {
      // Handle sending message
      setMessage('');
    }
  };

  return (
    <div className="p-6 h-full overflow-hidden">
      {/* Header */}
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-white mb-2">Testing Lab</h1>
        <p className="text-white/60">Run simulations and validate agent performance</p>
      </div>

      <div className="grid grid-cols-2 gap-6">
        {/* Interactive Test */}
        <div className="relative bg-gray-700/20 backdrop-blur-xl border border-white/10 rounded-2xl p-6"
          style={{ backdropFilter: 'blur(20px)', WebkitBackdropFilter: 'blur(20px)' }}
        >
          <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent rounded-2xl pointer-events-none"></div>
          <div className="relative z-10">
            <h3 className="text-xl font-bold text-white mb-6">Interactive Test</h3>

            {/* Chat Area */}
            <div className="min-h-[300px] mb-6 p-4 bg-white/5 border border-white/10 rounded-xl">
              {/* Bot Message */}
              <div className="flex gap-3 mb-4">
                <div className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center flex-shrink-0">
                  <Bot className="w-5 h-5 text-white" />
                </div>
                <div className="flex-1">
                  <div className="p-4 bg-white/10 rounded-xl rounded-tl-none max-w-[80%]">
                    <p className="text-white text-sm">
                      Hello! I'm your Banking AI support agent. How can I help you today?
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Input Area */}
            <div className="flex gap-3">
              <input
                type="text"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                onKeyPress={(e) => e.key === 'Enter' && handleSend()}
                placeholder="Type a test message..."
                className="flex-1 px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white placeholder-white/40 focus:outline-none focus:border-white/30 transition-all"
              />
              <button
                onClick={handleSend}
                className="px-6 py-3 bg-white text-black hover:bg-white/90 rounded-xl font-semibold transition-all flex items-center gap-2"
              >
                Send
                <Send className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>

        {/* Test Results */}
        <div className="relative bg-gray-700/20 backdrop-blur-xl border border-white/10 rounded-2xl p-6"
          style={{ backdropFilter: 'blur(20px)', WebkitBackdropFilter: 'blur(20px)' }}
        >
          <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent rounded-2xl pointer-events-none"></div>
          <div className="relative z-10">
            <h3 className="text-xl font-bold text-white mb-6">Test Results</h3>

            {/* Stats Grid */}
            <div className="grid grid-cols-3 gap-4 mb-8">
              <div className="p-4 bg-white/5 border border-white/10 rounded-xl text-center">
                <p className="text-white/60 text-sm mb-1">Pass Rate</p>
                <p className="text-3xl font-bold text-white">99%</p>
              </div>
              <div className="p-4 bg-white/5 border border-white/10 rounded-xl text-center">
                <p className="text-white/60 text-sm mb-1">Simulations Passed</p>
                <p className="text-3xl font-bold text-green-400">1,240</p>
              </div>
              <div className="p-4 bg-white/5 border border-white/10 rounded-xl text-center">
                <p className="text-white/60 text-sm mb-1">Simulations Failed</p>
                <p className="text-3xl font-bold text-red-400">10</p>
              </div>
            </div>

            {/* Scenarios */}
            <div>
              <h4 className="font-semibold text-white mb-4">Scenarios</h4>
              <div className="flex flex-wrap gap-3">
                {scenarios.map((scenario) => (
                  <button
                    key={scenario.id}
                    onClick={() => setActiveScenario(scenario.id)}
                    className={`px-4 py-2 rounded-lg text-sm font-semibold transition-all ${
                      activeScenario === scenario.id
                        ? 'bg-white/20 border border-white/30 text-white'
                        : 'bg-white/5 border border-white/10 text-white/60 hover:text-white hover:bg-white/10'
                    }`}
                  >
                    {scenario.label}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TestingLab;
