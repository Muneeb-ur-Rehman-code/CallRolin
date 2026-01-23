import React, { useEffect } from 'react'
import { BrowserRouter as Router, Route, Routes, useLocation } from 'react-router-dom';

import './App.css'

import Navbar from './components/Navbar.jsx'
import Home from './pages/Home.jsx'
import Auth from './pages/Auth.jsx'
import Contact from './pages/Contact.jsx'
import Dashboard from './pages/Dashboard.jsx'
import About from './pages/About.jsx'
import AgentCanvas from './components/AgentCanvas.jsx'
import Cards from './components/Cards.jsx'
import SmartInsight from './components/SmartInsight.jsx'
import VoiceExperience from './components/VoiceExperience.jsx'
import Footer from './components/Footer.jsx'
import P_policy from './pages/P_policy.jsx'
import Term_of_Service from './pages/Term_of_Service.jsx'
import SmoothScroll from './components/SmoothScroll.jsx';
import AgentDashboard from './pages/AgentDashboard.jsx';
// --- Scroll-to-top helper ---
const ScrollToTop = () => {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
};
function App() {
  const location = useLocation();
  const hideNavbar = location.pathname === '/dashboard' ||   location.pathname === '/agent-dashboard';

  const hideFooter = location.pathname === '/dashboard' ||   location.pathname === '/agent-dashboard';


  return (
    <>
    <SmoothScroll/>
      <ScrollToTop />
      {!hideNavbar && <Navbar />}
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/auth" element={<Auth />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/agent-dashboard" element={<AgentDashboard />} />

          <Route path="/cards" element={<Cards />} />
          <Route path="/agent-canvas" element={<AgentCanvas />} />
          <Route path="/smart-insight" element={<SmartInsight />} />
          <Route path="/voice-experience" element={<VoiceExperience />} />
          <Route path="/p_policy" element={<P_policy />} />
          <Route path="/term_of_service" element={<Term_of_Service />} />
        </Routes>
      </main>
      {!hideFooter && <Footer />}
    </>
  )
}

export default App
