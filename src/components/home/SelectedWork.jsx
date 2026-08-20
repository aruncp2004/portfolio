import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { projects } from '../../data/projects';
import ProjectCard from '../shared/ProjectCard';
import SectionHeader from '../shared/SectionHeader';
import { useScrollReveal } from '../../hooks/useScrollReveal';

export default function SelectedWork() {
  const { ref, isVisible } = useScrollReveal();
  return (
    <section className="section-pad relative overflow-hidden">
      <div className="orb orb-md animate-float" style={{ top: '-60px', right: '5%' }} />
      <div ref={ref}
        className={`relative z-10 max-w-6xl mx-auto px-4 sm:px-6 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
        <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2 sm:gap-4 mb-10 sm:mb-14">
          <SectionHeader eyebrow="Selected Work" title="Projects & Concepts"
            subtitle="Website concepts and professional experience across healthcare and business web development." />
          <Link to="/work" className="flex items-center gap-1.5 text-sm font-semibold text-violet-400 hover:text-violet-300 transition-colors shrink-0 sm:mt-8 sm:-mb-14">
            View all <ArrowRight size={14} />
          </Link>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
          {projects.slice(0, 4).map((project, i) => (
            <ProjectCard key={project.id} project={project} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}