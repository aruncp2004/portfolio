export const projects = [
  {
    id: 'clinic-crm',
    title: 'ClinicCRM',
    category: 'Healthcare / CRM',
    classification: 'concept',
    description: 'A patient enquiry and appointment management system for healthcare clinics — built to replace scattered WhatsApp and register-based workflows.',
    tags: ['React', 'Web App', 'CRM'],
    gradient: 'from-violet-100 via-purple-50 to-pink-100',
    accent: '#7c3aed',
    liveUrl: 'https://clinic-crm-demo.vercel.app',
  },
  {
    id: 'flow-erp',
    title: 'FlowERP',
    category: 'Business / ERP',
    classification: 'concept',
    description: 'A business operations management system covering inventory, suppliers, purchase orders and sales orders for SMBs.',
    tags: ['React', 'Web App', 'ERP'],
    gradient: 'from-blue-100 via-indigo-50 to-slate-100',
    accent: '#2563eb',
    liveUrl: 'https://flow-erp-demo.vercel.app',
  },
  {
    id: 'bright-smile-dental',
    title: 'BrightSmile Dental',
    category: 'Healthcare / Dental',
    classification: 'concept',
    description: 'A modern dental clinic website concept focused on treatment discovery, trust and appointment enquiries.',
    tags: ['React', 'Website', 'Healthcare'],
    gradient: 'from-teal-100 via-cyan-50 to-blue-100',
    accent: '#0d9488',
    liveUrl: null,
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