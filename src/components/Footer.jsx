import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../public/logo-2.png'
const Footer = () => {
  return (
    <footer className="relative bg-black text-white overflow-hidden">
      {/* Rolling Text Section - Top visible, bottom hidden */}
      <div className="absolute top-0 left-0 right-0 h-32 overflow-hidden z-10">
        <div className="whitespace-nowrap">
          <div className="inline-block animate-scroll">
            <span className="text-[180px] leading-none font-bold text-white/10 backdrop-blur-sm inline-block px-8">
              CallRolin • CallRolin • CallRolin • CallRolin • CallRolin •
            </span>
            <span className="text-[180px] leading-none font-bold text-white/10 backdrop-blur-sm inline-block px-8">
              CallRolin • CallRolin • CallRolin • CallRolin • CallRolin •
            </span>
          </div>
        </div>
      </div>

      {/* Main Footer Content */}
      <div className="container mx-auto px-6 pt-40 pb-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          {/* Logo Section - Only Logo */}
          <div className="md:col-span-1">
            <div className="flex items-center gap-3 group cursor-pointer">
              <div className="relative">
                {/* Glowing background effect on hover */}
                <div className="absolute -inset-2 bg-gradient-to-r from-blue-500/30 via-purple-500/30 to-cyan-500/30 rounded-full blur-xl opacity-0 group-hover:opacity-100 transition-all duration-700"></div>
                <div className="absolute -inset-1 bg-white/10 rounded-full blur-lg opacity-0 group-hover:opacity-80 transition-opacity duration-500"></div>
                
                {/* Logo Image Container */}
                <div className="relative w-10 h-10 rounded-full overflow-hidden ring-2 ring-white/20 group-hover:ring-white/40 transition-all duration-500 shadow-lg shadow-black/20 group-hover:shadow-xl group-hover:shadow-blue-500/20">
                  <img
                    src={logo}
                    alt="CallRolin Logo"
                    className="w-full h-full object-cover transition-all duration-700 ease-out group-hover:scale-110 group-hover:rotate-[5deg] group-hover:brightness-110"
                  />
                  {/* Overlay shimmer effect */}
                  <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                </div>
              </div>
              <span className="text-2xl font-bold text-white tracking-tight relative">
                Call<span className="font-light text-gray-300">Rolin</span>
                <div className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-white to-transparent group-hover:w-full transition-all duration-500"></div>
              </span>
            </div>
          </div>

          {/* Product Column */}
          <div>
            <h3 className="text-gray-400 text-sm font-semibold mb-6 uppercase tracking-wider">Product</h3>
            <ul className="space-y-4">
              <li>
                <a href="#" className="text-gray-300 hover:text-white transition-colors text-base">
                  Agent Canvas
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-white transition-colors text-base flex items-center gap-2">
                  Insights
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-white transition-colors text-base">
                  Voice Experience
                </a>
              </li>
            </ul>
          </div>

          {/* Company Column */}
          <div>
            <h3 className="text-gray-400 text-sm font-semibold mb-6 uppercase tracking-wider">Company</h3>
            <ul className="space-y-4">
              <li>
                <a href="#" className="text-gray-300 hover:text-white transition-colors text-base">
                  Careers
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-white transition-colors text-base">
                  Agent Page
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-white transition-colors text-base">
                  Trust Center
                </a>
              </li>
            </ul>
          </div>

          {/* Resources Column */}
          <div>
            <h3 className="text-gray-400 text-sm font-semibold mb-6 uppercase tracking-wider">Resources</h3>
            <ul className="space-y-4">
              <li>
                <a href="#" className="text-gray-300 hover:text-white transition-colors text-base">
                  News
                </a>
              </li>
              <li>
                <Link to="/p_policy" className="text-gray-300 hover:text-white transition-colors text-base">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link to="/term_of_service" className="text-gray-300 hover:text-white transition-colors text-base">
                  Terms Of Service
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-gray-800 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            {/* Copyright */}
            <p className="text-gray-500 text-sm">© 2025 CallRolin AI, Inc.</p>

            {/* Social Icons */}
            <div className="flex items-center gap-4">
              <a href="#" className="text-gray-500 hover:text-white transition-colors">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                </svg>
              </a>
              <a href="#" className="text-gray-500 hover:text-white transition-colors">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes scroll {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }
        
        .animate-scroll {
          animation: scroll 30s linear infinite;
        }
      `}</style>
    </footer>
  );
};

export default Footer;