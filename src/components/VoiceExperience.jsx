import React from 'react';

const VoiceExperience = () => {
  return (
    <section className="relative bg-black py-24 md:py-32 px-6">
      <div className="max-w-7xl mx-auto">
        {/* Glass Card Container */}
        <div className="relative backdrop-blur-2xl bg-white/5 border-2 border-white/10 rounded-3xl overflow-hidden shadow-2xl">
          <div className="flex flex-col lg:flex-row min-h-[80vh]">
            {/* Left Side - Content (35% width) */}
            <div className="w-full lg:w-[35%] p-6 lg:p-10 flex flex-col border-r border-white/10">
              {/* Header with Voice SVG Icon */}
              <div className="mb-10">
                <div className="flex items-center gap-4 mb-5">
                  <div className="w-12 h-12 rounded-2xl bg-white/10 border-2 border-white/20 flex items-center justify-center backdrop-blur-xl">
                    {/* Microphone/Voice SVG */}
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11a7 7 0 01-7 7m0 0a7 7 0 01-7-7m7 7v4m0 0H8m4 0h4m-4-8a3 3 0 01-3-3V5a3 3 0 116 0v6a3 3 0 01-3 3z" />
                    </svg>
                  </div>
                  <h2 className="text-3xl font-bold text-white tracking-tight">Voice Experience</h2>
                </div>
                <p className="text-base text-white/80 leading-relaxed mb-8">
                  Emotionally-aware agents that understand tone, intent, and context. Fluidly handle accents, interruptions, and rapid turns of conversation to ensure every conversation feels natural.
                </p>
                <button className="px-7 py-3 bg-white text-black font-bold rounded-full hover:bg-white/90 transition-all duration-300 inline-flex items-center gap-3 shadow-xl hover:shadow-2xl hover:scale-105 w-fit">
                  Explore Voice Experience
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </button>
              </div>
            </div>

            {/* Right Side - Video (65% width) */}
            <div className="w-full lg:w-[65%] relative min-h-[80vh] p-4">
              {/* Video Container with spacing, rounded corners and min-height */}
              <div className="absolute inset-0 m-4 rounded-2xl overflow-hidden border border-white/10">
                <video 
                  className="w-full h-full min-h-[60vh] object-cover"
                  autoPlay 
                  muted 
                  loop
                  playsInline
                >
                  {/* Replace with your actual video source */}
                  <source src="https://www.w3schools.com/html/mov_bbb.mp4" type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default VoiceExperience;