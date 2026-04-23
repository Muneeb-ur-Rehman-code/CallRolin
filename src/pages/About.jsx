import React, { useState, useEffect, useRef } from 'react';

// Counter component for animated numbers
const AnimatedCounter = ({ end, suffix = '', duration = 2000 }) => {
  const [count, setCount] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const counterRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && !isVisible) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 }
    );

    if (counterRef.current) {
      observer.observe(counterRef.current);
    }

    return () => {
      if (counterRef.current) {
        observer.unobserve(counterRef.current);
      }
    };
  }, [isVisible]);

  useEffect(() => {
    if (!isVisible) return;

    let startTime;
    let animationFrame;

    const animate = (currentTime) => {
      if (!startTime) startTime = currentTime;
      const progress = Math.min((currentTime - startTime) / duration, 1);
      setCount(Math.floor(progress * end));
      
      if (progress < 1) {
        animationFrame = requestAnimationFrame(animate);
      }
    };

    animationFrame = requestAnimationFrame(animate);

    return () => {
      if (animationFrame) {
        cancelAnimationFrame(animationFrame);
      }
    };
  }, [isVisible, end, duration]);

  return (
    <span ref={counterRef} className="tabular-nums">
      {count}{suffix}
    </span>
  );
};

const About = () => {
  const [activeSection, setActiveSection] = useState(0);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  const securityPillars = [
    {
      icon: (
        <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
        </svg>
      ),
      title: "Confidentiality",
      description: "Every conversation, every data point, every interaction is protected with enterprise-grade encryption and access controls."
    },
    {
      icon: (
        <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
        </svg>
      ),
      title: "Integrity",
      description: "Our systems are designed to maintain data accuracy and consistency throughout the entire AI lifecycle."
    },
    {
      icon: (
        <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
      ),
      title: "Availability",
      description: "Enterprise-grade uptime with redundant systems ensuring your AI agents are always ready when you need them."
    }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveSection((prev) => (prev + 1) % securityPillars.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  const handleMouseMove = (e) => {
    setMousePosition({ x: e.clientX, y: e.clientY });
  };

  return (
    <div className="bg-black min-h-screen text-white overflow-x-hidden" onMouseMove={handleMouseMove}>
      {/* Animated Background Grid */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden">
        <div className="absolute inset-0 opacity-5" style={{
          backgroundImage: 'linear-gradient(white 1px, transparent 1px), linear-gradient(90deg, white 1px, transparent 1px)',
          backgroundSize: '80px 80px',
          maskImage: 'radial-gradient(circle at center, transparent 30%, black 70%)'
        }}></div>
        
        {/* Floating Particles */}
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-white/30 rounded-full animate-pulse"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 5}s`,
              animationDuration: `${2 + Math.random() * 3}s`
            }}
          ></div>
        ))}
      </div>

      {/* Hero Section - Creative Design */}
      <section className="relative min-h-screen w-full overflow-hidden pt-20">
        {/* Animated Background Lines */}
        <div className="absolute inset-0 z-0">
          <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent"></div>
          <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent"></div>
          
          {/* Dynamic Light Effect */}
          <div 
            className="absolute w-96 h-96 rounded-full blur-3xl opacity-10"
            style={{
              left: `${mousePosition.x / window.innerWidth * 100}%`,
              top: `${mousePosition.y / window.innerHeight * 100}%`,
              background: 'radial-gradient(circle, white 0%, transparent 70%)',
              transform: 'translate(-50%, -50%)',
              transition: 'all 0.1s ease-out'
            }}
          ></div>
        </div>

        {/* Hero Content */}
        <div className="relative z-10 flex items-center justify-center min-h-screen px-6 py-20">
          <div className="max-w-6xl mx-auto text-center w-full">
            {/* Animated Badge */}
            <div className="inline-flex items-center gap-2 mb-12">
              <div className="w-3 h-3 bg-white rounded-full animate-pulse"></div>
              <span className="text-sm tracking-widest text-white/60 uppercase">
                Founded in 2025 · Pakistan's AI Pioneer
              </span>
              <div className="w-3 h-3 bg-white rounded-full animate-pulse"></div>
            </div>

            {/* Main Heading with Creative Typography */}
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-8 leading-[0.9] tracking-tight px-4">
              <span className="block text-white/90">Trust is the</span>
              <span className="relative">
                <span className="relative z-10 text-transparent bg-clip-text bg-gradient-to-r from-white to-white/70">
                  foundation
                </span>
                <div className="absolute -bottom-4 left-1/2 transform -translate-x-1/2 w-64 h-px bg-gradient-to-r from-transparent via-white to-transparent"></div>
              </span>
            </h1>

            {/* Updated Description */}
            <p className="text-lg md:text-xl text-white/70 leading-relaxed max-w-3xl mx-auto mb-16 px-4">
              At CallRolin, we understand that trust is the foundation of every conversation whether human or AI.
            </p>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
          <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center">
            <div className="w-1 h-3 bg-white/60 rounded-full mt-2 animate-bounce"></div>
          </div>
        </div>
      </section>

      {/* Security Mission Section - Creative Design */}
      <section className="relative py-24 md:py-32 px-6">
        <div className="max-w-6xl mx-auto w-full">
          {/* Section Header */}
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-4 mb-6">
              <div className="w-20 h-px bg-gradient-to-r from-transparent to-white/30"></div>
              <span className="text-xs tracking-[0.3em] text-white/60 uppercase">Our Mission</span>
              <div className="w-20 h-px bg-gradient-to-r from-white/30 to-transparent"></div>
            </div>
            <h2 className="text-3xl md:text-5xl font-bold mb-8">
              Security at the
              <br />
              <span className="relative inline-block">
                <span className="relative z-10">core of everything</span>
                <div className="absolute -bottom-2 left-0 w-full h-1 bg-gradient-to-r from-white via-white/50 to-white opacity-30"></div>
              </span>
            </h2>
          </div>

          {/* Creative Content Layout */}
          <div className="relative">
            {/* Background Elements */}
            <div className="absolute -top-20 -left-20 w-64 h-64 border border-white/10 rounded-full hidden md:block"></div>
            <div className="absolute -bottom-20 -right-20 w-80 h-80 border border-white/10 rounded-full hidden md:block"></div>

            {/* Main Content */}
            <div className="relative z-10">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start">
                <div>
                  <div className="sticky top-32">
                    <div className="text-7xl md:text-8xl font-bold text-white/5 mb-6">01</div>
                    <p className="text-xl leading-relaxed text-white/90 mb-8">
                      The confidentiality, integrity, and availability of the information we create, process, and host are central to our mission and essential to protecting the privacy of our partners and customers.
                    </p>
                    <div className="w-32 h-px bg-gradient-to-r from-white to-transparent mb-8"></div>
                  </div>
                </div>
                
                <div className="space-y-8">
                  <div className="pl-6 md:pl-8 border-l border-white/20 hover:border-white/50 transition-colors duration-300">
                    <p className="text-lg leading-relaxed text-white/80">
                      As Pakistan's pioneering AI voice automation platform, we believe in complete transparency. That's why we provide clear insight into our security practices, frameworks, and responsibilities across the CallRolin AI ecosystem.
                    </p>
                  </div>
                  
                  <div className="pl-6 md:pl-8 border-l border-white/20 hover:border-white/50 transition-colors duration-300">
                    <p className="text-lg leading-relaxed text-white/80">
                      Every conversation is encrypted end-to-end, every data point is protected with multiple layers of security, and every system is monitored 24/7 by our dedicated security team.
                    </p>
                  </div>
                  
                  <div className="relative p-6 md:p-8 bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl group hover:bg-white/10 transition-all duration-300">
                    <div className="absolute -top-3 -left-3 w-6 h-6 border-t border-l border-white/30"></div>
                    <div className="absolute -bottom-3 -right-3 w-6 h-6 border-b border-r border-white/30"></div>
                    <p className="text-lg md:text-xl font-semibold text-white">
                      Our commitment is simple: deliver enterprise-grade security with the reliability and confidence your business deserves.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Security Pillars Section - Creative Interactive Design */}
      <section className="relative py-24 md:py-32 px-6">
        <div className="max-w-6xl mx-auto w-full">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-4 mb-6">
              <div className="w-20 h-px bg-gradient-to-r from-transparent to-white/30"></div>
              <span className="text-xs tracking-[0.3em] text-white/60 uppercase">Security Foundations</span>
              <div className="w-20 h-px bg-gradient-to-r from-white/30 to-transparent"></div>
            </div>
            <h2 className="text-3xl md:text-5xl font-bold mb-8">
              Three pillars of
              <br />
              <span className="relative inline-block">
                <span className="relative z-10">enterprise security</span>
                <div className="absolute -bottom-2 left-0 w-full h-1 bg-gradient-to-r from-white via-white/50 to-white opacity-30"></div>
              </span>
            </h2>
          </div>

          {/* Interactive Timeline Style Pillars */}
          <div className="relative">
            {/* Connecting Line */}
            <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-white/20 to-transparent"></div>

            {securityPillars.map((pillar, index) => (
              <div
                key={index}
                className={`relative flex flex-col md:flex-row items-start md:items-center mb-24 last:mb-0 ${
                  index % 2 === 0 ? 'md:flex-row-reverse' : ''
                }`}
                onMouseEnter={() => setActiveSection(index)}
              >
                {/* Timeline Node */}
                <div className="absolute left-8 md:left-1/2 transform -translate-x-1/2 w-4 h-4 rounded-full bg-white border-4 border-black z-10"></div>

                {/* Content Card */}
                <div className={`relative w-full md:w-5/12 ${
                  index % 2 === 0 ? 'md:pr-8 lg:pr-16' : 'md:pl-8 lg:pl-16'
                } mt-8 md:mt-0`}>
                  <div className={`relative group cursor-pointer transition-all duration-500 ${
                    activeSection === index ? 'scale-105' : 'scale-100'
                  }`}>
                    {/* Hover Effect */}
                    <div className={`absolute -inset-4 rounded-3xl transition-all duration-500 ${
                      activeSection === index 
                        ? 'bg-white/10 blur-xl' 
                        : 'bg-white/5 blur-lg opacity-0 group-hover:opacity-100'
                    }`}></div>

                    {/* Card Content */}
                    <div className={`relative p-6 md:p-8 border rounded-2xl backdrop-blur-sm transition-all duration-500 ${
                      activeSection === index
                        ? 'border-white/40 bg-white/10'
                        : 'border-white/10 bg-white/5 group-hover:border-white/20'
                    }`}>
                      {/* Icon */}
                      <div className={`w-14 h-14 md:w-16 md:h-16 rounded-xl flex items-center justify-center mb-6 transition-all duration-500 ${
                        activeSection === index
                          ? 'bg-white text-black'
                          : 'bg-white/10 text-white'
                      }`}>
                        {pillar.icon}
                      </div>

                      {/* Title */}
                      <h3 className="text-xl md:text-2xl font-bold mb-4">
                        <span className="text-white/20 mr-2">0{index + 1}</span>
                        <span className="text-white">{pillar.title}</span>
                      </h3>

                      {/* Description */}
                      <p className="text-white/70 leading-relaxed mb-6 text-sm md:text-base">
                        {pillar.description}
                      </p>

                      {/* Progress Indicator */}
                      {activeSection === index && (
                        <div className="absolute bottom-0 left-0 right-0 h-1 bg-white/10 overflow-hidden">
                          <div className="h-full bg-white animate-progress"></div>
                        </div>
                      )}
                    </div>
                  </div>
                </div>

                {/* Year Indicator */}
                <div className={`absolute left-8 md:left-1/2 transform -translate-x-1/2 ${
                  index % 2 === 0 ? 'md:translate-x-8' : 'md:-translate-x-8'
                } top-8 md:top-1/2 md:-translate-y-1/2 text-sm tracking-widest text-white/40`}>
                  2025
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Transparency Section - Creative Split Layout */}
      <section className="relative py-24 md:py-32 px-6">
        <div className="max-w-6xl mx-auto w-full">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            {/* Left Side - Visual Elements */}
            <div className="relative">
              {/* Animated Circles */}
              <div className="relative w-full aspect-square">
                <div className="absolute inset-0 border border-white/10 rounded-full animate-spin-slow"></div>
                <div className="absolute inset-4 md:inset-8 border border-white/10 rounded-full animate-spin-slow-reverse"></div>
                <div className="absolute inset-8 md:inset-16 border border-white/10 rounded-full animate-spin-slow"></div>
                
                {/* Center Content */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-center">
                    <div className="text-6xl md:text-8xl font-bold text-white/5 mb-4">AI</div>
                    <div className="text-sm tracking-widest text-white/60 uppercase">Protected</div>
                  </div>
                </div>
              </div>

              {/* Floating Elements */}
              <div className="absolute -top-8 -left-8 w-32 h-32 border border-white/10 rounded-full animate-pulse hidden md:block"></div>
              <div className="absolute -bottom-8 -right-8 w-40 h-40 border border-white/10 rounded-full animate-pulse hidden md:block" style={{animationDelay: '2s'}}></div>
            </div>

            {/* Right Side - Content */}
            <div>
              <div className="inline-flex items-center gap-4 mb-8">
                <div className="w-12 h-px bg-gradient-to-r from-white to-transparent"></div>
                <span className="text-xs tracking-[0.3em] text-white/60 uppercase">Security Posture</span>
              </div>
              
              <h2 className="text-3xl md:text-5xl font-bold mb-8 leading-tight">
                Proactive security
                <br />
                <span className="text-white/90">by design</span>
              </h2>
              
              <p className="text-lg text-white/70 leading-relaxed mb-12">
                This Security Posture outlines how CallRolin proactively identifies risks, implements industry best practices, and continuously enhances our systems ensuring every interaction is secure, every workflow is protected, and every customer can trust CallRolin as their long-term AI partner.
              </p>

              {/* Feature Grid */}
              <div className="grid grid-cols-2 gap-4 md:gap-6">
                {[
                  { label: "Secure", desc: "Every interaction" },
                  { label: "Protected", desc: "Every workflow" },
                  { label: "Trusted", desc: "Long-term partner" },
                  { label: "Reliable", desc: "Always available" }
                ].map((item, index) => (
                  <div
                    key={index}
                    className="group cursor-pointer"
                  >
                    <div className="relative overflow-hidden rounded-xl p-4 md:p-6 border border-white/10 hover:border-white/30 transition-all duration-300">
                      <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                      <p className="text-2xl md:text-3xl font-bold text-white mb-2">{item.label}</p>
                      <p className="text-xs md:text-sm text-white/60">{item.desc}</p>
                      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent transform translate-y-full group-hover:translate-y-0 transition-transform duration-300"></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA Section - Creative Design */}

      {/* Final CTA Section - Creative Design */}
      <section className="relative py-24 md:py-32 px-6">
        <div className="max-w-5xl mx-auto w-full">
          <div className="relative">
            {/* Background Elements */}
            <div className="absolute -top-20 -left-20 w-64 h-64 border border-white/10 rounded-full animate-pulse hidden md:block"></div>
            <div className="absolute -bottom-20 -right-20 w-80 h-80 border border-white/10 rounded-full animate-pulse hidden md:block" style={{animationDelay: '1s'}}></div>

            {/* Main Content */}
            <div className="relative z-10 text-center">
              <div className="inline-flex items-center gap-4 mb-8">
                <div className="w-20 h-px bg-gradient-to-r from-transparent to-white/30"></div>
                <span className="text-xs tracking-[0.3em] text-white/60 uppercase">Ready to Build</span>
                <div className="w-20 h-px bg-gradient-to-r from-white/30 to-transparent"></div>
              </div>

              <h2 className="text-3xl md:text-5xl font-bold mb-8 leading-tight">
                Build with Pakistan's
                <br />
                <span className="relative inline-block">
                  <span className="relative z-10">most secure AI</span>
                  <div className="absolute -bottom-2 left-0 w-full h-1 bg-gradient-to-r from-white via-white/50 to-white opacity-30"></div>
                </span>
              </h2>

              <p className="text-lg md:text-xl text-white/70 leading-relaxed max-w-2xl mx-auto mb-12">
                Join businesses that trust CallRolin to deliver enterprise-grade security with every conversation.
              </p>

              {/* Animated Button */}
              <div className="relative inline-block group">
                <div className="absolute -inset-4 bg-white/10 rounded-full blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <button className="relative px-8 md:px-12 py-3 md:py-4 rounded-full bg-white text-black font-semibold text-sm tracking-widest uppercase transition-all duration-300 hover:scale-105 hover:shadow-2xl">
                  <span className="flex items-center gap-3">
                    Let's Talk Security
                    <svg className="w-4 h-4 group-hover:translate-x-2 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Custom Animations */}
      <style jsx>{`
        @keyframes progress {
          from {
            width: 0%;
          }
          to {
            width: 100%;
          }
        }

        @keyframes spin-slow {
          from {
            transform: rotate(0deg);
          }
          to {
            transform: rotate(360deg);
          }
        }

        @keyframes spin-slow-reverse {
          from {
            transform: rotate(360deg);
          }
          to {
            transform: rotate(0deg);
          }
        }

        .animate-progress {
          animation: progress 4s linear;
        }

        .animate-spin-slow {
          animation: spin-slow 20s linear infinite;
        }

        .animate-spin-slow-reverse {
          animation: spin-slow-reverse 25s linear infinite;
        }
      `}</style>
    </div>
  );
};

export default About;