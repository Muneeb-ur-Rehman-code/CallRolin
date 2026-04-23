import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const SmartInsights = () => {
  const [activeStep, setActiveStep] = useState(0);
  const [progress, setProgress] = useState(0);

  const steps = [
    {
      id: 0,
      title: "Choose an objective",
      description: "Select a metric like resolution rate, escalation rate, or customer satisfaction.",
      dashboard: (
        <div className="absolute inset-0 flex items-center justify-center p-6">
          <div className="w-full max-w-3xl bg-black/80 backdrop-blur-2xl rounded-3xl border border-white/20 p-8 shadow-2xl">
            <h3 className="text-2xl font-bold text-white mb-6 tracking-tight">Select Success Metric</h3>
            
            <div className="grid grid-cols-2 gap-4">
              <div className="p-5 bg-white/10 border-2 border-white/30 rounded-2xl backdrop-blur-xl hover:bg-white/15 transition-all duration-300 cursor-pointer">
                <div className="flex items-center gap-4 mb-3">
                  <div className="w-10 h-10 rounded-xl bg-white/10 border border-white/20 flex items-center justify-center">
                    <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <span className="text-white font-bold text-sm">Resolution Rate</span>
                </div>
                <p className="text-white/70 text-xs">Percentage of issues resolved without escalation</p>
              </div>
              
              <div className="p-5 bg-white/5 border border-white/20 rounded-2xl backdrop-blur-xl hover:bg-white/10 transition-all duration-300 cursor-pointer">
                <div className="flex items-center gap-4 mb-3">
                  <div className="w-10 h-10 rounded-xl bg-white/10 border border-white/20 flex items-center justify-center">
                    <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v3m0 0v3m0-3h3m-3 0H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <span className="text-white/80 font-bold text-sm">Escalation Rate</span>
                </div>
                <p className="text-white/60 text-xs">Frequency of human agent handoffs</p>
              </div>
              
              <div className="p-5 bg-white/5 border border-white/20 rounded-2xl backdrop-blur-xl hover:bg-white/10 transition-all duration-300 cursor-pointer">
                <div className="flex items-center gap-4 mb-3">
                  <div className="w-10 h-10 rounded-xl bg-white/10 border border-white/20 flex items-center justify-center">
                    <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                    </svg>
                  </div>
                  <span className="text-white/80 font-bold text-sm">Customer Satisfaction</span>
                </div>
                <p className="text-white/60 text-xs">Post-interaction CSAT scores</p>
              </div>
              
              <div className="p-5 bg-white/5 border border-white/20 rounded-2xl backdrop-blur-xl hover:bg-white/10 transition-all duration-300 cursor-pointer">
                <div className="flex items-center gap-4 mb-3">
                  <div className="w-10 h-10 rounded-xl bg-white/10 border border-white/20 flex items-center justify-center">
                    <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <span className="text-white/80 font-bold text-sm">Avg Handle Time</span>
                </div>
                <p className="text-white/60 text-xs">Average duration of customer interactions</p>
              </div>
            </div>
          </div>
        </div>
      )
    },
    {
      id: 1,
      title: "Generate Insights",
      description: "AI surfaces prioritized recommendations with projected impact.",
      dashboard: (
        <div className="absolute inset-0 flex items-center justify-center p-6">
          <div className="w-full max-w-4xl bg-black/80 backdrop-blur-2xl rounded-3xl border border-white/20 p-8 shadow-2xl">
            <h3 className="text-2xl font-bold text-white mb-6 tracking-tight">AI Recommendations</h3>
            
            <div className="space-y-4">
              <div className="p-5 bg-white/10 border-l-4 border-white rounded-2xl backdrop-blur-xl hover:bg-white/15 transition-all duration-300">
                <div className="flex items-start justify-between mb-2">
                  <div>
                    <p className="text-white font-bold text-sm mb-1">Update greeting protocol</p>
                    <p className="text-white/70 text-xs">Early personalization increases resolution by 12%</p>
                  </div>
                  <span className="px-3 py-1 bg-white/20 rounded-full text-white text-xs font-semibold border border-white/30">High Impact</span>
                </div>
                <div className="mt-3 flex items-center gap-2">
                  <div className="w-full bg-white/10 rounded-full h-2">
                    <div className="bg-white h-2 rounded-full" style={{width: '85%'}}></div>
                  </div>
                  <span className="text-white/70 text-xs">85%</span>
                </div>
              </div>
              
              <div className="p-5 bg-white/10 border-l-4 border-white/60 rounded-2xl backdrop-blur-xl hover:bg-white/15 transition-all duration-300">
                <div className="flex items-start justify-between mb-2">
                  <div>
                    <p className="text-white font-bold text-sm mb-1">Clarify refund policy language</p>
                    <p className="text-white/70 text-xs">Reduces confusion and follow-up questions</p>
                  </div>
                  <span className="px-3 py-1 bg-white/10 rounded-full text-white/80 text-xs font-semibold border border-white/20">Medium Impact</span>
                </div>
                <div className="mt-3 flex items-center gap-2">
                  <div className="w-full bg-white/10 rounded-full h-2">
                    <div className="bg-white/80 h-2 rounded-full" style={{width: '62%'}}></div>
                  </div>
                  <span className="text-white/70 text-xs">62%</span>
                </div>
              </div>
              
              <div className="p-5 bg-white/5 border border-white/20 rounded-2xl backdrop-blur-xl hover:bg-white/10 transition-all duration-300">
                <div className="flex items-start justify-between mb-2">
                  <div>
                    <p className="text-white/80 font-bold text-sm mb-1">Add proactive outage alerts</p>
                    <p className="text-white/60 text-xs">Prevents 23% of inbound support volume</p>
                  </div>
                  <span className="px-3 py-1 bg-white/10 rounded-full text-white/80 text-xs font-semibold border border-white/20">Medium Impact</span>
                </div>
                <div className="mt-3 flex items-center gap-2">
                  <div className="w-full bg-white/10 rounded-full h-2">
                    <div className="bg-white/60 h-2 rounded-full" style={{width: '71%'}}></div>
                  </div>
                  <span className="text-white/60 text-xs">71%</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      )
    },
    {
      id: 2,
      title: "Validate at scale",
      description: "Review transcripts, run hypotheses across thousands of calls, and confirm the root cause.",
      dashboard: (
        <div className="absolute inset-0 flex items-center justify-center p-6">
          <div className="w-full max-w-4xl space-y-4">
            <div className="bg-black/80 backdrop-blur-2xl rounded-2xl border border-white/30 p-6">
              <div className="flex items-center justify-between mb-4">
                <h4 className="text-white/70 text-sm font-semibold tracking-wide uppercase">Hypothesis Testing</h4>
                <span className="px-3 py-1 bg-white/10 rounded-full text-white/80 text-xs font-semibold border border-white/20">Running</span>
              </div>
              
              <div className="grid grid-cols-3 gap-4 text-center">
                <div>
                  <p className="text-3xl font-bold text-white">2,847</p>
                  <p className="text-white/60 text-xs">Conversations</p>
                </div>
                <div>
                  <p className="text-3xl font-bold text-white">100%</p>
                  <p className="text-white/60 text-xs">Coverage</p>
                </div>
                <div>
                  <p className="text-3xl font-bold text-white">3.2s</p>
                  <p className="text-white/60 text-xs">Avg Duration</p>
                </div>
              </div>
            </div>
            
            <div className="bg-black/80 backdrop-blur-2xl rounded-2xl border border-white/30 p-6">
              <h4 className="text-white/70 text-sm font-semibold mb-3 tracking-wide uppercase">Root Cause Analysis</h4>
              
              <div className="space-y-3">
                <div className="flex items-center gap-4 p-4 bg-white/5 rounded-xl border border-white/10">
                  <div className="w-3 h-3 rounded-full bg-white"></div>
                  <span className="text-white text-sm font-medium flex-1">Ambiguous language in billing FAQ</span>
                  <span className="text-white/70 text-sm">34% of cases</span>
                </div>
                
                <div className="flex items-center gap-4 p-4 bg-white/5 rounded-xl border border-white/10">
                  <div className="w-3 h-3 rounded-full bg-white/60"></div>
                  <span className="text-white/80 text-sm font-medium flex-1">Missing pro-active shipping updates</span>
                  <span className="text-white/60 text-sm">28% of cases</span>
                </div>
                
                <div className="flex items-center gap-4 p-4 bg-white/5 rounded-xl border border-white/10">
                  <div className="w-3 h-3 rounded-full bg-white/40"></div>
                  <span className="text-white/60 text-sm font-medium flex-1">Complex password reset flow</span>
                  <span className="text-white/50 text-sm">19% of cases</span>
                </div>
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
            {/* Left Side - Image with Dashboard Overlay (65% width) */}
            <div className="w-full lg:w-[65%] relative min-h-[70vh] p-4">
              {/* Background Image */}
              <div className="absolute inset-0 m-4 rounded-2xl overflow-hidden">
                <img 
                  src="https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=1200&q=80" 
                  alt="Smart Insights Background"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-br from-black/60 via-black/40 to-black/60"></div>
              </div>

              {/* Dashboard Overlay */}
              <div className="absolute inset-0 m-4 transition-all duration-700 ease-in-out">
                {steps[activeStep].dashboard}
              </div>
            </div>

            {/* Right Side - Content (35% width) */}
            <div className="w-full lg:w-[35%] p-6 lg:p-10 flex flex-col border-l border-white/10">
              {/* Header with SVG Icon */}
              <div className="mb-10">
                <div className="flex items-center gap-4 mb-5">
                  <div className="w-12 h-12 rounded-2xl bg-white/10 border-2 border-white/20 flex items-center justify-center backdrop-blur-xl">
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                    </svg>
                  </div>
                  <h2 className="text-3xl font-bold text-white tracking-tight">Smart Insights</h2>
                </div>
                <p className="text-base text-white/80 leading-relaxed mb-6">
                  Your agent will surface patterns and uncover root causes, then offer tips on how to update your policies to improve support performance, based on the success metrics you choose.
                </p>
                <Link to="/" className="px-7 py-3 bg-white text-black font-bold rounded-full hoverbg-white/90 transition-all duration-300 inline-flex items-center gap-3 shadow-xl hovershadow-2xl hoverscale-105">
                  Explore Smart Insights
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
          </div>
        </div>
      </div>
    </section>
  );
};

export default SmartInsights;