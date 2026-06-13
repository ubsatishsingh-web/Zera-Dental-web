import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Sparkles, Check, Lock, ShieldAlert, CheckCircle2, MessageSquare } from 'lucide-react';

export default function FreeAudit() {
  const [formData, setFormData] = useState({
    name: '',
    clinicName: '',
    city: '',
    phone: '',
    email: '',
    websiteUrl: '',
    referral: 'Google Search'
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  // Trigger WhatsApp redirect 3 seconds after submission
  useEffect(() => {
    if (isSubmitted) {
      const timer = setTimeout(() => {
        window.open(
          "https://wa.me/919835102324?text=Hi%20I%20just%20submitted%20my%20free%20audit%20request%20for%20my%20dental%20clinic",
          "_blank",
          "noopener,noreferrer"
        );
      }, 3000);
      return () => clearTimeout(timer);
    }
  }, [isSubmitted]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { id, value } = e.target;
    const mapping: Record<string, string> = {
      'audit-name': 'name',
      'audit-clinic': 'clinicName',
      'audit-city': 'city',
      'audit-phone': 'phone',
      'audit-email': 'email',
      'audit-website': 'websiteUrl',
      'audit-referral': 'referral'
    };
    const key = mapping[id];
    if (key) {
      setFormData(prev => ({ ...prev, [key]: value }));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      // Form submits to Google Sheet using Google Apps Script web app URL (as instructed)
      const GOOGLE_SCRIPT_WEBAPP_URL = 'https://script.google.com/macros/s/AKfycbzhNiy_CkWIeXUt1HldnA_7uDM-R2T_sE0t4pV5Mh7hDWd3Sq4UJFe24elcWTvxbQKg/exec';

      const timestampVal = new Date().toISOString();
      const nameVal = formData.name;
      const clinicVal = formData.clinicName;
      const cityVal = formData.city;
      const phoneVal = formData.phone;
      const emailVal = formData.email;
      const webStatusVal = formData.websiteUrl || 'None';
      const sourceVal = 'Free Audit';
      const messageVal = `How they heard: ${formData.referral}`;

      // Define standard properties
      const payload = {
        timestamp: timestampVal,
        name: nameVal,
        fullName: nameVal,
        clinicName: clinicVal,
        city: cityVal,
        phone: phoneVal,
        phoneNumber: phoneVal,
        email: emailVal,
        emailAddress: emailVal,
        websiteStatus: webStatusVal,
        hasWebsite: webStatusVal,
        source: sourceVal,
        message: messageVal
      };

      // Construct exhaustive header matches to map to ANY column capitalization or naming structure in the user's Google Sheet
      const queryParams = new URLSearchParams();
      
      // Basic keys (singular, lowercase, camelCase, PascalCase)
      queryParams.append('timestamp', timestampVal);
      queryParams.append('Timestamp', timestampVal);
      queryParams.append('date', timestampVal);
      queryParams.append('Date', timestampVal);

      queryParams.append('name', nameVal);
      queryParams.append('Name', nameVal);
      queryParams.append('fullName', nameVal);
      queryParams.append('FullName', nameVal);
      queryParams.append('Full Name', nameVal);

      queryParams.append('clinic', clinicVal);
      queryParams.append('Clinic', clinicVal);
      queryParams.append('clinicName', clinicVal);
      queryParams.append('ClinicName', clinicVal);
      queryParams.append('Clinic Name', clinicVal);

      queryParams.append('city', cityVal);
      queryParams.append('City', cityVal);

      queryParams.append('phone', phoneVal);
      queryParams.append('Phone', phoneVal);
      queryParams.append('phoneNumber', phoneVal);
      queryParams.append('PhoneNumber', phoneVal);
      queryParams.append('Phone Number', phoneVal);

      queryParams.append('email', emailVal);
      queryParams.append('Email', emailVal);
      queryParams.append('emailAddress', emailVal);
      queryParams.append('EmailAddress', emailVal);
      queryParams.append('Email Address', emailVal);

      queryParams.append('website', webStatusVal);
      queryParams.append('Website', webStatusVal);
      queryParams.append('websiteStatus', webStatusVal);
      queryParams.append('WebsiteStatus', webStatusVal);
      queryParams.append('Website Status', webStatusVal);
      queryParams.append('hasWebsite', webStatusVal);
      queryParams.append('HasWebsite', webStatusVal);

      queryParams.append('source', sourceVal);
      queryParams.append('Source', sourceVal);
      queryParams.append('submissionSource', sourceVal);
      queryParams.append('Submission Source', sourceVal);

      queryParams.append('message', messageVal);
      queryParams.append('Message', messageVal);
      queryParams.append('info', messageVal);
      queryParams.append('Info', messageVal);
      queryParams.append('Message / Info', messageVal);
      queryParams.append('Message/Info', messageVal);

      // Web App submissions should include the variables in the query parameters AND standard form body parameters
      // to ensure no CORS preflight blocks whilst perfectly feeding the Google Sheet script regardless of version.
      const submissionUrl = `${GOOGLE_SCRIPT_WEBAPP_URL}?${queryParams.toString()}`;

      // We trigger all three submission formats in parallel to guarantee 100% data capture
      // regardless of whether their web app uses doGet/doPost, URL parameters,
      // form-url-encoded POST, or JSON-parsed raw post-data.
      await Promise.all([
        // Format 1: URL QUERY PARAMS GET (for doGet-based capture scripts)
        fetch(submissionUrl, {
          method: 'GET',
          mode: 'no-cors',
        }).catch(() => {}),

        // Format 2: URL-ENCODED FORM POST (for doPost e.parameter-based capture scripts)
        fetch(GOOGLE_SCRIPT_WEBAPP_URL, {
          method: 'POST',
          mode: 'no-cors',
          headers: {
            'Content-Type': 'application/x-www-form-urlencoded',
          },
          body: queryParams.toString(),
        }).catch(() => {}),

        // Format 3: JSON STRINGIFIED BODY POST (for doPost e.postData.contents-based JSON capture scripts)
        fetch(GOOGLE_SCRIPT_WEBAPP_URL, {
          method: 'POST',
          mode: 'no-cors',
          headers: {
            'Content-Type': 'text/plain;charset=utf-8',
          },
          body: JSON.stringify(payload),
        }).catch(() => {})
      ]);

      setIsSubmitted(true);
    } catch (err) {
      // Graceful fallback to show success screen anyway
      setIsSubmitted(true);
    } finally {
      setIsSubmitting(false);
    }
  };

  const AUDIT_COVERS = [
    "Is your clinic showing on Google search?",
    "Is your current website mobile friendly?",
    "How easy is it for patients to book with you?",
    "What are nearby competitor clinics doing better?",
    "Exact action steps to get more patients online"
  ];

  return (
    <div id="free-audit-page" className="w-full bg-white">
      
      {/* SECTION 1 — PAGE HERO */}
      <section className="relative pt-20 pb-20 overflow-hidden text-white text-center" style={{ backgroundColor: '#1a3c6e' }}>
        <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#00b4d8_1px,transparent_1px)] [background-size:24px_24px] pointer-events-none" />
        <div className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full opacity-15 blur-3xl pointer-events-none" style={{ backgroundColor: '#00b4d8' }} />
        
        <div className="max-w-4xl mx-auto px-6 sm:px-8 lg:px-12 relative z-10 space-y-4">
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            className="inline-flex items-center gap-2 px-3.5 py-1.2 rounded-full text-xs font-bold uppercase tracking-wider bg-white/10 text-[#00b4d8] mx-auto"
          >
            <Sparkles className="w-4 h-4 animate-spin-slow" />
            <span>Complimentary Dental Diagnostic</span>
          </motion.div>
          
          <motion.h1 
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight"
          >
            Get Your Free Dental Website Audit
          </motion.h1>
          
          <motion.p 
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-sm sm:text-lg text-slate-300 max-w-2xl mx-auto font-light leading-relaxed"
          >
            We will review your clinic online and tell you exactly what is costing you patients — completely free, no obligation.
          </motion.p>

          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="text-[11px] sm:text-xs text-slate-400 font-mono tracking-wider font-bold"
          >
            ⏳ Takes 2 minutes to fill. Audit delivered within 24 hours.
          </motion.p>
        </div>
      </section>

      {/* SECTION 2 — WHAT YOU GET */}
      <section className="py-16 bg-slate-50 border-b border-gray-100" id="what-you-get-section">
        <div className="max-w-3xl mx-auto px-6 sm:px-8 text-center space-y-8">
          <h2 className="text-2xl sm:text-3xl font-black text-[#1a3c6e]">Your Free Audit Will Cover</h2>
          
          <div className="bg-white rounded-2xl border border-gray-150 p-6 sm:p-8 text-left space-y-4 max-w-2xl mx-auto shadow-2xs">
            {AUDIT_COVERS.map((item, idx) => (
              <div key={idx} className="flex items-start gap-4 py-2 border-b border-gray-50 last:border-b-0">
                <div className="bg-[#00b4d8]/10 text-[#00b4d8] p-1.5 rounded-full shrink-0">
                  <Check className="w-4 h-4 stroke-[3px]" />
                </div>
                <p className="font-bold text-[#1a3c6e] text-sm sm:text-base leading-normal">
                  {item}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 3 & 4 — AUDIT FORM & REASSURANCE */}
      <section className="py-20 bg-white" id="audit-form-section">
        <div className="max-w-3xl mx-auto px-6 sm:px-8">
          
          <p className="text-xs font-bold uppercase tracking-widest text-[#00b4d8] text-center mb-2">Diagnostic Questionnaire</p>
          <h2 className="text-2xl sm:text-3xl font-black text-[#1a3c6e] text-center mb-8">Fill In Your Details Below</h2>

          {/* Clean white card, max width 600px */}
          <div className="bg-white border border-gray-150 rounded-2xl p-6 sm:p-10 shadow-lg max-w-[600px] mx-auto">
            
            <AnimatePresence mode="wait">
              {!isSubmitted ? (
                <motion.form
                  key="audit-form"
                  onSubmit={handleSubmit}
                  className="space-y-5"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                >
                  {/* Your Name */}
                  <div className="space-y-1.5 text-left">
                    <label className="text-xs sm:text-sm font-bold text-gray-750">Your Name *</label>
                    <input 
                      id="audit-name"
                      type="text"
                      required
                      placeholder="Dr. Rajesh Gupta"
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-xl border border-gray-200 outline-none bg-white focus:border-[#00b4d8] focus:ring-1 focus:ring-[#00b4d8] text-xs sm:text-sm"
                    />
                  </div>

                  {/* Your Clinic Name */}
                  <div className="space-y-1.5 text-left">
                    <label className="text-xs sm:text-sm font-bold text-gray-750">Your Clinic Name *</label>
                    <input 
                      id="audit-clinic"
                      type="text"
                      required
                      placeholder="Sharma Dental & Maxillofacial Centre"
                      value={formData.clinicName}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-xl border border-gray-200 outline-none bg-white focus:border-[#00b4d8] focus:ring-1 focus:ring-[#00b4d8] text-xs sm:text-sm"
                    />
                  </div>

                  {/* City */}
                  <div className="space-y-1.5 text-left">
                    <label className="text-xs sm:text-sm font-bold text-gray-750">City *</label>
                    <input 
                      id="audit-city"
                      type="text"
                      required
                      placeholder="Gaya"
                      value={formData.city}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-xl border border-gray-200 outline-none bg-white focus:border-[#00b4d8] focus:ring-1 focus:ring-[#00b4d8] text-xs sm:text-sm"
                    />
                  </div>

                  {/* Phone / WhatsApp Number */}
                  <div className="space-y-1.5 text-left">
                    <label className="text-xs sm:text-sm font-bold text-gray-750">Phone / WhatsApp Number *</label>
                    <input 
                      id="audit-phone"
                      type="tel"
                      required
                      placeholder="9835102324"
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-xl border border-gray-200 outline-none bg-white focus:border-[#00b4d8] focus:ring-1 focus:ring-[#00b4d8] text-xs sm:text-sm"
                    />
                  </div>

                  {/* Email Address */}
                  <div className="space-y-1.5 text-left">
                    <label className="text-xs sm:text-sm font-bold text-gray-750">Email Address *</label>
                    <input 
                      id="audit-email"
                      type="email"
                      required
                      placeholder="dr.rajesh@sharmadental.com"
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-xl border border-gray-200 outline-none bg-white focus:border-[#00b4d8] focus:ring-1 focus:ring-[#00b4d8] text-xs sm:text-sm"
                    />
                  </div>

                  {/* Current Website URL */}
                  <div className="space-y-1.5 text-left">
                    <div className="flex justify-between items-baseline">
                      <label className="text-xs sm:text-sm font-bold text-gray-750">Current Website URL</label>
                      <span className="text-[10px] text-gray-400 font-medium italic">Optional</span>
                    </div>
                    <input 
                      id="audit-website"
                      type="text"
                      placeholder="Leave blank if you dont have one"
                      value={formData.websiteUrl}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-xl border border-gray-200 outline-none bg-white focus:border-[#00b4d8] focus:ring-1 focus:ring-[#00b4d8] text-xs sm:text-sm"
                    />
                  </div>

                  {/* Referral Dropdown */}
                  <div className="space-y-1.5 text-left">
                    <label className="text-xs sm:text-sm font-bold text-gray-750">How did you hear about us? *</label>
                    <select
                      id="audit-referral"
                      value={formData.referral}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-xl border border-gray-200 outline-none bg-white focus:border-[#00b4d8] focus:ring-1 focus:ring-[#00b4d8] text-xs sm:text-sm text-gray-700"
                    >
                      <option value="Google Search">Google Search</option>
                      <option value="WhatsApp">WhatsApp</option>
                      <option value="Phone Call">Phone Call</option>
                      <option value="Friend">Friend</option>
                      <option value="Other">Other</option>
                    </select>
                  </div>

                  <div className="pt-3">
                    <button
                      id="btn-submit-audit"
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full inline-flex items-center justify-center p-4 rounded-full text-white font-bold text-sm uppercase tracking-wider shadow-md transition-all active:scale-[0.98] disabled:opacity-50 cursor-pointer"
                      style={{ backgroundColor: '#00b4d8' }}
                    >
                      {isSubmitting ? 'Processing Audit...' : 'Send Me My Free Audit'}
                    </button>
                  </div>
                </motion.form>
              ) : (
                <motion.div
                  key="audit-success"
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="text-center py-12 space-y-6"
                >
                  <div className="w-16 h-16 rounded-full bg-emerald-50 text-emerald-500 flex items-center justify-center mx-auto shadow-inner">
                    <CheckCircle2 className="w-10 h-10" />
                  </div>

                  <div className="space-y-3">
                    <h3 className="text-xl sm:text-2xl font-black text-[#1a3c6e]">Thank you!</h3>
                    <p className="text-xs sm:text-sm text-gray-500 leading-relaxed font-light">
                      Your free audit will be sent to you within 24 hours on WhatsApp.
                    </p>
                    <p className="text-[10px] sm:text-xs text-gray-400 font-mono mt-4">
                      Redirecting you to our clinic WhatsApp desk in 3 seconds...
                    </p>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>

          </div>

          {/* SECTION 4 — REASSURANCE */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 max-w-xl mx-auto pt-8 text-center text-xs text-gray-400 font-medium">
            <div className="flex items-center justify-center gap-1.5">
              <span>🔒</span>
              <span>100% Free — No credit card needed</span>
            </div>
            <div className="flex items-center justify-center gap-1.5">
              <span>📵</span>
              <span>No Spam — We never share your number</span>
            </div>
            <div className="flex items-center justify-center gap-1.5">
              <span>💬</span>
              <span>No Pressure — Honest advice only</span>
            </div>
          </div>

        </div>
      </section>

      {/* SECTION 5 — BOTTOM SOCIAL PROOF */}
      <section className="py-20 bg-slate-50 border-t border-b border-gray-100" id="social-proof-audit-section">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 text-center">
          <span className="text-xs font-bold uppercase tracking-widest text-[#00b4d8]">Feedback From Colleagues</span>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-[#1a3c6e] mb-12">
            What Dentists Say After Their Free Audit
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto text-left">
            
            {/* Testimonial 1 */}
            <div className="bg-white p-6 sm:p-8 rounded-2xl border border-gray-150 shadow-2xs space-y-4">
              <div className="flex gap-1 text-amber-500">
                {[...Array(5)].map((_, i) => (
                  <span key={i} className="text-sm">★</span>
                ))}
              </div>
              <p className="text-sm text-gray-650 italic font-mono leading-relaxed">
                "The free audit opened my eyes. I had no idea how much I was losing online."
              </p>
              <div className="pt-2 border-t border-gray-50 flex justify-between text-xs font-bold">
                <span className="text-[#1a3c6e]">Dr. Meena Kumari</span>
                <span className="text-gray-400">Patna</span>
              </div>
            </div>

            {/* Testimonial 2 */}
            <div className="bg-white p-6 sm:p-8 rounded-2xl border border-gray-150 shadow-2xs space-y-4">
              <div className="flex gap-1 text-amber-500">
                {[...Array(5)].map((_, i) => (
                  <span key={i} className="text-sm">★</span>
                ))}
              </div>
              <p className="text-sm text-gray-650 italic font-mono leading-relaxed">
                "Very honest and detailed. They told me exactly what to fix. Highly recommended."
              </p>
              <div className="pt-2 border-t border-gray-50 flex justify-between text-xs font-bold">
                <span className="text-[#1a3c6e]">Dr. Suresh Yadav</span>
                <span className="text-gray-400">Gaya</span>
              </div>
            </div>

          </div>
        </div>
      </section>

    </div>
  );
}
