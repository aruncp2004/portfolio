import SectionHeader from '../shared/SectionHeader';
import { useScrollReveal } from '../../hooks/useScrollReveal';

const steps = [
  { num: '01', phase: 'Discover', title: 'Understand the Business', description: "We start with your business, customers, services, current online presence and the problems you're trying to solve." },
  { num: '02', phase: 'Plan', title: 'Define the Right Solution', description: 'We decide what you actually need — website, lead system, CRM, ERP or automation — and define the scope before development begins.' },
  { num: '03', phase: 'Prototype', title: 'See It Before We Build It', description: 'You get a visual concept of the solution first. We refine the direction before development starts.' },
  { num: '04', phase: 'Build', title: 'Develop for Real Use', description: 'We build the solution with responsive design, performance, integrations and real business workflows in mind.' },
  { num: '05', phase: 'Test & Refine', title: 'Make Sure It Works', description: 'We test across devices, check forms and integrations, fix issues and incorporate your feedback.' },
  { num: '06', phase: 'Launch', title: 'Go Live & Get Set Up', description: 'We handle deployment, domain configuration, analytics and the required initial setup.' },
  { num: '07', phase: 'Improve', title: 'Keep Growing', description: 'After launch, we identify improvements, automate repetitive work and add new capabilities as your business grows.' },
];

export default function Process() {
  const { ref, isVisible } = useScrollReveal();
  return (
    <section id="process" className="section-pad relative overflow-hidden">
      <div className="orb orb-lg animate-float" style={{ bottom: '-100px', right: '-80px' }} />
      <div ref={ref}
        className={`relative z-10 max-w-6xl mx-auto px-4 sm:px-6 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
        <SectionHeader eyebrow="How It Works" title="From Business Problem to Digital Solution"
          subtitle="A practical process focused on understanding what your business actually needs — not just building a website." />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5">
          {steps.map((step, i) => (
            <div key={i} className="card p-5 sm:p-6">
              <div className="flex items-center gap-3 mb-3 sm:mb-4">
                <span className="w-8 h-8 sm:w-9 sm:h-9 rounded-lg bg-violet-500/15 flex items-center justify-center font-display font-bold text-violet-400 text-xs shrink-0">
                  {step.num}
                </span>
                <span className="text-[10px] sm:text-xs font-bold text-violet-400/70 uppercase tracking-widest">{step.phase}</span>
              </div>
              <h3 className="font-display font-bold text-white text-sm sm:text-base mb-2">{step.title}</h3>
              <p className="text-xs sm:text-sm text-white/45 leading-relaxed">{step.description}</p>
            </div>
          ))}
        </div>

        <div className="mt-6 sm:mt-10 glass-card rounded-2xl p-6 sm:p-8 md:p-10">
          <p className="eyebrow mb-4 sm:mb-5">Why This Is Different</p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="bg-white/[0.04] rounded-xl p-4 sm:p-5">
              <p className="text-xs font-semibold text-white/30 uppercase tracking-wider mb-2">Before</p>
              <p className="text-white/60 text-sm leading-relaxed">"I build websites." — A generic service that could apply to anyone.</p>
            </div>
            <div className="bg-violet-500/10 rounded-xl p-4 sm:p-5 border border-violet-500/20">
              <p className="text-xs font-semibold text-violet-400/70 uppercase tracking-wider mb-2">Now</p>
              <p className="text-white text-sm leading-relaxed">"I understand your business → determine what you need → show you the solution → build it → launch it → improve it."</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}