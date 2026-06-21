import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Page } from './types';

// Importing page components
import Home from './pages/Home';
import Services from './pages/Services';
import Portfolio from './pages/Portfolio';
import Pricing from './pages/Pricing';
import WhyZera from './pages/WhyZera';
import Contact from './pages/Contact';
import FreeAudit from './pages/FreeAudit';

// Icons
import { Menu, X, Sparkles, MessageCircle, Phone, Mail, ArrowRight, Star } from 'lucide-react';

export default function App() {
  // Navigation states
  const [currentPage, setCurrentPage] = useState<Page>(Page.Home);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // Sync state with URL Hash if any, supports direct links
  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash.replace('#', '') as Page;
      if (Object.values(Page).includes(hash)) {
        setCurrentPage(hash);
      }
    };

    window.addEventListener('hashchange', handleHashChange);
    // Initial check
    handleHashChange();

    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  // Set hash navigation
  const navigateTo = (page: Page) => {
    window.location.hash = page;
    setCurrentPage(page);
    setMobileMenuOpen(false);
    // Smooth scroll to top when changing page
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const WHATSAPP_URL = "https://wa.me/919835102324?text=Hi%20Zera%20Dental%2C%20I%20want%20a%20website%20for%20my%20dental%20clinic";

  return (
    <div className="flex flex-col min-h-screen bg-white font-sans text-gray-800 antialiased selection:bg-[#00b4d8]/20 selection:text-[#1a3c6e]">
      
      {/* Top sticky alert announcement bar */}
      <div className="bg-[#1a3c6e] text-white py-2 px-4 text-center text-xs font-medium tracking-wide z-50">
        <div className="max-w-7xl mx-auto flex items-center justify-center gap-1.5 flex-wrap">
          <Sparkles className="w-3.5 h-3.5 text-[#00b4d8] animate-pulse" />
          <span>Special Offer: Free Dental SEO & Map Audit worth <b className="text-[#00b4d8]">₹4,999</b> with every new clinic inquiry!</span>
          <button 
            id="alert-cta-btn"
            onClick={() => navigateTo(Page.FreeAudit)} 
            className="underline hover:text-[#00b4d8] ml-2 font-semibold flex items-center gap-0.5"
          >
            Claim Audit <ArrowRight className="w-3 h-3" />
          </button>
        </div>
      </div>

      {/* Main sticky navigation header */}
      <header className="sticky top-0 bg-white/95 backdrop-blur-md border-b border-gray-100 z-40 shadow-xs">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 w-full h-20 flex items-center">
          <div className="flex justify-between items-center w-full">
            
            {/* Logo area */}
            <button 
              id="logo-home-btn"
              onClick={() => navigateTo(Page.Home)}
              className="flex items-center gap-2 cursor-pointer text-left"
            >
              <span className="text-2xl font-bold tracking-tight text-[#1a3c6e] font-sans">
                Zera<span className="text-[#00b4d8]">Dental</span>
              </span>
            </button>

            {/* Desktop Navigation Links */}
            <nav className="hidden md:flex gap-1.5 items-center">
              {[
                { label: 'Home', page: Page.Home },
                { label: 'Our Work', page: Page.Portfolio },
                { label: 'Pricing', page: Page.Pricing },
                { label: 'Why Us', page: Page.WhyZera },
                { label: 'Contact', page: Page.Contact },
              ].map((link) => (
                <button
                  key={link.page}
                  id={`nav-link-${link.page}`}
                  onClick={() => navigateTo(link.page)}
                  className={`px-4 py-2.5 rounded-full text-xs font-bold uppercase tracking-wider transition-all duration-200 cursor-pointer ${
                    currentPage === link.page
                      ? 'text-[#1a3c6e] bg-[#1a3c6e]/5 shadow-2xs border border-[#1a3c6e]/10'
                      : 'text-gray-650 hover:text-[#1a3c6e] hover:bg-slate-50'
                  }`}
                >
                  {link.label}
                </button>
              ))}
              <button 
                id="header-audit-btn"
                onClick={() => navigateTo(Page.FreeAudit)}
                className="inline-flex items-center justify-center px-5 py-2.5 ml-2 rounded-full text-white font-bold text-xs uppercase tracking-wider shadow-sm transition-all duration-150 cursor-pointer hover:-translate-y-0.5 active:translate-y-0"
                style={{ backgroundColor: '#00b4d8' }}
              >
                Free Audit
              </button>
            </nav>

            {/* Mobile menu trigger button */}
            <div className="flex md:hidden">
              <button
                id="mobile-menu-trigger"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="p-2 rounded-xl text-gray-600 hover:text-[#1a3c6e] hover:bg-slate-100 transition-all focus:outline-none"
                aria-label="Toggle Menu"
              >
                {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>

          </div>
        </div>

        {/* Collapsable Mobile Menu Panel */}
        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.2 }}
              className="md:hidden border-t border-slate-100 bg-white"
            >
              <div className="px-4 pt-3 pb-6 space-y-2">
                {[
                  { label: 'Home', page: Page.Home },
                  { label: 'Our Work', page: Page.Portfolio },
                  { label: 'Pricing', page: Page.Pricing },
                  { label: 'Why Us', page: Page.WhyZera },
                  { label: 'Contact', page: Page.Contact },
                ].map((link, idx) => (
                  <button
                    key={link.page}
                    id={`mobile-link-${link.page}`}
                    onClick={() => navigateTo(link.page)}
                    className={`block w-full text-left px-4 py-3 rounded-xl text-base font-semibold transition-colors cursor-pointer ${
                      currentPage === link.page
                        ? 'text-[#1a3c6e] bg-[#1a3c6e]/5'
                        : 'text-gray-700 hover:bg-slate-50'
                    }`}
                  >
                    <div className="flex justify-between items-center">
                      <span>{link.label}</span>
                      <span className="text-xs text-gray-300 font-mono font-medium">0{idx + 1}</span>
                    </div>
                  </button>
                ))}

                <div className="pt-4 border-t border-slate-100 px-4">
                  <button
                    id="mobile-nav-cta-btn"
                    onClick={() => navigateTo(Page.FreeAudit)}
                    className="w-full inline-flex items-center justify-center py-3.5 rounded-full text-white font-bold text-base transition-colors shadow-md"
                    style={{ backgroundColor: '#00b4d8' }}
                  >
                    Free Audit
                  </button>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </header>

      {/* Dynamic Main Body Content with clean page switching transitions */}
      <main className="flex-grow">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentPage}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
          >
            {currentPage === Page.Home && <Home onNavigate={navigateTo} />}
            {currentPage === Page.Services && <Services onNavigate={navigateTo} />}
            {currentPage === Page.Portfolio && <Portfolio onNavigate={navigateTo} />}
            {currentPage === Page.Pricing && <Pricing onNavigate={navigateTo} />}
            {currentPage === Page.WhyZera && <WhyZera onNavigate={navigateTo} />}
            {currentPage === Page.Contact && <Contact />}
            {currentPage === Page.FreeAudit && <FreeAudit />}
          </motion.div>
        </AnimatePresence>
      </main>

      {/* Footer component shared across pages */}
      <footer className="bg-slate-900 text-white mt-auto border-t border-slate-850">
        
        {/* Main Footer Links & Blocks */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-12">
            
            {/* Branding Block */}
            <div className="md:col-span-5 space-y-4">
              <div className="flex items-center gap-2">
                <span className="text-xl font-bold tracking-tight text-white font-sans">
                  Zera<span className="text-[#00b4d8]">Dental</span>
                </span>
              </div>
              
              <p className="text-xs sm:text-sm text-slate-400 font-light leading-relaxed max-w-sm">
                We specialize in building professional websites for dental clinics across India
              </p>
            </div>

            {/* Quick Navigation Pages */}
            <div className="md:col-span-3 space-y-4">
              <h4 className="text-xs sm:text-sm font-bold tracking-wider text-slate-300 uppercase font-mono">Quick Links</h4>
              <ul className="grid grid-cols-2 gap-x-4 gap-y-2.5">
                {[
                  { label: 'Home', page: Page.Home },
                  { label: 'Our Work', page: Page.Portfolio },
                  { label: 'Pricing', page: Page.Pricing },
                  { label: 'Why Us', page: Page.WhyZera },
                  { label: 'Contact', page: Page.Contact },
                ].map((link) => (
                  <li key={link.page}>
                    <button
                      id={`footer-nav-link-${link.page}`}
                      onClick={() => navigateTo(link.page)}
                      className="text-xs sm:text-sm text-slate-400 hover:text-white transition-colors cursor-pointer text-left py-0.5"
                    >
                      {link.label}
                    </button>
                  </li>
                ))}
                <li>
                  <button
                    id="footer-nav-link-freeaudit"
                    onClick={() => navigateTo(Page.FreeAudit)}
                    className="text-xs sm:text-sm text-slate-400 hover:text-white transition-colors cursor-pointer text-left py-0.5"
                  >
                    Free Audit
                  </button>
                </li>
              </ul>
            </div>

            {/* Contact Column */}
            <div className="md:col-span-4 space-y-4">
              <h4 className="text-xs sm:text-sm font-bold tracking-wider text-slate-300 uppercase font-mono">Contact Details</h4>
              <ul className="space-y-3.5">
                <li className="flex items-center gap-3">
                  <span className="text-base">📞</span>
                  <a href="tel:9835102324" className="text-sm font-bold text-white hover:text-[#00b4d8]">
                    9835102324
                  </a>
                </li>
                <li className="flex items-center gap-3">
                  <span className="text-base">✉️</span>
                  <a href="mailto:hello@zeradental.in" className="text-xs sm:text-sm font-bold text-white hover:text-[#00b4d8]">
                    hello@zeradental.in
                  </a>
                </li>
              </ul>
            </div>

          </div>

          {/* Copyright section */}
          <div className="mt-12 pt-8 border-t border-slate-800 text-center flex flex-col sm:flex-row justify-between items-center gap-4 text-[11px] sm:text-xs text-slate-500">
            <p>© 2024 Zera Dental. All rights reserved.</p>
            <div className="flex gap-4">
              <button onClick={() => navigateTo(Page.WhyZera)} className="hover:text-white transition-colors">Privacy Policy</button>
              <button onClick={() => navigateTo(Page.WhyZera)} className="hover:text-white transition-colors">Terms of Service</button>
            </div>
          </div>
        </div>

      </footer>

      {/* FIXED FLOAT WHATSAPP BUTTON (Bottom Right of every page) */}
      <a
        id="fixed-whatsapp-trigger"
        href={WHATSAPP_URL}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Direct WhatsApp Consultation"
        className="fixed bottom-6 right-6 z-50 p-4 rounded-2xl bg-emerald-500 hover:bg-emerald-600 hover:-translate-y-1 text-white shadow-2xl transition-all duration-300 flex items-center gap-2.5 group scale-95 sm:scale-100"
      >
        <span className="absolute -left-36 bg-slate-900 text-white font-semibold text-xs leading-none px-3.5 py-2.5 rounded-xl shadow-lg opacity-0 transition-opacity whitespace-nowrap invisible group-hover:opacity-100 group-hover:visible font-mono">
          Chat with us on WhatsApp!
        </span>
        <MessageCircle className="w-6 h-6 fill-white text-emerald-500" />
      </a>

    </div>
  );
}
