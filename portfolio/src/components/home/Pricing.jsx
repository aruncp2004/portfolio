import { Link } from 'react-router-dom';
import { Check, Minus, ArrowRight } from 'lucide-react';
import SectionHeader from '../shared/SectionHeader';
import { useScrollReveal } from '../../hooks/useScrollReveal';

const plans = [
  {
    name: 'Launch', price: '₹8,999',
    goal: 'Get your business professionally online.',
    description: 'For businesses that currently depend mainly on Google Maps, Instagram, WhatsApp or word-of-mouth.',
    featured: false,
    features: [
      { label: 'Professional custom website', included: true },
      { label: 'Mobile responsive', included: true },
      { label: 'Business / About / Services pages', included: true },
      { label: 'WhatsApp integration', included: true },
      { label: 'Contact / enquiry form', included: true },
      { label: 'Google Maps', included: true },
      { label: 'Reviews / testimonials section', included: true },
      { label: 'Basic SEO setup', included: true },
      { label: 'Appointment / enquiry workflow', included: 'Basic' },
      { label: 'Conversion-focused structure', included: false },
      { label: 'Google Analytics', included: false },
      { label: 'Lead collection & Google Sheets', included: false },
      { label: 'Advanced performance optimisation', included: false },
      { label: '30-day support', included: false },
      { label: 'Blog / content structure', included: false },
      { label: 'Basic automation', included: false },
      { label: 'Priority support', included: false },
    ],
  },
  {
    name: 'Growth', price: '₹12,000',
    goal: 'Turn your website into an enquiry channel.',
    description: 'For businesses that want visitors to understand services, trust the business and take action.',
    featured: true, badge: 'Most Popular',
    features: [
      { label: 'Professional custom website', included: true },
      { label: 'Mobile responsive', included: true },
      { label: 'Business / About / Services pages', included: true },
      { label: 'WhatsApp integration', included: true },
      { label: 'Contact / enquiry form', included: true },
      { label: 'Google Maps', included: true },
      { label: 'Reviews / testimonials section', included: true },
      { label: 'Basic SEO setup', included: true },
      { label: 'Appointment / enquiry workflow', included: 'Advanced' },
      { label: 'Conversion-focused structure', included: true },
      { label: 'Google Analytics', included: true },
      { label: 'Lead collection & Google Sheets', included: true },
      { label: 'Advanced performance optimisation', included: true },
      { label: '30-day support', included: true },
      { label: 'Blog / content structure', included: false },
      { label: 'Basic automation', included: false },
      { label: 'Priority support', included: false },
    ],
  },
  {
    name: 'Business Pro', price: '₹18,000',
    goal: 'Build a stronger digital presence.',
    description: 'For businesses with multiple services, locations or a need for better lead management and automation.',
    featured: false,
    features: [
      { label: 'Professional custom website', included: true },
      { label: 'Mobile responsive', included: true },
      { label: 'Business / About / Services pages', included: true },
      { label: 'WhatsApp integration', included: true },
      { label: 'Contact / enquiry form', included: true },
      { label: 'Google Maps', included: true },
      { label: 'Reviews / testimonials section', included: true },
      { label: 'Basic SEO setup', included: true },
      { label: 'Appointment / enquiry workflow', included: 'Advanced' },
      { label: 'Conversion-focused structure', included: true },
      { label: 'Google Analytics', included: true },
      { label: 'Lead collection & Google Sheets', included: true },
      { label: 'Advanced performance optimisation', included: true },
      { label: '30-day support', included: true },
      { label: 'Blog / content structure', included: true },
      { label: 'Basic automation', included: true },
      { label: 'Priority support', included: true },
    ],
  },
];

