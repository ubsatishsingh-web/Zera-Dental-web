import { ServiceItem, PortfolioItem, TestimonialItem, PricingPackage, FAQItem } from './types';

export const SERVICES_DATA: ServiceItem[] = [
  {
    id: 'custom-websites',
    title: 'Custom Dental Websites',
    description: 'Bespoke, lightning-fast dental websites that display your clinic\'s treatments, doctor profiles, and custom contact flows. Built with state-of-the-art Web and Mobile standards.',
    iconName: 'Layout',
    benefits: [
      'High-speed load times (< 1.5s) on 4G networks',
      'Perfect styling for mobile and tablet devices',
      'Custom pages for your treatments (Implants, Invisalign, Root Canal)',
      'High-quality custom icons and professional dental imagery'
    ],
    features: ['Modern Single Page Architecture', 'SEO Meta Tags pre-configured', 'SSL Security certificate ready']
  },
  {
    id: 'local-seo',
    title: 'Dental Local SEO & Google Maps',
    description: 'Dominate localized search results in your neighborhood. When patients search for "Dr. [Dentist] near me" or "[treatment] in [city]", your clinic is the first they see.',
    iconName: 'MapPin',
    benefits: [
      'Google Business Profile (Map) optimized for key terms',
      'Local schema injection for Google Search rich snippets',
      'Patient review-building strategy & custom QR cards',
      'Local citation building in top Indian directories'
    ],
    features: ['Keyword research for dental terms', 'Google Maps listing ranking plan', 'Review link generation']
  },
  {
    id: 'patient-education',
    title: 'Patient Education Center',
    description: 'Build absolute trust with rich, transparent media. We integrate clear descriptions and benefits for major treatments to prep patients before they step inside your clinic.',
    iconName: 'GraduationCap',
    benefits: [
      'Interactive visual guides for dental implants, cavities, root canal therapy',
      'Pre & Post-op instruction pages that patients can read anytime',
      'Transparent FAQs that tackle treatment anxiety and pain management',
      'Increases acceptance rate of high-value clinical treatments'
    ],
    features: ['Explainer widgets', 'Orthodontic & Invisalign guides', 'Downloadable advice sheets']
  },
  {
    id: 'booking-systems',
    title: 'Instant WhatsApp Booking',
    description: 'Simplify the booking process for Indian patient behaviors. We integrate direct WhatsApp messaging, custom calendar widgets, and smart reminder links.',
    iconName: 'CalendarRange',
    benefits: [
      'One-tap appointment requests directly into your clinic\'s phone',
      'Pre-written structured WhatsApp messages for quick replies',
      'Optional Google Calendar linking to sync with your front desk',
      'Zero monthly commissions (unlike heavy booking portals)'
    ],
    features: ['Commission-free booking', 'Click-to-chat setup', 'Friendly clinical copy templates']
  },
  {
    id: 'clinic-photography',
    title: 'Branding & Graphic Design Support',
    description: 'A website is only as professional as its visuals. We assist with custom clinical banners, doctor profiles, clinical badge design, and interactive logos.',
    iconName: 'Sparkles',
    benefits: [
      'Custom clinical logo and branding identity styling',
      'Perfect typography pairings (Poppins + soft accent system)',
      'Visual asset optimizing (lightening photo files for fast mobile load)',
      'Digital social media graphics matching your website\'s design'
    ]
  },
  {
    id: 'maintenance',
    title: 'Unlimited Edits & Hosting',
    description: 'Never worry about server down-times, domain renewals, or outdated content. We supervise everything technical so you can focus entirely on patient care.',
    iconName: 'ShieldCheck',
    benefits: [
      'Super fast secure cloud hosting (AWS or Cloud Run)',
      'Unlimited revisions: change fees, doctor timings, clinical gallery photos anytime',
      'Daily security scans & secure monthly updates',
      'Emergency support chat with response times under 2 hours'
    ]
  }
];

