import { ArrowUpRight, ExternalLink } from 'lucide-react';
import { Link } from 'react-router-dom';
import { getClassificationLabel, getClassificationClass } from '../../data/projects';

export default function ProjectCard({ project }) {
  const { id, title, category, classification, description, tags, gradient, accent, liveUrl } = project;
  return (
    <div className="card rounded-2xl overflow-hidden group">
      <div className={`relative h-40 sm:h-48 bg-gradient-to-br ${gradient} flex items-center justify-center overflow-hidden`}>
        <div className="absolute inset-0 opacity-40"
          style={{ backgroundImage: `radial-gradient(circle at 30% 40%, ${accent}50 0%, transparent 60%)` }} />
        <div className="absolute inset-0 opacity-[0.06]"
          style={{
            backgroundImage: `linear-gradient(rgba(255,255,255,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.5) 1px, transparent 1px)`,
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

        <div className="flex flex-wrap gap-1 mb-4">
          {tags.map((tag) => (
            <span key={tag} className="text-[10px] sm:text-xs px-2 sm:px-2.5 py-0.5 sm:py-1 rounded-full bg-white/[0.05] text-white/35 border border-white/[0.07]">
              {tag}
            </span>
          ))}
        </div>

        <div className="flex items-center gap-2 pt-3 border-t border-white/[0.06]">
          <Link to={`/work/${id}`}
            className="flex-1 flex items-center justify-center gap-1.5 py-2 rounded-lg bg-violet-600/20 border border-violet-500/20 text-violet-400 hover:bg-violet-600/30 transition-all text-xs font-semibold">
            Case Study <ArrowUpRight size={12} />
          </Link>
          {liveUrl ? (
            <a href={liveUrl} target="_blank" rel="noopener noreferrer"
              className="flex-1 flex items-center justify-center gap-1.5 py-2 rounded-lg bg-white/[0.05] border border-white/[0.08] text-white/45 hover:text-white hover:bg-white/[0.1] transition-all text-xs font-semibold">
              Live Demo <ExternalLink size={12} />
            </a>
          ) : (
            <div className="flex-1 flex items-center justify-center gap-1.5 py-2 rounded-lg bg-white/[0.05] border border-white/[0.08] text-white/25 text-xs font-semibold">
              Coming Soon
            </div>
          )}
        </div>
      </div>
    </div>
  );
}