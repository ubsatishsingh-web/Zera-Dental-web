import { useEffect } from 'react';
import { motion } from 'motion/react';
import { Page } from '../types';
import { SERVICES_DATA } from '../data';
import { Sparkles, Check, ArrowRight } from 'lucide-react';

interface ServicesProps {
  onNavigate: (page: Page) => void;
}

export default function Services({ onNavigate }: ServicesProps) {
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

  const WHATSAPP_BASE = "https://wa.me/919835102324?text=Hi%20Zera%20Dental%2C%20I%20want%20to%20know%20more%20about%20";

  return (
    <div id="services-page" className="w-full bg-white bg-radial from-white via-white to-[#1a3c6e]/2">
      {/* Services Header */}
      <section className="pt-24 pb-12 md:pt-32 md:pb-16 text-center">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-4">
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-xs sm:text-sm font-semibold text-[#00b4d8] tracking-widest uppercase"
          >
            Our Dental Specializations
          </motion.p>
          <motion.h1 
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-gray-900"
          >
            Digital Suite For Indian Clinics
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-base sm:text-lg text-gray-500 max-w-2xl mx-auto leading-relaxed"
          >
            We handle everything from website layout writing, pediatric color layouts, Invisalign before/after guides, review-boosting Google Maps schema, and fast page load setup.
          </motion.p>
        </div>
      </section>

      {/* Services Grid detail view */}
      <section className="pb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {SERVICES_DATA.map((svc, idx) => {
              const bookingText = encodeURIComponent(`Hi Zera Dental, I want to inquire about your ${svc.title} service for my clinic.`);
              return (
                <motion.div
                  key={svc.id}
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: '-50px' }}
                  transition={{ duration: 0.5, delay: idx * 0.05 }}
                  className="bg-white rounded-2xl border border-slate-100 shadow-sm p-6 sm:p-8 flex flex-col justify-between hover:shadow-md transition-shadow relative overflow-hidden group"
                >
                  {/* Styling accent line */}
                  <div className="absolute top-0 left-0 right-0 h-1 bg-slate-100 group-hover:bg-[#00b4d8] transition-colors" />

                  <div className="space-y-4">
                    {/* Circle Icon holder */}
                    <div className="w-12 h-12 rounded-xl bg-[#1a3c6e]/5 flex items-center justify-center text-primary-600 font-bold text-xl group-hover:bg-[#1a3c6e]/10 transition-colors">
                      {idx === 0 ? '💻' : idx === 1 ? '📍' : idx === 2 ? '🎓' : idx === 3 ? '💬' : idx === 4 ? '✨' : '🛡️'}
                    </div>

                    <h3 className="text-xl font-bold text-gray-900">{svc.title}</h3>
                    <p className="text-xs sm:text-sm text-gray-500 leading-relaxed">{svc.description}</p>

                    <div className="space-y-2 pt-2">
                      <span className="text-[11px] font-semibold text-gray-400 tracking-wider uppercase font-mono">SPECIFIC BENEFIT TO CLINICS</span>
                      <ul className="space-y-2">
                        {svc.benefits.map((b, bIdx) => (
                          <li key={bIdx} className="flex items-start gap-2 text-xs sm:text-sm text-gray-600">
                            <span className="text-emerald-500 font-bold shrink-0 mt-0.5">✓</span>
                            <span>{b}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  <div className="pt-6 mt-6 border-t border-slate-100 flex flex-col sm:flex-row gap-2.5 items-stretch justify-between">
                    <a
                      href={`${WHATSAPP_BASE}${bookingText}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center justify-center px-4 py-2 rounded-full bg-slate-50 hover:bg-[#1a3c6e]/10 text-[#1a3c6e] font-bold text-xs uppercase tracking-wider transition-all text-center border border-gray-100"
                    >
                      Inquire Chat
                    </a>
                    
                    <button
                      onClick={() => onNavigate(Page.Contact)}
                      className="inline-flex items-center justify-center px-4 py-2 rounded-full text-white font-bold text-xs uppercase tracking-wider transition-all text-center cursor-pointer"
                      style={{ backgroundColor: '#1a3c6e' }}
                    >
                      Get Quote
                    </button>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* FAQs Section within services details to explain setup */}
      <section className="py-16 bg-slate-50 border-t border-b border-slate-100">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-2 mb-10">
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900">How We Deliver Your Site</h2>
            <p className="text-xs sm:text-sm text-gray-500">Fast, streamlined, completely hands-off process for doctors.</p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-4 gap-6 relative">
            {/* Delivery Steps */}
            {[
              { num: '01', title: 'WhatsApp Brief', desc: 'Brief us about your clinic specialty, address, and doctors over a 15-min chat.' },
              { num: '02', title: 'Content & Design', desc: 'Our clinical team drafts your diagnostic, pre-op, and dental guide copy.' },
              { num: '03', title: 'Review & Edit', desc: 'We coordinate on a revision link; adjust fees, galleries, and doctor shifts.' },
              { num: '04', title: 'Go Live!', desc: 'We link your official domain, configure secure maps schema, and go live.' }
            ].map((step, sIdx) => (
              <div key={sIdx} className="bg-white p-5 rounded-2xl border border-slate-100 shadow-sm relative space-y-3">
                <span className="text-3xl font-bold text-[#00b4d8]/20 font-mono block">{step.num}</span>
                <h4 className="font-bold text-sm sm:text-base text-gray-900">{step.title}</h4>
                <p className="text-xs text-gray-500 leading-relaxed">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
