import { useState } from 'react';
import { MessageCircle, Phone, Mail, Send, CheckCircle } from 'lucide-react';

const contactMethods = [
  { icon: MessageCircle, label: 'WhatsApp', value: '+91 94980 96306', href: 'https://wa.me/919498096306', description: 'Fastest response — usually within a few hours.', accent: '#25D366' },
  { icon: Phone, label: 'Phone', value: '+91 94980 96306', href: 'tel:+919498096306', description: 'Available Mon–Sat, 9am–7pm IST.', accent: '#a78bfa' },
  { icon: Mail, label: 'Email', value: 'aruncp7693@gmail.com', href: 'mailto:aruncp7693@gmail.com', description: 'For detailed enquiries and project briefs.', accent: '#c084fc' },
];

export default function Contact() {
  const [form, setForm] = useState({ name: '', clinic: '', phone: '', need: '', message: '' });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => { setLoading(false); setSubmitted(true); }, 1200);
  };

  return (
    <main className="pt-24 sm:pt-32 pb-16 sm:pb-24 relative min-h-screen"
      style={{ background: 'linear-gradient(135deg, #0f0a1e 0%, #150d2e 50%, #0f0a1e 100%)' }}>
      <div className="orb orb-lg animate-float" style={{ top: '-60px', right: '-60px' }} />
      <div className="orb orb-md animate-float-slow" style={{ bottom: '10%', left: '-40px' }} />

      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6">
        <div className="mb-10 sm:mb-14 text-center">
          <p className="eyebrow">Get In Touch</p>
          <h1 className="font-display font-bold text-3xl sm:text-4xl md:text-5xl text-white mb-3 sm:mb-4 leading-tight">
            Let's build your<br /><span className="gradient-text">website together</span>
          </h1>
          <p className="text-white/40 text-sm sm:text-base max-w-lg mx-auto">
            Start with a free website demo — no commitment, no payment required.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-5 sm:gap-8">
          {/* Contact methods */}
          <div className="lg:col-span-2 space-y-3 sm:space-y-4">
            {contactMethods.map((m) => {
              const Icon = m.icon;
              return (
                <a key={m.label} href={m.href}
                  target={m.label === 'WhatsApp' ? '_blank' : undefined}
                  rel="noopener noreferrer"
                  className="card flex gap-3 sm:gap-4 items-start p-4 sm:p-5 block">
                  <div className="shrink-0 w-9 h-9 sm:w-11 sm:h-11 rounded-xl flex items-center justify-center"
                    style={{ background: `${m.accent}18`, border: `1px solid ${m.accent}30` }}>
                    <Icon size={17} style={{ color: m.accent }} />
                  </div>
                  <div className="min-w-0">
                    <p className="text-[10px] text-white/25 uppercase tracking-widest mb-0.5">{m.label}</p>
                    <p className="font-display font-semibold text-white text-sm truncate">{m.value}</p>
                    <p className="text-xs text-white/35 mt-0.5 leading-snug">{m.description}</p>
                  </div>
                </a>
              );
            })}
          </div>

          {/* Form */}
          <div className="lg:col-span-3">
            <div className="card p-5 sm:p-7 md:p-9">
              {submitted ? (
                <div className="text-center py-8 sm:py-10">
                  <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-full bg-violet-500/10 border border-violet-500/20 flex items-center justify-center mx-auto mb-4 sm:mb-5">
                    <CheckCircle size={28} className="text-violet-400" />
                  </div>
                  <h3 className="font-display font-bold text-white text-lg sm:text-xl mb-2">Message Sent</h3>
                  <p className="text-white/40 text-sm">Thanks for reaching out. I'll get back to you within 24 hours.</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  {/* Heading */}
                  <div className="mb-6">
                    <h3 className="font-display font-bold text-white text-lg sm:text-xl mb-1">Let's Build Something Useful</h3>
                    <p className="text-white/35 text-sm leading-relaxed">Tell me what you're trying to achieve. I'll suggest the right approach based on your requirements.</p>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs text-white/35 mb-1.5 font-medium">Name *</label>
                      <input type="text" name="name" required value={form.name} onChange={handleChange}
                        placeholder="Your name"
                        className="w-full bg-white/[0.04] border border-white/[0.08] rounded-xl px-3 sm:px-4 py-2.5 sm:py-3 text-sm text-white placeholder-white/15 focus:outline-none focus:border-violet-500/50 focus:bg-white/[0.06] transition-all" />
                    </div>
                    <div>
                      <label className="block text-xs text-white/35 mb-1.5 font-medium">Business Name *</label>
                      <input type="text" name="clinic" required value={form.clinic} onChange={handleChange}
                        placeholder="Your company or business name"
                        className="w-full bg-white/[0.04] border border-white/[0.08] rounded-xl px-3 sm:px-4 py-2.5 sm:py-3 text-sm text-white placeholder-white/15 focus:outline-none focus:border-violet-500/50 focus:bg-white/[0.06] transition-all" />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs text-white/35 mb-1.5 font-medium">Phone / WhatsApp *</label>
                    <input type="tel" name="phone" required value={form.phone} onChange={handleChange}
                      placeholder="Your contact number"
                      className="w-full bg-white/[0.04] border border-white/[0.08] rounded-xl px-3 sm:px-4 py-2.5 sm:py-3 text-sm text-white placeholder-white/15 focus:outline-none focus:border-violet-500/50 focus:bg-white/[0.06] transition-all" />
                  </div>

                  <div>
                    <label className="block text-xs text-white/35 mb-1.5 font-medium">What do you need help with? *</label>
                    <input type="text" name="need" required value={form.need || ''} onChange={handleChange}
                      placeholder="Website, web application, software, automation, or something else?"
                      className="w-full bg-white/[0.04] border border-white/[0.08] rounded-xl px-3 sm:px-4 py-2.5 sm:py-3 text-sm text-white placeholder-white/15 focus:outline-none focus:border-violet-500/50 focus:bg-white/[0.06] transition-all" />
                  </div>

                  <div>
                    <label className="block text-xs text-white/35 mb-1.5 font-medium">Tell me about your project</label>
                    <textarea name="message" rows={4} value={form.message} onChange={handleChange}
                      placeholder="Briefly describe what you're looking to build or improve."
                      className="w-full bg-white/[0.04] border border-white/[0.08] rounded-xl px-3 sm:px-4 py-2.5 sm:py-3 text-sm text-white placeholder-white/15 focus:outline-none focus:border-violet-500/50 focus:bg-white/[0.06] transition-all resize-none" />
                  </div>

                  <button type="submit" disabled={loading}
                    className="btn-primary w-full justify-center py-3 sm:py-3.5 text-sm sm:text-base disabled:opacity-60 disabled:cursor-not-allowed">
                    {loading ? <span>Sending...</span> : <><span>Send Enquiry</span><Send size={15} /></>}
                  </button>
                  <p className="text-xs text-white/20 text-center">Your information is used only to respond to your enquiry.</p>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}