export default function Pricing() {
  const { ref, isVisible } = useScrollReveal();
  return (
    <section className="section-pad relative overflow-hidden">
      <div className="orb orb-lg animate-float" style={{ top: '-60px', left: '-80px' }} />
      <div className="orb orb-md animate-float-slow" style={{ bottom: '-40px', right: '-40px' }} />
      <div ref={ref}
        className={`relative z-10 max-w-6xl mx-auto px-4 sm:px-6 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
        <SectionHeader eyebrow="Investment" title="Website Packages" center
          subtitle="Transparent pricing focused on business outcomes — not technical jargon." />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 sm:gap-6 items-stretch">
          {plans.map((plan) => (
            <div key={plan.name}
              className={`relative rounded-2xl flex flex-col overflow-hidden ${
                plan.featured
                  ? 'bg-violet-600 ring-2 ring-violet-400/50 shadow-2xl shadow-violet-900/50'
                  : 'card'
              }`}>
              {plan.badge && (
                <div className="bg-yellow-400 text-yellow-900 text-[10px] sm:text-xs font-bold uppercase tracking-widest text-center py-1.5">
                  ⭐ {plan.badge}
                </div>
              )}
              <div className="p-5 sm:p-7 flex flex-col flex-1">
                <div className="mb-5 sm:mb-6">
                  <p className={`text-[10px] sm:text-xs font-bold uppercase tracking-widest mb-2 ${plan.featured ? 'text-violet-300' : 'text-violet-400'}`}>
                    {plan.name}
                  </p>
                  <p className={`font-display font-bold text-3xl sm:text-4xl mb-2 ${plan.featured ? 'text-white' : 'text-white'}`}>
                    {plan.price}
                  </p>
                  <p className={`text-sm font-semibold mb-1.5 ${plan.featured ? 'text-white' : 'text-white/80'}`}>
                    {plan.goal}
                  </p>
                  <p className={`text-xs leading-relaxed ${plan.featured ? 'text-white/60' : 'text-white/40'}`}>
                    {plan.description}
                  </p>
                </div>

                <div className={`h-px mb-4 sm:mb-5 ${plan.featured ? 'bg-white/15' : 'bg-white/[0.08]'}`} />

                <ul className="space-y-2 sm:space-y-2.5 flex-1 mb-6">
                  {plan.features.map((f) => {
                    const isString = typeof f.included === 'string';
                    const isTrue = f.included === true || isString;
                    return (
                      <li key={f.label} className={`flex items-start gap-2 text-xs sm:text-sm ${!isTrue ? 'opacity-25' : ''}`}>
                        {isTrue ? (
                          <span className={`mt-0.5 shrink-0 w-3.5 h-3.5 sm:w-4 sm:h-4 rounded-full flex items-center justify-center ${plan.featured ? 'bg-white/20' : 'bg-violet-500/20'}`}>
                            <Check size={8} strokeWidth={3} className={plan.featured ? 'text-white' : 'text-violet-400'} />
                          </span>
                        ) : (
                          <span className="mt-0.5 shrink-0 w-3.5 h-3.5 sm:w-4 sm:h-4 flex items-center justify-center">
                            <Minus size={9} className="text-white/30" />
                          </span>
                        )}
                        <span className={plan.featured ? 'text-white/85' : 'text-white/60'}>
                          {f.label}
                          {isString && (
                            <span className={`ml-1 text-[10px] font-semibold px-1.5 py-0.5 rounded-full ${
                              plan.featured ? 'bg-white/15 text-white/70' : 'bg-violet-500/15 text-violet-400'
                            }`}>{f.included}</span>
                          )}
                        </span>
                      </li>
                    );
                  })}
                </ul>

                <Link to="/contact"
                  className={`w-full text-center py-2.5 sm:py-3 rounded-full font-display font-semibold text-sm transition-all flex items-center justify-center gap-2 ${
                    plan.featured ? 'bg-white text-violet-700 hover:bg-violet-50' : 'btn-outline-violet'
                  }`}>
                  Get Started <ArrowRight size={14} />
                </Link>
              </div>
            </div>
          ))}
        </div>

        <p className="text-center text-xs text-white/25 mt-5">
          No commitment required. Free demo created before any payment.
        </p>
      </div>
    </section>
  );
}