import React, { useState } from 'react';

const Cards = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const cards = [
    {
      image: "https://images.pexels.com/photos/5011647/pexels-photo-5011647.jpeg?auto=compress&cs=tinysrgb&w=1200",
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
        </svg>
      ),
      title: "Context-Aware AI",
      description: "Remembers context, adapts in real-time. Conversations that feel genuinely human.",
      features: ["Natural language understanding", "Context retention", "Adaptive responses", "Emotion recognition"]
    },
    {
      image: "https://images.pexels.com/photos/9436715/pexels-photo-9436715.jpeg?auto=compress&cs=tinysrgb&w=1200",
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11a7 7 0 01-7 7m0 0a7 7 0 01-7-7m7 7v4m0 0H8m4 0h4m-4-8a3 3 0 01-3-3V5a3 3 0 116 0v6a3 3 0 01-3 3z" />
        </svg>
      ),
      title: "Ultra-Realistic Voice",
      description: "Natural pauses, emotion, intonation. Your customers won't know it's AI.",
      features: ["Natural pauses", "Emotional tone", "Dynamic intonation", "Human-like breathing"]
    },
    {
      image: "https://images.pexels.com/photos/11612809/pexels-photo-11612809.jpeg?auto=compress&cs=tinysrgb&w=1200",
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
      title: "Multi-Language Support",
      description: "Seamless communication across languages with native-level fluency and cultural adaptation.",
      features: ["Global reach", "Native fluency", "Auto-detection", "Cultural adaptation"]
    },
    {
      image: "https://images.pexels.com/photos/8566875/pexels-photo-8566875.jpeg?auto=compress&cs=tinysrgb&w=1200",
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
      ),
      title: "Lightning Fast",
      description: "Sub-second responses. No awkward pauses, just natural flow.",
      features: ["<1s response time", "Real-time processing", "Zero lag", "Instant understanding"]
    },
    {
      image: "https://images.pexels.com/photos/17485658/pexels-photo-17485658.png?auto=compress&cs=tinysrgb&w=1200",
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
        </svg>
      ),
      title: "Smart Analytics",
      description: "Real-time insights, sentiment analysis, performance optimization.",
      features: ["Live dashboards", "Sentiment tracking", "Call analytics", "Performance metrics"]
    },
    {
      image: "https://images.pexels.com/photos/5011647/pexels-photo-5011647.jpeg?auto=compress&cs=tinysrgb&w=1200",
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
        </svg>
      ),
      title: "Enterprise Security",
      description: "SOC 2 certified, GDPR compliant, end-to-end encrypted.",
      features: ["SOC 2 Type II", "GDPR compliant", "End-to-end encryption", "HIPAA ready"]
    }
  ];

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev === 0 ? Math.ceil(cards.length / 2) - 1 : prev - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev >= Math.ceil(cards.length / 2) - 1 ? 0 : prev + 1));
  };

  const getCurrentCards = () => {
    const startIndex = currentIndex * 2;
    return [
      cards[startIndex],
      cards[startIndex + 1]
    ].filter(Boolean);
  };

  return (
    <div className="min-h-screen py-20 bg-gray-50" style={{ fontFamily: "'Stack Sans Notch', ui-sans-serif, system-ui, -apple-system, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, 'Noto Sans', 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol'" }}>
      {/* Header */}
      <div className="text-center mb-16 px-4">
        <h2 className="text-5xl md:text-6xl font-black text-black mb-6 leading-tight">
          Built for Enterprise Performance
        </h2>
        <p className="text-xl md:text-2xl text-gray-600 font-light mb-8 leading-relaxed">
          Everything you need for world-class customer experiences
        </p>
      </div>

      {/* Full Width Container */}
      <div className="w-full px-4 md:px-4 lg:px-8">
        {/* Cards Grid */}
        <div className="grid md:grid-cols-2 gap-8 mb-12">
          {getCurrentCards().map((card, idx) => (
            <div
              key={currentIndex * 2 + idx}
              className="w-full"
            >
              <div
                className="relative w-full h-[400px] group perspective-1000"
                style={{ perspective: '1000px' }}
              >
                <div
                  className="relative w-full h-full transition-transform duration-700 transform-style-3d group-hover:rotate-y-180"
                  style={{
                    transformStyle: 'preserve-3d',
                  }}
                >
                  {/* Front Side - Image */}
                  <div
                    className="absolute inset-0 w-full h-full backface-hidden rounded-3xl overflow-hidden shadow-2xl border-2 border-black/10"
                    style={{ backfaceVisibility: 'hidden' }}
                  >
                    <img
                      src={card.image}
                      alt={card.title}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent"></div>
                    <div className="absolute bottom-8 left-8 right-8">
                      <h3 className="text-3xl md:text-4xl font-black text-white mb-3 leading-tight">
                        {card.title}
                      </h3>
                      <p className="text-base text-white/90 font-light leading-relaxed">
                        Hover to learn more
                      </p>
                    </div>
                  </div>

                  {/* Back Side - Content */}
                  <div
                    className="absolute inset-0 w-full h-full backface-hidden bg-white border-2 border-black/10 rounded-3xl p-6 shadow-2xl overflow-hidden"
                    style={{
                      backfaceVisibility: 'hidden',
                      transform: 'rotateY(180deg)'
                    }}
                  >
                    <div className="flex flex-col h-full">
                      {/* Icon */}
                      <div className="w-14 h-14 rounded-xl bg-black text-white flex items-center justify-center mb-4 border-2 border-black transition-transform duration-300 hover:scale-110 flex-shrink-0">
                        {card.icon}
                      </div>

                      {/* Title */}
                      <h3 className="text-2xl md:text-3xl font-black text-black mb-4 leading-tight line-clamp-2">
                        {card.title}
                      </h3>

                      {/* Description */}
                      <p className="text-base text-gray-600 mb-6 leading-relaxed font-light line-clamp-2">
                        {card.description}
                      </p>

                      {/* Features */}
                      <div className="space-y-3 mt-auto overflow-y-auto max-h-[140px]">
                        {card.features.map((feature, featureIndex) => (
                          <div key={featureIndex} className="flex items-center gap-3 text-sm text-gray-600">
                            <div className="w-2 h-2 rounded-full bg-black flex-shrink-0"></div>
                            <span className="leading-relaxed">{feature}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Navigation Arrows */}
        <div className="flex gap-4">
          <button
            onClick={handlePrev}
            className="w-12 h-12 rounded-full border-2 border-black bg-transparent hover:bg-black hover:text-white text-black transition-all duration-300 flex items-center justify-center group hover:scale-110"
            aria-label="Previous cards"
          >
            <svg
              className="w-5 h-5 transform transition-transform group-hover:scale-110"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>
          <button
            onClick={handleNext}
            className="w-12 h-12 rounded-full border-2 border-black bg-transparent hover:bg-black hover:text-white text-black transition-all duration-300 flex items-center justify-center group hover:scale-110"
            aria-label="Next cards"
          >
            <svg
              className="w-5 h-5 transform transition-transform group-hover:scale-110"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>
      </div>

      <style jsx>{`
        .rotate-y-180 {
          transform: rotateY(180deg);
        }
        .backface-hidden {
          backface-visibility: hidden;
          -webkit-backface-visibility: hidden;
        }
        .transform-style-3d {
          transform-style: preserve-3d;
        }
        .perspective-1000 {
          perspective: 1000px;
        }
        .group:hover .group-hover\:rotate-y-180 {
          transform: rotateY(180deg);
        }
        .line-clamp-2 {
          display: -webkit-box;
          -webkit-line-clamp: 2;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }
      `}</style>
    </div>
  );
};

export default Cards;