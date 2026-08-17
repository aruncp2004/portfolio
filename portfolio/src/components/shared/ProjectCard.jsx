import { ArrowUpRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { getClassificationLabel, getClassificationClass } from '../../data/projects';

export default function ProjectCard({ project }) {
  const { title, category, classification, description, tags, gradient, accent } = project;
  return (
    <div className="card rounded-2xl overflow-hidden group">
      <div className={`relative h-40 sm:h-48 bg-gradient-to-br ${gradient} flex items-center justify-center overflow-hidden`}>
        <div className="absolute inset-0 opacity-40"
          style={{ backgroundImage: `radial-gradient(circle at 30% 40%, ${accent}50 0%, transparent 60%)` }} />
        <div className="absolute inset-0 opacity-[0.06]"
          style={{
            backgroundImage: `linear-gradient(rgba(255,255,255,0.5) 1px, transparent 1px),
                              linear-gradient(90deg, rgba(255,255,255,0.5) 1px, transparent 1px)`,
            backgroundSize: '28px 28px',
          }} />
        <span className="relative z-10 font-display font-semibold text-xs sm:text-sm px-3 sm:px-4 py-1.5 sm:py-2 rounded-full bg-white/80 text-gray-700 shadow-sm">
          {category}
        </span>
      </div>
      <div className="p-4 sm:p-6">
        <div className="flex items-start justify-between gap-2 mb-2">
          <h3 className="font-display font-bold text-white text-sm sm:text-base group-hover:text-violet-400 transition-colors leading-snug">
            {title}
          </h3>
          <span className={`badge ${getClassificationClass(classification)} shrink-0 text-[10px] sm:text-xs`}>
            {getClassificationLabel(classification)}
          </span>
        </div>
        <p className="text-xs sm:text-sm text-white/45 leading-relaxed mb-4">{description}</p>
        <div className="flex items-center justify-between gap-2">
          <div className="flex flex-wrap gap-1 sm:gap-1.5">
            {tags.map((tag) => (
              <span key={tag} className="text-[10px] sm:text-xs px-2 sm:px-2.5 py-0.5 sm:py-1 rounded-full bg-white/[0.05] text-white/35 border border-white/[0.07]">
                {tag}
              </span>
            ))}
          </div>
          <Link to="/work"
            className="shrink-0 w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-violet-600/20 flex items-center justify-center text-violet-400 hover:bg-violet-600 hover:text-white transition-all"
            aria-label={`View ${title}`}>
            <ArrowUpRight size={13} />
          </Link>
        </div>
      </div>
    </div>
  );
}