import { Link } from 'react-router-dom';
import { ArrowRight, MapPin } from 'lucide-react';

export default function About() {
  return (
    <main className="pt-24 sm:pt-32 pb-16 sm:pb-24 relative min-h-screen"
      style={{ background: 'linear-gradient(135deg, #0f0a1e 0%, #150d2e 50%, #0f0a1e 100%)' }}>

      {/* Orbs */}
      <div className="orb orb-lg animate-float" style={{ top: '-60px', right: '-60px' }} />
      <div className="orb orb-md animate-float-slow" style={{ bottom: '20%', left: '-40px' }} />

      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6">

        {/* Eyebrow */}
        <p className="eyebrow mb-0">About</p>

        <div className="mt-8 sm:mt-12 grid grid-cols-1 lg:grid-cols-2 gap-10 sm:gap-14 lg:gap-16 items-start">

          {/* LEFT — Photo */}
          <div className="w-full max-w-sm mx-auto lg:max-w-none">
            <div className="relative w-full aspect-[3/4] rounded-2xl overflow-hidden card">
              <img
                src="/images/profile.jpeg"
                alt="Arun Kumar"
                className="w-full h-full object-cover object-center"
                onError={(e) => {
                  e.target.style.display = 'none';
                  e.target.nextSibling.style.display = 'flex';
                }}
              />
              {/* Placeholder shown only if image missing */}
              <div className="absolute inset-0 hidden flex-col items-center justify-center"
                style={{ background: 'linear-gradient(135deg, rgba(124,58,237,0.2) 0%, rgba(167,139,250,0.1) 100%)' }}>
                <span className="font-display font-bold text-7xl gradient-text">AK</span>
                <p className="text-white/25 text-xs mt-3 tracking-widest uppercase">
                  Add photo to<br />public/images/profile.jpeg
                </p>
              </div>
            </div>
          </div>

          {/* RIGHT — Content */}
          <div className="flex flex-col justify-center">

            <h1 className="font-display font-bold text-3xl sm:text-4xl md:text-5xl text-white leading-tight mb-5">
              Hi, I'm Arun Kumar.
            </h1>

            <p className="text-white/60 text-base sm:text-lg leading-relaxed mb-4">
              Software Developer based in Chennai, building websites,
              web applications and business software.
            </p>

            <p className="text-white/40 text-sm sm:text-base leading-relaxed mb-8">
              I focus on understanding the problem first and building
              a practical solution around the way the business works.
            </p>

            {/* Capability line */}
            <p className="text-violet-400 font-display font-semibold text-sm tracking-widest uppercase mb-8">
              Web · Software · Automation
            </p>

            {/* Info */}
            <div className="flex flex-col gap-2 mb-10">
              <div className="flex items-center gap-2 text-white/35 text-sm">
                <MapPin size={13} className="text-violet-400 shrink-0" />
                Chennai, India
              </div>
              <div className="flex items-center gap-2 text-white/35 text-sm">
                <span className="w-1.5 h-1.5 rounded-full bg-green-400 shrink-0" />
                Available for New Projects
              </div>
            </div>

            {/* CTA */}
            <div>
              <Link to="/contact" className="btn-primary inline-flex px-7 py-3 sm:py-3.5 text-sm sm:text-base">
                Work With Me <ArrowRight size={16} />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
