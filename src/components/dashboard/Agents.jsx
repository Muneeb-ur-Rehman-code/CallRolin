import React, { useState } from 'react';
import { Plus, Eye, Edit, Check, Upload, X, ChevronLeft, ChevronRight } from 'lucide-react';

const Agents = () => {
  const [showCreateAgent, setShowCreateAgent] = useState(false);
  const [currentStep, setCurrentStep] = useState(1);
  const [uploadedFile, setUploadedFile] = useState(null);
  
  const [formData, setFormData] = useState({
    name: '',
    role: '',
    description: '',
    modality: 'Multi-modal',
    voiceTone: 'Professional',
    brandVoice: 'Professional, empathetic, solution-focused customer support representative',
    restrictedTopics: 'Pricing negotiations, account deletion, legal disputes',
    escalation: true
  });

  const agents = [
    {
      id: 1,
      name: 'Banking AI Support',
      status: 'active',
      conversations: '2,541',
      successRate: '94%',
      updated: '2 hours ago'
    },
    {
      id: 2,
      name: 'HR Onboarding Bot',
      status: 'draft',
      conversations: '124',
      successRate: '87%',
      updated: '1 day ago'
    },
    {
      id: 3,
      name: 'Sales Qualification',
      status: 'testing',
      conversations: '456',
      successRate: '91%',
      updated: '3 hours ago'
    }
  ];

  const handleFileUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      setUploadedFile({
        name: file.name,
        size: (file.size / (1024 * 1024)).toFixed(1) + ' MB'
      });
    }
  };

  const nextStep = () => {
    if (currentStep < 3) setCurrentStep(currentStep + 1);
  };

  const prevStep = () => {
    if (currentStep > 1) setCurrentStep(currentStep - 1);
  };

  const handleSubmit = () => {
    // Handle agent creation
    setShowCreateAgent(false);
    setCurrentStep(1);
    setUploadedFile(null);
  };

  const StepIndicator = ({ step, label, isComplete, isCurrent }) => (
    <div className="flex items-center gap-3">
      {isComplete ? (
        <div className="flex items-center gap-2 text-green-400">
          <div className="w-6 h-6 bg-green-500/20 border border-green-500/30 rounded-full flex items-center justify-center">
            <Check className="w-4 h-4" />
          </div>
          <span className="font-semibold text-sm">{label}</span>
        </div>
      ) : (
        <span className={`font-semibold text-sm ${isCurrent ? 'text-white' : 'text-white/40'}`}>
          {label}
        </span>
      )}
    </div>
  );

  if (showCreateAgent) {
    return (
      <div className="p-6 h-full overflow-hidden">
        <div className="max-w-3xl mx-auto">
          {/* Header */}
          <div className="mb-8">
            <h1 className="text-3xl font-bold text-white mb-2">Create New Agent</h1>
            <p className="text-white/60">Configure your AI agent step by step</p>
          </div>

          {/* Step Indicators */}
          <div className="flex items-center gap-6 mb-8">
            <StepIndicator step={1} label="Basic Info" isComplete={currentStep > 1} isCurrent={currentStep === 1} />
            <StepIndicator step={2} label="Training Data" isComplete={currentStep > 2} isCurrent={currentStep === 2} />
            <StepIndicator step={3} label="Configuration" isComplete={false} isCurrent={currentStep === 3} />
          </div>

          {/* Form Content */}
          <div className="relative bg-gray-700/20 backdrop-blur-xl border border-white/10 rounded-2xl p-8"
            style={{
              backdropFilter: 'blur(20px)',
              WebkitBackdropFilter: 'blur(20px)',
            }}
          >
            <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent rounded-2xl pointer-events-none"></div>
            
            <div className="relative z-10">
              {/* Step 1: Basic Info */}
              {currentStep === 1 && (
                <div className="space-y-6">
                  <div>
                    <label className="block text-white font-semibold mb-2">Agent Name</label>
                    <input
                      type="text"
                      placeholder="e.g., Banking Support Agent"
                      value={formData.name}
                      onChange={(e) => setFormData({...formData, name: e.target.value})}
                      className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white placeholder-white/40 focus:outline-none focus:border-white/30 transition-all"
                    />
                  </div>

                  <div>
                    <label className="block text-white font-semibold mb-2">Agent Role</label>
                    <input
                      type="text"
                      placeholder="e.g., Customer Support, Sales, HR"
                      value={formData.role}
                      onChange={(e) => setFormData({...formData, role: e.target.value})}
                      className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white placeholder-white/40 focus:outline-none focus:border-white/30 transition-all"
                    />
                  </div>

                  <div>
                    <label className="block text-white font-semibold mb-2">Description</label>
                    <textarea
                      placeholder="Describe what this agent does and its responsibilities..."
                      value={formData.description}
                      onChange={(e) => setFormData({...formData, description: e.target.value})}
                      rows={4}
                      className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white placeholder-white/40 focus:outline-none focus:border-white/30 transition-all resize-none"
                    />
                  </div>

                  <div className="grid grid-cols-2 gap-6">
                    <div>
                      <label className="block text-white font-semibold mb-2">Modality</label>
                      <select
                        value={formData.modality}
                        onChange={(e) => setFormData({...formData, modality: e.target.value})}
                        className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white focus:outline-none focus:border-white/30 transition-all"
                      >
                        <option value="Multi-modal">Multi-modal</option>
                        <option value="Text-only">Text-only</option>
                        <option value="Voice-only">Voice-only</option>
                      </select>
                    </div>

                    <div>
                      <label className="block text-white font-semibold mb-2">Voice Tone</label>
                      <select
                        value={formData.voiceTone}
                        onChange={(e) => setFormData({...formData, voiceTone: e.target.value})}
                        className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white focus:outline-none focus:border-white/30 transition-all"
                      >
                        <option value="Professional">Professional</option>
                        <option value="Friendly">Friendly</option>
                        <option value="Casual">Casual</option>
                        <option value="Formal">Formal</option>
                      </select>
                    </div>
                  </div>
                </div>
              )}

              {/* Step 2: Training Data */}
              {currentStep === 2 && (
                <div className="space-y-6">
                  <div>
                    <h3 className="text-xl font-bold text-white mb-2">Add Training Documents</h3>
                    <p className="text-white/60 mb-6">Attach files to give your agent business context</p>
                  </div>

                  <div className="relative border-2 border-dashed border-white/20 rounded-xl p-12 text-center hover:border-white/30 transition-all cursor-pointer bg-white/5"
                    onClick={() => document.getElementById('file-upload').click()}
                  >
                    <input
                      id="file-upload"
                      type="file"
                      onChange={handleFileUpload}
                      className="hidden"
                      accept=".pdf,.docx,.txt,.png,.mp3,.mp4"
                    />
                    
                    <div className="flex items-center justify-center gap-4 mb-4">
                      <div className="w-12 h-12 bg-white/10 rounded-xl flex items-center justify-center">
                        <span className="text-2xl">📄</span>
                      </div>
                      <div className="w-12 h-12 bg-white/10 rounded-xl flex items-center justify-center">
                        <span className="text-2xl">📝</span>
                      </div>
                      <div className="w-12 h-12 bg-white/10 rounded-xl flex items-center justify-center">
                        <span className="text-2xl">🖼️</span>
                      </div>
                      <div className="w-12 h-12 bg-white/10 rounded-xl flex items-center justify-center">
                        <span className="text-2xl">🎵</span>
                      </div>
                      <div className="w-12 h-12 bg-white/10 rounded-xl flex items-center justify-center">
                        <span className="text-2xl">🎬</span>
                      </div>
                    </div>
                    
                    <p className="text-white font-semibold mb-2">Drag files here or click to browse</p>
                    <p className="text-white/50 text-sm">Supported: PDF, DOCX, TXT, PNG, MP3, MP4</p>
                  </div>

                  {uploadedFile && (
                    <div className="flex items-center justify-between p-4 bg-white/10 border border-white/20 rounded-xl">
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center">
                          <span className="text-xl">📄</span>
                        </div>
                        <div>
                          <p className="text-white font-semibold">{uploadedFile.name}</p>
                          <p className="text-white/60 text-sm">{uploadedFile.size}</p>
                        </div>
                      </div>
                      <div className="flex items-center gap-2 text-green-400">
                        <Check className="w-5 h-5" />
                        <span className="font-semibold text-sm">Uploaded</span>
                      </div>
                    </div>
                  )}
                </div>
              )}

              {/* Step 3: Configuration */}
              {currentStep === 3 && (
                <div className="space-y-6">
                  <div>
                    <h3 className="text-xl font-bold text-white mb-6">Configure Guardrails</h3>
                  </div>

                  <div>
                    <label className="block text-white font-semibold mb-2">Brand Voice & Persona</label>
                    <textarea
                      value={formData.brandVoice}
                      onChange={(e) => setFormData({...formData, brandVoice: e.target.value})}
                      rows={3}
                      className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white placeholder-white/40 focus:outline-none focus:border-white/30 transition-all resize-none"
                    />
                  </div>

                  <div>
                    <label className="block text-white font-semibold mb-2">Restricted Topics</label>
                    <textarea
                      value={formData.restrictedTopics}
                      onChange={(e) => setFormData({...formData, restrictedTopics: e.target.value})}
                      rows={2}
                      className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white placeholder-white/40 focus:outline-none focus:border-white/30 transition-all resize-none"
                    />
                  </div>

                  <div className="flex items-center gap-3 p-4 bg-white/5 border border-white/10 rounded-xl">
                    <input
                      type="checkbox"
                      id="escalation"
                      checked={formData.escalation}
                      onChange={(e) => setFormData({...formData, escalation: e.target.checked})}
                      className="w-5 h-5 rounded border-white/20 bg-white/10 text-white focus:ring-2 focus:ring-white/20"
                    />
                    <label htmlFor="escalation" className="text-white font-semibold cursor-pointer">
                      Enable escalation to human agents
                    </label>
                  </div>
                </div>
              )}

              {/* Navigation Buttons */}
              <div className="flex items-center justify-between mt-8 pt-6 border-t border-white/10">
                <button
                  onClick={currentStep === 1 ? () => setShowCreateAgent(false) : prevStep}
                  className="flex items-center gap-2 px-6 py-3 bg-white/5 hover:bg-white/10 border border-white/10 hover:border-white/20 text-white rounded-xl transition-all duration-300"
                >
                  <ChevronLeft className="w-5 h-5" />
                  Back
                </button>

                {currentStep < 3 ? (
                  <button
                    onClick={nextStep}
                    className="flex items-center gap-2 px-6 py-3 bg-white text-black hover:bg-white/90 rounded-xl transition-all duration-300 font-semibold"
                  >
                    Next
                    <ChevronRight className="w-5 h-5" />
                  </button>
                ) : (
                  <button
                    onClick={handleSubmit}
                    className="flex items-center gap-2 px-6 py-3 bg-green-500 hover:bg-green-600 text-white rounded-xl transition-all duration-300 font-semibold"
                  >
                    <Check className="w-5 h-5" />
                    Create Agent
                  </button>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="p-6 h-full overflow-hidden">
      {/* Header */}
      <div className="flex items-center justify-between mb-8">
        <div>
          <h1 className="text-3xl font-bold text-white mb-2">My Agents</h1>
        </div>
        <button
          onClick={() => setShowCreateAgent(true)}
          className="flex items-center gap-2 px-6 py-3 bg-white text-black hover:bg-white/90 rounded-xl transition-all duration-300 font-semibold"
        >
          <Plus className="w-5 h-5" />
          Create New Agent
        </button>
      </div>

      {/* Agents Grid */}
      <div className="space-y-4">
        {agents.map((agent) => (
          <div
            key={agent.id}
            className="relative bg-gray-700/20 backdrop-blur-xl border border-white/10 rounded-2xl p-6 hover:border-white/20 transition-all duration-300"
            style={{
              backdropFilter: 'blur(20px)',
              WebkitBackdropFilter: 'blur(20px)',
            }}
          >
            <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent rounded-2xl pointer-events-none"></div>
            
            <div className="relative z-10">
              <div className="flex items-start justify-between mb-4">
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-2">
                    <h3 className="text-xl font-bold text-white">{agent.name}</h3>
                    <span className={`px-3 py-1 rounded-full text-xs font-semibold border ${
                      agent.status === 'active' ? 'bg-green-500/20 text-green-400 border-green-500/30' :
                      agent.status === 'draft' ? 'bg-yellow-500/20 text-yellow-400 border-yellow-500/30' :
                      'bg-blue-500/20 text-blue-400 border-blue-500/30'
                    }`}>
                      {agent.status}
                    </span>
                  </div>
                  
                  <div className="grid grid-cols-3 gap-6 mb-4">
                    <div>
                      <p className="text-white/50 text-sm mb-1">Conversations</p>
                      <p className="text-2xl font-bold text-white">{agent.conversations}</p>
                    </div>
                    <div>
                      <p className="text-white/50 text-sm mb-1">Success Rate</p>
                      <p className="text-2xl font-bold text-white">{agent.successRate}</p>
                    </div>
                    <div>
                      <p className="text-white/50 text-sm mb-1">Updated</p>
                      <p className="text-white/80 text-sm">{agent.updated}</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <button className="flex items-center gap-2 px-5 py-2.5 bg-white/10 hover:bg-white/20 border border-white/20 hover:border-white/30 text-white rounded-lg transition-all duration-300 font-semibold text-sm">
                  <Eye className="w-4 h-4" />
                  View
                </button>
                <button className="flex items-center gap-2 px-5 py-2.5 bg-white/10 hover:bg-white/20 border border-white/20 hover:border-white/30 text-white rounded-lg transition-all duration-300 font-semibold text-sm">
                  <Edit className="w-4 h-4" />
                  Edit
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Agents;
