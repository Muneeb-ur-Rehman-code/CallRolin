import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const AgentCanvas = () => {
  const [activeStep, setActiveStep] = useState(0);
  const [progress, setProgress] = useState(0);

  const steps = [
    {
      id: 0,
      title: "Create the agent",
      description: "Ground agents in your brand standards, compliance rules, and workflows so every interaction is consistent and on-policy.",
      dashboard: (
        <div className="absolute inset-0 flex items-center justify-center p-6">
          <div className="w-full max-w-3xl bg-black/80 backdrop-blur-2xl rounded-3xl border border-white/20 p-8 shadow-2xl">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-14 h-14 rounded-2xl bg-white/10 border border-white/20 flex items-center justify-center backdrop-blur-xl">
                <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-white tracking-tight">Banking AI Support Agent</h3>
            </div>
            
            <div className="space-y-3">
              <div className="flex items-center gap-4 p-4 bg-white/10 rounded-xl border border-white/20 backdrop-blur-xl hover:bg-white/15 transition-all duration-300">
                <div className="w-10 h-10 rounded-xl bg-white/10 border border-white/20 flex items-center justify-center flex-shrink-0">
                  <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                  </svg>
                </div>
                <span className="text-white font-semibold text-sm">Policies</span>
              </div>
              
              <div className="flex items-center gap-4 p-4 bg-white/5 rounded-xl border border-white/10 backdrop-blur-xl opacity-50">
                <div className="w-10 h-10 rounded-xl bg-white/10 border border-white/10 flex items-center justify-center flex-shrink-0">
                  <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4" />
                  </svg>
                </div>
                <span className="text-white/60 font-medium text-sm">Data sources</span>
              </div>
              
              <div className="flex items-center gap-4 p-4 bg-white/5 rounded-xl border border-white/10 backdrop-blur-xl opacity-50">
                <div className="w-10 h-10 rounded-xl bg-white/10 border border-white/10 flex items-center justify-center flex-shrink-0">
                  <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                  </svg>
                </div>
                <span className="text-white/60 font-medium text-sm">Personalization</span>
              </div>

              <div className="flex items-center gap-4 p-4 bg-white/5 rounded-xl border border-white/10 backdrop-blur-xl opacity-50">
                <div className="w-10 h-10 rounded-xl bg-white/10 border border-white/10 flex items-center justify-center flex-shrink-0">
                  <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                  </svg>
                </div>
                <span className="text-white/60 font-medium text-sm">Evaluation</span>
              </div>
            </div>
          </div>
        </div>
      )
    },
    {
      id: 1,
      title: "Define policies",
      description: "Set clear guardrails in plain language. Decide what should be automated, when to escalate, and how to manage sensitive cases.",
      dashboard: (
        <div className="absolute inset-0 flex items-center justify-center p-6">
          <div className="w-full max-w-4xl bg-black/80 backdrop-blur-2xl rounded-3xl border border-white/20 p-8 shadow-2xl">
            <h3 className="text-2xl font-bold text-white mb-6 tracking-tight">Policy Configuration</h3>
            
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-4">
                <div className="p-5 bg-white/10 border-2 border-white/30 rounded-2xl backdrop-blur-xl hover:bg-white/15 transition-all duration-300">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-white font-bold text-sm">Automated Actions</span>
                    <span className="px-3 py-1 bg-white/20 rounded-full text-white text-xs font-semibold border border-white/30">Active</span>
                  </div>
                  <p className="text-white/70 text-sm">Account balance inquiries</p>
                </div>
                
                <div className="p-5 bg-white/10 border-2 border-white/30 rounded-2xl backdrop-blur-xl hover:bg-white/15 transition-all duration-300">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-white font-bold text-sm">Auto-resolve</span>
                    <span className="px-3 py-1 bg-white/20 rounded-full text-white text-xs font-semibold border border-white/30">Active</span>
                  </div>
                  <p className="text-white/70 text-sm">Password reset requests</p>
                </div>
              </div>
              
              <div className="space-y-4">
                <div className="p-5 bg-white/5 border border-white/20 rounded-2xl backdrop-blur-xl hover:bg-white/10 transition-all duration-300">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-white/80 font-bold text-sm">Escalation Required</span>
                    <span className="px-3 py-1 bg-white/10 rounded-full text-white/70 text-xs font-semibold border border-white/20">Manual</span>
                  </div>
                  <p className="text-white/60 text-sm">Fraud detection alerts</p>
                </div>
                
                <div className="p-5 bg-white/5 border border-white/20 rounded-2xl backdrop-blur-xl hover:bg-white/10 transition-all duration-300">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-white/80 font-bold text-sm">Human Review</span>
                    <span className="px-3 py-1 bg-white/10 rounded-full text-white/70 text-xs font-semibold border border-white/20">Manual</span>
                  </div>
                  <p className="text-white/60 text-sm">Large transactions</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      )
    },
    {
      id: 2,
      title: "Design the logic",
      description: "Map conversation flows and escalation paths. Extend capabilities through APIs and custom code to connect seamlessly with your systems.",
      dashboard: (
        <div className="absolute inset-0 flex items-center justify-center p-6">
          <div className="w-full max-w-4xl bg-black/80 backdrop-blur-2xl rounded-3xl border border-white/20 p-8 shadow-2xl">
            <h3 className="text-2xl font-bold text-white mb-6 tracking-tight">Conversation Flow</h3>
            
            <div className="space-y-5">
              <div className="flex items-center gap-6">
                <div className="w-14 h-14 rounded-full bg-white border-4 border-white/30 flex items-center justify-center text-black font-bold text-xl flex-shrink-0 shadow-lg">1</div>
                <div className="flex-1 p-5 bg-white/10 border border-white/30 rounded-2xl backdrop-blur-xl hover:bg-white/15 transition-all duration-300">
                  <p className="text-white font-bold text-base mb-1">Initial Greeting</p>
                  <p className="text-white/70 text-sm">Welcome message & intent detection</p>
                </div>
              </div>
              
              <div className="flex items-center gap-6">
                <div className="w-14 h-14 rounded-full bg-white/80 border-4 border-white/30 flex items-center justify-center text-black font-bold text-xl flex-shrink-0 shadow-lg">2</div>
                <div className="flex-1 p-5 bg-white/10 border border-white/30 rounded-2xl backdrop-blur-xl hover:bg-white/15 transition-all duration-300">
                  <p className="text-white font-bold text-base mb-1">Information Gathering</p>
                  <p className="text-white/70 text-sm">Collect necessary details via API calls</p>
                </div>
              </div>
              
              <div className="flex items-center gap-6">
                <div className="w-14 h-14 rounded-full bg-white/60 border-4 border-white/30 flex items-center justify-center text-black font-bold text-xl flex-shrink-0 shadow-lg">3</div>
                <div className="flex-1 p-5 bg-white/10 border border-white/30 rounded-2xl backdrop-blur-xl hover:bg-white/15 transition-all duration-300">
                  <p className="text-white font-bold text-base mb-1">Resolution & Follow-up</p>
                  <p className="text-white/70 text-sm">Provide solution & confirm satisfaction</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      )
    },
    {
      id: 3,
      title: "Test and launch",
      description: "Validate performance with AI-driven simulations built from real customer conversations. Run regression tests, A/B experiments, and deploy safely with instant rollback.",
      dashboard: (
        <div className="absolute inset-0 flex items-center justify-center p-6">
          <div className="w-full max-w-5xl space-y-4">
            <div className="grid grid-cols-3 gap-4">
              <div className="bg-black/80 backdrop-blur-2xl rounded-2xl border border-white/30 p-6 hover:border-white/40 transition-all duration-300">
                <h4 className="text-white/70 text-sm font-semibold mb-2 tracking-wide uppercase">Pass rate</h4>
                <p className="text-5xl font-bold text-white mb-2">99%</p>
                <p className="text-white/60 text-sm">Based on 1,250 simulations</p>
              </div>
              
              <div className="bg-black/80 backdrop-blur-2xl rounded-2xl border border-white/30 p-6 hover:border-white/40 transition-all duration-300">
                <h4 className="text-white/70 text-sm font-semibold mb-2 tracking-wide uppercase">Simulations passed</h4>
                <p className="text-5xl font-bold text-white mb-2">1,240</p>
                <p className="text-white/60 text-sm">All conditions met</p>
              </div>
              
              <div className="bg-black/80 backdrop-blur-2xl rounded-2xl border border-white/30 p-6 hover:border-white/40 transition-all duration-300">
                <h4 className="text-white/70 text-sm font-semibold mb-2 tracking-wide uppercase">Simulations failed</h4>
                <p className="text-5xl font-bold text-white mb-2">10</p>
                <p className="text-white/60 text-sm">Failure conditions detected</p>
              </div>
            </div>
            
            <div className="bg-black/80 backdrop-blur-2xl rounded-2xl border border-white/30 p-6">
              <div className="grid grid-cols-3 gap-6 text-white/70 text-sm font-bold mb-4 pb-3 border-b border-white/20 uppercase tracking-wide">
                <div>Test case</div>
                <div>Status</div>
                <div>Pass rate</div>
              </div>
              
              <div className="space-y-3">
                <div className="grid grid-cols-3 gap-6 items-center p-3 bg-white/5 rounded-xl border border-white/10 hover:bg-white/10 transition-all duration-300">
                  <span className="text-white text-sm font-medium">Response Accuracy Test</span>
                  <div className="flex items-center gap-3">
                    <div className="w-3 h-3 rounded-full bg-white border-2 border-white/50"></div>
                    <span className="text-white text-sm font-semibold">Passed</span>
                  </div>
                  <span className="text-white text-base font-bold">100%</span>
                </div>
                
                <div className="grid grid-cols-3 gap-6 items-center p-3 bg-white/5 rounded-xl border border-white/10 hover:bg-white/10 transition-all duration-300">
                  <span className="text-white text-sm font-medium">User Interaction Simulation</span>
                  <div className="flex items-center gap-3">
                    <div className="w-3 h-3 rounded-full bg-white border-2 border-white/50"></div>
                    <span className="text-white text-sm font-semibold">Passed</span>
                  </div>
                  <span className="text-white text-base font-bold">100%</span>
                </div>
                
                <div className="grid grid-cols-3 gap-6 items-center p-3 bg-white/5 rounded-xl border border-white/10 hover:bg-white/10 transition-all duration-300">
                  <span className="text-white text-sm font-medium">AI Agent Error Handling Test Case</span>
                  <div className="flex items-center gap-3">
                    <div className="w-3 h-3 rounded-full bg-white/50 border-2 border-white/30"></div>
                    <span className="text-white/80 text-sm font-semibold">Deviated</span>
                  </div>
                  <span className="text-white text-base font-bold">80%</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      )
    },
    {
      id: 4,
      title: "Monitor and improve",
      description: "Replay conversations, review transcripts, and convert real cases into test suites. Use experiments to confirm improvements before release.",
      dashboard: (
        <div className="absolute inset-0 flex items-center justify-center p-6">
          <div className="w-full max-w-4xl bg-black/80 backdrop-blur-2xl rounded-3xl border border-white/20 p-8 shadow-2xl">
            <h3 className="text-2xl font-bold text-white mb-6 tracking-tight">Performance Metrics</h3>
            
            <div className="grid grid-cols-2 gap-5">
              <div className="space-y-4">
                <div className="p-6 bg-white/10 border border-white/30 rounded-2xl backdrop-blur-xl hover:bg-white/15 transition-all duration-300">
                  <h4 className="text-white/70 text-sm mb-2 font-semibold tracking-wide uppercase">Average Response Time</h4>
                  <p className="text-4xl font-bold text-white">1.2s</p>
                </div>
                
                <div className="p-6 bg-white/10 border border-white/30 rounded-2xl backdrop-blur-xl hover:bg-white/15 transition-all duration-300">
                  <h4 className="text-white/70 text-sm mb-2 font-semibold tracking-wide uppercase">Customer Satisfaction</h4>
                  <p className="text-4xl font-bold text-white">4.8/5</p>
                </div>
              </div>
              
              <div className="space-y-4">
                <div className="p-6 bg-white/10 border border-white/30 rounded-2xl backdrop-blur-xl hover:bg-white/15 transition-all duration-300">
                  <h4 className="text-white/70 text-sm mb-2 font-semibold tracking-wide uppercase">Resolution Rate</h4>
                  <p className="text-4xl font-bold text-white">94%</p>
                </div>
                
                <div className="p-6 bg-white/10 border border-white/30 rounded-2xl backdrop-blur-xl hover:bg-white/15 transition-all duration-300">
                  <h4 className="text-white/70 text-sm mb-2 font-semibold tracking-wide uppercase">Conversations Today</h4>
                  <p className="text-4xl font-bold text-white">2,847</p>
                </div>
              </div>
            </div>
            
            <div className="mt-6 p-4 bg-white/10 border border-white/30 rounded-2xl backdrop-blur-xl">
              <div className="flex items-center gap-3">
                <div className="w-3 h-3 rounded-full bg-white"></div>
                <p className="text-white text-base font-semibold">All systems operational</p>
              </div>
            </div>
          </div>
        </div>
      )
    }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          setActiveStep((current) => (current + 1) % steps.length);
          return 0;
        }
        return prev + 1;
      });
    }, 100);

    return () => clearInterval(timer);
  }, []);

  const handleStepClick = (index) => {
    setActiveStep(index);
    setProgress(0);
  };

  return (
    <section className="relative bg-black py-24 md:py-32 px-6">
      <div className="max-w-7xl mx-auto">
        {/* Glass Card Container */}
        <div className="relative backdrop-blur-2xl bg-white/5 border-2 border-white/10 rounded-3xl overflow-hidden shadow-2xl">
          <div className="flex flex-col lg:flex-row min-h-[70vh]">
            {/* Left Side - Content (35% width) */}
            <div className="w-full lg:w-[35%] p-6 lg:p-10 flex flex-col border-r border-white/10">
              {/* Header with SVG Icon */}
              <div className="mb-10">
                <div className="flex items-center gap-4 mb-5">
                  <div className="w-12 h-12 rounded-2xl bg-white/10 border-2 border-white/20 flex items-center justify-center backdrop-blur-xl">
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 5a1 1 0 011-1h4a1 1 0 011 1v7a1 1 0 01-1 1H5a1 1 0 01-1-1V5zM14 5a1 1 0 011-1h4a1 1 0 011 1v7a1 1 0 01-1 1h-4a1 1 0 01-1-1V5zM4 16a1 1 0 011-1h4a1 1 0 011 1v3a1 1 0 01-1 1H5a1 1 0 01-1-1v-3zM14 16a1 1 0 011-1h4a1 1 0 011 1v3a1 1 0 01-1 1h-4a1 1 0 01-1-1v-3z" />
                    </svg>
                  </div>
                  <h2 className="text-3xl font-bold text-white tracking-tight">Agent Studio</h2>
                </div>
                <p className="text-base text-white/80 leading-relaxed mb-6">
                  The fastest way to build, govern, and scale enterprise AI agents.
                </p>
                <Link to="/" className="px-7 py-3 bg-white text-black font-bold rounded-full hoverbg-white/90 transition-all duration-300 inline-flex items-center gap-3 shadow-xl hovershadow-2xl hoverscale-105">
                  Explore Agent Canvas
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </Link>
              </div>

              {/* Interactive Steps */}
              <div className="space-y-0 flex-1">
                {steps.map((step, index) => (
                  <div key={step.id} className="relative">
                    {/* Progress Bar */}
                    {activeStep === index && (
                      <div className="absolute top-0 left-0 right-0 h-[3px] bg-white/10">
                        <div 
                          className="h-full bg-white transition-all duration-100 ease-linear shadow-lg"
                          style={{ width: `${progress}%` }}
                        ></div>
                      </div>
                    )}
                    
                    {/* Step Button */}
                    <button
                      onClick={() => handleStepClick(index)}
                      className={`w-full text-left p-5 transition-all duration-300 border-t border-white/10 ${
                        activeStep === index 
                          ? 'bg-white/10 backdrop-blur-xl' 
                          : 'hover:bg-white/5'
                      }`}
                    >
                      <h3 className={`text-lg font-bold mb-2 transition-colors duration-300 tracking-tight ${
                        activeStep === index ? 'text-white' : 'text-white/50'
                      }`}>
                        {step.title}
                      </h3>
                      
                      {/* Description - Only show for active step */}
                      <div className={`overflow-hidden transition-all duration-500 ${
                        activeStep === index 
                          ? 'max-h-40 opacity-100' 
                          : 'max-h-0 opacity-0'
                      }`}>
                        <p className="text-sm text-white/70 leading-relaxed">
                          {step.description}
                        </p>
                      </div>
                    </button>
                  </div>
                ))}
              </div>
            </div>

            {/* Right Side - Image with Dashboard Overlay (65% width) */}
            <div className="w-full lg:w-[65%] relative min-h-[70vh] p-4">
              {/* Background Image */}
              <div className="absolute inset-0 m-4 rounded-2xl overflow-hidden">
                <img 
                  src="https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=1200&q=80 " 
                  alt="Agent Canvas Background"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-br from-black/60 via-black/40 to-black/60"></div>
              </div>

              {/* Dashboard Overlay */}
              <div className="absolute inset-0 m-4 transition-all duration-700 ease-in-out">
                {steps[activeStep].dashboard}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AgentCanvas;