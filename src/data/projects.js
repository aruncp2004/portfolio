export const projects = [
  {
    id: 'clinic-crm',
    title: 'ClinicCRM',
    category: 'Healthcare / CRM',
    classification: 'concept',
    description: 'A patient enquiry and appointment management system for healthcare clinics — built to replace scattered WhatsApp and register-based workflows.',
    tags: ['React', 'Web App', 'CRM'],
    image: 'https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=600&q=80',
    accent: '#7c3aed',
    liveUrl: 'https://arun-cliniccrm.vercel.app',
  },
  {
    id: 'flow-erp',
    title: 'FlowERP',
    category: 'Business / ERP',
    classification: 'concept',
    description: 'A business operations management system covering inventory, suppliers, purchase orders and sales orders for SMBs.',
    tags: ['React', 'Web App', 'ERP'],
    image: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=600&q=80',
    accent: '#2563eb',
    liveUrl: 'https://flow-erp-lovat-nine.vercel.app',
  },
  {
    id: 'bright-smile-dental',
    title: 'BrightSmile Dental',
    category: 'Healthcare / Dental',
    classification: 'concept',
    description: 'A modern dental clinic website focused on treatment discovery, trust and appointment enquiries.',
    tags: ['React', 'Website', 'Healthcare'],
    image: 'https://images.unsplash.com/photo-1629909613654-28e377c37b09?w=600&q=80',
    accent: '#2563eb',
    liveUrl: 'https://brightsmile-dental-vert.vercel.app',
  },
  {
    id: 'dermacare-clinic',
    title: 'DermaCare Clinic',
    category: 'Healthcare / Dermatology',
    classification: 'concept',
    description: 'A dermatology clinic website showcasing skin and hair treatments with a mobile-first patient experience.',
    tags: ['React', 'Website', 'Healthcare'],
    image: 'https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?w=600&q=80',
    accent: '#e11d48',
    liveUrl: 'https://dermacare-clinic-8jlr.vercel.app',
  },
  {
    id: 'medipoint-health',
    title: 'MediPoint Health Centre',
    category: 'Healthcare / Multi-Specialty',
    classification: 'concept',
    description: 'A multi-specialty healthcare clinic website with department listings, doctor discovery and patient appointment flows.',
    tags: ['React', 'Website', 'Healthcare'],
    image: 'https://images.unsplash.com/photo-1504813184591-01572f98c85f?w=600&q=80',
    accent: '#0d9488',
    liveUrl: null,
  },
  {
    id: 'spice-garden',
    title: 'Spice Garden Restaurant',
    category: 'Food & Beverage',
    classification: 'concept',
    description: 'An authentic Indian restaurant website with menu, gallery, table reservation and WhatsApp ordering.',
    tags: ['React', 'Website', 'Restaurant'],
    image: 'https://images.unsplash.com/photo-1585937421612-70a008356fbe?w=600&q=80',
    accent: '#d97706',
    liveUrl: 'https://spice-garden-sigma.vercel.app',
  },
  {
    id: 'nexamart',
    title: 'NexaMart',
    category: 'E-Commerce',
    classification: 'concept',
    description: 'A full-category e-commerce platform covering Electronics, Fashion, Home & Living and Grocery with cart and wishlist.',
    tags: ['React', 'E-Commerce', 'Web App'],
    image: 'https://images.unsplash.com/photo-1607082348824-0a96f2a4b9da?w=600&q=80',
    accent: '#4f46e5',
    liveUrl: 'https://nexamart-self.vercel.app',
  },
  {
    id: 'velciti',
    title: 'Velciti Consulting Engineers',
    category: 'Engineering / B2B',
    classification: 'experience',
    description: 'Developed and maintained a responsive business website for a geotechnical engineering consulting firm as part of professional experience.',
    tags: ['HTML/CSS/JS', 'cPanel', 'Analytics'],
    image: 'https://images.unsplash.com/photo-1581094794329-c8112a89af12?w=600&q=80',
    accent: '#d97706',
    liveUrl: 'https://velciti.com',
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
