import { Briefcase } from 'lucide-react';
import SectionHeader from '../shared/SectionHeader';
import { useScrollReveal } from '../../hooks/useScrollReveal';

export default function Experience() {
  const { ref, isVisible } = useScrollReveal();
  return (
    <section className="section-pad relative overflow-hidden">
      <div className="orb orb-md animate-float-slow" style={{ top: '-40px', left: '-40px' }} />
      <div ref={ref}
        className={`relative z-10 max-w-6xl mx-auto px-4 sm:px-6 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
        <SectionHeader eyebrow="Background" title="Professional Experience" />
        <div className="card p-6 sm:p-8 md:p-10">
          <div className="flex flex-col sm:flex-row gap-5 sm:gap-8">
            <div className="shrink-0 w-12 h-12 sm:w-14 sm:h-14 rounded-2xl bg-amber-500/10 border border-amber-500/20 flex items-center justify-center">
              <Briefcase size={22} className="text-amber-400" />
            </div>
            <div>
              <h3 className="font-display font-bold text-white text-xl sm:text-2xl mb-1">
                Websites. Software. Business Systems.
              </h3>
              <p className="eyebrow mb-3 sm:mb-4">Professional Web & Software Development</p>
              <p className="text-white/45 text-sm leading-relaxed mb-2 max-w-2xl">
                I develop and deploy websites, web applications and business software for real-world environments — from customer-facing websites and analytics integrations to internal systems, automation and ongoing improvements.
              </p>
              <p className="text-white/45 text-sm leading-relaxed mb-5 max-w-2xl">
                My experience includes building responsive interfaces, integrating APIs and third-party services, developing business workflows, and maintaining production applications.
              </p>
              <div className="flex flex-wrap gap-2">
                {['React', 'Node.js', 'HTML/CSS/JS', 'REST APIs', 'Google Analytics', 'SEO', 'Business Automation', 'Responsive Design', 'Performance Optimisation', 'Git'].map((skill) => (
                  <span key={skill} className="text-xs px-2.5 sm:px-3 py-1 sm:py-1.5 rounded-full bg-violet-500/10 text-violet-300 border border-violet-500/15">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}