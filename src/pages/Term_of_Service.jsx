import React, { useState, useEffect, useRef } from 'react';

const TermsOfService = () => {
  const [activeSection, setActiveSection] = useState('interpretation');
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [showSidebar, setShowSidebar] = useState(true);
  const sectionRefs = useRef({});

  const sections = [
    { id: 'interpretation', title: 'Interpretation and Definitions' },
    { id: 'acknowledgment', title: 'Acknowledgment' },
    { id: 'intellectual', title: 'Intellectual Property' },
    { id: 'links', title: 'Links to Other Websites' },
    { id: 'termination', title: 'Termination' },
    { id: 'liability', title: 'Limitation of Liability' },
    { id: 'disclaimer', title: '"AS IS" and "AS AVAILABLE" Disclaimer' },
    { id: 'law', title: 'Governing Law' },
    { id: 'disputes', title: 'Disputes Resolution' },
    { id: 'eu', title: 'For European Union (EU) Users' },
    { id: 'us', title: 'United States Legal Compliance' },
    { id: 'severability', title: 'Severability and Waiver' },
    { id: 'translation', title: 'Translation Interpretation' },
    { id: 'changes', title: 'Changes to These Terms and Conditions' },
    { id: 'contact', title: 'Contact Us' }
  ];

  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: '-100px 0px -66% 0px',
      threshold: [0, 0.25, 0.5, 0.75, 1]
    };

    const observerCallback = (entries) => {
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
            
            {/* Interpretation and Definitions */}
            <section
              id="interpretation"
              ref={(el) => (sectionRefs.current['interpretation'] = el)}
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
                For the purposes of these Terms and Conditions:
              </p>
              
              <div className="space-y-4 border-l-2 border-white/10 pl-6">
                <div>
                  <p className="text-white font-semibold mb-2">Affiliate</p>
                  <p className="text-white/70 leading-relaxed">means an entity that controls, is controlled by or is under common control with a party, where "control" means ownership of 50% or more of the shares, equity interest or other securities entitled to vote for election of directors or other managing authority.</p>
                </div>
                
                <div>
                  <p className="text-white font-semibold mb-2">Country</p>
                  <p className="text-white/70 leading-relaxed">refers to: Delaware, United States.</p>
                </div>
                
                <div>
                  <p className="text-white font-semibold mb-2">Company</p>
                  <p className="text-white/70 leading-relaxed">(referred to as either "the Company", "We", "Us" or "Our" in this Agreement) refers to CallRolin AI INC, 355 Bryant Street, Unit 403, 94107, San Francisco, California.</p>
                </div>
                
                <div>
                  <p className="text-white font-semibold mb-2">Device</p>
                  <p className="text-white/70 leading-relaxed">means any device that can access the Service such as a computer, a cellphone or a digital tablet.</p>
                </div>
                
                <div>
                  <p className="text-white font-semibold mb-2">Service</p>
                  <p className="text-white/70 leading-relaxed">refers to the Website.</p>
                </div>
                
                <div>
                  <p className="text-white font-semibold mb-2">Third-party Social Media Service</p>
                  <p className="text-white/70 leading-relaxed">means any services or content (including data, information, products or services) provided by a third-party that may be displayed, included or made available by the Service.</p>
                </div>
                
                <div>
                  <p className="text-white font-semibold mb-2">Website</p>
                  <p className="text-white/70 leading-relaxed">refers to CallRolinML, accessible from https://callrolin.com.</p>
                </div>
                
                <div>
                  <p className="text-white font-semibold mb-2">You</p>
                  <p className="text-white/70 leading-relaxed">means the individual accessing or using the Service, or the company, or other legal entity on behalf of which such individual is accessing or using the Service, as applicable.</p>
                </div>
              </div>
            </section>

            {/* Acknowledgment */}
            <section
              id="acknowledgment"
              ref={(el) => (sectionRefs.current['acknowledgment'] = el)}
              className="mb-20 scroll-mt-24"
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">
                Acknowledgment
              </h2>
              
              <p className="text-white/70 leading-relaxed mb-4">
                These are the Terms and Conditions governing the use of this Service and the agreement that operates between You and the Company. These Terms and Conditions set out the rights and obligations of all users regarding the use of the Service.
              </p>
              
              <p className="text-white/70 leading-relaxed mb-4">
                Your access to and use of the Service is conditioned on Your acceptance of and compliance with these Terms and Conditions. These Terms and Conditions apply to all visitors, users and others who access or use the Service.
              </p>
              
              <p className="text-white/70 leading-relaxed mb-4">
                By accessing or using the Service You agree to be bound by these Terms and Conditions. If You disagree with any part of these Terms and Conditions then You may not access the Service.
              </p>
              
              <p className="text-white/70 leading-relaxed mb-4">
                You represent that You are over the age of 18. The Company does not permit those under 18 to use the Service.
              </p>
              
              <p className="text-white/70 leading-relaxed">
                Your access to and use of the Service is also conditioned on Your acceptance of and compliance with the Privacy Policy of the Company. Our Privacy Policy describes Our policies and procedures on the collection, use and disclosure of Your personal information when You use the Application or the Website and tells You about Your privacy rights and how the law protects You. Please read Our Privacy Policy carefully before using Our Service.
              </p>
            </section>

            {/* Intellectual Property */}
            <section
              id="intellectual"
              ref={(el) => (sectionRefs.current['intellectual'] = el)}
              className="mb-20 scroll-mt-24"
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">
                Intellectual Property
              </h2>
              
              <p className="text-white/70 leading-relaxed mb-4">
                The Service and its original content (excluding Content provided by You or other users), features and functionality are and will remain the exclusive property of the Company and its licensors.
              </p>
              
              <p className="text-white/70 leading-relaxed mb-4">
                The Service is protected by copyright, trademark, and other laws of both the Country and foreign countries.
              </p>
              
              <p className="text-white/70 leading-relaxed">
                Our trademarks and trade dress may not be used in connection with any product or service without the prior written consent of the Company.
              </p>
            </section>

            {/* Links to Other Websites */}
            <section
              id="links"
              ref={(el) => (sectionRefs.current['links'] = el)}
              className="mb-20 scroll-mt-24"
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">
                Links to Other Websites
              </h2>
              
              <p className="text-white/70 leading-relaxed mb-4">
                Our Service may contain links to third-party websites or services that are not owned or controlled by the Company.
              </p>
              
              <p className="text-white/70 leading-relaxed mb-4">
                The Company has no control over, and assumes no responsibility for, the content, privacy policies, or practices of any third-party websites or services. You further acknowledge and agree that the Company shall not be responsible or liable, directly or indirectly, for any damage or loss caused or alleged to be caused by or in connection with the use of or reliance on any such content, goods or services available on or through any such websites or services.
              </p>
              
              <p className="text-white/70 leading-relaxed">
                We strongly advise You to read the terms and conditions and privacy policies of any third-party websites or services that You visit.
              </p>
            </section>

            {/* Termination */}
            <section
              id="termination"
              ref={(el) => (sectionRefs.current['termination'] = el)}
              className="mb-20 scroll-mt-24"
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">
                Termination
              </h2>
              
              <p className="text-white/70 leading-relaxed mb-4">
                We may terminate or suspend Your access immediately, without prior notice or liability, for any reason whatsoever, including without limitation if You breach these Terms and Conditions.
              </p>
              
              <p className="text-white/70 leading-relaxed">
                Upon termination, Your right to use the Service will cease immediately.
              </p>
            </section>

            {/* Limitation of Liability */}
            <section
              id="liability"
              ref={(el) => (sectionRefs.current['liability'] = el)}
              className="mb-20 scroll-mt-24"
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">
                Limitation of Liability
              </h2>
              
              <p className="text-white/70 leading-relaxed mb-4">
                Notwithstanding any damages that You might incur, the entire liability of the Company and any of its suppliers under any provision of this Terms and Your exclusive remedy for all of the foregoing shall be limited to the amount actually paid by You through the Service or 100 USD if You haven't purchased anything through the Service.
              </p>
              
              <p className="text-white/70 leading-relaxed mb-4">
                To the maximum extent permitted by applicable law, in no event shall the Company or its suppliers be liable for any special, incidental, indirect, or consequential damages whatsoever (including, but not limited to, damages for loss of profits, loss of data or other information, for business interruption, for personal injury, loss of privacy arising out of or in any way related to the use of or inability to use the Service, third-party software and/or third-party hardware used with the Service, or otherwise in connection with any provision of this Terms), even if the Company or any supplier has been advised of the possibility of such damages and even if the remedy fails of its essential purpose.
              </p>
              
              <p className="text-white/70 leading-relaxed">
                Some states do not allow the exclusion of implied warranties or limitation of liability for incidental or consequential damages, which means that some of the above limitations may not apply. In these states, each party's liability will be limited to the greatest extent permitted by law.
              </p>
            </section>

            {/* "AS IS" and "AS AVAILABLE" Disclaimer */}
            <section
              id="disclaimer"
              ref={(el) => (sectionRefs.current['disclaimer'] = el)}
              className="mb-20 scroll-mt-24"
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">
                "AS IS" and "AS AVAILABLE" Disclaimer
              </h2>
              
              <p className="text-white/70 leading-relaxed mb-4">
                The Service is provided to You "AS IS" and "AS AVAILABLE" and with all faults and defects without warranty of any kind. To the maximum extent permitted under applicable law, the Company, on its own behalf and on behalf of its Affiliates and its and their respective licensors and service providers, expressly disclaims all warranties, whether express, implied, statutory or otherwise, with respect to the Service, including all implied warranties of merchantability, fitness for a particular purpose, title and non-infringement, and warranties that may arise out of course of dealing, course of performance, usage or trade practice.
              </p>
              
              <p className="text-white/70 leading-relaxed mb-4">
                Without limitation to the foregoing, the Company provides no warranty or undertaking, and makes no representation of any kind that the Service will meet Your requirements, achieve any intended results, be compatible or work with any other software, applications, systems or services, operate without interruption, meet any performance or reliability standards or be error free or that any errors or defects can or will be corrected.
              </p>
              
              <p className="text-white/70 leading-relaxed mb-4">
                Without limiting the foregoing, neither the Company nor any of the Company's providers makes any representation or warranty of any kind, express or implied:
              </p>
              
              <ul className="list-disc list-inside space-y-2 text-white/70 mb-4 pl-4">
                <li>as to the operation or availability of the Service, or the information, content, and materials or products included thereon;</li>
                <li>that the Service will be uninterrupted or error-free;</li>
                <li>as to the accuracy, reliability, or currency of any information or content provided through the Service; or</li>
                <li>that the Service, its servers, the content, or e-mails sent from or on behalf of the Company are free of viruses, scripts, trojan horses, worms, malware, timebombs or other harmful components.</li>
              </ul>
              
              <p className="text-white/70 leading-relaxed">
                Some jurisdictions do not allow the exclusion of certain types of warranties or limitations on applicable statutory rights of a consumer, so some or all of the above exclusions and limitations may not apply to You. But in such a case the exclusions and limitations set forth in this section shall be applied to the greatest extent enforceable under applicable law.
              </p>
            </section>

            {/* Governing Law */}
            <section
              id="law"
              ref={(el) => (sectionRefs.current['law'] = el)}
              className="mb-20 scroll-mt-24"
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">
                Governing Law
              </h2>
              
              <p className="text-white/70 leading-relaxed">
                The laws of the Country, excluding its conflicts of law rules, shall govern this Terms and Your use of the Service. Your use of the Application may also be subject to other local, state, national, or international laws.
              </p>
            </section>

            {/* Disputes Resolution */}
            <section
              id="disputes"
              ref={(el) => (sectionRefs.current['disputes'] = el)}
              className="mb-20 scroll-mt-24"
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">
                Disputes Resolution
              </h2>
              
              <p className="text-white/70 leading-relaxed">
                If You have any concern or dispute about the Service, You agree to first try to resolve the dispute informally by contacting the Company.
              </p>
            </section>

            {/* For European Union (EU) Users */}
            <section
              id="eu"
              ref={(el) => (sectionRefs.current['eu'] = el)}
              className="mb-20 scroll-mt-24"
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">
                For European Union (EU) Users
              </h2>
              
              <p className="text-white/70 leading-relaxed">
                If You are a European Union consumer, You will benefit from any mandatory provisions of the law of the country in which You are resident.
              </p>
            </section>

            {/* United States Legal Compliance */}
            <section
              id="us"
              ref={(el) => (sectionRefs.current['us'] = el)}
              className="mb-20 scroll-mt-24"
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">
                United States Legal Compliance
              </h2>
              
              <p className="text-white/70 leading-relaxed mb-4">
                You represent and warrant that:
              </p>
              
              <ul className="list-disc list-inside space-y-2 text-white/70 pl-4">
                <li>You are not located in a country that is subject to the United States government embargo, or that has been designated by the United States government as a "terrorist supporting" country; and</li>
                <li>You are not listed on any United States government list of prohibited or restricted parties.</li>
              </ul>
            </section>

            {/* Severability and Waiver */}
            <section
              id="severability"
              ref={(el) => (sectionRefs.current['severability'] = el)}
              className="mb-20 scroll-mt-24"
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">
                Severability and Waiver
              </h2>
              
              <h3 className="text-xl md:text-2xl font-semibold mb-4 text-white/90">Severability</h3>
              <p className="text-white/70 leading-relaxed mb-6">
                If any provision of these Terms is held to be unenforceable or invalid, such provision will be changed and interpreted to accomplish the objectives of such provision to the greatest extent possible under applicable law and the remaining provisions will continue in full force and effect.
              </p>

              <h3 className="text-xl md:text-2xl font-semibold mb-4 text-white/90">Waiver</h3>
              <p className="text-white/70 leading-relaxed">
                Except as provided herein, the failure to exercise a right or to require performance of an obligation under these Terms shall not affect a party's ability to exercise such right or require such performance at any time thereafter nor shall the waiver of a breach constitute a waiver of any subsequent breach.
              </p>
            </section>

            {/* Translation Interpretation */}
            <section
              id="translation"
              ref={(el) => (sectionRefs.current['translation'] = el)}
              className="mb-20 scroll-mt-24"
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">
                Translation Interpretation
              </h2>
              
              <p className="text-white/70 leading-relaxed">
                These Terms and Conditions may have been translated if We have made them available to You on our Service. You agree that the original English text shall prevail in the case of a dispute.
              </p>
            </section>

            {/* Changes to These Terms and Conditions */}
            <section
              id="changes"
              ref={(el) => (sectionRefs.current['changes'] = el)}
              className="mb-20 scroll-mt-24"
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">
                Changes to These Terms and Conditions
              </h2>
              
              <p className="text-white/70 leading-relaxed mb-4">
                We reserve the right, at Our sole discretion, to modify or replace these Terms at any time. If a revision is material We will make reasonable efforts to provide at least 30 days' notice prior to any new terms taking effect. What constitutes a material change will be determined at Our sole discretion.
              </p>
              
              <p className="text-white/70 leading-relaxed">
                By continuing to access or use Our Service after those revisions become effective, You agree to be bound by the revised terms. If You do not agree to the new terms, in whole or in part, please stop using the website and the Service.
              </p>
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
              If you have any questions about these Terms and Conditions, You can contact us:
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
            Have questions about our terms? Our team is ready to assist you.
          </p>

          <a 
            href="mailto:privacy@callrolin.com"
            className="inline-flex items-center gap-3 px-8 py-4 rounded-full bg-white text-black font-semibold text-sm tracking-widest uppercase transition-all duration-300 hover:scale-105 hover:shadow-2xl group"
          >
            Contact Our Team
            <svg className="w-4 h-4 group-hover:translate-x-2 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </a>
        </div>
      </section>
    </div>
  );
};

export default TermsOfService;