export const PORTFOLIO_DATA: PortfolioItem[] = [
  {
    id: 'pearl-align',
    title: 'Pearl Align Orthodontics',
    clinicType: 'Premium Invisalign & Orthodontic Center',
    image: 'https://images.unsplash.com/photo-1629909613654-28e377c37b09?auto=format&fit=crop&q=80&w=600',
    tagline: 'Modern, minimal design showcasing virtual smile before-and-after cases and custom assessment flows.',
    features: ['High-contrast treatment explanation sections', 'Interactive Smile Assessment Flow', 'Direct-to-Consultation WhatsApp triggers'],
    demoUrl: '#',
    metrics: { growth: '+120%', label: 'Invisalign Inquiries' }
  },
  {
    id: 'apex-dental',
    title: 'Apex Dental Care & Implants',
    clinicType: 'Multi-Specialty Pediatric & Implant Clinic',
    image: 'https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?auto=format&fit=crop&q=80&w=600',
    tagline: 'Trust-centric layout with prominent doctor qualification credentials, patient video reviews, and transparent pricing checklists.',
    features: ['Detailed Doctor profile & Credentials page', 'Pain-free treatment safety checklists', 'Google Reviews integration badge'],
    demoUrl: '#',
    metrics: { growth: '2.4x', label: 'Monthly Patient Appointments' }
  },
  {
    id: 'kids-dentalland',
    title: 'Little Smiles Pediatric Dentistry',
    clinicType: 'Fun & Comfort-focused Kids Clinic',
    image: 'https://images.unsplash.com/photo-1579684389782-64d84b5e901a?auto=format&fit=crop&q=80&w=600',
    tagline: 'Warm, colorful, yet clinical styling aimed at reassuring anxious parents. Features clinic-tour gallery.',
    features: ['Interactive pediatric clinic-tour slider', 'Pro-active kid oral-hygiene parents guide', 'WhatsApp direct front-desk routing'],
    demoUrl: '#',
    metrics: { growth: '+85%', label: 'New Family Registrations' }
  }
];

export const TESTIMONIALS_DATA: TestimonialItem[] = [
  {
    id: 'test-1',
    doctorName: 'Dr. Rohan Verma',
    specialty: 'MDS, Prosthodontist & Implantologist',
    clinicName: 'Verma Dental Excellence',
    location: 'New Delhi',
    quote: 'Zera Dental didn\'t just build a website; they structured our clinical workflow. Patients routinely tell me they chose us over competitors because our website answered their implants questions so cleanly. Our Google Map inquiries literally tripled in 3 months!',
  },
  {
    id: 'test-2',
    doctorName: 'Dr. Ananya Rao',
    specialty: 'BDS, Cosmetic Dentist',
    clinicName: 'The Dental Studio',
    location: 'Bengaluru',
    quote: 'Before working with Zera, we had a heavy website built by local freelancers that loaded slowly on mobile and never got any bookings. Zera rebuilt it from scratch. Now, 40% of our Invisalign consults book through our quick WhatsApp portal.',
  },
  {
    id: 'test-3',
    doctorName: 'Dr. Sandeep Patwardhan',
    specialty: 'MDS, Pediatric Dentist',
    clinicName: 'Happy Teeth Pediatric Clinic',
    location: 'Mumbai',
    quote: 'Excellent professional team! They know precisely what a mother looks for when choosing an orthodontist or child dentist. They are extremely cooperative with revisions and handles all hosting and domain updates seamlessly.'
  }
];

