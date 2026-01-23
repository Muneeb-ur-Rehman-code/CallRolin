import React, { useState } from 'react';

const Contact = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phoneNumber: '',
    countryCode: '+1',
    role: '',
    information: ''
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
  };

  return (
    <div className="bg-black min-h-screen text-white">
      <div className="container mx-auto px-4 md:px-6  md:py-24 ">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-start max-w-7xl mx-auto">
          {/* Left Content Section */}
          <div className="space-y-8 lg:space-y-12 lg:pr-8 my-8 md:my-12">
            {/* Main Heading */}
            <div className="space-y-6">
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold leading-tight tracking-tight">
                AI agents for B2C enterprise support
              </h1>
              <p className="text-base md:text-lg text-white/70 leading-relaxed">
                From hyper-growth startups to Fortune 500s, CallRollins powers AI interactions at scale.
              </p>
            </div>

            {/* Testimonial Card */}
            <div className="relative group">
              <div className="absolute -inset-0.5 bg-gradient-to-r from-white/10 to-white/5 rounded-2xl blur opacity-50 group-hover:opacity-75 transition duration-500"></div>
              <div className="relative bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 md:p-8 hover:border-white/20 transition-all duration-300">
                <div className="mb-6">
                  <svg className="w-10 h-10 md:w-12 md:h-12 text-white/30" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                  </svg>
                </div>
                <p className="text-sm md:text-base text-white/80 leading-relaxed">
                  "At CallRolin, we believe customer support should be instant, reliable, and deeply human. That’s why we built an AI Voice Agent platform designed specifically to solve the biggest challenges in support long wait times, inconsistent responses, and high operational costs.

CallRolin enables businesses to deliver 24/7 real-time assistance, resolve issues faster, and maintain service quality at scale. With every interaction, our AI learns, adapts, and improves, ensuring customers receive accurate, empathetic, and consistent support every single time.

As companies continue to expand and customer expectations rise, intelligent voice automation is no longer a luxury. It is the foundation for world-class customer support, and CallRolin is proud to lead that transformation"
                </p>
                <div className="mt-6 pt-6 border-t border-white/10 flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-white/10 border border-white/20 flex items-center justify-center">
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-white">Muhammad Bilal</p>
                    <p className="text-xs text-white/60 mt-0.5">CEO CallRolin</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Form Section with Background Image */}
          <div className="relative lg:sticky lg:top-20 my-8 md:my-12">
            <div className="relative rounded-3xl overflow-hidden shadow-2xl mx-0 lg:mx-4">
              {/* Background Image - Full Coverage */}
              <div 
                className="absolute inset-0 bg-cover bg-center bg-no-repeat"
                style={{
                  backgroundImage: 'url("https://images.unsplash.com/photo-1497366216548-37526070297c?w=1200&q=80")',
                }}
              >
                {/* Dark Overlay for Better Form Readability */}
                <div className="absolute inset-0 bg-gradient-to-br from-black/80 via-black/75 to-black/80"></div>
              </div>

              {/* Form Content */}
              <div className="relative z-10 p-6 md:p-10 lg:p-12 min-h-[700px] md:min-h-[800px]">
                {/* Form Header */}
                <div className="mb-8 md:mb-10">
                  <div className="inline-flex items-center gap-2 mb-4">
                    <div className="w-2 h-2 bg-white rounded-full"></div>
                    <span className="text-xs tracking-widest text-white/70 uppercase">Get in Touch</span>
                  </div>
                  <h2 className="text-xl md:text-2xl font-bold text-white mb-2">
                    Let's start a conversation
                  </h2>
                  <p className="text-white/70 text-xs md:text-sm">
                    Fill out the form and our team will get back to you within 24 hours
                  </p>
                </div>

                {/* Form */}
                <div className="space-y-5 md:space-y-6">
                  {/* Full Name */}
                  <div className="group">
                    <label className="block text-sm font-semibold mb-2 text-white">
                      Full Name
                    </label>
                    <input
                      type="text"
                      name="fullName"
                      value={formData.fullName}
                      onChange={handleInputChange}
                      placeholder="John Doe"
                      className="w-full px-4 py-3.5 bg-white/95 backdrop-blur-sm text-gray-900 placeholder-gray-500 rounded-xl border border-white/20 focus:outline-none focus:ring-2 focus:ring-white focus:border-transparent transition-all shadow-lg"
                    />
                  </div>

                  {/* Email */}
                  <div className="group">
                    <label className="block text-sm font-semibold mb-2 text-white">
                      Email
                    </label>
                    <p className="text-xs text-white/60 mb-2">Work email</p>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      placeholder="john@gigaml.com"
                      className="w-full px-4 py-3.5 bg-white/95 backdrop-blur-sm text-gray-900 placeholder-gray-500 rounded-xl border border-white/20 focus:outline-none focus:ring-2 focus:ring-white focus:border-transparent transition-all shadow-lg"
                    />
                  </div>

                  {/* Phone Number */}
                  <div className="group">
                    <label className="block text-sm font-semibold mb-2 text-white">
                      Phone Number
                    </label>
                    <div className="flex gap-3">
                      <div className="relative">
                        <select
                          name="countryCode"
                          value={formData.countryCode}
                          onChange={handleInputChange}
                          className="appearance-none px-4 py-3.5 pr-10 bg-white/95 backdrop-blur-sm text-gray-900 rounded-xl border border-white/20 focus:outline-none focus:ring-2 focus:ring-white focus:border-transparent transition-all shadow-lg cursor-pointer"
                        >
                          <option value="+1">🇺🇸 +1</option>
                          <option value="+92">🇵🇰 +92</option>
                          <option value="+44">🇬🇧 +44</option>
                          <option value="+91">🇮🇳 +91</option>
                        </select>
                        <div className="absolute right-3 top-1/2 transform -translate-y-1/2 pointer-events-none">
                          <svg className="w-4 h-4 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                          </svg>
                        </div>
                      </div>
                      <input
                        type="tel"
                        name="phoneNumber"
                        value={formData.phoneNumber}
                        onChange={handleInputChange}
                        placeholder="Enter phone number"
                        className="flex-1 px-4 py-3.5 bg-white/95 backdrop-blur-sm text-gray-900 placeholder-gray-500 rounded-xl border border-white/20 focus:outline-none focus:ring-2 focus:ring-white focus:border-transparent transition-all shadow-lg"
                      />
                    </div>
                  </div>

                  {/* Role */}
                  <div className="group">
                    <label className="block text-sm font-semibold mb-2 text-white">
                      Role
                    </label>
                    <input
                      type="text"
                      name="role"
                      value={formData.role}
                      onChange={handleInputChange}
                      placeholder="Your role in the organization"
                      className="w-full px-4 py-3.5 bg-white/95 backdrop-blur-sm text-gray-900 placeholder-gray-500 rounded-xl border border-white/20 focus:outline-none focus:ring-2 focus:ring-white focus:border-transparent transition-all shadow-lg"
                    />
                  </div>

                  {/* Information Needed */}
                  <div className="group">
                    <label className="block text-sm font-semibold mb-2 text-white">
                      What information do you need?
                    </label>
                    <textarea
                      name="information"
                      value={formData.information}
                      onChange={handleInputChange}
                      placeholder="Tell us what you're looking for and how we can help..."
                      rows="4"
                      className="w-full px-4 py-3.5 bg-white/95 backdrop-blur-sm text-gray-900 placeholder-gray-500 rounded-xl border border-white/20 focus:outline-none focus:ring-2 focus:ring-white focus:border-transparent transition-all resize-none shadow-lg"
                    />
                  </div>

                  {/* Submit Button */}
                  <div className="pt-2">
                    <button
                      onClick={handleSubmit}
                      className="group relative w-full px-6 py-4 bg-white text-black font-semibold rounded-xl overflow-hidden transition-all duration-300 hover:scale-[1.02] shadow-2xl"
                    >
                      <div className="absolute inset-0 bg-gradient-to-r from-white to-gray-100 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                      <span className="relative flex items-center justify-center gap-2">
                        Submit
                        <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                        </svg>
                      </span>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;