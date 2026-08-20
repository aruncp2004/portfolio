import { useState } from 'react';
import { projects } from '../data/projects';
import ProjectCard from '../components/shared/ProjectCard';

const filters = ['All', 'Website Concept', 'Professional Experience'];

export default function Work() {
  const [active, setActive] = useState('All');

  const filtered = projects.filter((p) => {
    if (active === 'All') return true;
    if (active === 'Website Concept') return p.classification === 'concept';
    if (active === 'Professional Experience') return p.classification === 'experience';
    return true;
  });

  return (
    <main className="pt-24 sm:pt-32 pb-16 sm:pb-24 relative min-h-screen"
      style={{ background: 'linear-gradient(135deg, #0f0a1e 0%, #150d2e 50%, #0f0a1e 100%)' }}>
      <div className="orb orb-lg animate-float" style={{ top: '-60px', right: '-60px' }} />
      <div className="orb orb-md animate-float-slow" style={{ bottom: '20%', left: '-40px' }} />

      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6">
        <div className="mb-10 sm:mb-14">
          <p className="eyebrow">Portfolio</p>
          <h1 className="font-display font-bold text-3xl sm:text-4xl md:text-5xl text-white mb-3 sm:mb-4">Projects & Work</h1>
          <p className="text-white/40 text-sm sm:text-base max-w-xl leading-relaxed">
            Website concepts, professional experience and client work in healthcare and business web development.
          </p>
        </div>

        <div className="flex flex-wrap gap-2 mb-8 sm:mb-10">
          {filters.map((f) => (
            <button key={f} onClick={() => setActive(f)}
              className={`text-xs sm:text-sm font-medium px-3 sm:px-4 py-1.5 sm:py-2 rounded-full transition-all ${
                active === f ? 'bg-violet-600 text-white border border-violet-500' : 'card text-white/50 hover:text-white'
              }`}>
              {f}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
          {filtered.map((project, i) => (
            <ProjectCard key={project.id} project={project} index={i} />
          ))}
        </div>

        {filtered.length === 0 && (
          <div className="text-center py-16 sm:py-20 text-white/25 text-sm">No projects in this category yet.</div>
        )}
      </div>
    </main>
  );
}