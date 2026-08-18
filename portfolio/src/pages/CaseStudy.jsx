import { useParams, Link, useNavigate } from 'react-router-dom';
import { ArrowLeft, ArrowRight, ExternalLink, Check, ChevronRight } from 'lucide-react';
import { getCaseStudy } from '../data/caseStudies';
import { getClassificationLabel, getClassificationClass } from '../data/projects';

export default function CaseStudy() {
  const { id } = useParams();
  const navigate = useNavigate();
  const cs = getCaseStudy(id);

  if (!cs) {
    return (
      <main className="pt-32 pb-24 relative min-h-screen flex items-center justify-center"
        style={{ background: 'linear-gradient(135deg, #0f0a1e 0%, #150d2e 100%)' }}>
        <div className="text-center">
          <p className="text-white/40 text-lg mb-4">Project not found.</p>
          <Link to="/work" className="btn-primary">Back to Work</Link>
        </div>
      </main>
    );
  }

  return (
    <main className="relative min-h-screen"
      style={{ background: 'linear-gradient(135deg, #0f0a1e 0%, #150d2e 50%, #0f0a1e 100%)' }}>

      {/* Orbs */}
      <div className="orb orb-lg animate-float fixed" style={{ top: '-80px', right: '-60px', opacity: 0.6 }} />
      <div className="orb orb-md animate-float-slow fixed" style={{ bottom: '20%', left: '-40px', opacity: 0.4 }} />

      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 pt-24 sm:pt-32 pb-16 sm:pb-24">

        {/* Back button */}
        <button onClick={() => navigate('/work')}
          className="inline-flex items-center gap-2 text-white/40 hover:text-white text-sm font-medium transition-colors mb-8 sm:mb-12">
          <ArrowLeft size={16} /> Back to Work
        </button>

        {/* ── 01 PROJECT OVERVIEW ── */}
        <div className="mb-12 sm:mb-16">
          <div className="flex flex-wrap items-center gap-2 mb-4">
            <span className={`badge ${getClassificationClass(cs.classification)}`}>
              {getClassificationLabel(cs.classification)}
            </span>
            <span className="text-white/25 text-xs">{cs.type}</span>
          </div>

          <h1 className="font-display font-bold text-3xl sm:text-4xl md:text-5xl text-white leading-tight mb-4">
            {cs.title}
          </h1>
          <p className="text-white/50 text-base sm:text-lg leading-relaxed max-w-2xl mb-6">
            {cs.tagline}
          </p>

          <div className="flex flex-wrap items-center gap-3 sm:gap-4 mb-8">
            <div className="glass-card px-4 py-2 rounded-full">
              <span className="text-white/35 text-xs">Role: </span>
              <span className="text-white/70 text-xs font-medium">{cs.role}</span>
            </div>
            <div className="glass-card px-4 py-2 rounded-full">
              <span className="text-white/35 text-xs">Status: </span>
              <span className="text-white/70 text-xs font-medium">{cs.status}</span>
            </div>
          </div>

          {/* Project visual placeholder */}
          <div className={`relative w-full h-48 sm:h-64 md:h-80 rounded-2xl bg-gradient-to-br ${cs.gradient} overflow-hidden flex items-center justify-center`}>
            <div className="absolute inset-0 opacity-[0.06]"
              style={{
                backgroundImage: `linear-gradient(rgba(0,0,0,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(0,0,0,0.5) 1px, transparent 1px)`,
                backgroundSize: '28px 28px',
              }} />
            <div className="absolute inset-0" style={{ backgroundImage: `radial-gradient(circle at 30% 40%, ${cs.accent}40 0%, transparent 60%)` }} />
            <div className="relative z-10 text-center">
              <p className="font-display font-bold text-2xl sm:text-3xl text-gray-700/60">{cs.title}</p>
              <p className="text-gray-600/40 text-sm mt-1">Add screenshot here</p>
            </div>
            {cs.liveUrl && (
              <a href={cs.liveUrl} target="_blank" rel="noopener noreferrer"
                className="absolute bottom-4 right-4 btn-primary text-xs py-2 px-4 z-20">
                View Live Demo <ExternalLink size={12} />
              </a>
            )}
          </div>
        </div>

        <div className="space-y-10 sm:space-y-14">

          {/* ── 02 THE BUSINESS ── */}
          <Section eyebrow="02 — The Business" title="Context">
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              {[
                { label: 'What They Do', value: cs.business.what },
                { label: 'Customers', value: cs.business.customers },
                { label: 'Context', value: cs.business.context },
              ].map((b) => (
                <div key={b.label} className="glass-card p-4 sm:p-5 rounded-xl">
                  <p className="text-white/30 text-xs font-semibold uppercase tracking-wider mb-2">{b.label}</p>
                  <p className="text-white/60 text-sm leading-relaxed">{b.value}</p>
                </div>
              ))}
            </div>
          </Section>

          {/* ── 03 THE PROBLEM ── */}
          <Section eyebrow="03 — The Problem" title="What Wasn't Working">
            <div className="glass-card rounded-xl p-5 sm:p-6 border-l-2 sm:border-l-4" style={{ borderColor: cs.accent }}>
              <p className="text-white/65 text-sm sm:text-base leading-relaxed">{cs.problem}</p>
            </div>
          </Section>

          {/* ── 04 PAIN POINTS ── */}
          <Section eyebrow="04 — Pain Points" title="Specific Problems">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {cs.painPoints.map((p, i) => (
                <div key={i} className="glass-card rounded-xl p-4 flex gap-3 items-start">
                  <div className="w-5 h-5 rounded-full bg-red-500/20 border border-red-500/30 flex items-center justify-center shrink-0 mt-0.5">
                    <div className="w-1.5 h-1.5 rounded-full bg-red-400" />
                  </div>
                  <p className="text-white/55 text-sm leading-relaxed">{p}</p>
                </div>
              ))}
            </div>
          </Section>

          {/* ── 05 GOALS ── */}
          <Section eyebrow="05 — Goals" title="What This Needed to Achieve">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {cs.goals.map((g, i) => (
                <div key={i} className="glass-card rounded-xl p-4 flex gap-3 items-start">
                  <div className="w-5 h-5 rounded-full flex items-center justify-center shrink-0 mt-0.5"
                    style={{ background: `${cs.accent}25`, border: `1px solid ${cs.accent}40` }}>
                    <Check size={10} style={{ color: cs.accent }} strokeWidth={3} />
                  </div>
                  <p className="text-white/55 text-sm leading-relaxed">{g}</p>
                </div>
              ))}
            </div>
          </Section>

          {/* ── 06 SOLUTION ── */}
          <Section eyebrow="06 — The Solution" title="What Was Built">
            <div className="glass-card rounded-xl p-5 sm:p-6">
              <p className="text-white/65 text-sm sm:text-base leading-relaxed">{cs.solution}</p>
            </div>
          </Section>

          {/* ── 07 KEY FEATURES ── */}
          <Section eyebrow="07 — Key Features" title="What It Does">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {cs.features.map((f, i) => (
                <div key={i} className="glass-card rounded-xl p-5">
                  <div className="flex items-center gap-2 mb-2">
                    <div className="w-1.5 h-4 rounded-full shrink-0" style={{ background: cs.accent }} />
                    <h3 className="font-display font-semibold text-white text-sm">{f.title}</h3>
                  </div>
                  <p className="text-white/45 text-sm leading-relaxed pl-3.5">{f.description}</p>
                </div>
              ))}
            </div>
          </Section>

          {/* ── 08 DESIGN DECISIONS ── */}
          <Section eyebrow="08 — Design Decisions" title="Why It Was Built This Way">
            <div className="space-y-3">
              {cs.designDecisions.map((d, i) => (
                <div key={i} className="glass-card rounded-xl p-4 sm:p-5 grid grid-cols-1 sm:grid-cols-5 gap-3">
                  <div className="sm:col-span-2">
                    <p className="font-display font-semibold text-white text-sm">{d.decision}</p>
                  </div>
                  <div className="sm:col-span-3 flex gap-2 items-start">
                    <ChevronRight size={14} className="text-white/25 shrink-0 mt-0.5" />
                    <p className="text-white/45 text-sm leading-relaxed">{d.reason}</p>
                  </div>
                </div>
              ))}
            </div>
          </Section>

          {/* ── 09 FLOW ── */}
          <Section eyebrow="09 — User Flow" title="How It Works">
            <div className="glass-card rounded-xl p-5 sm:p-6">
              <div className="flex flex-col sm:flex-row items-start sm:items-center gap-0 sm:gap-0 flex-wrap">
                {cs.flow.map((step, i) => (
                  <div key={i} className="flex flex-row sm:flex-col items-center gap-2 sm:gap-1">
                    <div className="flex flex-col sm:flex-row items-center gap-1 sm:gap-0">
                      <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-xl flex items-center justify-center text-xs font-bold text-white shrink-0"
                        style={{ background: `${cs.accent}30`, border: `1px solid ${cs.accent}40` }}>
                        {i + 1}
                      </div>
                      {i < cs.flow.length - 1 && (
                        <div className="w-px h-4 sm:w-6 sm:h-px bg-white/10 sm:mx-1 shrink-0" />
                      )}
                    </div>
                    <div className="text-left sm:text-center pb-3 sm:pb-0">
                      <p className="text-white/70 text-xs font-semibold leading-tight">{step.step}</p>
                      <p className="text-white/30 text-[10px] leading-tight mt-0.5 hidden sm:block">{step.sub}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </Section>

          {/* ── 10 TECH STACK ── */}
          <Section eyebrow="10 — Technology" title="Built With">
            <div className="flex flex-wrap gap-2">
              {cs.tech.map((t) => (
                <span key={t} className="glass-card px-4 py-2 rounded-full text-sm text-white/60 font-medium">
                  {t}
                </span>
              ))}
            </div>
          </Section>

          {/* ── 11 CHALLENGES ── */}
          <Section eyebrow="11 — Challenges & Solutions" title="Engineering Decisions">
            <div className="space-y-3">
              {cs.challenges.map((c, i) => (
                <div key={i} className="glass-card rounded-xl p-5 grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <p className="text-xs font-semibold text-red-400/70 uppercase tracking-wider mb-1.5">Challenge</p>
                    <p className="text-white/60 text-sm leading-relaxed">{c.challenge}</p>
                  </div>
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-wider mb-1.5" style={{ color: `${cs.accent}aa` }}>Solution</p>
                    <p className="text-white/60 text-sm leading-relaxed">{c.solution}</p>
                  </div>
                </div>
              ))}
            </div>
          </Section>

          {/* ── 12 OUTCOME ── */}
          <Section eyebrow="12 — Outcome" title={cs.outcome.type === 'concept' ? 'What This Demonstrates' : 'Results'}>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {cs.outcome.points.map((p, i) => (
                <div key={i} className="glass-card rounded-xl p-4 flex gap-3 items-start">
                  <div className="w-5 h-5 rounded-full flex items-center justify-center shrink-0 mt-0.5"
                    style={{ background: `${cs.accent}20`, border: `1px solid ${cs.accent}35` }}>
                    <Check size={10} style={{ color: cs.accent }} strokeWidth={3} />
                  </div>
                  <p className="text-white/55 text-sm leading-relaxed">{p}</p>
                </div>
              ))}
            </div>
          </Section>

          {/* ── 13 IMPROVEMENTS ── */}
          <Section eyebrow="13 — What Could Be Improved" title="Next Steps">
            <div className="glass-card rounded-xl p-5 sm:p-6 space-y-2.5">
              {cs.improvements.map((item, i) => (
                <div key={i} className="flex gap-2.5 items-start">
                  <ChevronRight size={14} className="shrink-0 mt-0.5" style={{ color: cs.accent }} />
                  <p className="text-white/45 text-sm leading-relaxed">{item}</p>
                </div>
              ))}
            </div>
          </Section>

          {/* ── 14 CTA ── */}
          <div className="glass-card rounded-2xl p-7 sm:p-10 text-center">
            <p className="eyebrow mb-3">Have a Similar Problem?</p>
            <h2 className="font-display font-bold text-2xl sm:text-3xl text-white mb-3 leading-tight">
              Let's discuss how I can build<br className="hidden sm:block" /> a solution for your business.
            </h2>
            <p className="text-white/40 text-sm sm:text-base mb-7 max-w-md mx-auto">
              Whether you need a website, CRM, ERP or custom automation — I'll suggest the right approach based on your requirements.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
              <Link to="/contact" className="btn-primary px-7 py-3 text-sm sm:text-base w-full sm:w-auto justify-center">
                Start a Project <ArrowRight size={16} />
              </Link>
              {cs.liveUrl && (
                <a href={cs.liveUrl} target="_blank" rel="noopener noreferrer"
                  className="btn-ghost px-7 py-3 text-sm sm:text-base w-full sm:w-auto justify-center">
                  View Live Demo <ExternalLink size={15} />
                </a>
              )}
            </div>
          </div>

        </div>
      </div>
    </main>
  );
}

function Section({ eyebrow, title, children }) {
  return (
    <div>
      <p className="eyebrow mb-1">{eyebrow}</p>
      <h2 className="font-display font-bold text-xl sm:text-2xl text-white mb-5 leading-tight">{title}</h2>
      {children}
    </div>
  );
}