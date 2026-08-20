import { Monitor, TrendingUp, MessageCircle, Search, Zap, Users, BarChart3, Settings, Smartphone } from 'lucide-react';
import SectionHeader from '../shared/SectionHeader';
import { useScrollReveal } from '../../hooks/useScrollReveal';

const services = [
  { icon: Monitor, title: 'Custom Websites', description: 'Modern, responsive websites built around your business, services, brand and customers.' },
  { icon: TrendingUp, title: 'Conversion-Focused Design', description: 'Clear layouts and calls-to-action designed to guide visitors toward enquiries, calls or WhatsApp conversations.' },
  { icon: MessageCircle, title: 'Enquiry & Contact Flows', description: 'Forms, click-to-call, WhatsApp and appointment flows that make it easy for customers to reach you.' },
  { icon: Search, title: 'Google & Local SEO', description: 'Basic technical SEO, Google Search setup and local visibility foundations.' },
  { icon: Zap, title: 'Lead Capture & Automation', description: 'Connect website enquiries to email, Google Sheets and other tools so leads are captured and organized automatically.' },
  { icon: Users, title: 'CRM Solutions', description: 'Custom CRM systems to manage leads, customers, follow-ups, sales pipelines and customer information in one place.' },
  { icon: BarChart3, title: 'ERP Solutions', description: 'Business management systems for workflows such as inventory, purchasing, production, suppliers and operations.' },
  { icon: Settings, title: 'Business Automation', description: 'Automate repetitive tasks and connect different systems to reduce manual work and improve operations.' },
  { icon: Smartphone, title: 'Performance & Mobile Optimization', description: 'Fast, responsive and user-friendly experiences across phones, tablets and desktops.' },
];

export default function Services() {
  const { ref, isVisible } = useScrollReveal();
  return (
    <section id="services" className="section-pad relative overflow-hidden">
      <div className="orb orb-lg animate-float" style={{ top: '-80px', right: '-60px' }} />
      <div ref={ref}
        className={`relative z-10 max-w-6xl mx-auto px-4 sm:px-6 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
        <SectionHeader eyebrow="What I Offer" title="Services"
          subtitle="Digital solutions that help businesses build their online presence, manage operations, and automate repetitive work." />
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5">
          {services.map((s, i) => {
            const Icon = s.icon;
            return (
              <div key={i} className="card-soft p-5 sm:p-7 rounded-2xl">
                <div className="w-9 h-9 sm:w-11 sm:h-11 rounded-xl bg-violet-500/15 flex items-center justify-center mb-4 sm:mb-5">
                  <Icon size={18} className="text-violet-400" />
                </div>
                <h3 className="font-display font-semibold text-white text-sm sm:text-base mb-2">{s.title}</h3>
                <p className="text-xs sm:text-sm text-white/45 leading-relaxed">{s.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}