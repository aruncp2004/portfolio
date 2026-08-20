import { Link } from 'react-router-dom';
import { MessageCircle, Mail, Phone } from 'lucide-react';

export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="border-t border-white/[0.06] pt-12 sm:pt-16 pb-6 sm:pb-8"
      style={{ background: 'linear-gradient(135deg, #0a0618 0%, #0f0a1e 100%)' }}>
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-2 md:grid-cols-3 gap-8 sm:gap-12 mb-10 sm:mb-12">
          <div className="col-span-2 md:col-span-1">
            <Link to="/" className="font-display font-bold text-xl text-white inline-block mb-3">
              Arun<span className="gradient-text">Kumar</span>
            </Link>
            <p className="text-sm text-white/35 leading-relaxed max-w-xs">
              Modern websites for businesses & healthcare clinics. Chennai, India.
            </p>
          </div>
          <div>
            <p className="text-xs font-semibold text-white/25 uppercase tracking-widest mb-4">Navigation</p>
            <ul className="space-y-2.5">
              {[{ label: 'Home', to: '/' }, { label: 'Work', to: '/work' }, { label: 'About', to: '/about' }, { label: 'Contact', to: '/contact' }].map((l) => (
                <li key={l.to}>
                  <Link to={l.to} className="text-sm text-white/40 hover:text-violet-400 transition-colors">{l.label}</Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <p className="text-xs font-semibold text-white/25 uppercase tracking-widest mb-4">Contact</p>
            <ul className="space-y-3">
              <li>
                <a href="https://wa.me/919498096306" target="_blank" rel="noopener noreferrer"
                  className="flex items-center gap-2 text-sm text-white/40 hover:text-violet-400 transition-colors">
                  <MessageCircle size={14} className="shrink-0" /> WhatsApp
                </a>
              </li>
              <li>
                <a href="tel:+919498096306"
                  className="flex items-center gap-2 text-sm text-white/40 hover:text-violet-400 transition-colors">
                  <Phone size={14} className="shrink-0" /> +91 94980 96306
                </a>
              </li>
              <li>
                <a href="mailto:aruncp7693@gmail.com"
                  className="flex items-center gap-2 text-sm text-white/40 hover:text-violet-400 transition-colors break-all">
                  <Mail size={14} className="shrink-0" /> aruncp7693@gmail.com
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="border-t border-white/[0.05] pt-5 sm:pt-6 flex flex-col sm:flex-row items-center justify-between gap-2 text-xs text-white/20">
          <p>© {year} Arun Kumar. All rights reserved.</p>
          <p>Chennai, India</p>
        </div>
      </div>
    </footer>
  );
}