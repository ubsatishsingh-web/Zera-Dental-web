export enum Page {
  Home = 'home',
  Services = 'services',
  Portfolio = 'portfolio',
  Pricing = 'pricing',
  WhyZera = 'why-zera',
  Contact = 'contact',
  FreeAudit = 'free-audit'
}

export interface ServiceItem {
  id: string;
  title: string;
  description: string;
  iconName: string;
  benefits: string[];
  features?: string[];
}

export interface PortfolioItem {
  id: string;
  title: string;
  clinicType: string;
  image: string;
  tagline: string;
  features: string[];
  demoUrl?: string;
  metrics?: {
    growth: string;
    label: string;
  };
}

export interface TestimonialItem {
  id: string;
  doctorName: string;
  specialty: string;
  clinicName: string;
  location: string;
  quote: string;
  image?: string;
}

export interface PricingPackage {
  name: string;
  tagline: string;
  price: string;
  timeline: string;
  popular: boolean;
  features: string[];
  whatsappMessage: string;
}

export interface FAQItem {
  question: string;
  answer: string;
}
