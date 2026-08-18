export const caseStudies = [
  {
    id: 'clinic-crm',
    title: 'ClinicCRM',
    type: 'Web Application',
    classification: 'concept',
    tagline: 'A patient enquiry and appointment management system for healthcare clinics.',
    role: 'Full-Stack Developer — Design, Frontend, Data Architecture',
    status: 'Live Demo',
    liveUrl: 'https://clinic-crm-demo.vercel.app',
    gradient: 'from-violet-100 via-purple-50 to-pink-100',
    accent: '#7c3aed',

    business: {
      what: 'A healthcare clinic managing patient enquiries, appointments and follow-ups across multiple channels — phone, WhatsApp, walk-ins and website forms.',
      customers: 'Clinic owners, front desk staff, doctors and healthcare administrators.',
      context: 'Most small clinics in India manage patient enquiries through a mix of phone calls, WhatsApp messages and physical registers — with no central system to track status or follow-ups.',
    },

    problem: 'Clinics were losing potential patients because enquiries were scattered across multiple channels with no way to track who was followed up, who had appointments and who converted to an actual patient.',

    painPoints: [
      'Enquiries received on WhatsApp, phone and walk-in were tracked in separate registers',
      'No visibility into which enquiries had been followed up',
      'Appointment scheduling done manually with no status tracking',
      'Follow-ups were missed because there was no reminder system',
      'No way to measure conversion from enquiry to patient',
    ],

    goals: [
      'Centralise all patient enquiries in one place',
      'Track status of every enquiry from first contact to conversion',
      'Manage appointments with clear scheduling and status',
      'Flag overdue follow-ups automatically',
      'Give the clinic a clear view of daily operations',
    ],

    solution: 'A web-based CRM built specifically for clinic operations. The system centralises enquiries, tracks appointment scheduling, manages follow-ups and gives the front desk a single dashboard to manage the patient pipeline.',

    features: [
      { title: 'Enquiry Management', description: 'Log and track all patient enquiries with source, service interest, status and contact details in one place.' },
      { title: 'Status Pipeline', description: 'Move enquiries through New → Contacted → Appointed → Converted with clear visual status badges.' },
      { title: 'Appointment Scheduling', description: 'Manage today\'s schedule with time slots, doctor assignment and appointment status tracking.' },
      { title: 'Follow-up Tracker', description: 'Automatically surface overdue, due today and upcoming follow-ups with one-tap call and WhatsApp actions.' },
      { title: 'Dashboard Overview', description: 'At-a-glance view of total enquiries, today\'s appointments, follow-ups due and conversion count.' },
      { title: 'Click-to-Call & WhatsApp', description: 'Direct call and WhatsApp buttons on every record so staff can reach patients instantly.' },
    ],

    designDecisions: [
      { decision: 'Dark sidebar + light content area', reason: 'Separates navigation from data clearly — standard pattern in business software that reduces cognitive load for daily users.' },
      { decision: 'Status badges on every record', reason: 'Front desk staff need to process many records quickly. Color-coded badges allow instant status recognition without reading every row.' },
      { decision: 'Follow-up urgency levels', reason: 'Overdue, today and upcoming are treated differently — overdue shown in red, today in amber — so urgent items are impossible to miss.' },
      { decision: 'One-tap contact actions', reason: 'The primary action after viewing an enquiry is always to contact the patient. Call and WhatsApp buttons are always visible without extra clicks.' },
    ],

    flow: [
      { step: 'Patient Enquiry', sub: 'Phone / WhatsApp / Website' },
      { step: 'Logged in CRM', sub: 'Source, service, contact captured' },
      { step: 'Status Updated', sub: 'New → Contacted → Appointed' },
      { step: 'Appointment Scheduled', sub: 'Date, time, doctor assigned' },
      { step: 'Follow-up Tracked', sub: 'Reminders flagged automatically' },
      { step: 'Converted', sub: 'Patient record complete' },
    ],

    tech: ['React', 'Vite', 'Tailwind CSS', 'React Router', 'Lucide React', 'Vercel'],

    challenges: [
      { challenge: 'Displaying urgent follow-ups without overwhelming the user', solution: 'Used three clear urgency levels — overdue, today, upcoming — each with distinct color treatment so staff can prioritize instantly.' },
      { challenge: 'Making the interface fast for daily front desk use', solution: 'Kept interactions minimal — filter tabs, status badges and one-tap actions — so common tasks require as few clicks as possible.' },
    ],

    outcome: {
      type: 'concept',
      points: [
        'Demonstrates end-to-end patient pipeline management in a single interface',
        'Shows ability to design business-specific workflows, not just generic UI',
        'Click-to-call and WhatsApp integration ready for production use',
        'Can be extended with real backend and database for live clinic deployment',
      ],
    },

    improvements: [
      'Connect to a real backend (Node.js + MySQL) for live data',
      'Add SMS/WhatsApp automated reminders for appointments',
      'Build a reporting module for monthly conversion analytics',
      'Add multi-user roles — admin, doctor, front desk',
    ],
  },

  {
    id: 'flow-erp',
    title: 'FlowERP',
    type: 'Web Application',
    classification: 'concept',
    tagline: 'A business operations management system covering inventory, suppliers, purchase orders and sales.',
    role: 'Full-Stack Developer — Design, Frontend, Data Architecture',
    status: 'Live Demo',
    liveUrl: 'https://flow-erp-demo.vercel.app',
    gradient: 'from-blue-100 via-indigo-50 to-slate-100',
    accent: '#2563eb',

    business: {
      what: 'A small or medium-sized business managing inventory, supplier relationships, purchase orders and customer sales orders across multiple spreadsheets and manual records.',
      customers: 'Business owners, operations managers, purchase teams and sales staff at SMBs.',
      context: 'Most SMBs in India manage operations through a combination of Excel sheets, WhatsApp messages and physical registers — leading to stock discrepancies, missed orders and poor visibility.',
    },

    problem: 'Business owners had no central system to track stock levels, manage supplier orders and monitor sales — leading to stock-outs, delayed purchases and missed revenue opportunities.',

    painPoints: [
      'Inventory tracked in separate Excel sheets with no real-time visibility',
      'No system to track which items were running low before stock-out',
      'Purchase orders managed over WhatsApp with no formal tracking',
      'Supplier contact information scattered across phones and notebooks',
      'Sales orders tracked manually with no status visibility',
      'No dashboard to see overall business health at a glance',
    ],

    goals: [
      'Centralise inventory management with real-time stock visibility',
      'Flag low stock items automatically before they run out',
      'Track purchase orders from creation to delivery',
      'Maintain a structured supplier directory',
      'Manage sales orders with clear status tracking',
      'Give management a single dashboard for business overview',
    ],

    solution: 'A modular ERP system covering the core operations of an SMB — inventory, suppliers, purchase orders and sales orders — in a single, clean interface that replaces scattered spreadsheets and manual processes.',

    features: [
      { title: 'Operations Dashboard', description: 'Revenue overview, open orders count, low stock alerts and active supplier count in a single view.' },
      { title: 'Inventory Management', description: 'Track all items with stock levels, reorder points, categories and automatic low stock flagging.' },
      { title: 'Low Stock Alerts', description: 'Items below reorder level are automatically highlighted with red indicators and an alert banner.' },
      { title: 'Supplier Directory', description: 'Maintain structured supplier records with contact details, category, city and order history.' },
      { title: 'Purchase Order Tracking', description: 'Create and track POs from draft through approved to received with full status history.' },
      { title: 'Sales Order Management', description: 'Track customer orders from confirmed through shipped to delivered with revenue summary.' },
    ],

    designDecisions: [
      { decision: 'Blue enterprise theme instead of violet', reason: 'Business software needs to feel professional and trustworthy — blue is the standard in enterprise tools (Zoho, SAP, Salesforce) for good reason.' },
      { decision: 'Table-based layouts for orders and inventory', reason: 'Operations staff need to scan many records quickly. Tables are more efficient than cards for data-heavy modules.' },
      { decision: 'Card layout for suppliers', reason: 'Supplier records have fewer items but require quick contact access. Cards work better here than rows.' },
      { decision: 'Contact Me CTA in sidebar', reason: 'The ERP is a demo for potential clients — the CTA is always visible without interrupting the product experience.' },
    ],

    flow: [
      { step: 'Stock Received', sub: 'Inventory updated' },
      { step: 'Low Stock Flagged', sub: 'Alert triggered automatically' },
      { step: 'Purchase Order Created', sub: 'Sent to supplier' },
      { step: 'PO Approved & Received', sub: 'Stock levels updated' },
      { step: 'Sales Order Confirmed', sub: 'Customer order tracked' },
      { step: 'Order Delivered', sub: 'Revenue recorded' },
    ],

    tech: ['React', 'Vite', 'Tailwind CSS', 'React Router', 'Lucide React', 'Vercel'],

    challenges: [
      { challenge: 'Showing complex business data without overwhelming the user', solution: 'Used progressive disclosure — dashboard shows summary, each module shows detail. Users only see complexity when they need it.' },
      { challenge: 'Making tables readable on mobile', solution: 'Used responsive column hiding — less critical columns hidden on smaller screens, core data always visible.' },
    ],

    outcome: {
      type: 'concept',
      points: [
        'Demonstrates ability to build multi-module business systems',
        'Shows understanding of real SMB operations and workflows',
        'Modular architecture makes it easy to extend with new modules',
        'Can be connected to a real backend for live business deployment',
      ],
    },

    improvements: [
      'Connect to Node.js + MySQL backend for real data persistence',
      'Add purchase order PDF generation and email to supplier',
      'Build reporting module with revenue charts and trend analysis',
      'Add user roles — admin, purchase manager, sales staff, warehouse',
    ],
  },

  {
    id: 'bright-smile-dental',
    title: 'BrightSmile Dental',
    type: 'Business Website',
    classification: 'concept',
    tagline: 'A modern dental clinic website focused on treatment discovery, trust and patient enquiries.',
    role: 'Web Developer — Design, Frontend Development, Deployment',
    status: 'Website Concept',
    liveUrl: null,
    gradient: 'from-teal-100 via-cyan-50 to-blue-100',
    accent: '#0d9488',

    business: {
      what: 'A dental clinic offering treatments including cleaning, root canal, implants and orthodontics to patients in their local area.',
      customers: 'Local patients searching for dental services online, primarily on mobile devices.',
      context: 'Most dental clinics in India rely on Google Maps listings, word-of-mouth and social media with no dedicated professional website.',
    },

    problem: 'The clinic had no professional online presence. Patients searching for dental services online could not find information about treatments, could not assess the clinic\'s quality and had no clear way to make an enquiry.',

    painPoints: [
      'No website — only a Google Maps listing with basic information',
      'Patients could not find treatment information before visiting',
      'No clear way for patients to make an enquiry or book a consultation',
      'No professional digital presence to build trust',
      'Poor mobile experience through third-party listing platforms',
    ],

    goals: [
      'Establish a professional online presence for the clinic',
      'Present treatments and services clearly for patients',
      'Make it easy for patients to contact the clinic',
      'Build trust through professional design and clear information',
      'Ensure a fast, mobile-first experience',
    ],

    solution: 'A clean, professional dental clinic website with clear treatment pages, trust-building elements and multiple easy contact paths — designed mobile-first for patients browsing on their phones.',

    features: [
      { title: 'Treatment Pages', description: 'Clear presentation of all dental treatments with descriptions to help patients understand their options.' },
      { title: 'WhatsApp Integration', description: 'Floating WhatsApp button visible on every page for instant one-tap patient contact.' },
      { title: 'Contact & Enquiry Form', description: 'Simple enquiry form for patients who prefer written communication over calls.' },
      { title: 'Google Maps Integration', description: 'Embedded map with clinic location for easy navigation.' },
      { title: 'Reviews Section', description: 'Patient testimonials section to build trust and credibility.' },
      { title: 'Mobile-First Design', description: 'Designed for phone browsers first — where most patients search.' },
    ],

    designDecisions: [
      { decision: 'Clean, minimal aesthetic', reason: 'Healthcare websites need to communicate trust and professionalism. Cluttered designs reduce patient confidence.' },
      { decision: 'WhatsApp as primary CTA', reason: 'Most patients prefer WhatsApp over forms or calls. Making it the primary contact path reduces friction.' },
      { decision: 'Treatment-first information architecture', reason: 'Patients visit the site to find out about treatments — not the clinic history. Content is organized around patient needs.' },
    ],

    flow: [
      { step: 'Google Search', sub: 'Patient searches for dental clinic' },
      { step: 'Website', sub: 'Professional first impression' },
      { step: 'Treatment Discovery', sub: 'Patient finds relevant service' },
      { step: 'Trust Built', sub: 'Reviews, professional design' },
      { step: 'Enquiry', sub: 'WhatsApp / Form / Call' },
      { step: 'Appointment', sub: 'Patient visits clinic' },
    ],

    tech: ['React', 'Vite', 'Tailwind CSS', 'Responsive Design', 'WhatsApp API', 'Vercel'],

    challenges: [
      { challenge: 'Communicating trust without real patient photos or testimonials', solution: 'Used professional design language, clear treatment information and structured content hierarchy to build credibility.' },
      { challenge: 'Making treatment information accessible without medical jargon', solution: 'Wrote treatment descriptions in plain language focused on patient benefit, not clinical terminology.' },
    ],

    outcome: {
      type: 'concept',
      points: [
        'Demonstrates ability to design healthcare-specific websites',
        'Shows mobile-first development approach',
        'WhatsApp integration ready for immediate patient contact',
        'Can be customized for any dental or healthcare clinic',
      ],
    },

    improvements: [
      'Add online appointment booking with calendar integration',
      'Connect enquiry form to CRM for lead tracking',
      'Add before/after treatment gallery',
      'Implement Google Analytics for patient journey tracking',
    ],
  },
];

export const getCaseStudy = (id) => caseStudies.find(c => c.id === id);