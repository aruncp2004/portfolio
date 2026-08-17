import { Globe, Layout, MessageSquare, Smartphone, Star } from 'lucide-react';
import SectionHeader from '../shared/SectionHeader';
import { useScrollReveal } from '../../hooks/useScrollReveal';

const problems = [
  { icon: Globe, title: 'No Professional Online Presence', description: 'Many businesses are found only through Google Maps or social media. A dedicated website creates a permanent, professional digital home.' },
  { icon: Layout, title: "Visitors Can't Easily Understand Services", description: 'A well-structured website clearly presents your services, helping customers decide with confidence before they even call.' },
  { icon: MessageSquare, title: 'Difficult to Get Enquiries', description: 'WhatsApp buttons, contact forms and click-to-call make it simple for customers to reach out at any point during their visit.' },
  { icon: Smartphone, title: 'Poor Mobile Experience', description: 'Most customers browse from their phones. A mobile-first website ensures a smooth experience on any device.' },
  { icon: Star, title: 'Weak First Impression', description: 'A modern, professional website immediately builds trust before a customer steps through the door or makes a call.' },
];

export default function Problems() {
  const { ref, isVisible } = useScrollReveal();
  return (
    <section className="section-pad relative overflow-hidden">
      <div className="orb orb-lg animate-float-slow" style={{ bottom: '-80px', left: '-60px' }} />
      <div ref={ref}
        className={`relative z-10 max-w-6xl mx-auto px-4 sm:px-6 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
        <SectionHeader eyebrow="Why It Matters" title="Problems We Help Solve"
          subtitle="Common challenges businesses face online — and how a professional website addresses them." />
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5">
          {problems.map((p, i) => {
            const Icon = p.icon;
            return (
              <div key={i} className="card p-5 sm:p-6">
                <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-xl bg-violet-500/15 flex items-center justify-center mb-3 sm:mb-4">
                  <Icon size={18} className="text-violet-400" />
                </div>
                <h3 className="font-display font-semibold text-white text-sm sm:text-base mb-2">{p.title}</h3>
                <p className="text-xs sm:text-sm text-white/45 leading-relaxed">{p.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}