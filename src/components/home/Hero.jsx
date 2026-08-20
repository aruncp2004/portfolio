import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16 sm:pt-20"
      style={{ background: 'linear-gradient(135deg, #0f0a1e 0%, #150d2e 50%, #0f0a1e 100%)' }}>

      <div className="orb orb-lg animate-float" style={{ top: '-100px', left: '-100px' }} />
      <div className="orb orb-lg animate-float-slow" style={{ bottom: '-120px', right: '-80px', animationDelay: '2s' }} />
      <div className="orb orb-md animate-float" style={{ top: '15%', right: '5%', animationDelay: '1s' }} />
      <div className="orb orb-sm animate-float-slow" style={{ bottom: '25%', left: '5%', animationDelay: '3s' }} />

      <div className="absolute inset-0 opacity-[0.025] pointer-events-none"
        style={{
          backgroundImage: `linear-gradient(rgba(167,139,250,0.8) 1px, transparent 1px),
                            linear-gradient(90deg, rgba(167,139,250,0.8) 1px, transparent 1px)`,
          backgroundSize: '60px 60px',
        }} />

      <div className="relative z-10 w-full max-w-5xl mx-auto px-4 sm:px-6 text-center">
        {/* Eyebrow */}
        <div className="animate-fade-up opacity-0-start inline-flex items-center gap-2 glass-card px-4 py-2 mb-6 sm:mb-8 rounded-full">
          <span className="w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full bg-violet-400 animate-pulse shrink-0" />
          <span className="text-[10px] sm:text-xs font-semibold text-violet-300 tracking-wider uppercase">Software Developer · Digital Builder</span>
        </div>

        {/* Headline */}
        <h1 className="animate-fade-up opacity-0-start delay-100 font-display font-bold text-4xl sm:text-5xl md:text-6xl lg:text-7xl leading-[1.05] tracking-tight text-white mb-4 sm:mb-6">
          I Build.<br />
          <span className="gradient-text">You Grow.</span>
        </h1>

        {/* Subtext */}
        <p className="animate-fade-up opacity-0-start delay-200 text-white/50 text-base sm:text-lg md:text-xl leading-relaxed max-w-2xl mx-auto mb-8 sm:mb-10 px-2">
          Websites, web applications and business software built around
          how your business actually works.
        </p>

        {/* CTAs */}
        <div className="animate-fade-up opacity-0-start delay-300 flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4">
          <Link to="/work" className="btn-primary text-sm sm:text-base px-6 sm:px-8 py-3 sm:py-3.5 w-full sm:w-auto justify-center">
            View My Work <ArrowRight size={16} />
          </Link>
          <Link to="/contact" className="btn-ghost text-sm sm:text-base px-6 sm:px-8 py-3 sm:py-3.5 w-full sm:w-auto justify-center">
            Start a Project
          </Link>
        </div>

        {/* Stats strip */}
        <div className="animate-fade-up opacity-0-start delay-400 mt-10 sm:mt-14">
          <div className="glass-card inline-grid grid-cols-3 gap-0 rounded-2xl overflow-hidden w-full max-w-sm sm:max-w-md mx-auto">
            {[
              { value: '₹8,999+', label: 'Starting From' },
              { value: 'Custom Built', label: 'For Your Business' },
              { value: 'Web · Software', label: 'Automation' },
            ].map((stat, i) => (
              <div key={stat.label}
                className={`text-center py-4 px-2 sm:px-4 ${i < 2 ? 'border-r border-white/10' : ''}`}>
                <p className="font-display font-bold text-sm sm:text-base text-white leading-tight">{stat.value}</p>
                <p className="text-[10px] sm:text-xs text-white/35 mt-0.5 uppercase tracking-wider leading-tight">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* WhatsApp float */}
      <a href="https://wa.me/919498096306" target="_blank" rel="noopener noreferrer"
        className="fixed bottom-5 right-4 sm:bottom-6 sm:right-6 z-50 w-12 h-12 sm:w-14 sm:h-14 rounded-full flex items-center justify-center shadow-xl hover:scale-110 transition-transform"
        style={{ background: '#25D366' }} aria-label="Chat on WhatsApp">
        <svg viewBox="0 0 32 32" width="24" height="24" fill="white" xmlns="http://www.w3.org/2000/svg">
          <path d="M16.003 2.667C8.636 2.667 2.667 8.636 2.667 16c0 2.363.632 4.573 1.732 6.484L2.667 29.333l7.07-1.854A13.267 13.267 0 0 0 16.003 29.333c7.364 0 13.33-5.97 13.33-13.333S23.367 2.667 16.003 2.667zm0 24A10.614 10.614 0 0 1 10.3 25.04l-.38-.226-3.938 1.032.99-3.848-.247-.396A10.614 10.614 0 0 1 5.334 16c0-5.884 4.787-10.667 10.669-10.667S26.669 10.116 26.669 16 21.885 26.667 16.003 26.667zm5.834-7.976c-.32-.16-1.892-.933-2.185-1.04-.293-.106-.506-.16-.72.16-.213.32-.826 1.04-.013 1.253-.293.107-.16.32-.48.16-.32-.16-1.35-.498-2.572-1.587-.951-.848-1.592-1.895-1.778-2.215-.186-.32-.02-.493.14-.652.144-.143.32-.373.48-.56.16-.186.213-.32.32-.533.107-.213.053-.4-.027-.56-.08-.16-.72-1.733-.986-2.373-.26-.626-.523-.54-.72-.55l-.613-.01c-.213 0-.56.08-.853.4-.293.32-1.12 1.093-1.12 2.666s1.147 3.093 1.307 3.307c.16.213 2.253 3.44 5.46 4.826.763.33 1.36.527 1.824.674.767.243 1.465.209 2.017.127.615-.092 1.892-.774 2.158-1.52.267-.747.267-1.387.187-1.52-.08-.133-.293-.213-.613-.373z"/>
        </svg>
      </a>
    </section>
  );
}