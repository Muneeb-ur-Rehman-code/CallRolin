import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import logo from '../../public/logo-1.jpg'
const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const leftNavLinks = [
    { path: '/', label: 'Home' },
    { path: '/about', label: 'Company' }
  ];

  const navContainerClasses = isScrolled 
    ? ""
    : "bg-transparent";

  const leftSectionClasses = isScrolled 
    ? "bg-white/5 backdrop-blur-xl border border-white/10"
    : "bg-transparent backdrop-blur-sm";

  const rightSectionClasses = isScrolled 
    ? "bg-white/5 backdrop-blur-xl border border-white/10"
    : "bg-transparent backdrop-blur-sm";

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${navContainerClasses}`}>
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex items-center justify-between h-28">
          {/* Left Side: Logo + Navigation Links */}
          <div className={`flex items-center space-x-8 ${leftSectionClasses} px-8 py-5 rounded-full transition-all duration-500`}>
            {/* Logo */}
            <Link to="/" className="flex items-center space-x-3 group relative">
              <div className="relative">
                {/* Glowing background effect on hover */}
                <div className="absolute -inset-2 bg-gradient-to-r from-blue-500/30 via-purple-500/30 to-cyan-500/30 rounded-full blur-xl opacity-0 group-hover:opacity-100 transition-all duration-700 animate-pulse"></div>
                <div className="absolute -inset-1 bg-white/10 rounded-full blur-lg opacity-0 group-hover:opacity-80 transition-opacity duration-500"></div>
                
                {/* Logo Image Container */}
                <div className="relative w-14 h-14 rounded-full overflow-hidden ring-2 ring-white/20 group-hover:ring-white/40 transition-all duration-500 shadow-lg shadow-black/20 group-hover:shadow-xl group-hover:shadow-blue-500/20">
                  <img
                    src={logo}
                    // src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQyovFzppHo2mwkLPXzlHJrmr9G21B4pWW4vw&s'
                    // src='https://cdn.dribbble.com/userupload/44748107/file/still-b7e9c37c8f9276ff9aca0e4619fb8af8.png?format=webp&resize=400x300&vertical=center'
                    // src='https://www.stratospherenetworks.com/blog/wp-content/uploads/2025/07/ai-voice-concept-300x169.jpg'
                    alt="CallRollin Logo"
                    className="w-full h-full object-cover transition-all duration-700 ease-out group-hover:scale-110 group-hover:rotate-[5deg] group-hover:brightness-110"
                  />
                  {/* Overlay shimmer effect */}
                  <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 group-hover:animate-shimmer"></div>
                </div>
              </div>
              <span className="text-2xl font-bold text-white tracking-tight relative">
                Call<span className="font-bold text-white">Rolin</span>
                <div className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-white to-transparent group-hover:w-full transition-all duration-500"></div>
              </span>
            </Link>

            {/* Desktop Navigation Links */}
            <div className="hidden lg:flex items-center space-x-6">
              {leftNavLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  className={`text-sm font-medium transition-all duration-300 ${
                    location.pathname === link.path
                      ? 'text-white border-b-2 border-white'
                      : 'text-gray-300 hover:text-white'
                  }`}
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>

          {/* Right Side: Buttons */}
          <div className={`hidden lg:flex items-center space-x-4 ${rightSectionClasses} px-8 py-5 rounded-full transition-all duration-500`}>
            {/* <Link
              to="/auth"
              className={`px-6 py-2.5 rounded-full text-sm font-medium transition-all duration-300 ${
                isScrolled 
                  ? 'bg-white/10 text-white hover:bg-white/20 border border-white/20'
                  : 'bg-white/5 text-white hover:bg-white/10 border border-white/10'
              }`}
            >
              Sign in
            </Link> */}
            <Link
              to="/contact"
              className="px-6 py-2.5 rounded-full bg-white text-black text-sm font-medium transition-all duration-300 hover:bg-gray-100 shadow-lg shadow-black/20"
            >
              Contact
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className={`lg:hidden relative w-12 h-12 flex items-center justify-center rounded-xl transition-all duration-300 ${
              isScrolled 
                ? 'bg-white/10 backdrop-blur-xl border border-white/20 hover:bg-white/20'
                : 'bg-white/5 backdrop-blur-sm border border-white/10 hover:bg-white/10'
            }`}
            aria-label="Toggle menu"
          >
            <div className="w-5 h-4 flex flex-col justify-between">
              <span className={`w-full h-0.5 bg-white rounded-full transition-all duration-300 ${isOpen ? 'rotate-45 translate-y-1.5' : ''}`}></span>
              <span className={`w-full h-0.5 bg-white rounded-full transition-all duration-300 ${isOpen ? 'opacity-0' : ''}`}></span>
              <span className={`w-full h-0.5 bg-white rounded-full transition-all duration-300 ${isOpen ? '-rotate-45 -translate-y-1.5' : ''}`}></span>
            </div>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div className={`lg:hidden overflow-hidden transition-all duration-700 ${isOpen ? 'max-h-screen opacity-100' : 'max-h-0 opacity-0'}`}>
        <div className={`px-6 py-6 space-y-3 backdrop-blur-xl border-t ${
          isScrolled 
            ? 'bg-white/10 border-white/10' 
            : 'bg-white/5 border-white/5'
        }`}>
          {leftNavLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              onClick={() => setIsOpen(false)}
              className={`block px-6 py-4 text-base font-medium rounded-2xl transition-all duration-300 ${
                location.pathname === link.path
                  ? 'bg-white/20 text-white border border-white/20 shadow-lg'
                  : 'text-gray-300 hover:bg-white/10 hover:text-white border border-transparent hover:border-white/10'
              }`}
            >
              {link.label}
            </Link>
          ))}
          {/* <Link
            to="/auth"
            onClick={() => setIsOpen(false)}
            className="block px-6 py-4 text-base font-medium rounded-2xl transition-all duration-300 text-center bg-white/10 text-white hover:bg-white/20 border border-white/20"
          >
            Sign in
          </Link> */}
          <Link
            to="/contact"
            onClick={() => setIsOpen(false)}
            className="block px-6 py-4 text-base font-medium rounded-2xl transition-all duration-300 text-center bg-white text-black hover:bg-gray-100 shadow-lg"
          >
            Contact
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;