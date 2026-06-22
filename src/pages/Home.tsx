import { useEffect } from 'react';
import { motion } from 'motion/react';
import { Page } from '../types';
import { Sparkles, ArrowRight, ShieldCheck, Globe, Calendar, Star, Users, Phone, ShieldAlert, Laptop } from 'lucide-react';
import { updatePageSEO } from '../utils/seo';

interface HomeProps {
  onNavigate: (page: Page) => void;
}

export default function Home({ onNavigate }: HomeProps) {
  useEffect(() => {
    updatePageSEO({
      title: 'Dental Website Design & SEO Agency India | Zera Dental',
      description: 'We build professional, responsive websites for dental clinics across India. Attract implant, orthodontic & cosmetic dentistry patients with local SEO. Get a free audit!',
      keywords: 'dental website design India, websites for dental clinics, best dentist web developer India, dental SEO Mumbai, clinic website builder Delhi Bangalore, cosmetic dental website design Hyderabad, Zera Dental',
      ogUrl: 'https://zeradental.in',
      schemaId: 'home-agency',
      schemaData: {
        '@context': 'https://schema.org',
        '@type': 'WebDesignService',
        '@id': 'https://zeradental.in/#webdesign',
        'name': 'Zera Dental',
        'url': 'https://zeradental.in',
        'logo': 'https://og-image.vercel.app/Zera%20Dental.png?theme=dark&md=0&fontSize=100px',
        'image': 'https://og-image.vercel.app/Zera%20Dental.png?theme=dark&md=0&fontSize=100px',
        'description': 'Zera Dental builds high-converting, professional premium websites for dental clinics across India. We focus strictly on dentist marketing, local SEO, and scheduling tools.',
        'telephone': '+919835102324',
        'priceRange': 'INR',
        'address': {
          '@type': 'PostalAddress',
          'addressCountry': 'IN'
        },
        'areaServed': [
          { '@type': 'Country', 'name': 'India' },
          { '@type': 'State', 'name': 'Maharashtra' },
          { '@type': 'State', 'name': 'Delhi' },
          { '@type': 'State', 'name': 'Karnataka' },
          { '@type': 'State', 'name': 'Tamil Nadu' }
        ],
        'offers': {
          '@type': 'Offer',
          'name': 'Free Dental Clinic Website & SEO Audit',
          'price': '0',
          'priceCurrency': 'INR',
          'description': 'Free expert speed, design, security, and local GMB Google Map listing audit for dental clinics in India.'
        }
      }
    });
  }, []);

  const WHATSAPP_URL = "https://wa.me/919835102324?text=Hi%20Zera%20Dental%2C%20I%20want%20a%20free%20website%2520audit%20for%20my%22clinic";

  return (
    <div id="home-page" className="w-full bg-white">
      
      {/* SECTION 2 — HERO BANNER */}
      <section className="relative pt-20 pb-24 md:pt-28 md:pb-32 overflow-hidden text-white" style={{ backgroundColor: '#1a3c6e' }}>
        {/* Subtle background dental/smile pattern or glow effect */}
        <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#00b4d8_1px,transparent_1px)] [background-size:24px_24px] pointer-events-none" />
        <div className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full opacity-20 blur-3xl pointer-events-none" style={{ backgroundColor: '#00b4d8' }} />
        
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* Hero Left Content Column */}
            <div className="lg:col-span-8 space-y-6 text-left">
              <motion.div 
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider bg-white/10 text-[#00b4d8]"
              >
                <Sparkles className="w-4 h-4 text-[#00b4d8] animate-pulse" />
                <span>Specialized Dental Web Agency • India</span>
              </motion.div>

              <motion.h1 
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
                className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight leading-tight"
              >
                We Build Websites For <span className="text-[#00b4d8]">Dental Clinics</span> That Bring More Patients
              </motion.h1>

              <motion.p 
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="text-base sm:text-lg text-slate-300 leading-relaxed max-w-xl font-light"
              >
                Specialized only in dental websites — helping clinics across India get found online.
              </motion.p>

              {/* Action Buttons */}
              <motion.div 
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.3 }}
                className="flex flex-col sm:flex-row gap-4 pt-4"
              >
                <button 
                  id="hero-see-work-btn"
                  onClick={() => onNavigate(Page.Portfolio)}
                  className="inline-flex items-center justify-center px-8 py-3.5 rounded-full font-bold text-sm uppercase tracking-wider bg-white text-[#1a3c6e] hover:bg-slate-100 transition-all cursor-pointer hover:-translate-y-0.5"
                >
                  See Our Work
                </button>
                <button 
                  id="hero-get-audit-btn"
                  onClick={() => onNavigate(Page.FreeAudit)}
                  className="inline-flex items-center justify-center px-8 py-3.5 rounded-full font-bold text-sm uppercase tracking-wider text-white transition-all cursor-pointer hover:-translate-y-0.5"
                  style={{ backgroundColor: '#00b4d8' }}
                >
                  Get Free Audit
                </button>
              </motion.div>
            </div>

            {/* Hero Right Visual Column - Smile Icon Display */}
            <div className="lg:col-span-4 flex justify-center relative">
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="relative bg-white/5 border border-white/10 rounded-3xl p-8 max-w-[280px] text-center"
              >
                <div className="w-20 h-20 mx-auto rounded-full bg-[#00b4d8]/20 flex items-center justify-center mb-4">
                  {/* Dental representation */}
                  <span className="text-4xl">✨</span>
                </div>
                <p className="text-sm font-semibold uppercase tracking-wider text-[#00b4d8]">Patient Attraction</p>
                <p className="text-xs text-slate-300 mt-1">Pre-built features, custom designed for orthodontists & pediatric clinics.</p>
              </motion.div>
            </div>

          </div>
        </div>
      </section>

      {/* SECTION 3 — PROBLEM STATEMENT */}
      <section className="py-20 bg-slate-50 border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 text-center">
          <span className="text-xs font-bold uppercase tracking-widest text-[#00b4d8]">The Harsh Reality</span>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight mt-2 text-[#1a3c6e]">
            Is Your Clinic Invisible Online?
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
            
            {/* Box 1 */}
            <div className="bg-white p-8 rounded-2xl shadow-xs border border-gray-100 text-left flex flex-col justify-between">
              <div>
                <span className="text-3xl block mb-4">❌</span>
                <h3 className="text-lg font-bold text-[#1a3c6e] mb-2">No Website</h3>
                <p className="text-sm text-gray-600 leading-relaxed font-light">
                  Patients search online and book with your competitor instead. Without a site, you don't exist for new searchers.
                </p>
              </div>
            </div>

            {/* Box 2 */}
            <div className="bg-white p-8 rounded-2xl shadow-xs border border-gray-100 text-left flex flex-col justify-between">
              <div>
                <span className="text-3xl block mb-4">❌</span>
                <h3 className="text-lg font-bold text-[#1a3c6e] mb-2">Old Website</h3>
                <p className="text-sm text-gray-600 leading-relaxed font-light">
                  Looks untrustworthy. Patients lose confidence immediately and choose another professional modern clinic.
                </p>
              </div>
            </div>

            {/* Box 3 */}
            <div className="bg-white p-8 rounded-2xl shadow-xs border border-gray-100 text-left flex flex-col justify-between">
              <div>
                <span className="text-3xl block mb-4">❌</span>
                <h3 className="text-lg font-bold text-[#1a3c6e] mb-2">No Google Ranking</h3>
                <p className="text-sm text-gray-600 leading-relaxed font-light">
                  You are invisible while competitors get all the calls. If you don't rank, local patients will never find you.
                </p>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* SECTION 4 — SOCIAL PROOF BAR */}
      <section className="py-12 bg-white border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 text-center">
          <p className="text-xs font-bold uppercase tracking-widest text-gray-400 mb-6">
            Trusted by Dental Clinics Across India
          </p>
          <div className="flex flex-wrap justify-center items-center gap-6 sm:gap-10">
            {['Vardhan Dental Clinic', 'Apex Dental Care', 'Verma Orthodontics', 'Smile Design Studio', 'Radiant Kids Dental'].map((name, i) => (
              <span 
                key={i} 
                className="text-sm sm:text-base font-bold text-gray-400 hover:text-[#1a3c6e] transition-colors border border-gray-100 px-4 py-2 rounded-full bg-slate-50 uppercase tracking-wide font-mono"
              >
                {name}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 5 — PORTFOLIO SNAPSHOT */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 text-center">
          <span className="text-xs font-bold uppercase tracking-widest text-[#00b4d8]">Recent Releases</span>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight mt-2 text-[#1a3c6e] mb-12">
            Websites We Have Built
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            
            {/* Portfolio Card 1 */}
            <div className="bg-white rounded-2xl border border-gray-100 overflow-hidden shadow-xs text-left group">
              <div className="relative overflow-hidden aspect-video bg-slate-50 flex items-center justify-center border-b border-gray-100">
                <img 
                  src="https://images.unsplash.com/photo-1629909613654-28e377c37b09?auto=format&fit=crop&q=80&w=400" 
                  alt="Apex Multi-speciality Dental clinic website screenshot"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  referrerPolicy="no-referrer"
                />
              </div>
              <div className="p-6 space-y-4">
                <div>
                  <h3 className="text-lg font-bold text-[#1a3c6e]">Apex Multi-Speciality Clinic</h3>
                  <p className="text-xs text-gray-400 font-mono">Mumbai, Maharashtra</p>
                </div>
                <button 
                  onClick={() => onNavigate(Page.Portfolio)}
                  className="w-full inline-flex items-center justify-center py-2.5 rounded-full text-white font-bold text-xs uppercase tracking-wider shadow-sm cursor-pointer transition-all hover:opacity-90"
                  style={{ backgroundColor: '#00b4d8' }}
                >
                  View Site
                </button>
              </div>
            </div>

            {/* Portfolio Card 2 */}
            <div className="bg-white rounded-2xl border border-gray-100 overflow-hidden shadow-xs text-left group">
              <div className="relative overflow-hidden aspect-video bg-slate-50 flex items-center justify-center border-b border-gray-100">
                <img 
                  src="https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?auto=format&fit=crop&q=80&w=400" 
                  alt="Verma Orthodontics and Laser Centre website screenshot"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  referrerPolicy="no-referrer"
                />
              </div>
              <div className="p-6 space-y-4">
                <div>
                  <h3 className="text-lg font-bold text-[#1a3c6e]">Verma Smile & Orthodontics</h3>
                  <p className="text-xs text-gray-400 font-mono">New Delhi, NCR</p>
                </div>
                <button 
                  onClick={() => onNavigate(Page.Portfolio)}
                  className="w-full inline-flex items-center justify-center py-2.5 rounded-full text-white font-bold text-xs uppercase tracking-wider shadow-sm cursor-pointer transition-all hover:opacity-90"
                  style={{ backgroundColor: '#00b4d8' }}
                >
                  View Site
                </button>
              </div>
            </div>

            {/* Portfolio Card 3 */}
            <div className="bg-white rounded-2xl border border-gray-100 overflow-hidden shadow-xs text-left group">
              <div className="relative overflow-hidden aspect-video bg-slate-50 flex items-center justify-center border-b border-gray-100">
                <img 
                  src="https://images.unsplash.com/photo-1512223792601-592a9809eed4?auto=format&fit=crop&q=80&w=400" 
                  alt="Radiant Pediatric Dental studio website screenshot"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  referrerPolicy="no-referrer"
                />
              </div>
              <div className="p-6 space-y-4">
                <div>
                  <h3 className="text-lg font-bold text-[#1a3c6e]">Radiant Pediatric Dental Studio</h3>
                  <p className="text-xs text-gray-400 font-mono">Patna, Bihar</p>
                </div>
                <button 
                  onClick={() => onNavigate(Page.Portfolio)}
                  className="w-full inline-flex items-center justify-center py-2.5 rounded-full text-white font-bold text-xs uppercase tracking-wider shadow-sm cursor-pointer transition-all hover:opacity-90"
                  style={{ backgroundColor: '#00b4d8' }}
                >
                  View Site
                </button>
              </div>
            </div>

          </div>

          <div className="mt-12 text-center">
            <button 
              id="portfolio-see-all-btn"
              onClick={() => onNavigate(Page.Portfolio)}
              className="inline-flex items-center justify-center px-8 py-3.5 rounded-full font-bold text-xs uppercase tracking-wider text-white transition-all cursor-pointer hover:-translate-y-0.5 shadow-md hover:bg-[#122b50]"
              style={{ backgroundColor: '#1a3c6e' }}
            >
              See All Our Work
            </button>
          </div>
        </div>
      </section>

      {/* SECTION 6 — WHAT YOU GET */}
      <section className="py-20 bg-slate-50 border-t border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 text-center">
          <span className="text-xs font-bold uppercase tracking-widest text-[#00b4d8]">Full-Stack Suite</span>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight mt-2 text-[#1a3c6e] mb-12">
            Everything Your Clinic Needs Online
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            
            {/* Card 1 */}
            <div className="bg-white p-6 rounded-2xl border border-gray-100 shadow-xs text-left space-y-3">
              <span className="text-3xl block">📱</span>
              <h3 className="font-bold text-[#1a3c6e] text-base">Mobile Friendly</h3>
              <p className="text-xs text-gray-500 leading-relaxed font-light">
                Looks perfect on every phone and tablet. No distorted tables or cut-off maps.
              </p>
            </div>

            {/* Card 2 */}
            <div className="bg-white p-6 rounded-2xl border border-gray-100 shadow-xs text-left space-y-3">
              <span className="text-3xl block">🔍</span>
              <h3 className="font-bold text-[#1a3c6e] text-base">Google Ready</h3>
              <p className="text-xs text-gray-500 leading-relaxed font-light">
                Built to rank in your city from day one. Dominate neighborhood local organic searches.
              </p>
            </div>

            {/* Card 3 */}
            <div className="bg-white p-6 rounded-2xl border border-gray-100 shadow-xs text-left space-y-3">
              <span className="text-3xl block">📅</span>
              <h3 className="font-bold text-[#1a3c6e] text-base">Appointment Booking</h3>
              <p className="text-xs text-gray-500 leading-relaxed font-light">
                Patients can book directly from your site. Integrated with WhatsApp or practice management.
              </p>
            </div>

            {/* Card 4 */}
            <div className="bg-white p-6 rounded-2xl border border-gray-100 shadow-xs text-left space-y-3">
              <span className="text-3xl block">⭐</span>
              <h3 className="font-bold text-[#1a3c6e] text-base">Review Integration</h3>
              <p className="text-xs text-gray-500 leading-relaxed font-light">
                Show your Google reviews automatically. Build clinical social proof instantly.
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* SECTION 7 — TESTIMONIALS */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 text-center">
          <span className="text-xs font-bold uppercase tracking-widest text-[#00b4d8]">Success Stories</span>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight mt-2 text-[#1a3c6e] mb-12">
            What Dentists Say About Us
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            
            {/* Testimonial Card 1 */}
            <div className="bg-slate-50 p-8 rounded-2xl border border-gray-100 text-left space-y-4 shadow-2xs relative">
              <div className="flex text-amber-500 gap-1">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-amber-500 text-amber-500" />
                ))}
              </div>
              <p className="text-sm italic text-gray-650 leading-relaxed font-light">
                "Getting a website from Zera Dental was the best decision for my clinic. New patients now find me on Google every week."
              </p>
              <div className="pt-2 border-t border-gray-200">
                <p className="font-bold text-[#1a3c6e] text-sm">Dr. Rahul Sharma</p>
                <p className="text-xs text-slate-400">Patna, Bihar</p>
              </div>
            </div>

            {/* Testimonial Card 2 */}
            <div className="bg-slate-50 p-8 rounded-2xl border border-gray-100 text-left space-y-4 shadow-2xs relative">
              <div className="flex text-amber-500 gap-1">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-amber-500 text-amber-500" />
                ))}
              </div>
              <p className="text-sm italic text-gray-650 leading-relaxed font-light">
                "Very professional team. They understood exactly what a dental clinic needs. My patients trust my clinic more after seeing the website."
              </p>
              <div className="pt-2 border-t border-gray-200">
                <p className="font-bold text-[#1a3c6e] text-sm">Dr. Priya Singh</p>
                <p className="text-xs text-slate-400">Muzaffarpur, Bihar</p>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* SECTION 8 — FINAL CTA */}
      <section className="py-20 text-white text-center relative" style={{ backgroundColor: '#1a3c6e' }}>
        <div className="absolute inset-0 opacity-5 bg-[radial-gradient(#ffffff_1px,transparent_1px)] [background-size:20px_20px] pointer-events-none" />
        
        <div className="max-w-4xl mx-auto px-6 sm:px-8 relative z-10 space-y-6">
          <span className="text-xs font-bold uppercase tracking-widest text-[#00b4d8]">Limited Free Audit Offer</span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight">
            Get a Free Website Audit For Your Clinic
          </h2>
          <p className="text-sm sm:text-base text-slate-350 max-w-2xl mx-auto font-light">
            We will tell you exactly what is costing you patients online — free, no obligation.
          </p>

          <div className="pt-4">
            <button 
              id="cta-claim-audit-btn"
              onClick={() => onNavigate(Page.FreeAudit)}
              className="inline-flex items-center justify-center px-10 py-4 rounded-full text-white font-bold text-sm uppercase tracking-wider transition-all duration-150 cursor-pointer hover:-translate-y-0.5 shadow-lg shadow-[#00b4d8]/20"
              style={{ backgroundColor: '#00b4d8' }}
            >
              Claim Your Free Audit
            </button>
          </div>

          <div className="pt-4 text-xs sm:text-sm text-slate-300 font-medium">
            Or WhatsApp us directly on{' '}
            <a 
              href="https://wa.me/919835102324?text=Hi%20Zera%20Dental%2C%20I%20want%20a%20free%20website%2520audit%20for%20my%20clinic" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="underline text-[#00b4d8] font-bold"
            >
              9835102324
            </a>
          </div>
        </div>
      </section>

    </div>
  );
}
