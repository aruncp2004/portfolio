export const projects = [
  {
    id: 1,
    title: 'BrightSmile Dental',
    category: 'Healthcare / Dental',
    classification: 'concept',
    description: 'A modern dental clinic website concept focused on treatment discovery, appointment enquiries and building patient trust through clean design.',
    tags: ['React', 'Responsive', 'WhatsApp CTA'],
    gradient: 'from-teal-100 via-cyan-50 to-blue-100',
    accent: '#0d9488',
  },
  {
    id: 2,
    title: 'DermaCare Clinic',
    category: 'Healthcare / Dermatology',
    classification: 'concept',
    description: 'A dermatology clinic website concept showcasing skin treatments, doctor profiles and a clean mobile-first patient experience.',
    tags: ['React', 'Mobile-first', 'SEO Ready'],
    gradient: 'from-violet-100 via-purple-50 to-pink-100',
    accent: '#7c3aed',
  },
  {
    id: 3,
    title: 'MediPoint Health',
    category: 'Healthcare / General',
    classification: 'concept',
    description: 'A multi-specialty healthcare clinic website with department listings, doctor discovery and patient enquiry flows.',
    tags: ['React', 'Multi-page', 'Contact Form'],
    gradient: 'from-blue-100 via-indigo-50 to-violet-100',
    accent: '#4f46e5',
  },
  {
    id: 4,
    title: 'Velciti Consulting Engineers',
    category: 'Engineering / B2B',
    classification: 'experience',
    description: 'Developed and maintained a responsive business website for a geotechnical engineering consulting firm as part of professional experience.',
    tags: ['HTML/CSS/JS', 'cPanel', 'Analytics'],
    gradient: 'from-amber-100 via-orange-50 to-yellow-100',
    accent: '#d97706',
  },
];

export const getClassificationLabel = (type) => {
  const map = { concept: 'Website Concept', client: 'Client Project', experience: 'Professional Experience' };
  return map[type] || type;
};

export const getClassificationClass = (type) => {
  const map = { concept: 'badge-concept', client: 'badge-client', experience: 'badge-experience' };
  return map[type] || 'badge-concept';
};
