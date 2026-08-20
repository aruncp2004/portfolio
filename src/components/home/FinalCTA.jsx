import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { useScrollReveal } from '../../hooks/useScrollReveal';

export default function FinalCTA() {
  const { ref, isVisible } = useScrollReveal();
  return (
    <section className="section-pad relative overflow-hidden">
      <div ref={ref}
        className={`relative z-10 max-w-6xl mx-auto px-4 sm:px-6 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
        <div className="relative rounded-2xl sm:rounded-3xl bg-violet-600 p-8 sm:p-10 md:p-16 text-center overflow-hidden">
          <div className="orb orb-lg animate-float" style={{ top: '-80px', left: '-60px', opacity: 0.4 }} />
          <div className="orb orb-md animate-float-slow" style={{ bottom: '-60px', right: '-40px', opacity: 0.3 }} />
          <div className="relative z-10">
            <p className="text-[10px] sm:text-xs font-bold text-violet-300 uppercase tracking-widest mb-3 sm:mb-4">Let's Work Together</p>
            <h2 className="font-display font-bold text-2xl sm:text-3xl md:text-5xl leading-tight text-white mb-4 sm:mb-5">
              Ready to give your business<br className="hidden sm:block" /> a better website?
            </h2>
            <p className="text-white/60 text-sm sm:text-base md:text-lg max-w-xl mx-auto mb-8 sm:mb-10">
              Get a free, personalised website demo — no commitment, no payment required.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4">
              <Link to="/contact"
                className="inline-flex items-center justify-center gap-2 bg-white text-violet-700 font-display font-semibold px-6 sm:px-8 py-3 sm:py-3.5 rounded-full hover:bg-violet-50 transition-all text-sm sm:text-base w-full sm:w-auto">
                Get a Free Website Demo <ArrowRight size={16} />
              </Link>
              <a href="https://wa.me/919498096306" target="_blank" rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 border border-white/30 text-white font-display font-semibold px-6 sm:px-8 py-3 sm:py-3.5 rounded-full hover:bg-white/10 transition-all text-sm sm:text-base w-full sm:w-auto">
                <svg viewBox="0 0 32 32" width="18" height="18" fill="white"><path d="M16.003 2.667C8.636 2.667 2.667 8.636 2.667 16c0 2.363.632 4.573 1.732 6.484L2.667 29.333l7.07-1.854A13.267 13.267 0 0 0 16.003 29.333c7.364 0 13.33-5.97 13.33-13.333S23.367 2.667 16.003 2.667zm0 24A10.614 10.614 0 0 1 10.3 25.04l-.38-.226-3.938 1.032.99-3.848-.247-.396A10.614 10.614 0 0 1 5.334 16c0-5.884 4.787-10.667 10.669-10.667S26.669 10.116 26.669 16 21.885 26.667 16.003 26.667zm5.834-7.976c-.32-.16-1.892-.933-2.185-1.04-.293-.106-.506-.16-.72.16-.213.32-.826 1.04-.013 1.253-.293.107-.16.32-.48.16-.32-.16-1.35-.498-2.572-1.587-.951-.848-1.592-1.895-1.778-2.215-.186-.32-.02-.493.14-.652.144-.143.32-.373.48-.56.16-.186.213-.32.32-.533.107-.213.053-.4-.027-.56-.08-.16-.72-1.733-.986-2.373-.26-.626-.523-.54-.72-.55l-.613-.01c-.213 0-.56.08-.853.4-.293.32-1.12 1.093-1.12 2.666s1.147 3.093 1.307 3.307c.16.213 2.253 3.44 5.46 4.826.763.33 1.36.527 1.824.674.767.243 1.465.209 2.017.127.615-.092 1.892-.774 2.158-1.52.267-.747.267-1.387.187-1.52-.08-.133-.293-.213-.613-.373z"/></svg>
                Chat on WhatsApp
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}