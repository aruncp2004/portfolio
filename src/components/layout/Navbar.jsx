import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';

const navLinks = [
  { label: 'Work', to: '/work' },
  { label: 'Services', to: '/#services' },
  { label: 'Process', to: '/#process' },
  { label: 'About', to: '/about' },
  { label: 'Contact', to: '/contact' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => { setMenuOpen(false); }, [location]);
  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [menuOpen]);

  const handleNavClick = (e, to) => {
    if (to.startsWith('/#')) {
      e.preventDefault();
      const id = to.replace('/#', '');
      if (location.pathname !== '/') {
        window.location.href = to;
      } else {
        document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
      }
      setMenuOpen(false);
    }
  };

  return (
    <>
      <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'bg-[rgba(15,10,30,0.9)] backdrop-blur-xl border-b border-white/[0.06] py-3' : 'bg-transparent py-4'
      }`}>
        <nav className="max-w-6xl mx-auto px-4 sm:px-6 flex items-center justify-between">
          <Link to="/" className="font-display font-bold text-base sm:text-lg text-white hover:opacity-80 transition-opacity shrink-0">
            Arun<span className="gradient-text">Kumar</span>
          </Link>

          {/* Desktop links */}
          <div className="hidden lg:flex items-center gap-6">
            {navLinks.map((link) => (
              <Link key={link.to} to={link.to}
                onClick={(e) => handleNavClick(e, link.to)}
                className={`text-sm font-medium transition-colors whitespace-nowrap ${
                  location.pathname === link.to ? 'text-violet-400' : 'text-white/50 hover:text-white'
                }`}>
                {link.label}
              </Link>
            ))}
          </div>

          <div className="hidden lg:block shrink-0">
            <Link to="/contact" className="btn-primary text-sm px-5 py-2.5">Get a Free Demo</Link>
          </div>

          <button className="lg:hidden text-white/70 hover:text-white p-2 -mr-1"
            onClick={() => setMenuOpen(!menuOpen)} aria-label="Toggle menu">
            {menuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </nav>
      </header>

      {/* Mobile drawer */}
      <div className={`fixed inset-0 z-40 lg:hidden transition-all duration-300 ${
        menuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
      }`}>
        <div className="absolute inset-0 bg-black/70 backdrop-blur-sm" onClick={() => setMenuOpen(false)} />
        <div className={`absolute top-0 right-0 h-full w-[280px] bg-[#0f0a1e]/98 backdrop-blur-xl border-l border-white/[0.07] transition-transform duration-300 ${
          menuOpen ? 'translate-x-0' : 'translate-x-full'
        }`}>
          <div className="flex flex-col pt-20 px-6 gap-0">
            {navLinks.map((link) => (
              <Link key={link.to} to={link.to}
                onClick={(e) => handleNavClick(e, link.to)}
                className={`text-base font-display font-semibold py-4 border-b border-white/[0.06] transition-colors ${
                  location.pathname === link.to ? 'text-violet-400' : 'text-white/70 hover:text-white'
                }`}>
                {link.label}
              </Link>
            ))}
            <div className="mt-8">
              <Link to="/contact" className="btn-primary w-full justify-center text-sm py-3">Get a Free Demo</Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}