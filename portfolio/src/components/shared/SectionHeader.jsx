export default function SectionHeader({ eyebrow, title, subtitle, center = false }) {
  return (
    <div className={`mb-10 sm:mb-14 ${center ? 'text-center' : ''}`}>
      {eyebrow && <span className="eyebrow">{eyebrow}</span>}
      <h2 className="font-display font-bold text-2xl sm:text-3xl md:text-4xl text-white leading-tight">{title}</h2>
      {subtitle && (
        <p className={`mt-3 sm:mt-4 text-white/45 text-sm sm:text-base leading-relaxed ${center ? 'max-w-xl mx-auto' : 'max-w-xl'}`}>
          {subtitle}
        </p>
      )}
    </div>
  );
}