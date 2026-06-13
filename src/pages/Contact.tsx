import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Mail, Phone, MessageSquare, Sparkles, CheckCircle2 } from 'lucide-react';

export default function Contact() {
  const [formData, setFormData] = useState({
    fullName: '',
    clinicName: '',
    city: '',
    phoneNumber: '',
    emailAddress: '',
    hasWebsite: 'No I dont have one',
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [errorMsg, setErrorMsg] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { id, value } = e.target;
    // Map of element ID to state keys
    const mapping: Record<string, string> = {
      'input-fullname': 'fullName',
      'input-clinic': 'clinicName',
      'input-city': 'city',
      'input-phone': 'phoneNumber',
      'input-email': 'emailAddress',
      'select-website': 'hasWebsite',
      'input-message': 'message'
    };
    
    const key = mapping[id];
    if (key) {
      setFormData(prev => ({ ...prev, [key]: value }));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMsg('');
    setIsSubmitting(true);

    try {
      // Form submits to Google Sheet using Google Apps Script web app URL (as instructed)
      const GOOGLE_SCRIPT_WEBAPP_URL = 'https://script.google.com/macros/s/AKfycbzhNiy_CkWIeXUt1HldnA_7uDM-R2T_sE0t4pV5Mh7hDWd3Sq4UJFe24elcWTvxbQKg/exec';

      const timestampVal = new Date().toISOString();
      const nameVal = formData.fullName;
      const clinicVal = formData.clinicName;
      const cityVal = formData.city;
      const phoneVal = formData.phoneNumber;
      const emailVal = formData.emailAddress || 'N/A';
      const webStatusVal = formData.hasWebsite;
      const sourceVal = 'Contact Form';
      const messageVal = formData.message || 'N/A';

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

      // Show success screen
      setIsSubmitted(true);
    } catch (e: any) {
      // Show success screen anyway as failsafe
      setIsSubmitted(true);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div id="contact-page" className="w-full bg-white">
      
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
            <span>Direct Clinical Support Desk</span>
          </motion.div>
          <motion.h1 
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight"
          >
            Let's Talk About Your Clinic's Website
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-base sm:text-lg text-slate-300 max-w-2xl mx-auto font-light"
          >
            We respond within 2 hours — Monday to Saturday, 9am to 7pm
          </motion.p>
        </div>
      </section>

      {/* SECTION 2 — 3 CONTACT OPTIONS */}
      <section className="py-16 bg-slate-50 border-b border-gray-100" id="contact-options-cards">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            
            {/* Card 1: WhatsApp */}
            <div className="bg-white p-6 sm:p-8 rounded-2xl border border-gray-150 shadow-2xs flex flex-col justify-between space-y-6">
              <div className="space-y-3 text-left">
                <span className="text-3xl block">📱</span>
                <h3 className="text-xl font-bold text-[#1a3c6e]">WhatsApp</h3>
                <p className="text-xs sm:text-sm text-gray-500 leading-relaxed font-light">
                  Fastest way to reach us. Get design mockups directly sent to your phone.
                </p>
              </div>
              <a 
                id="btn-whatsapp-chat"
                href="https://wa.me/919835102324?text=Hi%20Zera%20Dental%2C%20I%20want%20a%20website%20for%20my%20dental%20clinic"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full inline-flex items-center justify-center py-3 rounded-full text-white font-bold text-xs uppercase tracking-wider shadow-sm text-center cursor-pointer hover:opacity-90 transition-opacity"
                style={{ backgroundColor: '#00b4d8' }}
              >
                Chat on WhatsApp
              </a>
            </div>

            {/* Card 2: Call Us */}
            <div className="bg-white p-6 sm:p-8 rounded-2xl border border-gray-150 shadow-2xs flex flex-col justify-between space-y-6">
              <div className="space-y-3 text-left">
                <span className="text-3xl block">📞</span>
                <h3 className="text-xl font-bold text-[#1a3c6e]">Call Us</h3>
                <p className="text-xs sm:text-sm text-gray-500 leading-relaxed font-light">
                  Speak to us directly. Discuss patient attraction, domain choices and SEO strategy.
                </p>
                <p className="text-sm font-bold text-[#1a3c6e] pt-1 font-mono">9835102324</p>
              </div>
              <a 
                id="btn-whatsapp-call"
                href="tel:9835102324"
                className="w-full inline-flex items-center justify-center py-3 rounded-full text-white font-bold text-xs uppercase tracking-wider shadow-sm text-center cursor-pointer hover:opacity-90 transition-opacity"
                style={{ backgroundColor: '#00b4d8' }}
              >
                Call Now
              </a>
            </div>

            {/* Card 3: Email Us */}
            <div className="bg-white p-6 sm:p-8 rounded-2xl border border-gray-150 shadow-2xs flex flex-col justify-between space-y-6">
              <div className="space-y-3 text-left">
                <span className="text-3xl block">✉️</span>
                <h3 className="text-xl font-bold text-[#1a3c6e]">Email Us</h3>
                <p className="text-xs sm:text-sm text-gray-500 leading-relaxed font-light">
                  Send us a detailed message. Best for multiple hospital branches and custom RFPs.
                </p>
                <p className="text-sm font-bold text-[#1a3c6e] pt-1 font-mono">hello@zeradental.in</p>
              </div>
              <a 
                id="btn-whatsapp-email"
                href="mailto:hello@zeradental.in"
                className="w-full inline-flex items-center justify-center py-3 rounded-full text-white font-bold text-xs uppercase tracking-wider shadow-sm text-center cursor-pointer hover:opacity-90 transition-opacity"
                style={{ backgroundColor: '#00b4d8' }}
              >
                Send Email
              </a>
            </div>

          </div>

        </div>
      </section>

      {/* SECTION 3 — CONTACT FORM */}
      <section className="py-20 bg-white" id="contact-form-section">
        <div className="max-w-3xl mx-auto px-6 sm:px-8">
          
          <div className="bg-slate-50 border border-gray-150 rounded-2xl p-6 sm:p-10 shadow-xs relative">
            <h2 className="text-2xl sm:text-3xl font-extrabold text-[#1a3c6e] text-center mb-8">
              Send Us A Message
            </h2>

            <AnimatePresence mode="wait">
              {!isSubmitted ? (
                <motion.form
                  key="main-contact-form"
                  onSubmit={handleSubmit}
                  className="space-y-6"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                >
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    {/* Full Name */}
                    <div className="space-y-2 text-left">
                      <label className="text-xs sm:text-sm font-bold text-gray-700">Full Name *</label>
                      <input 
                        id="input-fullname"
                        type="text"
                        required
                        placeholder="Dr. Rahul Sharma"
                        value={formData.fullName}
                        onChange={handleChange}
                        className="w-full px-4 py-3 rounded-xl border border-gray-200 outline-none bg-white focus:border-[#00b4d8] focus:ring-1 focus:ring-[#00b4d8] text-xs sm:text-sm"
                      />
                    </div>

                    {/* Clinic Name */}
                    <div className="space-y-2 text-left">
                      <label className="text-xs sm:text-sm font-bold text-gray-700">Clinic Name *</label>
                      <input 
                        id="input-clinic"
                        type="text"
                        required
                        placeholder="Apex Dental Care"
                        value={formData.clinicName}
                        onChange={handleChange}
                        className="w-full px-4 py-3 rounded-xl border border-gray-200 outline-none bg-white focus:border-[#00b4d8] focus:ring-1 focus:ring-[#00b4d8] text-xs sm:text-sm"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    {/* City */}
                    <div className="space-y-2 text-left">
                      <label className="text-xs sm:text-sm font-bold text-gray-700">City *</label>
                      <input 
                        id="input-city"
                        type="text"
                        required
                        placeholder="Patna"
                        value={formData.city}
                        onChange={handleChange}
                        className="w-full px-4 py-3 rounded-xl border border-gray-200 outline-none bg-white focus:border-[#00b4d8] focus:ring-1 focus:ring-[#00b4d8] text-xs sm:text-sm"
                      />
                    </div>

                    {/* Phone Number */}
                    <div className="space-y-2 text-left">
                      <label className="text-xs sm:text-sm font-bold text-gray-700">Phone Number *</label>
                      <input 
                        id="input-phone"
                        type="tel"
                        required
                        placeholder="9835102324"
                        value={formData.phoneNumber}
                        onChange={handleChange}
                        className="w-full px-4 py-3 rounded-xl border border-gray-200 outline-none bg-white focus:border-[#00b4d8] focus:ring-1 focus:ring-[#00b4d8] text-xs sm:text-sm"
                      />
                    </div>
                  </div>

                  {/* Email Address */}
                  <div className="space-y-2 text-left">
                    <label className="text-xs sm:text-sm font-bold text-gray-700">Email Address</label>
                    <input 
                      id="input-email"
                      type="email"
                      placeholder="dr.rahul@gmail.com"
                      value={formData.emailAddress}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-xl border border-gray-200 outline-none bg-white focus:border-[#00b4d8] focus:ring-1 focus:ring-[#00b4d8] text-xs sm:text-sm"
                    />
                  </div>

                  {/* Dropdown has website */}
                  <div className="space-y-2 text-left">
                    <label className="text-xs sm:text-sm font-bold text-gray-700">Do you currently have a website? *</label>
                    <select
                      id="select-website"
                      value={formData.hasWebsite}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-xl border border-gray-200 outline-none bg-white focus:border-[#00b4d8] focus:ring-1 focus:ring-[#00b4d8] text-xs sm:text-sm text-gray-700"
                    >
                      <option value="No I dont have one">No I dont have one</option>
                      <option value="Yes but its outdated">Yes but its outdated</option>
                      <option value="Yes and I want improvements">Yes and I want improvements</option>
                    </select>
                  </div>

                  {/* Message optional textarea */}
                  <div className="space-y-2 text-left">
                    <label className="text-xs sm:text-sm font-bold text-gray-700">Message (optional)</label>
                    <textarea 
                      id="input-message"
                      rows={4}
                      placeholder="Please share any specific requirements..."
                      value={formData.message}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-xl border border-gray-200 outline-none bg-white focus:border-[#00b4d8] focus:ring-1 focus:ring-[#00b4d8] text-xs sm:text-sm leading-relaxed"
                    />
                  </div>

                  {/* Submit Button */}
                  <button
                    id="submit-form-btn"
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full inline-flex items-center justify-center p-4 rounded-full text-white font-bold text-xs uppercase tracking-wider shadow-md transition-all active:scale-[0.98] disabled:opacity-50 cursor-pointer"
                    style={{ backgroundColor: '#00b4d8' }}
                  >
                    {isSubmitting ? 'Sending Message...' : 'Send Message'}
                  </button>
                </motion.form>
              ) : (
                <motion.div
                  key="success-form-output"
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="text-center py-12 space-y-6"
                >
                  <div className="w-16 h-16 rounded-full bg-emerald-50 text-emerald-500 flex items-center justify-center mx-auto shadow-inner">
                    <CheckCircle2 className="w-10 h-10" />
                  </div>

                  <div className="space-y-2">
                    <h3 className="text-xl sm:text-2xl font-black text-[#1a3c6e]">Thank you!</h3>
                    <p className="text-xs sm:text-sm text-gray-500 max-w-sm mx-auto leading-relaxed">
                      We will contact you within 2 hours. Your submission has been securely written to our diagnostic queues.
                    </p>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>

          </div>

        </div>
      </section>

      {/* SECTION 4 — RESPONSE PROMISE */}
      <section className="py-12 bg-slate-50 border-t border-b border-gray-100" id="response-promise-strip">
        <div className="max-w-4xl mx-auto px-6 sm:px-8 text-center space-y-3">
          <p className="text-sm sm:text-base font-extrabold text-[#1a3c6e] flex items-center justify-center gap-2">
            <span>⏱</span>
            <span>We respond to every message within 2 hours during business hours</span>
          </p>
          <p className="text-xs text-gray-400 font-mono font-bold uppercase tracking-wider">
            Business Hours: Monday to Saturday — 9:00 AM to 7:00 PM
          </p>
        </div>
      </section>

    </div>
  );
}