export const PRICING_PACKAGES: PricingPackage[] = [
  {
    name: 'Starter Clinic Pack',
    tagline: 'The essential foundations for single-doctor local clinics designed to establish patient credibility.',
    price: '₹14,999',
    timeline: 'Delivered in 7 Days',
    popular: false,
    features: [
      'Clean 1-Page Responsive Micro-site',
      'Detailed Dr. Profile & Credentials',
      'Clinical Gallery & Contact Timings',
      'Direct WhatsApp Appointment Button',
      'Basic Local SEO (Google Maps setup)',
      'Free Domain Name (.in or .com)',
      '1 Year High-Speed Cloud Hosting',
      'Standard Content (We write it all!)'
    ],
    whatsappMessage: 'Hi Zera Dental, I want to inquire about the Starter Clinic Pack (₹14,999) for my dental clinic'
  },
  {
    name: 'Standard Practitioner Suite',
    tagline: 'Our highly recommended suite for ambitious multi-specialty clinics looking to grow.',
    price: '₹24,999',
    timeline: 'Delivered in 12 Days',
    popular: true,
    features: [
      'Multi-Page responsive structure (up to 8 pages)',
      'Dedicated Treatment Explainer Pages (Implants, Invisalign, Root Canals)',
      'Complete Patient Education Center integration',
      'Advanced Local SEO & Reviews Booster package',
      'Interactive Smile Assessment intake flow',
      'Smart Google Map location placement',
      'Unlimited updates & Timing edits for 1 yr',
      'Premium custom dental medical stock photographs',
      'SSL Security Certificate & Speed optimizations'
    ],
    whatsappMessage: 'Hi Zera Dental, I want to inquire about the Standard Practitioner Suite (₹24,999) for my dental clinic'
  },
  {
    name: 'Prime Dental Hospital Suite',
    tagline: 'The ultimate bespoke experience for premium chain clinics with multi-doctors and complex bookings.',
    price: '₹39,999',
    timeline: 'Delivered in 21 Days',
    popular: false,
    features: [
      'Bespoke visual branding & unique design styling',
      'Multi-doctor appointment scheduling routing systems',
      'Advanced Treatment Media Guides with Pre/Post Care',
      'Dominant Local SEO (Multi-branch Google Business sync)',
      'Patient Blog & High-Value dental keywords optimization',
      'Interactive Treatment Cost Estimator Widgets',
      'Monthly clinic analytics & Google Search Reports',
      'Unlimited Priority technical support (under 2hr response time)',
      'Highest level security checks & daily core server backups'
    ],
    whatsappMessage: 'Hi Zera Dental, I want to inquire about the Prime Dental Hospital Suite (₹39,999) for my dental clinic'
  }
];

export const FAQS_DATA: FAQItem[] = [
  {
    question: 'Why does my clinic need a specialized dental agency instead of a generic web development company?',
    answer: 'Generic web agencies do not understand dental terminology, the difference between general, pediatric, implant, or orthodontic patients, or the emotional triggers that prompt a user to book cleanings or cosmetic services. We specialize in patient psychology. We understand treatment options and pre/post-op care. This means you do not spend weeks correcting our dental copy. We write clinical, patient-friendly, SEO-optimized text for you.'
  },
  {
    question: 'How do customers book appointments from the website?',
    answer: 'From our deep data of clinical bookings in India, heavy scheduling tools often lead to a 60% user abandonment rate due to complex forms. We integrate a streamlined WhatsApp clinical flow that initiates a structured booking request on the patient\'s WhatsApp. It works on single tap, captures patient intent, and routes to your front desk. If you prefer Google Calendar, Practo, or other integrations, we can easily embed them on your request.'
  },
  {
    question: 'What is the ongoing annual cost for maintenance?',
    answer: 'Your first year of high-speed secure cloud hosting, SSL certification, domain registration, and technical maintenance is 100% free with all our plans. From the second year onwards, the renewal cost is highly nominal (starting at just ₹3,000/year to cover hosting, domains, and standard support).'
  },
  {
    question: 'Will my website link up with Google Map search and show reviews?',
    answer: 'Yes! We integrate specialized Schema Markup and Local SEO triggers that sync your website with your Google Business Profile (Map). This helps searchers find you when typing "dentist near me" or "braces in [locality]", and showcases active real reviews directly on your landing page.'
  },
  {
    question: 'I am not good with tech or website updates. How do I change timings or treatment fees later?',
    answer: 'You do not have to touch any code! Every plan comes with our support package. Whenever your clinic timings change, you hire a new doctor, or wish to update treatment prices, simply send us a message on WhatsApp and our team will live-update your website within 12-24 hours.'
  }
];
