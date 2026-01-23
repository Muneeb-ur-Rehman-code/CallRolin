import React, { useState } from 'react';
import { SiGoogle } from 'react-icons/si';

const Auth = () => {
  const [isLogin, setIsLogin] = useState(true);
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    name: ''
  });
  const [focusedField, setFocusedField] = useState('');

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
  };

  const handleGoogleLogin = () => {
    console.log('Continue with Google');
  };

  const handleMagicLink = () => {
    console.log('Sign in with Magic Link');
  };

  const handleSSO = () => {
    console.log('Sign in with SSO');
  };

  return (
    <div className="min-h-screen bg-black flex items-center justify-center px-6 py-20 relative overflow-hidden">
      {/* Enhanced Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Large Organic Shapes */}
        <svg className="absolute -left-20 top-1/4 w-96 h-96 opacity-5 animate-pulse" viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
          <path fill="#ffffff" d="M45,-78C58.4,-70.5,69,-57.3,75.9,-42.3C82.8,-27.4,85.9,-10.7,84.5,5.3C83.1,21.3,77.1,36.6,67.8,48.9C58.4,61.2,45.7,70.5,31.8,75.8C17.9,81.1,2.9,82.4,-12.3,80.8C-27.5,79.2,-43,74.7,-55.6,66.1C-68.2,57.5,-77.9,44.8,-82.8,30.2C-87.7,15.6,-87.8,-0.9,-83.5,-15.8C-79.2,-30.7,-70.5,-44,-58.9,-54.3C-47.3,-64.6,-32.8,-72,-17.4,-76.8C-2,-81.6,14.3,-83.8,28.4,-80.9C42.5,-78,54.4,-70,45,-78Z" transform="translate(100 100)" />
        </svg>
        <svg className="absolute -right-20 bottom-1/4 w-[32rem] h-[32rem] opacity-5 animate-pulse" style={{animationDelay: '1s'}} viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
          <path fill="#ffffff" d="M39.3,-65.5C50.9,-58.2,60.3,-47.1,67.4,-34.2C74.5,-21.3,79.3,-6.6,78.5,7.7C77.7,21.9,71.3,35.7,62.1,47.3C52.9,58.9,41,68.3,27.7,73.4C14.4,78.5,-0.3,79.3,-14.8,76.2C-29.3,73.1,-43.6,66.1,-54.8,55.4C-66,44.7,-74.1,30.3,-77.3,14.7C-80.5,-0.9,-78.8,-17.7,-72.6,-32.4C-66.4,-47.1,-55.7,-59.7,-42.8,-66.5C-29.9,-73.3,-15,-74.3,-0.6,-73.3C13.8,-72.3,27.7,-69.3,39.3,-65.5Z" transform="translate(100 100)" />
        </svg>

        {/* Grid Pattern */}
        <div className="absolute inset-0 opacity-[0.03]" style={{
          backgroundImage: 'linear-gradient(white 1px, transparent 1px), linear-gradient(90deg, white 1px, transparent 1px)',
          backgroundSize: '50px 50px'
        }}></div>

        {/* Floating Particles */}
        <div className="absolute top-1/4 left-1/4 w-3 h-3 bg-white/20 rounded-full animate-ping"></div>
        <div className="absolute bottom-1/3 right-1/3 w-2 h-2 bg-white/30 rounded-full animate-ping" style={{animationDelay: '0.5s'}}></div>
        <div className="absolute top-1/2 left-1/3 w-2 h-2 bg-white/15 rounded-full animate-ping" style={{animationDelay: '1s'}}></div>
        <div className="absolute top-2/3 right-1/4 w-3 h-3 bg-white/10 rounded-full animate-ping" style={{animationDelay: '1.5s'}}></div>

        {/* Gradient Orbs */}
        <div className="absolute top-20 left-20 w-64 h-64 bg-white/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-20 w-80 h-80 bg-white/5 rounded-full blur-3xl"></div>
      </div>

      {/* Glass Card Container */}
      <div className="relative z-10 w-full max-w-md backdrop-blur-xl bg-white/5 border border-white/10 rounded-3xl p-8 md:p-10 shadow-2xl">
        {/* Animated Border Glow */}
        <div className="absolute -inset-[1px] bg-gradient-to-r from-white/20 via-white/5 to-white/20 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-sm"></div>
        
        <div className="relative">
          {/* Header with Icon */}
          <div className="text-center mb-10">
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-white/10 border border-white/20 backdrop-blur-xl mb-6">
              <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
              </svg>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-3 tracking-tight">
              {isLogin ? 'Welcome back' : 'Get started'}
            </h1>
            <p className="text-gray-400 text-base">
              {isLogin ? 'Sign in to continue to your account' : 'Create your account to get started'}
            </p>
          </div>

          {/* Form */}
          <div className="space-y-6 mb-8">
            {!isLogin && (
              <div className="relative group">
                <input
                  type="text"
                  name="name"
                  placeholder="Full name"
                  value={formData.name}
                  onChange={handleInputChange}
                  onFocus={() => setFocusedField('name')}
                  onBlur={() => setFocusedField('')}
                  className="w-full bg-transparent text-white text-base py-4 border-b-2 border-white/20 focus:border-white outline-none transition-all duration-300 placeholder:text-gray-500"
                />
                <div className={`absolute bottom-0 left-0 h-[2px] bg-white transition-all duration-300 ${focusedField === 'name' ? 'w-full' : 'w-0'}`}></div>
              </div>
            )}

            <div className="relative group">
              <input
                type="email"
                name="email"
                placeholder="Email address"
                value={formData.email}
                onChange={handleInputChange}
                onFocus={() => setFocusedField('email')}
                onBlur={() => setFocusedField('')}
                className="w-full bg-transparent text-white text-base py-4 border-b-2 border-white/20 focus:border-white outline-none transition-all duration-300 placeholder:text-gray-500"
              />
              <div className={`absolute bottom-0 left-0 h-[2px] bg-white transition-all duration-300 ${focusedField === 'email' ? 'w-full' : 'w-0'}`}></div>
            </div>

            <div className="relative group">
              <input
                type="password"
                name="password"
                placeholder="Password"
                value={formData.password}
                onChange={handleInputChange}
                onFocus={() => setFocusedField('password')}
                onBlur={() => setFocusedField('')}
                className="w-full bg-transparent text-white text-base py-4 border-b-2 border-white/20 focus:border-white outline-none transition-all duration-300 placeholder:text-gray-500"
              />
              <div className={`absolute bottom-0 left-0 h-[2px] bg-white transition-all duration-300 ${focusedField === 'password' ? 'w-full' : 'w-0'}`}></div>
            </div>

            {isLogin && (
              <div className="flex justify-end pt-2">
                <button type="button" className="text-sm text-gray-400 hover:text-white transition-colors duration-300">
                  Forgot password?
                </button>
              </div>
            )}

            <button
              onClick={handleSubmit}
              className="relative w-full group mt-8"
            >
              <div className="absolute -inset-1 bg-gradient-to-r from-white via-gray-200 to-white rounded-full blur opacity-30 group-hover:opacity-60 transition duration-500"></div>
              <div className="relative bg-white text-black font-semibold text-sm py-4 rounded-full hover:bg-white/90 transition-all duration-300 hover:scale-105 shadow-xl flex items-center justify-center gap-2">
                <span>{isLogin ? 'Sign in' : 'Create account'}</span>
                <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </div>
            </button>
          </div>

          {/* Toggle Auth Mode */}
          <div className="text-center mb-8">
            <p className="text-gray-400 text-sm">
              {isLogin ? "Don't have an account? " : 'Already have an account? '}
              <button
                onClick={() => setIsLogin(!isLogin)}
                className="text-white hover:underline font-medium transition-all duration-300"
              >
                {isLogin ? 'Sign up' : 'Sign in'}
              </button>
            </p>
          </div>

          {/* Divider */}
          <div className="relative mb-8">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t border-white/10"></div>
            </div>
            <div className="relative flex justify-center text-xs">
              <span className="px-4 bg-black/50 backdrop-blur-xl text-gray-400 tracking-wide">OR CONTINUE WITH</span>
            </div>
          </div>

          {/* Alternative Sign In Methods */}
          <div className="space-y-3">
            {/* Google */}
            <button
              onClick={handleGoogleLogin}
              className="w-full flex items-center justify-center gap-3 py-4 bg-white/5 backdrop-blur-xl border border-white/20 rounded-full text-white hover:bg-white/10 hover:border-white/40 transition-all duration-300 group"
            >
              <SiGoogle className="text-lg" />
              <span className="text-sm font-medium">Continue with Google</span>
              <svg className="w-4 h-4 opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </button>

            {/* Magic Link */}
            <button
              onClick={handleMagicLink}
              className="w-full flex items-center justify-center gap-3 py-4 bg-white/5 backdrop-blur-xl border border-white/20 rounded-full text-white hover:bg-white/10 hover:border-white/40 transition-all duration-300 group"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
              <span className="text-sm font-medium">Sign in with Magic Link</span>
              <svg className="w-4 h-4 opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </button>

            {/* SSO */}
            <button
              onClick={handleSSO}
              className="w-full flex items-center justify-center gap-3 py-4 bg-white/5 backdrop-blur-xl border border-white/20 rounded-full text-white hover:bg-white/10 hover:border-white/40 transition-all duration-300 group"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
              </svg>
              <span className="text-sm font-medium">Sign in with SSO</span>
              <svg className="w-4 h-4 opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </button>
          </div>

          {/* Footer Text */}
          <p className="text-xs text-gray-500 text-center mt-8 leading-relaxed">
            By continuing, you agree to our{' '}
            <button className="hover:text-white transition-colors">Terms of Service</button>
            {' '}and{' '}
            <button className="hover:text-white transition-colors">Privacy Policy</button>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Auth;