import React, { useState, useEffect, useRef } from 'react';

const Privacy = () => {
  const [activeSection, setActiveSection] = useState('introduction');
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [showSidebar, setShowSidebar] = useState(true);
  const sectionRefs = useRef({});

  const sections = [
    { id: 'introduction', title: 'Introduction' },
    { id: 'definitions', title: 'Interpretation and Definitions' },
    { id: 'collecting', title: 'Collecting and Using Your Personal Data' },
    { id: 'gdpr', title: 'GDPR Privacy' },
    { id: 'ccpa', title: 'CCPA/CPRA Privacy Notice' },
    { id: 'children', title: "Children's Privacy" },
    { id: 'links', title: 'Link to Other Websites' },
    { id: 'changes', title: 'Changes to this Privacy Policy' },
    { id: 'ai-disclaimer', title: 'AI-Generated Communications Disclaimer' },
    { id: 'contact', title: 'Contact Us' }
  ];

  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: '-100px 0px -66% 0px',
      threshold: [0, 0.25, 0.5, 0.75, 1]
    };

    const observerCallback = (entries) => {
      // Find the entry with the highest intersection ratio
      let maxRatio = 0;
      let targetSection = null;
      
      entries.forEach((entry) => {
        if (entry.isIntersecting && entry.intersectionRatio > maxRatio) {
          maxRatio = entry.intersectionRatio;
          targetSection = entry.target.id;
        }
      });
      
      if (targetSection) {
        setActiveSection(targetSection);
        // Hide sidebar when Contact section is in view
        setShowSidebar(targetSection !== 'contact');
      }
    };

    const observer = new IntersectionObserver(observerCallback, observerOptions);

    Object.values(sectionRefs.current).forEach((ref) => {
      if (ref) observer.observe(ref);
    });

    return () => observer.disconnect();
  }, []);

  const handleMouseMove = (e) => {
    setMousePosition({ x: e.clientX, y: e.clientY });
  };

  const scrollToSection = (id) => {
    sectionRefs.current[id]?.scrollIntoView({ behavior: 'smooth', block: 'start' });
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
        {[...Array(15)].map((_, i) => (
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

      {/* Dynamic Light Effect */}
      <div 
        className="fixed w-96 h-96 rounded-full blur-3xl opacity-10 pointer-events-none z-0"
        style={{
          left: `${mousePosition.x}px`,
          top: `${mousePosition.y}px`,
          background: 'radial-gradient(circle, white 0%, transparent 70%)',
          transform: 'translate(-50%, -50%)',
          transition: 'all 0.1s ease-out'
        }}
      ></div>


      {/* Main Content with Sidebar */}
      <div className="relative max-w-7xl mx-auto px-6 py-20 mt-20">
        <div className="flex gap-12 lg:gap-16">
          {/* Main Content */}
          <div className="flex-1 max-w-3xl">
            {/* Introduction */}
            <section
              id="introduction"
              ref={(el) => (sectionRefs.current['introduction'] = el)}
              className="mb-20 scroll-mt-24"
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">
                Introduction
              </h2>
              <div className="prose prose-invert max-w-none">
                <p className="text-white/70 leading-relaxed mb-4">
                  This Privacy Policy describes our policies and procedures on the collection, use, and disclosure of your information when you use our Service. It also explains your privacy rights and how the law protects you.
                </p>
                <p className="text-white/70 leading-relaxed">
                  We use your Personal Data to provide and improve the Service. By using the Service, you agree to the collection and use of information in accordance with this Privacy Policy.
                </p>
              </div>
            </section>

            {/* Interpretation and Definitions */}
            <section
              id="definitions"
              ref={(el) => (sectionRefs.current['definitions'] = el)}
              className="mb-20 scroll-mt-24"
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">
                Interpretation and Definitions
              </h2>
              
              <h3 className="text-xl md:text-2xl font-semibold mb-4 text-white/90">Interpretation</h3>
              <p className="text-white/70 leading-relaxed mb-6">
                The words of which the initial letter is capitalized have meanings defined under the following conditions. The following definitions shall have the same meaning regardless of whether they appear in singular or in plural.
              </p>

              <h3 className="text-xl md:text-2xl font-semibold mb-4 text-white/90">Definitions</h3>
              <p className="text-white/70 leading-relaxed mb-4">
                For the purposes of this Privacy Policy:
              </p>
              
              <div className="space-y-4 border-l-2 border-white/10 pl-6">
                <div>
                  <p className="text-white font-semibold mb-2">Account</p>
                  <p className="text-white/70 leading-relaxed">means a unique account created for You to access our Service or parts of our Service.</p>
                </div>
                
                <div>
                  <p className="text-white font-semibold mb-2">Company</p>
                  <p className="text-white/70 leading-relaxed">(referred to as either "the Company", "We", "Us" or "Our" in this Agreement) refers to CallRolin AI INC, 355 Bryant Street Unit 403, 94107, San Francisco, California. For the purpose of the GDPR, the Company is the Data Controller.</p>
                </div>
                
                <div>
                  <p className="text-white font-semibold mb-2">Cookies</p>
                  <p className="text-white/70 leading-relaxed">are small files that are placed on Your computer, mobile device or any other device by a website, containing the details of Your browsing history on that website among its many uses.</p>
                </div>
                
                <div>
                  <p className="text-white font-semibold mb-2">Personal Data</p>
                  <p className="text-white/70 leading-relaxed">is any information that relates to an identified or identifiable individual.</p>
                </div>
                
                <div>
                  <p className="text-white font-semibold mb-2">Service</p>
                  <p className="text-white/70 leading-relaxed">refers to the Website.</p>
                </div>
                
                <div>
                  <p className="text-white font-semibold mb-2">Website</p>
                  <p className="text-white/70 leading-relaxed">refers to CallRolinML, accessible from https://callrolin.com.</p>
                </div>
              </div>
            </section>

            {/* Collecting and Using Your Personal Data */}
            <section
              id="collecting"
              ref={(el) => (sectionRefs.current['collecting'] = el)}
              className="mb-20 scroll-mt-24"
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">
                Collecting and Using Your Personal Data
              </h2>
              
              <h3 className="text-xl md:text-2xl font-semibold mb-4 text-white/90">Types of Data Collected</h3>
              
              <h4 className="text-lg font-semibold mb-3 text-white/90">Personal Data</h4>
              <p className="text-white/70 leading-relaxed mb-4">
                While using Our Service, We may ask You to provide Us with certain personally identifiable information that can be used to contact or identify You. Personally identifiable information may include, but is not limited to:
              </p>
              
              <ul className="list-disc list-inside space-y-2 text-white/70 mb-6">
                <li>Email address</li>
                <li>First name and last name</li>
                <li>Phone number</li>
                <li>Address, State, Province, ZIP/Postal code, City</li>
                <li>Usage Data</li>
              </ul>

              <h4 className="text-lg font-semibold mb-3 text-white/90">Usage Data</h4>
              <p className="text-white/70 leading-relaxed mb-4">
                Usage Data is collected automatically when using the Service.
              </p>
              <p className="text-white/70 leading-relaxed mb-6">
                Usage Data may include information such as Your Device's Internet Protocol address (e.g. IP address), browser type, browser version, the pages of our Service that You visit, the time and date of Your visit, the time spent on those pages, unique device identifiers and other diagnostic data.
              </p>

              <h4 className="text-lg font-semibold mb-3 text-white/90">Tracking Technologies and Cookies</h4>
              <p className="text-white/70 leading-relaxed mb-4">
                We use Cookies and similar tracking technologies to track the activity on Our Service and store certain information. Tracking technologies used are beacons, tags, and scripts to collect and track information and to improve and analyze Our Service.
              </p>

              <div className="bg-white/5 border border-white/10 rounded-xl p-6 mb-6">
                <h5 className="text-base font-semibold mb-3 text-white">Cookie Types We Use:</h5>
                <div className="space-y-3">
                  <div>
                    <p className="text-white/90 font-medium">Necessary / Essential Cookies</p>
                    <p className="text-white/60 text-sm">Essential to provide You with services available through the Website.</p>
                  </div>
                  <div>
                    <p className="text-white/90 font-medium">Functionality Cookies</p>
                    <p className="text-white/60 text-sm">Remember choices You make when You use the Website.</p>
                  </div>
                  <div>
                    <p className="text-white/90 font-medium">Tracking and Performance Cookies</p>
                    <p className="text-white/60 text-sm">Track information about traffic to the Website and how users use the Website.</p>
                  </div>
                </div>
              </div>

              <h4 className="text-lg font-semibold mb-3 text-white/90">Use of Your Personal Data</h4>
              <p className="text-white/70 leading-relaxed mb-4">
                The Company may use Personal Data for the following purposes:
              </p>
              
              <ul className="space-y-3 mb-6">
                <li className="text-white/70 leading-relaxed"><span className="text-white font-medium">To provide and maintain our Service:</span> including to monitor the usage of our Service.</li>
                <li className="text-white/70 leading-relaxed"><span className="text-white font-medium">To manage Your Account:</span> to manage Your registration as a user of the Service.</li>
                <li className="text-white/70 leading-relaxed"><span className="text-white font-medium">To contact You:</span> by email, telephone calls, SMS, or other equivalent forms of electronic communication.</li>
                <li className="text-white/70 leading-relaxed"><span className="text-white font-medium">To provide You with news:</span> special offers and general information about other goods, services and events.</li>
              </ul>
            </section>

            {/* GDPR Privacy */}
            <section
              id="gdpr"
              ref={(el) => (sectionRefs.current['gdpr'] = el)}
              className="mb-20 scroll-mt-24"
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">
                GDPR Privacy
              </h2>
              
              <h3 className="text-xl md:text-2xl font-semibold mb-4 text-white/90">Legal Basis for Processing Personal Data under GDPR</h3>
              <p className="text-white/70 leading-relaxed mb-4">
                We may process Personal Data under the following conditions:
              </p>
              
              <ul className="space-y-3 mb-6">
                <li className="text-white/70 leading-relaxed"><span className="text-white font-medium">Consent:</span> You have given Your consent for processing Personal Data for one or more specific purposes.</li>
                <li className="text-white/70 leading-relaxed"><span className="text-white font-medium">Performance of a contract:</span> Provision of Personal Data is necessary for the performance of an agreement with You.</li>
                <li className="text-white/70 leading-relaxed"><span className="text-white font-medium">Legal obligations:</span> Processing Personal Data is necessary for compliance with a legal obligation.</li>
                <li className="text-white/70 leading-relaxed"><span className="text-white font-medium">Legitimate interests:</span> Processing Personal Data is necessary for the purposes of legitimate interests pursued by the Company.</li>
              </ul>

              <h3 className="text-xl md:text-2xl font-semibold mb-4 text-white/90">Your Rights under the GDPR</h3>
              <p className="text-white/70 leading-relaxed mb-4">
                You have the right under this Privacy Policy, and by law if You are within the EU, to:
              </p>
              
              <div className="space-y-4 border-l-2 border-white/10 pl-6">
                <div>
                  <p className="text-white font-semibold mb-2">Request access to Your Personal Data</p>
                  <p className="text-white/70 leading-relaxed">The right to access, update or delete the information We have on You.</p>
                </div>
                
                <div>
                  <p className="text-white font-semibold mb-2">Request correction of the Personal Data</p>
                  <p className="text-white/70 leading-relaxed">You have the right to have any incomplete or inaccurate information We hold about You corrected.</p>
                </div>
                
                <div>
                  <p className="text-white font-semibold mb-2">Object to processing of Your Personal Data</p>
                  <p className="text-white/70 leading-relaxed">This right exists where We are relying on a legitimate interest as the legal basis for Our processing.</p>
                </div>
                
                <div>
                  <p className="text-white font-semibold mb-2">Request erasure of Your Personal Data</p>
                  <p className="text-white/70 leading-relaxed">You have the right to ask Us to delete or remove Personal Data when there is no good reason for Us to continue processing it.</p>
                </div>
                
                <div>
                  <p className="text-white font-semibold mb-2">Withdraw Your consent</p>
                  <p className="text-white/70 leading-relaxed">You have the right to withdraw Your consent on using your Personal Data.</p>
                </div>
              </div>
            </section>

            {/* CCPA/CPRA Privacy Notice */}
            <section
              id="ccpa"
              ref={(el) => (sectionRefs.current['ccpa'] = el)}
              className="mb-20 scroll-mt-24"
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">
                CCPA/CPRA Privacy Notice (California Privacy Rights)
              </h2>
              
              <p className="text-white/70 leading-relaxed mb-6">
                This privacy notice section for California residents supplements the information contained in Our Privacy Policy and it applies solely to all visitors, users, and others who reside in the State of California.
              </p>

              <h3 className="text-xl md:text-2xl font-semibold mb-4 text-white/90">Categories of Personal Information Collected</h3>
              <p className="text-white/70 leading-relaxed mb-4">
                We collect information that identifies, relates to, describes, references, is capable of being associated with, or could reasonably be linked, directly or indirectly, with a particular Consumer or Device.
              </p>

              <div className="bg-white/5 border border-white/10 rounded-xl p-6 mb-6">
                <h5 className="text-base font-semibold mb-4 text-white">Categories Collected:</h5>
                <div className="space-y-3">
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-white/60 rounded-full mt-2 flex-shrink-0"></div>
                    <div>
                      <p className="text-white/90 font-medium">Category A: Identifiers</p>
                      <p className="text-white/60 text-sm">Name, email address, IP address, account name</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-white/60 rounded-full mt-2 flex-shrink-0"></div>
                    <div>
                      <p className="text-white/90 font-medium">Category B: Personal Information</p>
                      <p className="text-white/60 text-sm">Name, address, telephone number, financial information</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-white/60 rounded-full mt-2 flex-shrink-0"></div>
                    <div>
                      <p className="text-white/90 font-medium">Category F: Internet Activity</p>
                      <p className="text-white/60 text-sm">Interaction with our Service or advertisement</p>
                    </div>
                  </div>
                </div>
              </div>

              <h3 className="text-xl md:text-2xl font-semibold mb-4 text-white/90">Your Rights under the CCPA/CPRA</h3>
              <p className="text-white/70 leading-relaxed mb-4">
                California residents have the following rights:
              </p>
              
              <ul className="space-y-2 text-white/70 mb-6">
                <li>• Right to notice (categories and purposes of data collection)</li>
                <li>• Right to know/access (information about collection, use, sale, disclosure)</li>
                <li>• Right to opt-out (say no to sale or sharing)</li>
                <li>• Right to correct (rectify inaccurate personal information)</li>
                <li>• Right to delete (request deletion, subject to exceptions)</li>
                <li>• Right not to be discriminated against (for exercising privacy rights)</li>
              </ul>

              <div className="bg-white/5 border border-white/10 rounded-xl p-6">
                <h5 className="text-base font-semibold mb-3 text-white">Exercising Your CCPA/CPRA Rights</h5>
                <p className="text-white/70 leading-relaxed mb-3">
                  To exercise any rights under the CCPA/CPRA, California residents can contact us:
                </p>
                <p className="text-white/90">By email: <a href="mailto:privacy@callrolin.com" className="text-white hover:underline">privacy@callrolin.com</a></p>
              </div>
            </section>

            {/* Children's Privacy */}
            <section
              id="children"
              ref={(el) => (sectionRefs.current['children'] = el)}
              className="mb-20 scroll-mt-24"
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">
                Children's Privacy
              </h2>
              
              <p className="text-white/70 leading-relaxed mb-4">
                Our Service does not address anyone under the age of 13. We do not knowingly collect personally identifiable information from anyone under the age of 13.
              </p>
              <p className="text-white/70 leading-relaxed">
                If You are a parent or guardian and You are aware that Your child has provided Us with Personal Data, please contact Us. If We become aware that We have collected Personal Data from anyone under the age of 13 without verification of parental consent, We take steps to remove that information from Our servers.
              </p>
            </section>

            {/* Link to Other Websites */}
            <section
              id="links"
              ref={(el) => (sectionRefs.current['links'] = el)}
              className="mb-20 scroll-mt-24"
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">
                Link to Other Websites
              </h2>
              
              <p className="text-white/70 leading-relaxed mb-4">
                Our Service may contain links to other websites that are not operated by Us. If You click on a third party link, You will be directed to that third party's site. We strongly advise You to review the Privacy Policy of every site You visit.
              </p>
              <p className="text-white/70 leading-relaxed">
                We have no control over and assume no responsibility for the content, privacy policies or practices of any third party sites or services.
              </p>
            </section>

            {/* Changes to this Privacy Policy */}
            <section
              id="changes"
              ref={(el) => (sectionRefs.current['changes'] = el)}
              className="mb-20 scroll-mt-24"
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">
                Changes to this Privacy Policy
              </h2>
              
              <p className="text-white/70 leading-relaxed mb-4">
                We may update Our Privacy Policy from time to time. We will notify You of any changes by posting the new Privacy Policy on this page.
              </p>
              <p className="text-white/70 leading-relaxed mb-4">
                We will let You know via email and/or a prominent notice on Our Service, prior to the change becoming effective and update the "Last updated" date at the top of this Privacy Policy.
              </p>
              <p className="text-white/70 leading-relaxed">
                You are advised to review this Privacy Policy periodically for any changes. Changes to this Privacy Policy are effective when they are posted on this page.
              </p>
            </section>

            {/* AI-Generated Communications Disclaimer */}
            <section
              id="ai-disclaimer"
              ref={(el) => (sectionRefs.current['ai-disclaimer'] = el)}
              className="mb-20 scroll-mt-24"
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">
                AI-Generated Communications Disclaimer
              </h2>
              
              <div className="bg-white/5 border border-white/10 rounded-xl p-6">
                <p className="text-white/70 leading-relaxed mb-3">
                  Calls and chat messages may be generated by AI. While we strive for accuracy, AI-generated content may contain errors or omissions.
                </p>
                <p className="text-white/90 font-medium">
                  Users should verify the information before relying on it.
                </p>
              </div>
            </section>
          </div>

          {/* Fixed Sidebar Navigation */}
          <aside className={`hidden lg:block w-64 flex-shrink-0 transition-opacity duration-300 ${showSidebar ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}>
            <div className="fixed top-32 right-8 w-64 z-20">
              <div className="border border-white/10 rounded-2xl p-6 bg-black/80 backdrop-blur-md shadow-xl">
                <h3 className="text-sm font-semibold text-white/90 mb-4 tracking-wider uppercase">
                  Contents
                </h3>
                <nav className="space-y-2">
                  {sections.map((section) => (
                    <button
                      key={section.id}
                      onClick={() => scrollToSection(section.id)}
                      className={`block w-full text-left px-3 py-2 rounded-lg text-sm transition-all duration-200 ${
                        activeSection === section.id
                          ? 'bg-white text-black font-medium'
                          : 'text-white/60 hover:text-white hover:bg-white/5'
                      }`}
                    >
                      {section.title}
                    </button>
                  ))}
                </nav>
              </div>
            </div>
          </aside>
        </div>
      </div>

      {/* Contact Us Section - Outside sidebar container */}
      <div className="relative max-w-7xl mx-auto px-6 pb-20">
        <div className="max-w-3xl">
          <section
            id="contact"
            ref={(el) => (sectionRefs.current['contact'] = el)}
            className="mb-20 scroll-mt-24"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">
              Contact Us
            </h2>
            
            <p className="text-white/70 leading-relaxed mb-6">
              If you have any questions about this Privacy Policy, You can contact us:
            </p>
            
            <div className="bg-white/5 border border-white/10 rounded-xl p-8 text-center">
              <p className="text-white/60 mb-3">By email:</p>
              <a 
                href="mailto:privacy@callrolin.com" 
                className="text-2xl font-semibold text-white hover:text-white/80 transition-colors"
              >
                privacy@callrolin.com
              </a>
            </div>
          </section>
        </div>
      </div>

      {/* Bottom CTA */}
      <section className="relative py-20 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center gap-4 mb-6">
            <div className="w-20 h-px bg-gradient-to-r from-transparent to-white/30"></div>
            <span className="text-xs tracking-[0.3em] text-white/60 uppercase">Questions?</span>
            <div className="w-20 h-px bg-gradient-to-r from-white/30 to-transparent"></div>
          </div>

          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            We're here to help
          </h2>
          
          <p className="text-lg text-white/70 mb-8">
            Have questions about our privacy practices? Our team is ready to assist you.
          </p>

          <a 
            href="mailto:privacy@callrolin.com"
            className="inline-flex items-center gap-3 px-8 py-4 rounded-full bg-white text-black font-semibold text-sm tracking-widest uppercase transition-all duration-300 hover:scale-105 hover:shadow-2xl group"
          >
            Contact Privacy Team
            <svg className="w-4 h-4 group-hover:translate-x-2 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </a>
        </div>
      </section>
    </div>
  );
};

export default Privacy;