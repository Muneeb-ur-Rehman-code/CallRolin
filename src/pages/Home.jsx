import React, { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import {
  SiOpenai,
  SiGooglecloud,
  SiAwslambda,
  SiStripe,
  SiMongodb,
} from "react-icons/si";
import bg from "../../public/hero.avif";
import AgentCanvas from "../components/AgentCanvas.jsx";
import SmartInsight from "../components/SmartInsight.jsx";
import VoiceExperience from "../components/VoiceExperience.jsx";
import SoundWaveAnimation from "../components/SoundWaveAnimation.jsx";

// Counter component for animated numbers
const AnimatedCounter = ({ end, suffix = "", duration = 2000 }) => {
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
      {count}
      {suffix}
    </span>
  );
};

const Home = () => {
  return (
    <>
      {/* Hero Section */}
      <div className="relative min-h-[80vh] w-full overflow-hidden">
        {/* Background Image with Overlay */}
        <div className="absolute inset-0 z-0">
          <img
            src="https://pub-7e3e6c6082a543f2af2f4dcd8bc17e20.r2.dev/what-is-ai-voice-agent.png"
            alt="Hero Background"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/90  to-black/50"></div>
        </div>

        {/* Animated SVG Background Elements */}
        <div className="absolute inset-0 z-0 overflow-hidden">
          {/* Floating Waveform Left */}
          {/* <svg
            className="absolute left-0 top-1/4 w-48 h-48 opacity-10 animate-pulse"
            viewBox="0 0 200 200"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill="#ffffff"
              d="M45,-78C58.4,-70.5,69,-57.3,75.9,-42.3C82.8,-27.4,85.9,-10.7,84.5,5.3C83.1,21.3,77.1,36.6,67.8,48.9C58.4,61.2,45.7,70.5,31.8,75.8C17.9,81.1,2.9,82.4,-12.3,80.8C-27.5,79.2,-43,74.7,-55.6,66.1C-68.2,57.5,-77.9,44.8,-82.8,30.2C-87.7,15.6,-87.8,-0.9,-83.5,-15.8C-79.2,-30.7,-70.5,-44,-58.9,-54.3C-47.3,-64.6,-32.8,-72,-17.4,-76.8C-2,-81.6,14.3,-83.8,28.4,-80.9C42.5,-78,54.4,-70,45,-78Z"
              transform="translate(100 100)"
            />
          </svg> */}

          {/* Floating Waveform Right */}
          {/* <svg
            className="absolute right-0 bottom-1/4 w-56 h-56 opacity-10 animate-pulse"
            style={{ animationDelay: "1s" }}
            viewBox="0 0 200 200"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill="#ffffff"
              d="M39.3,-65.5C50.9,-58.2,60.3,-47.1,67.4,-34.2C74.5,-21.3,79.3,-6.6,78.5,7.7C77.7,21.9,71.3,35.7,62.1,47.3C52.9,58.9,41,68.3,27.7,73.4C14.4,78.5,-0.3,79.3,-14.8,76.2C-29.3,73.1,-43.6,66.1,-54.8,55.4C-66,44.7,-74.1,30.3,-77.3,14.7C-80.5,-0.9,-78.8,-17.7,-72.6,-32.4C-66.4,-47.1,-55.7,-59.7,-42.8,-66.5C-29.9,-73.3,-15,-74.3,-0.6,-73.3C13.8,-72.3,27.7,-69.3,39.3,-65.5Z"
              transform="translate(100 100)"
            />
          </svg> */}

          {/* Grid Pattern Overlay */}
          <div
            className="absolute inset-0 opacity-5"
            style={{
              backgroundImage:
                "linear-gradient(white 1px, transparent 1px), linear-gradient(90deg, white 1px, transparent 1px)",
              backgroundSize: "50px 50px",
            }}
          ></div>

          {/* Orbiting Circles */}
          <div className="absolute top-1/3 left-1/4 w-2 h-2 bg-white/30 rounded-full animate-ping"></div>
          <div
            className="absolute bottom-1/3 right-1/4 w-5 h-5 bg-white/30 rounded-full animate-ping"
            style={{ animationDelay: "2s" }}
          ></div>
          <div
            className="absolute top-1/2 right-1/3 w-10 h-10 bg-white/20 rounded-full animate-ping"
            style={{ animationDelay: "5s" }}
          ></div>
        </div>

        {/* Hero Content */}
        <div className="relative mt-12 z-10 flex items-center justify-center min-h-[70vh] px-6 pt-20 pb-12">
          <div className="max-w-5xl mx-auto text-center">
            {/* Animated Badge with Icon */}
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-xl border border-white/20 mb-6 group hover:bg-white/15 transition-all duration-300">
              <svg
                className="w-3 h-3 text-white animate-pulse"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <circle cx="10" cy="10" r="3" />
              </svg>
              <span className="text-xs font-medium text-white tracking-wide">
                CALLROLIN PAKISTAN'S VOICE AI PLATFORM
              </span>
              <svg
                className="w-3 h-3 text-white/60 group-hover:translate-x-1 transition-transform"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </div>

            {/* Main Heading with Creative Layout */}
            <div className="relative mb-6">
              <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white leading-[1.1] tracking-tight">
                AI Voice Agents Built
                <br />
                <span className="relative inline-block mt-1">
                  <span className="relative z-10 bg-gradient-to-r from-white via-gray-100 to-gray-300 bg-clip-text text-transparent">
                    for Real Business Impact
                  </span>
                  <svg
                    className="absolute -bottom-2 left-0 w-full h-3 opacity-30"
                    viewBox="0 0 500 20"
                    preserveAspectRatio="none"
                  >
                    <path
                      d="M0,10 Q125,0 250,10 T500,10"
                      stroke="white"
                      strokeWidth="2"
                      fill="none"
                    />
                  </svg>
                </span>
              </h1>
            </div>

            {/* Description with Icons */}
            <div className="flex items-center justify-center mb-8 max-w-3xl mx-auto">
              <span className="text-lg text-gray-300 font-medium">
                Voice AI Agent for Customer Support
              </span>
            </div>

            {/* CTA Button with Animation */}
            <div className="relative inline-block group mb-8">
              <div className="absolute -inset-1 bg-gradient-to-r from-white via-gray-200 to-white rounded-full blur opacity-30 group-hover:opacity-60 transition duration-500"></div>
              <Link
                to="/contact"
                className="relative inline-flex items-center gap-2 px-8 py-3.5 rounded-full bg-white text-black font-semibold text-sm tracking-wide transition-all duration-300 hover:scale-105 shadow-2xl"
              >
                <span>Let's Talk</span>
                <svg
                  className="w-4 h-4 group-hover:translate-x-1 transition-transform"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M17 8l4 4m0 0l-4 4m4-4H3"
                  />
                </svg>
              </Link>
            </div>

            {/* Trusted By Section with Company Icons */}
            <div>
              <p className="text-xs text-white uppercase tracking-wider mb-4">
                Technology Partners
              </p>
              <div className="flex items-center justify-center gap-6 md:gap-10 flex-wrap opacity-60 hover:opacity-80 transition-opacity duration-300">
                {/* OpenAI */}
                <div className="w-10 h-10 flex items-center justify-center rounded-lg bg-white/5 backdrop-blur-sm border border-white/10 hover:bg-white/10 transition-all duration-300">
                  <SiOpenai className="text-xl text-white" />
                </div>

                {/* Google Cloud */}
                <div className="w-10 h-10 flex items-center justify-center rounded-lg bg-white/5 backdrop-blur-sm border border-white/10 hover:bg-white/10 transition-all duration-300">
                  <SiGooglecloud className="text-xl text-white" />
                </div>

                {/* AWS */}
                <div className="w-10 h-10 flex items-center justify-center rounded-lg bg-white/5 backdrop-blur-sm border border-white/10 hover:bg-white/10 transition-all duration-300">
                  <SiAwslambda className="text-xl text-white" />
                </div>

                {/* Twilio */}
                <div className="w-10 h-10 flex items-center justify-center rounded-lg bg-white/5 backdrop-blur-sm border border-white/10 hover:bg-white/10 transition-all duration-300">
                  <svg
                    className="w-5 h-5 text-white"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                  >
                    <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm0 21.5c-5.238 0-9.5-4.262-9.5-9.5S6.762 2.5 12 2.5s9.5 4.262 9.5 9.5-4.262 9.5-9.5 9.5zm-1.125-5.5c0 .621.504 1.125 1.125 1.125s1.125-.504 1.125-1.125-.504-1.125-1.125-1.125-1.125.504-1.125 1.125zm1.125-10a4 4 0 00-4 4h1.5a2.5 2.5 0 015 0c0 1.5-1.5 1.875-1.5 3.5h1.5c0-2 1.5-2.25 1.5-3.5a4 4 0 00-4-4z" />
                  </svg>
                </div>

                {/* Stripe */}
                <div className="w-10 h-10 flex items-center justify-center rounded-lg bg-white/5 backdrop-blur-sm border border-white/10 hover:bg-white/10 transition-all duration-300">
                  <SiStripe className="text-xl text-white" />
                </div>

                {/* MongoDB */}
                <div className="w-10 h-10 flex items-center justify-center rounded-lg bg-white/5 backdrop-blur-sm border border-white/10 hover:bg-white/10 transition-all duration-300">
                  <SiMongodb className="text-xl text-white" />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Gradient Fade */}
        <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-black to-transparent z-10"></div>
      </div>

      {/* Section 2: Features */}
      <section className="relative bg-black py-24 md:py-32 px-6 border-t border-white/10">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            {/* Left Side - Company Description */}
            <div className="space-y-6">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-2 h-2 bg-white rounded-full animate-pulse"></div>
                <span className="text-xs text-gray-400 tracking-wide">
                  Custom Agents
                </span>
              </div>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white leading-[1.1] tracking-tight">
                <span className="bg-gradient-to-r from-white via-gray-100 to-gray-300 bg-clip-text text-transparent">
                  Built to handle <br /> complexity
                </span>
              </h2>
            </div>

            {/* Right Side - Features in Row */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 -px-16">
              {/* Feature 1 */}
              <div className="border-l border-white/20 pl-6">
                <div className="w-5 h-5 mb-3">
                  <svg
                    className="w-5 h-5 text-white"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"
                    />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                    />
                  </svg>
                </div>
                <h3 className="text-base font-semibold text-white mb-2">
                  Extremely customizable
                </h3>
                <p className="text-gray-400 text-xs">
                  Fine-tune every nuance to match your business
                </p>
              </div>

              {/* Feature 2 */}
              <div className="border-l border-white/20 pl-6">
                <div className="w-5 h-5 mb-3">
                  <svg
                    className="w-5 h-5 text-white"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"
                    />
                  </svg>
                </div>
                <h3 className="text-base font-semibold text-white mb-2">
                  Auto policy writing
                </h3>
                <p className="text-gray-400 text-xs">
                  Get started with just a transcript
                </p>
              </div>

              {/* Feature 3 */}
              <div className="border-l border-white/20 pl-6">
                <div className="w-5 h-5 mb-3">
                  <svg
                    className="w-5 h-5 text-white"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"
                    />
                  </svg>
                </div>
                <h3 className="text-base font-semibold text-white mb-2">
                  Built-in Copilot
                </h3>
                <p className="text-gray-400 text-xs">
                  AI helps you build your ideal support agent
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 3: Voice AI That Works */}
      <section className="relative bg-black py-24 md:py-32 px-6">
        <div className="max-w-7xl mx-auto">
          {/* Glass Card Container with padding */}
          <div className="relative backdrop-blur-xl bg-white/5 border border-white/10 rounded-3xl overflow-hidden shadow-2xl p-6 lg:p-8">
            {/* Video - Full Width and Height */}
            <div className="w-full h-[400px] lg:h-[500px] relative rounded-2xl overflow-hidden shadow-2xl border border-white/10 group">
              <SoundWaveAnimation />

              {/* Overlay Content */}
              <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                <div className="relative z-20 text-center">
                  <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-white/10 backdrop-blur-md border border-white/20 mb-4 animate-pulse">
                    <svg
                      className="w-8 h-8 text-white"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M19 11a7 7 0 01-7 7m0 0a7 7 0 01-7-7m7 7v4m0 0H8m4 0h4m-4-8a3 3 0 01-3-3V5a3 3 0 116 0v6a3 3 0 01-3 3z"
                      />
                    </svg>
                  </div>
                  <p className="text-sm font-medium text-white/70 tracking-widest uppercase">
                    Live Voice Processing
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 4: Agent Canvas */}
      <AgentCanvas />

      {/* Section 5: Features */}
      <section className="relative -mt-24 bg-black py-24 md:py-32 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            {/* Left Side - Company Description */}
            <div className="space-y-6">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-2 h-2 bg-white rounded-full animate-pulse"></div>
                <span className="text-xs text-white tracking-wide">
                  Custom Agents
                </span>
              </div>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white leading-[1.1] tracking-tight">
                Built to handle <br /> complexity
              </h2>
            </div>

            {/* Right Side - Features in Row */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 -px-16">
              {/* Feature 1 */}
              <div className="border-l border-white pl-6">
                <div className="w-5 h-5 mb-3">
                  <svg
                    className="w-5 h-5 text-white"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"
                    />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                    />
                  </svg>
                </div>
                <h3 className="text-base font-semibold text-white mb-2">
                  Extremely customizable
                </h3>
                <p className="text-white text-xs">
                  Fine-tune every nuance to match your business
                </p>
              </div>

              {/* Feature 2 */}
              <div className="border-l border-white pl-6">
                <div className="w-5 h-5 mb-3">
                  <svg
                    className="w-5 h-5 text-white"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"
                    />
                  </svg>
                </div>
                <h3 className="text-base font-semibold text-white mb-2">
                  Auto policy writing
                </h3>
                <p className="text-white text-xs">
                  Get started with just a transcript
                </p>
              </div>

              {/* Feature 3 */}
              <div className="border-l border-white pl-6">
                <div className="w-5 h-5 mb-3">
                  <svg
                    className="w-5 h-5 text-white"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"
                    />
                  </svg>
                </div>
                <h3 className="text-base font-semibold text-white mb-2">
                  Built-in Copilot
                </h3>
                <p className="text-white text-xs">
                  AI helps you build your ideal support agent
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 6: Smart Insight */}

      <SmartInsight />

      {/* Section 7: Footer */}

      <section className="relative -mt-24 bg-black py-24 md:py-32 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            {/* Left Side - Company Description */}
            <div className="space-y-6">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-2 h-2 bg-white rounded-full animate-pulse"></div>
                <span className="text-xs text-white tracking-wide">
                  NATURAL VOICE
                </span>
              </div>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white leading-[1.1] tracking-tight">
                Engage with empathy
              </h2>
            </div>

            {/* Right Side - Features in Row */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 -px-16">
              {/* Feature 1 */}
              <div className="border-l border-white pl-6">
                <div className="w-5 h-5 mb-3">
                  <svg
                    className="w-5 h-5 text-white"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M19 11a7 7 0 01-7 7m0 0a7 7 0 01-7-7m7 7v4m0 0H8m4 0h4m-4-8a3 3 0 01-3-3V5a3 3 0 116 0v6a3 3 0 01-3 3z"
                    />
                  </svg>
                </div>
                <h3 className="text-base font-semibold text-white mb-2">
                  Personalized voices
                </h3>
                <p className="text-white text-xs">
                  Tailor your agent's voice to match your brand
                </p>
              </div>

              {/* Feature 2 */}
              <div className="border-l border-white pl-6">
                <div className="w-5 h-5 mb-3">
                  <svg
                    className="w-5 h-5 text-white"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9"
                    />
                  </svg>
                </div>
                <h3 className="text-base font-semibold text-white mb-2">
                  Dynamic interrupts
                </h3>
                <p className="text-white text-xs">
                  Designed to adapt to a global audience
                </p>
              </div>

              {/* Feature 3 */}
              <div className="border-l border-white pl-6">
                <div className="w-5 h-5 mb-3">
                  <svg
                    className="w-5 h-5 text-white"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M13 10V3L4 14h7v7l9-11h-7z"
                    />
                  </svg>
                </div>
                <h3 className="text-base font-semibold text-white mb-2">
                  Ultra-low latency
                </h3>
                <p className="text-white text-xs">
                  Industry-leading voice response time
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 8: Voice Experience */}
      {/*  */}

      {/* <VoiceExperience /> */}

      {/* Add custom animation class */}
      <style jsx>{`
        @keyframes spin-slow {
          from {
            transform: rotate(0deg);
          }
          to {
            transform: rotate(360deg);
          }
        }
        .animate-spin-slow {
          animation: spin-slow 20s linear infinite;
        }
      `}</style>
    </>
  );
};

export default Home;
