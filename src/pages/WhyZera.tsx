import { useEffect } from 'react';
import { motion } from 'motion/react';
import { Page } from '../types';
import { Star, Sparkles } from 'lucide-react';

interface WhyZeraProps {
  onNavigate: (page: Page) => void;
}

export default function WhyZera({ onNavigate }: WhyZeraProps) {
  useEffect(() => {
    const ogTags = [
      { property: 'og:type', content: 'website' },
      { property: 'og:site_name', content: 'Zera Dental' },
      { property: 'og:title', content: 'Zera Dental — Websites For Dental Clinics' },
      { property: 'og:description', content: 'We build professional websites for dental clinics across India. Get more patients online.' },
      { property: 'og:image', content: 'https://og-image.vercel.app/Zera%20Dental.png?theme=dark&md=0&fontSize=100px' },
      { property: 'og:url', content: 'https://zeradental.in' },
      { name: 'twitter:card', content: 'summary_large_image' },
      { name: 'twitter:title', content: 'Zera Dental — Websites For Dental Clinics' },
      { name: 'twitter:description', content: 'We build professional websites for dental clinics across India. Get more patients online.' },
      { name: 'twitter:image', content: 'https://og-image.vercel.app/Zera%20Dental.png?theme=dark&md=0&fontSize=100px' }
    ];

    ogTags.forEach(tag => {
      let meta = document.querySelector(tag.property ? `meta[property="${tag.property}"]` : `meta[name="${tag.name}"]`);
      if (!meta) {
        meta = document.createElement('meta');
        if (tag.property) meta.setAttribute('property', tag.property);
        if (tag.name) meta.setAttribute('name', tag.name);
        document.head.appendChild(meta);
      }
      meta.setAttribute('content', tag.content);
    });
  }, []);

  const WHATSAPP_URL = "https://wa.me/919835102324?text=Hi%2520Zera%2520Dental%252C%2520I%2520want%2520to%2520know%2520more%2520about%2520why%2520clinics%2520choose%2520you";

  const REASONS = [
    {
      icon: "🦷",
      title: "We Only Do Dental",
      description: "We understand dental clinics completely — your services, your patients, your needs. No guesswork."
    },
    {
      icon: "⚡",
      title: "Ready in 2 Weeks",
      description: "No waiting months. Your website is live and getting you patients within 14 days of starting."
    },
    {
      icon: "🔍",
      title: "Built to Rank on Google",
      description: "Every website is SEO ready from day one — so patients in your city find you first."
    },
    {
      icon: "🤝",
      title: "We Handle Everything",
      description: "You focus on your patients. We handle design, development, launch and support completely."
    }
  ];

  const STEPS = [
    {
      step: "Step 1",
      title: "Free Consultation",
      description: "We understand your clinic, your goals and your patients in a 30 minute call."
    },
    {
      step: "Step 2",
      title: "Design Mockup",
      description: "We send you a design preview within 3 days. You approve or request changes."
    },
    {
      step: "Step 3",
      title: "We Build It",
      description: "Our team builds your complete website while you focus on your patients."
    },
    {
      step: "Step 4",
      title: "Launch",
      description: "We go live, submit to Google and give you a 1 hour handover training."
    }
  ];

  const TESTIMONIALS = [
    {
      quote: "Zera Dental delivered exactly what they promised. Fast, professional and my patients love the new website.",
      author: "Dr. Amit Kumar",
      city: "Ranchi"
    },
    {
      quote: "I was skeptical at first but the result was outstanding. My clinic now gets calls from Google every day.",
      author: "Dr. Sunita Devi",
      city: "Lucknow"
    },
    {
      quote: "Best investment I made for my clinic. The website paid for itself in the first month.",
      author: "Dr. Rajesh Gupta",
      city: "Varanasi"
    }
  ];

  return (
    <div id="why-us-page" className="w-full bg-white">
      
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
            <span>The Dental Difference</span>
          </motion.div>
          <motion.h1 
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight"
          >
            Why Dental Clinics Choose Zera Dental
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-base sm:text-lg text-slate-300 max-w-2xl mx-auto font-light"
          >
            We do one thing only — dental websites. That makes all the difference.
          </motion.p>
        </div>
      </section>

      {/* SECTION 2 — 4 BIG REASONS */}
      <section className="py-20 bg-white" id="four-big-reasons">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12 max-w-6xl mx-auto">
            {REASONS.map((reason, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.05 }}
                className="p-8 rounded-2xl border border-gray-150 bg-slate-50/50 flex flex-col sm:flex-row gap-5 items-start space-y-2 sm:space-y-0"
              >
                <div className="w-14 h-14 rounded-full bg-[#00b4d8]/10 text-[#1a3c6e] flex items-center justify-center text-3xl shrink-0">
                  {reason.icon}
                </div>
                <div className="space-y-2">
                  <h3 className="text-xl font-bold text-[#1a3c6e]">{reason.title}</h3>
                  <p className="text-sm text-gray-600 leading-relaxed font-light">
                    {reason.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 3 — OUR PROCESS */}
      <section className="py-20 bg-slate-50 border-t border-b border-gray-100" id="our-process-flow">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 text-center">
          <span className="text-xs font-bold uppercase tracking-widest text-[#00b4d8]">Transparent Execution</span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#1a3c6e] mb-16">
            How It Works — 4 Simple Steps
          </h2>

          {/* Steps Timeline Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-8 relative">
            
            {/* Horizontal timeline connector lines for desktop */}
            <div className="hidden lg:block absolute top-14 left-12 right-12 h-0.5 bg-gray-200 -z-1" />

            {STEPS.map((step, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="bg-white p-6 sm:p-8 rounded-2xl border border-gray-150 relative shadow-2xs space-y-4"
              >
                {/* Step badge absolute */}
                <div 
                  className="w-12 h-12 rounded-full text-white font-bold text-xs flex items-center justify-center mx-auto shadow-md"
                  style={{ backgroundColor: '#00b4d8' }}
                >
                  {step.step.split(" ")[1]}
                </div>
                
                <h3 className="text-base sm:text-lg font-bold text-[#1a3c6e] pt-1">{step.title}</h3>
                <p className="text-xs sm:text-sm text-gray-500 leading-relaxed font-light">
                  {step.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 4 — ABOUT ZERA DENTAL */}
      <section className="py-20 bg-white" id="about-zera-section">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* Text Left Column */}
            <div className="lg:col-span-7 space-y-6 text-left">
              <span className="text-xs font-bold uppercase tracking-widest text-[#00b4d8]">About Zera Dental</span>
              
              <div className="space-y-2">
                <h2 className="text-3xl sm:text-4xl font-extrabold text-[#1a3c6e]">
                  Built Specifically For Dental Clinics
                </h2>
                {/* Teal Divider line accent */}
                <div className="w-16 h-1 rounded" style={{ backgroundColor: '#00b4d8' }} />
              </div>

              <p className="text-sm sm:text-base text-gray-650 leading-relaxed font-light">
                Zera Dental was started with one goal — help dental clinics across India get more patients through a strong online presence. We are based in Patna, Bihar and serve dental clinics across India. We do not build general websites. Only dental. That focus means every website we build is better than what a general agency would make.
              </p>
              
              <div className="bg-slate-50 border border-gray-100 p-4 rounded-xl text-xs sm:text-sm text-slate-500 max-w-lg italic font-light">
                "Our single focus saves doctors from explaining treatments, Orthodontic workflows, or local patient concerns to clueless developers."
              </div>
            </div>

            {/* Image Placeholder Right Column */}
            <div className="lg:col-span-5 relative flex justify-center">
              <div className="relative rounded-2xl overflow-hidden aspect-square w-full max-w-sm border border-gray-150 shadow-md">
                <img 
                  src="https://images.unsplash.com/photo-1579684385127-1ef15d508118?auto=format&fit=crop&q=80&w=500" 
                  alt="Modern Dental Clinic Web Design Setup Process"
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#1a3c6e]/80 to-transparent flex items-end p-6">
                  <p className="text-xs sm:text-sm text-white font-mono uppercase tracking-wider font-bold">Patna HQ Serving India</p>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* SECTION 5 — TESTIMONIALS */}
      <section className="py-20 bg-slate-50 border-t border-b border-gray-100" id="testimonials-section">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 text-center">
          <span className="text-xs font-bold uppercase tracking-widest text-[#00b4d8]">Peer Endorsement</span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#1a3c6e] mb-12">
            Dentists Trust Us
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {TESTIMONIALS.map((t, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="bg-white p-6 sm:p-8 rounded-2xl border border-gray-150 text-left flex flex-col justify-between shadow-2xs"
              >
                <div className="space-y-4">
                  <div className="flex gap-1 text-amber-500">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-amber-500 text-amber-500" />
                    ))}
                  </div>
                  <p className="text-sm italic text-gray-600 leading-relaxed font-light">
                    "{t.quote}"
                  </p>
                </div>

                <div className="pt-4 border-t border-gray-100 mt-6">
                  <p className="font-bold text-[#1a3c6e] text-sm">{t.author}</p>
                  <p className="text-xs text-gray-400">{t.city}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 6 — BOTTOM CTA */}
      <section className="py-20 text-white text-center relative" style={{ backgroundColor: '#1a3c6e' }}>
        <div className="absolute inset-0 opacity-5 bg-[radial-gradient(#ffffff_1px,transparent_1px)] [background-size:20px_20px] pointer-events-none" />
        
        <div className="max-w-4xl mx-auto px-6 sm:px-8 relative z-10 space-y-6">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight">
            Ready To Get More Patients Online?
          </h2>
          <p className="text-sm sm:text-base text-slate-350 max-w-xl mx-auto font-light">
            Contact us today to claim your free website design consultation and diagnostic audit.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
            <button 
              onClick={() => onNavigate(Page.Pricing)}
              className="inline-flex items-center justify-center px-8 py-3.5 rounded-full font-bold text-sm uppercase tracking-wider bg-white text-[#1a3c6e] hover:bg-slate-100 transition-all cursor-pointer hover:-translate-y-0.5"
            >
              See Pricing
            </button>
            <button 
              onClick={() => onNavigate(Page.FreeAudit)}
              className="inline-flex items-center justify-center px-8 py-3.5 rounded-full font-bold text-sm uppercase tracking-wider text-white transition-all cursor-pointer hover:-translate-y-0.5"
              style={{ backgroundColor: '#00b4d8' }}
            >
              Get Free Audit
            </button>
          </div>
        </div>
      </section>

    </div>
  );
}
