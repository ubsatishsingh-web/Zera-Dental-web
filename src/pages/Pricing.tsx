import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Page } from '../types';
import { Check, Star, HelpCircle, ArrowRight, Sparkles } from 'lucide-react';
import { updatePageSEO } from '../utils/seo';

interface PricingProps {
  onNavigate: (page: Page) => void;
}

export default function Pricing({ onNavigate }: PricingProps) {
  useEffect(() => {
    updatePageSEO({
      title: 'Dental Website Packages & Pricing India | Zera Dental',
      description: 'Affordable, transparent pricing plans for dental clinic websites in India. Starter, Growth, and Elite packages with free dental SEO, SSL certificates, speed hosting, and WhatsApp booking widgets.',
      keywords: 'dental website cost India, clinic website pricing Mumbai, dentist web designer cost Delhi, dentist branding packages, orthodontic website development rates, Zera Dental prices',
      ogUrl: 'https://zeradental.in#pricing',
      schemaId: 'pricing-faq',
      schemaData: {
        '@context': 'https://schema.org',
        '@type': 'FAQPage',
        'mainEntity': [
          {
            '@type': 'Question',
            'name': 'How much does a dental website cost in India?',
            'acceptedAnswer': {
              '@type': 'Answer',
              'text': 'Zera Dental offers premium, highly optimized dental websites with transparent tiered pricing (Starter, Growth, Elite packages) custom-fit for single dentist practitioners to multi-specialty hospitals across India.'
            }
          },
          {
            '@type': 'Question',
            'name': 'Are hosting, custom domain, and SSL security included?',
            'acceptedAnswer': {
              '@type': 'Answer',
              'text': 'Yes! All plans include standard high-speed cloud hosting (99.9% uptime), custom domain routing, SSL encryption, and security audits without hidden upcharges.'
            }
          },
          {
            '@type': 'Question',
            'name': 'Will my website rank on Google in my local city?',
            'acceptedAnswer': {
              '@type': 'Answer',
              'text': 'Our Growth and Elite plans come equipped with specialized Dental Local Maps SEO, helping orthodontists and pediatric dentists rank in their specific territory or suburb.'
            }
          }
        ]
      }
    });
  }, []);

  // State for active FAQ Accordion
  const [activeFaq, setActiveFaq] = useState<number | null>(null);

  const toggleFaq = (idx: number) => {
    setActiveFaq(activeFaq === idx ? null : idx);
  };

  const WHATSAPP_CTA_LINK = "https://wa.me/919835102324?text=Hi%20Zera%20Dental%2C%20I%20want%20to%20know%2520which%20plan%20is%20right%20for%20my%20clinic";

  const PACKAGES = [
    {
      name: "Starter",
      price: "₹15,000",
      timeline: "Delivery in 2 Weeks",
      features: [
        "5 Pages",
        "Mobile Friendly Design",
        "Google Maps Integration",
        "WhatsApp Button",
        "Basic SEO Setup",
        "Contact Form",
        "1 Round of Edits",
        "Delivery in 2 Weeks"
      ],
      popular: false
    },
    {
      name: "Standard",
      price: "₹25,000",
      timeline: "Delivery in 3 Weeks",
      features: [
        "8 Pages",
        "Everything in Starter",
        "Appointment Booking Form",
        "Patient Testimonials Section",
        "Google Reviews Integration",
        "Photo Gallery",
        "2 Rounds of Edits",
        "Delivery in 3 Weeks"
      ],
      popular: true
    },
    {
      name: "Premium",
      price: "₹45,000",
      timeline: "Delivery in 4 Weeks",
      features: [
        "12 Pages",
        "Everything in Standard",
        "Full SEO Setup",
        "Blog Section",
        "Social Media Links",
        "Speed Optimization",
        "Unlimited Edits for 30 Days",
        "Delivery in 4 Weeks"
      ],
      popular: false
    }
  ];

  const ALWAYS_INCLUDED = [
    "Mobile Friendly Design",
    "WhatsApp Button",
    "Google Maps Integration",
    "Fast Loading Speed",
    "Free Domain Setup Assistance",
    "1 Year Free Support"
  ];

  const MAINTENANCE_PLANS = [
    {
      name: "Basic Care",
      price: "₹999/month",
      features: [
        "Hosting & Security",
        "Basic Content Updates",
        "Monthly Backup",
        "Email Support"
      ]
    },
    {
      name: "Full Care",
      price: "₹1,999/month",
      features: [
        "Everything in Basic",
        "Unlimited Content Updates",
        "Monthly SEO Report",
        "Priority Support",
        "WhatsApp Support"
      ]
    }
  ];

  const FAQS = [
    {
      q: "How long does it take to build my website?",
      a: "Starter takes 2 weeks, Standard 3 weeks, and Premium takes 4 weeks from the day we receive your clinical information and logo assets."
    },
    {
      q: "Do I need to provide content and photos?",
      a: "We guide you on exactly what we need through simple templates. If you do not have photos, we provide professional dental stock images that look beautiful and ease patient anxiety."
    },
    {
      q: "Will my website show on Google?",
      a: "Yes. Every single website we build is SEO-ready and submitted directly to Google Console indexes from day one."
    },
    {
      q: "Can I update my website myself after it is built?",
      a: "Yes. We give you a simple step-by-step guide. Alternatively, you can subscribe to our monthly plans and we will handle all content updates for you seamlessly."
    },
    {
      q: "What happens after 1 year free support ends?",
      a: "You can choose our Care maintenance plans at ₹999/month, or we charge a simple nominal fee per update on-demand. There are absolutely no lock-in contracts."
    }
  ];

  return (
    <div id="pricing-page" className="w-full bg-white">
      
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
            <span>Transparent Pricing For Dentists</span>
          </motion.div>
          
          <motion.h1 
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight"
          >
            Simple Pricing, No Surprises
          </motion.h1>
          
          <motion.p 
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-base sm:text-lg text-slate-300 max-w-2xl mx-auto font-light"
          >
            One time payment. No hidden charges. Website ready in 2 weeks.
          </motion.p>
        </div>
      </section>

      {/* SECTION 2 — 3 PRICING CARDS */}
      <section className="py-20 bg-white" id="pricing-packages-cards">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-stretch">
            {PACKAGES.map((pkg, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className={`bg-white rounded-2xl p-6 sm:p-8 flex flex-col justify-between relative transition-all ${
                  pkg.popular
                    ? 'border-2 shadow-xl md:-translate-y-4'
                    : 'border border-gray-150 shadow-2xs'
                }`}
                style={{ borderColor: pkg.popular ? '#00b4d8' : undefined }}
              >
                {/* Popular Highlight Badge */}
                {pkg.popular && (
                  <div className="absolute top-0 right-1/2 translate-x-1/2 -translate-y-1/2 text-white text-[10px] sm:text-xs font-bold tracking-widest uppercase px-4 py-1.5 rounded-full shadow-md whitespace-nowrap" style={{ backgroundColor: '#00b4d8' }}>
                    ★ Most Popular
                  </div>
                )}

                <div className="space-y-6">
                  <div>
                    <h3 className="text-xl sm:text-2xl font-black text-[#1a3c6e]">{pkg.name}</h3>
                    <p className="text-xs sm:text-sm text-gray-400 font-bold tracking-wider mt-1 uppercase font-mono">{pkg.timeline}</p>
                  </div>

                  <div className="border-t border-b border-gray-50 py-4 flex items-baseline gap-2">
                    <span className="text-3xl sm:text-4xl font-black text-[#1a3c6e]">{pkg.price}</span>
                    <span className="text-xs text-slate-400 font-mono">One-Time Fee</span>
                  </div>

                  {/* Checklist */}
                  <ul className="space-y-3">
                    {pkg.features.map((feature, fIdx) => (
                      <li key={fIdx} className="flex items-start gap-2.5 text-xs sm:text-sm text-gray-650">
                        <span className="text-[#00b4d8] font-bold shrink-0 mt-0.5">✓</span>
                        <span className="font-light">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="pt-8">
                  <button
                    onClick={() => onNavigate(Page.Contact)}
                    className="w-full inline-flex items-center justify-center py-3.5 rounded-full font-bold text-xs uppercase tracking-wider shadow-sm transition-all hover:scale-[1.02] active:scale-[0.98]"
                    style={{ 
                      backgroundColor: pkg.popular ? '#00b4d8' : '#1a3c6e',
                      color: '#ffffff'
                    }}
                  >
                    Get Started
                  </button>
                </div>
              </motion.div>
            ))}
          </div>

        </div>
      </section>

      {/* SECTION 3 — ALWAYS INCLUDED */}
      <section className="py-16 bg-slate-50 border-t border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 text-center">
          <span className="text-xs font-bold uppercase tracking-widest text-[#00b4d8]">No Compromises</span>
          <h2 className="text-2xl sm:text-3xl font-extrabold tracking-tight mt-1 text-[#1a3c6e] mb-12">
            Every Package Includes
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto text-left">
            {ALWAYS_INCLUDED.map((item, idx) => (
              <div key={idx} className="bg-white p-5 rounded-xl border border-gray-150 flex items-center space-x-3.5 shadow-2xs">
                <span className="text-xl shrink-0 select-none">✅</span>
                <span className="font-bold text-[#1a3c6e] text-sm sm:text-base">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 4 — MONTHLY MAINTENANCE PLANS */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 text-center space-y-4">
          <span className="text-xs font-bold uppercase tracking-widest text-[#00b4d8]">Hassle-Free Care</span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#1a3c6e] leading-none">
            Keep Your Website Running Perfectly
          </h2>
          <p className="text-sm text-gray-500 max-w-xl mx-auto leading-relaxed font-light">
            Focus completely on your dental surgeries while we maintain, secure, backup and optimize your local web asset weekly.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto pt-8">
            {MAINTENANCE_PLANS.map((plan, idx) => (
              <div key={idx} className="bg-slate-50 border border-gray-150 rounded-2xl p-6 sm:p-8 text-left flex flex-col justify-between">
                <div>
                  <h3 className="text-lg sm:text-xl font-bold text-[#1a3c6e]">{plan.name}</h3>
                  <div className="py-3 flex items-baseline gap-1.5 border-b border-gray-200/60 mb-6">
                    <span className="text-2xl sm:text-3xl font-black text-[#00b4d8]">{plan.price}</span>
                  </div>

                  <ul className="space-y-3">
                    {plan.features.map((feat, fIdx) => (
                      <li key={fIdx} className="flex items-start gap-2 text-xs sm:text-sm text-gray-650">
                        <span className="text-emerald-500 font-bold scale-110 shrink-0">•</span>
                        <span className="font-light">{feat}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="pt-8">
                  <button
                    onClick={() => onNavigate(Page.Contact)}
                    className="w-full inline-flex items-center justify-center py-3 rounded-full text-white font-bold text-xs uppercase tracking-wider transition-all border text-center shadow-xs"
                    style={{ backgroundColor: '#1a3c6e' }}
                  >
                    Subscribe Care
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 5 — FAQ */}
      <section className="py-20 bg-slate-50 border-t border-b border-gray-100" id="faqs-accordion">
        <div className="max-w-4xl mx-auto px-6 sm:px-8 text-center">
          <span className="text-xs font-bold uppercase tracking-widest text-[#00b4d8]">Help & Context</span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#1a3c6e] mb-12">
            Common Questions
          </h2>

          <div className="space-y-4 text-left max-w-3xl mx-auto">
            {FAQS.map((faq, idx) => {
              const isOpen = activeFaq === idx;
              return (
                <div key={idx} className="bg-white rounded-xl border border-gray-150 overflow-hidden shadow-2xs">
                  
                  <button
                    onClick={() => toggleFaq(idx)}
                    className="w-full p-5 sm:p-6 flex items-center justify-between text-left font-bold text-[#1a3c6e] hover:bg-slate-50/50 transition-colors gap-4"
                  >
                    <span className="text-sm sm:text-base pr-2">{faq.q}</span>
                    <span className="text-[#00b4d8] font-black shrink-0 text-xl">
                      {isOpen ? '−' : '+'}
                    </span>
                  </button>

                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.2 }}
                      >
                        <div className="px-5 pb-5 sm:px-6 sm:pb-6 text-xs sm:text-sm text-gray-500 font-light border-t border-gray-50 pt-4 leading-relaxed">
                          {faq.a}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>

                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* SECTION 6 — BOTTOM CTA */}
      <section className="py-20 text-white text-center relative" style={{ backgroundColor: '#1a3c6e' }}>
        <div className="absolute inset-0 opacity-5 bg-[radial-gradient(#ffffff_1px,transparent_1px)] [background-size:20px_20px] pointer-events-none" />
        
        <div className="max-w-4xl mx-auto px-6 sm:px-8 relative z-10 space-y-6">
          <span className="text-xs font-bold uppercase tracking-widest text-[#00b4d8]">Free Consultation Strategy</span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold">
            Not Sure Which Plan Is Right For You?
          </h2>
          <p className="text-sm sm:text-base text-slate-350 max-w-2xl mx-auto font-light">
            WhatsApp us and we will recommend the best option for your clinic.
          </p>

          <div className="pt-4">
            <a 
              href={WHATSAPP_CTA_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center px-10 py-4 rounded-full text-white font-bold text-sm uppercase tracking-wider transition-all duration-150 shadow-lg"
              style={{ backgroundColor: '#00b4d8' }}
            >
              WhatsApp Us Now
            </a>
          </div>
        </div>
      </section>

    </div>
  );
}
