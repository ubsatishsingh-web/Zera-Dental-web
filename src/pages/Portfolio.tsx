import { useEffect } from 'react';
import { motion } from 'motion/react';
import { Page } from '../types';
import { ArrowRight, Check, Zap, TrendingUp, Sparkles } from 'lucide-react';
import { updatePageSEO } from '../utils/seo';

interface PortfolioProps {
  onNavigate: (page: Page) => void;
}

export default function Portfolio({ onNavigate }: PortfolioProps) {
  useEffect(() => {
    updatePageSEO({
      title: 'Best Dental Website Design Portfolio India | Zera Dental',
      description: 'Explore our latest dental web design examples and patient-growth case studies. See real conversion results from cosmetic, pediatric, and multi-specialty dental clinics in Patna, Delhi, and Mumbai.',
      keywords: 'dental website portfolio, best dental website designs, clinic website templates India, dentist landing page examples, Smile Care Dental website, orthodonist web designer India',
      ogUrl: 'https://zeradental.in#portfolio',
      schemaId: 'portfolio-page',
      schemaData: {
        '@context': 'https://schema.org',
        '@type': 'CollectionPage',
        'name': 'Our Work & Case Studies | Zera Dental',
        'description': 'A showcase of specialized, high-performing websites and digital patient acquisition systems built for Indian dental clinics, orthodontic centers, and implant surgeons.',
        'url': 'https://zeradental.in#portfolio',
        'about': [
          {
            '@type': 'CreativeWork',
            'name': 'Smile Care Dental Website - Patna Case Study',
            'description': 'Search engine SEO and maps optimization to bring the clinic to Google Page 1.'
          },
          {
            '@type': 'CreativeWork',
            'name': 'Apex Dental Hospital Website - Patna Case Study',
            'description': 'Custom brand development & live scheduling portal attracting premium implant patients.'
          }
        ]
      }
    });
  }, []);

  const WHATSAPP_URL = "https://wa.me/919835102324?text=Hi%20Zera%20Dental%2C%20I%20saw%20your%20Our%20Work%20page%20and%20I%20want%2520to%20get%20a%20free%20website%20audit%20for%20my%20clinic";

  const PROJECTS = [
    {
      name: "Smile Care Dental",
      city: "Patna",
      problem: "Built from scratch, now ranks on Google page 1",
      image: "https://images.unsplash.com/photo-1629909613654-28e377c37b09?auto=format&fit=crop&q=80&w=600"
    },
    {
      name: "Dr. Verma Dental Clinic",
      city: "Muzaffarpur",
      problem: "Replaced outdated site, 3x more calls",
      image: "https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?auto=format&fit=crop&q=80&w=600"
    },
    {
      name: "Pearl Dental Studio",
      city: "Ranchi",
      problem: "New clinic needed online presence fast",
      image: "https://images.unsplash.com/photo-1512223792601-592a9809eed4?auto=format&fit=crop&q=80&w=600"
    },
    {
      name: "Family Dental Care",
      city: "Lucknow",
      problem: "Old site redesigned, looks modern and trustworthy",
      image: "https://images.unsplash.com/photo-1579684385127-1ef15d508118?auto=format&fit=crop&q=80&w=600"
    },
    {
      name: "Bright Smile Clinic",
      city: "Varanasi",
      problem: "No website to fully booked — in 60 days",
      image: "https://images.unsplash.com/photo-1606811971618-4486d14f3f99?auto=format&fit=crop&q=80&w=600"
    },
    {
      name: "Sharma Dental",
      city: "Gaya",
      problem: "Complete brand new website with appointment booking",
      image: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?auto=format&fit=crop&q=80&w=600"
    }
  ];

  const BEFORE_AFTER_SAMPLES = [
    {
      clinic: "Vardhan Dental Clinic",
      city: "Patna",
      before: {
        title: "Dull, Slow & Broken Design",
        points: ["Not mobile responsive (hard to read)", "No clear appointment forms", "Slow to load - took 8.2 seconds", "Old fonts and clinical text look scary"]
      },
      after: {
        title: "Clean, Modern & Trustworthy",
        points: ["100% Beautiful mobile flow", "Instant WhatsApp booking trigger", "Loads under 0.5s - ultra-fast", "Soft elegant colors ease anxiety"]
      }
    },
    {
      clinic: "Apex Dental Care",
      city: "Muzaffarpur",
      before: {
        title: "Invisible On Google Local Search",
        points: ["No local SEO optimization", "Hidden reviews from past patients", "Clunky old styling looks outdated", "No treatment pages or guides"]
      },
      after: {
        title: "Ranked Page 1, Inbound Phone Calls",
        points: ["Built dedicated service pathways", "Google reviews sync automated", "Dynamic clinic team profiles with trust", "Optimized schema for Google Maps maps"]
      }
    }
  ];

  return (
    <div id="our-work-page" className="w-full bg-white">
      
      {/* SECTION 1 — PAGE HERO */}
      <section className="relative pt-20 pb-20 overflow-hidden text-white" style={{ backgroundColor: '#1a3c6e' }}>
        <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#00b4d8_1px,transparent_1px)] [background-size:24px_24px] pointer-events-none" />
        <div className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full opacity-15 blur-3xl pointer-events-none" style={{ backgroundColor: '#00b4d8' }} />
        
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 relative z-10 text-center space-y-4">
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            className="inline-flex items-center gap-2 px-3.5 py-1.2 rounded-full text-xs font-bold uppercase tracking-wider bg-white/10 text-[#00b4d8] mx-auto"
          >
            <Sparkles className="w-4 h-4" />
            <span>Proven Inbound Designs</span>
          </motion.div>
          <motion.h1 
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight"
          >
            Dental Websites We Have Built
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-base sm:text-lg text-slate-300 max-w-2xl mx-auto font-light"
          >
            Every website built to get more patients, not just look good.
          </motion.p>
        </div>
      </section>

      {/* SECTION 2 — PORTFOLIO GRID */}
      <section className="py-20 bg-white" id="portfolio-grid-section">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          
          {/* Responsive grid: 1 column on mobile, 2 columns on small/medium screens, 3 columns on desktops */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {PROJECTS.map((project, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.05 }}
                className="bg-white rounded-xl sm:rounded-2xl border border-gray-100 overflow-hidden shadow-2xs group flex flex-col justify-between"
              >
                <div>
                  <div className="relative overflow-hidden aspect-video bg-slate-50 border-b border-gray-100">
                    <img 
                      src={project.image} 
                      alt={`${project.name} Website Screenshot`} 
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                      referrerPolicy="no-referrer"
                    />
                  </div>
                  
                  <div className="p-3.5 sm:p-6 space-y-1 md:space-y-2">
                    <div>
                      <h3 className="text-sm sm:text-lg font-bold text-[#1a3c6e] truncate">{project.name}</h3>
                      <p className="text-[10px] sm:text-xs text-gray-400 font-mono font-bold uppercase tracking-wider">{project.city}</p>
                    </div>
                    <p className="text-[11px] sm:text-sm text-gray-650 leading-normal font-light">
                      {project.problem}
                    </p>
                  </div>
                </div>

                <div className="p-3.5 sm:p-6 pt-0">
                  <button 
                    onClick={() => onNavigate(Page.Contact)}
                    className="w-full inline-flex items-center justify-center py-2 sm:py-3 rounded-full text-white font-bold text-[10px] sm:text-xs uppercase tracking-wider shadow-sm cursor-pointer transition-all hover:opacity-95"
                    style={{ backgroundColor: '#00b4d8' }}
                  >
                    View Live Site
                  </button>
                </div>
              </motion.div>
            ))}
          </div>

        </div>
      </section>

      {/* SECTION 3 — BEFORE AND AFTER */}
      <section className="py-20 bg-slate-50 border-t border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 text-center">
          <span className="text-xs font-bold uppercase tracking-widest text-[#00b4d8]">Patient Psychology</span>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight mt-2 text-[#1a3c6e] mb-12">
            What A Difference A Website Makes
          </h2>

          <div className="space-y-12 max-w-5xl mx-auto">
            {BEFORE_AFTER_SAMPLES.map((sample, i) => (
              <div key={i} className="bg-white p-6 sm:p-8 rounded-2xl border border-gray-150 shadow-xs text-left">
                
                <div className="grid grid-cols-1 md:grid-cols-11 gap-4 md:gap-6 items-center">
                  
                  {/* Before side (gray background) */}
                  <div className="md:col-span-5 bg-gray-50 p-6 rounded-xl border border-gray-150 space-y-3">
                    <div className="flex items-center justify-between">
                      <span className="text-xs font-bold uppercase tracking-wider text-rose-500 font-mono bg-rose-50 px-2.5 py-1 rounded">BEFORE</span>
                      <span className="text-xl">❌</span>
                    </div>
                    <p className="font-bold text-gray-700 text-sm">{sample.before.title}</p>
                    <ul className="space-y-1.5">
                      {sample.before.points.map((pt, idx) => (
                        <li key={idx} className="text-xs text-gray-500 flex items-start gap-2">
                          <span className="text-rose-400 shrink-0 select-none">•</span>
                          <span>{pt}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Transition arrow in Middle */}
                  <div className="md:col-span-1 flex justify-center py-2 md:py-0">
                    <div className="w-10 h-10 rounded-full flex items-center justify-center text-white shadow-xs font-bold" style={{ backgroundColor: '#00b4d8' }}>
                      <span className="text-lg">➔</span>
                    </div>
                  </div>

                  {/* After side (modern and clean) */}
                  <div className="md:col-span-5 bg-white p-6 rounded-xl border-2 border-[#00b4d8]/20 space-y-3 shadow-inner">
                    <div className="flex items-center justify-between">
                      <span className="text-xs font-bold uppercase tracking-wider text-emerald-600 font-mono bg-emerald-50 px-2.5 py-1 rounded">AFTER (ZERA DESIGN)</span>
                      <span className="text-xl">✨</span>
                    </div>
                    <p className="font-bold text-[#1a3c6e] text-sm">{sample.after.title}</p>
                    <ul className="space-y-1.5">
                      {sample.after.points.map((pt, idx) => (
                        <li key={idx} className="text-xs text-slate-650 flex items-start gap-2">
                          <span className="text-[#00b4d8] font-bold shrink-0 select-none">✓</span>
                          <span>{pt}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                </div>

                <div className="mt-4 pt-4 border-t border-gray-100 text-center">
                  <span className="text-xs font-bold uppercase tracking-wider text-gray-400">CLINIC SUMMARY: </span>
                  <span className="text-xs font-bold text-[#1a3c6e]">{sample.clinic} — {sample.city}</span>
                </div>

              </div>
            ))}
          </div>

        </div>
      </section>

      {/* SECTION 4 — RESULTS STRIP */}
      <section className="py-12" style={{ backgroundColor: '#fcfcfc' }}>
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 text-center">
          <p className="text-xs font-bold uppercase tracking-widest text-[#00b4d8] mb-2">Metrics of Growth</p>
          <h2 className="text-xl sm:text-2xl font-extrabold text-[#1a3c6e] mb-8">Real Results For Real Clinics</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-10 max-w-4xl mx-auto">
            <div className="flex items-center justify-center space-x-3 p-4 rounded-xl bg-white border border-gray-100 shadow-2xs">
              <span className="text-2xl sm:text-3xl">📈</span>
              <div className="text-left">
                <p className="font-black text-lg sm:text-xl text-[#1a3c6e] leading-none">3x More</p>
                <p className="text-[11px] sm:text-xs text-gray-500 uppercase tracking-wider font-mono mt-1 font-bold">Patient Calls</p>
              </div>
            </div>
            <div className="flex items-center justify-center space-x-3 p-4 rounded-xl bg-white border border-gray-100 shadow-2xs">
              <span className="text-2xl sm:text-3xl">🔍</span>
              <div className="text-left">
                <p className="font-black text-lg sm:text-xl text-[#1a3c6e] leading-none">Page 1</p>
                <p className="text-[11px] sm:text-xs text-gray-500 uppercase tracking-wider font-mono mt-1 font-bold">Google Rankings</p>
              </div>
            </div>
            <div className="flex items-center justify-center space-x-3 p-4 rounded-xl bg-white border border-gray-100 shadow-2xs">
              <span className="text-2xl sm:text-3xl">⚡</span>
              <div className="text-left">
                <p className="font-black text-lg sm:text-xl text-[#1a3c6e] leading-none">2 Week</p>
                <p className="text-[11px] sm:text-xs text-gray-500 uppercase tracking-wider font-mono mt-1 font-bold">Delivery Time</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 5 — BOTTOM CTA */}
      <section className="py-20 text-center relative border-t border-gray-100">
        <div className="max-w-4xl mx-auto px-6 sm:px-8 space-y-6 relative z-10">
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-[#1a3c6e]">
            Want A Website Like These?
          </h2>
          <div className="pt-4">
            <button 
              onClick={() => onNavigate(Page.FreeAudit)}
              className="inline-flex items-center justify-center px-10 py-4 rounded-full text-white font-bold text-sm uppercase tracking-wider transition-all duration-150 cursor-pointer hover:-translate-y-0.5 shadow-lg shadow-[#00b4d8]/20"
              style={{ backgroundColor: '#00b4d8' }}
            >
              Get Your Free Audit
            </button>
          </div>
          <div className="pt-4 text-xs sm:text-sm text-gray-500 font-medium font-mono">
            Or WhatsApp us directly on:{' '}
            <a 
              href="https://wa.me/919835102324?text=Hi%20Zera%20Dental%2C%20I%20want%2520to%20get%20a%20free%20website%20audit" 
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
