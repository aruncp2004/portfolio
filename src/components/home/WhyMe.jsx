import { Heart, Palette, Smartphone, Gauge, MessageSquare, Gift } from 'lucide-react';
import SectionHeader from '../shared/SectionHeader';
import { useScrollReveal } from '../../hooks/useScrollReveal';

const reasons = [
  { icon: Heart, title: 'Business-Focused Design', description: 'Built around your business goals — not just a template with your name on it.' },
  { icon: Palette, title: 'Custom Design', description: 'Every website is designed from scratch around your brand, services and customers.' },
  { icon: Smartphone, title: 'Mobile-First', description: 'Designed for phones first — because most customers browse on mobile.' },
  { icon: Gauge, title: 'Performance Focused', description: 'Fast-loading, technically clean websites built with modern tools.' },
  { icon: MessageSquare, title: 'Direct Communication', description: 'You work directly with me — no agency overhead or middlemen.' },
  { icon: Gift, title: 'Free Demo First', description: 'I create a personalised website demo for your business before any commitment.' },
];

export default function WhyMe() {
  const { ref, isVisible } = useScrollReveal();
  return (
    <section className="section-pad relative overflow-hidden">
      <div className="orb orb-md animate-float-slow" style={{ top: '20%', left: '-40px' }} />
      <div ref={ref}
        className={`relative z-10 max-w-6xl mx-auto px-4 sm:px-6 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
        <div className="glass-card rounded-3xl p-6 sm:p-8 md:p-12">
          <SectionHeader eyebrow="Why Work With Me" title="What Makes This Different"
            subtitle="A focused, honest approach to building websites — without the agency complexity." />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-7">
            {reasons.map((r, i) => {
              const Icon = r.icon;
              return (
                <div key={i} className="flex gap-3 sm:gap-4">
                  <div className="shrink-0 w-8 h-8 sm:w-9 sm:h-9 rounded-lg bg-violet-500/15 border border-violet-500/20 flex items-center justify-center mt-0.5">
                    <Icon size={15} className="text-violet-400" />
                  </div>
                  <div>
                    <h3 className="font-display font-semibold text-white text-sm mb-1">{r.title}</h3>
                    <p className="text-xs sm:text-sm text-white/45 leading-relaxed">{r.description}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}