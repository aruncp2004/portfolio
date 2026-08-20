export const caseStudies = [
  {
    id: 'clinic-crm',
    title: 'ClinicCRM',
    type: 'Web Application',
    classification: 'concept',
    tagline: 'A patient enquiry and appointment management system for healthcare clinics.',
    role: 'Full-Stack Developer — Design, Frontend, Data Architecture',
    status: 'Live Demo',
    liveUrl: 'https://arun-cliniccrm.vercel.app',
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
    liveUrl: 'https://flow-erp-lovat-nine.vercel.app',
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
    liveUrl: 'https://brightsmile-dental-vert.vercel.app',
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

  {
    id: 'dermacare-clinic',
    title: 'DermaCare Clinic',
    type: 'Business Website',
    classification: 'concept',
    tagline: 'A dermatology clinic website showcasing skin and hair treatments with a mobile-first patient experience.',
    role: 'Web Developer — Design, Frontend Development, Deployment',
    status: 'Live Demo',
    liveUrl: 'https://dermacare-clinic-8jlr.vercel.app',
    gradient: 'from-rose-100 via-pink-50 to-red-100',
    accent: '#e11d48',

    business: {
      what: 'A dermatology clinic offering skin and hair treatments including acne treatment, skin brightening, hair loss therapy, anti-ageing and laser procedures.',
      customers: 'Local patients searching for skin and hair specialists, primarily on mobile.',
      context: 'Most dermatology clinics in India rely on Google Maps and word-of-mouth with no professional website to showcase treatments.',
    },

    problem: 'Patients had no way to find treatment information, assess the clinic quality or make an enquiry online before visiting.',

    painPoints: [
      'No professional website — only Google Maps listing',
      'Patients could not find treatment details before visiting',
      'No clear online enquiry or booking path',
      'No way to build trust digitally before the first visit',
      'Poor mobile experience through third-party platforms',
    ],

    goals: [
      'Establish professional online presence',
      'Present skin and hair treatments clearly',
      'Make it easy for patients to contact the clinic',
      'Build trust through professional design',
      'Ensure fast mobile-first experience',
    ],

    solution: 'A clean, professional dermatology clinic website with treatment pages, doctor profile, reviews and multiple contact paths — designed mobile-first.',

    features: [
      { title: 'Treatment Pages', description: 'Six skin and hair treatments presented with descriptions, duration and pricing.' },
      { title: 'WhatsApp Integration', description: 'Floating WhatsApp button for instant patient contact.' },
      { title: 'Doctor Profile', description: 'About section with doctor credentials and clinic highlights.' },
      { title: 'Patient Reviews', description: 'Six verified patient reviews with treatment labels.' },
      { title: 'Contact Section', description: 'WhatsApp, phone, email and clinic hours.' },
      { title: 'Mobile-First Design', description: 'Optimised for phone browsers first.' },
    ],

    designDecisions: [
      { decision: 'Rose/pink accent color', reason: 'Communicates skin, beauty and care — appropriate for a dermatology clinic.' },
      { decision: 'Treatment cards with images', reason: 'Patients need to see what treatments look like before booking.' },
      { decision: 'WhatsApp as primary CTA', reason: 'Fastest contact path for patients in India.' },
    ],

    flow: [
      { step: 'Google Search', sub: 'Patient searches for skin specialist' },
      { step: 'Website', sub: 'Professional first impression' },
      { step: 'Treatment Discovery', sub: 'Patient finds relevant treatment' },
      { step: 'Trust Built', sub: 'Reviews and doctor profile' },
      { step: 'Enquiry', sub: 'WhatsApp or phone contact' },
      { step: 'Appointment', sub: 'Patient visits clinic' },
    ],

    tech: ['React', 'Vite', 'Tailwind CSS', 'Responsive Design', 'WhatsApp API', 'Unsplash Images', 'Vercel'],

    challenges: [
      { challenge: 'Presenting medical treatments without clinical jargon', solution: 'Wrote treatment descriptions in plain patient-friendly language focused on benefits.' },
      { challenge: 'Building trust without real patient photos', solution: 'Used professional design, structured content and clear doctor credentials.' },
    ],

    outcome: {
      type: 'concept',
      points: [
        'Demonstrates ability to design healthcare-specific websites',
        'Shows mobile-first development approach',
        'WhatsApp integration ready for immediate patient contact',
        'Can be customized for any dermatology clinic',
      ],
    },

    improvements: [
      'Add online consultation booking with calendar',
      'Connect enquiry form to CRM for lead tracking',
      'Add before/after treatment gallery',
      'Implement Google Analytics for patient journey tracking',
    ],
  },

  {
    id: 'medipoint-health',
    title: 'MediPoint Health Centre',
    type: 'Business Website',
    classification: 'concept',
    tagline: 'A multi-specialty healthcare clinic website with department listings, doctor discovery and patient appointment flows.',
    role: 'Web Developer — Design, Frontend Development, Deployment',
    status: 'Live Demo',
    liveUrl: 'https://medipoint-health.vercel.app',
    gradient: 'from-teal-100 via-cyan-50 to-emerald-100',
    accent: '#0d9488',

    business: {
      what: 'A multi-specialty health centre offering General Medicine, Cardiology, Orthopaedics, Paediatrics, Gynaecology and Diagnostics under one roof.',
      customers: 'Families and individuals looking for specialist medical care in one convenient location.',
      context: 'Most multi-specialty clinics have outdated or no websites making it hard for patients to find the right department or doctor before visiting.',
    },

    problem: 'Patients had no way to discover which departments and doctors were available, leading to confusion and unnecessary walk-ins to the wrong specialist.',

    painPoints: [
      'No department or doctor listing online',
      'Patients unsure which specialist to visit for their condition',
      'No online appointment booking or enquiry path',
      'No professional digital presence to build patient trust',
      'Difficult to find clinic location and hours online',
    ],

    goals: [
      'Clearly present all medical departments and specialties',
      'Help patients find the right department before visiting',
      'Make appointment booking easy via WhatsApp',
      'Build trust through professional design and patient reviews',
      'Provide clear location and contact information',
    ],

    solution: 'A multi-specialty clinic website with department cards, doctor discovery, patient reviews and simple WhatsApp appointment booking.',

    features: [
      { title: 'Department Listings', description: 'Six specialty departments with doctor count and descriptions.' },
      { title: 'WhatsApp Appointment Booking', description: 'Direct WhatsApp CTA for instant appointment requests.' },
      { title: 'About Section', description: 'Clinic history, team highlights and trust points.' },
      { title: 'Patient Reviews', description: 'Six verified reviews across different departments.' },
      { title: 'Contact & Hours', description: 'Full contact details with clinic opening hours.' },
      { title: 'Mobile-First Design', description: 'Optimised for patients browsing on phones.' },
    ],

    designDecisions: [
      { decision: 'Teal/green accent', reason: 'Communicates health, wellness and calm — appropriate for healthcare.' },
      { decision: 'Department cards with images', reason: 'Helps patients visually identify the right specialty.' },
      { decision: 'WhatsApp as primary booking CTA', reason: 'Fastest appointment path for patients in India.' },
    ],

    flow: [
      { step: 'Google Search', sub: 'Patient searches for specialist' },
      { step: 'Website', sub: 'Finds the right department' },
      { step: 'Department Page', sub: 'Understands services available' },
      { step: 'Trust Built', sub: 'Reviews and clinic profile' },
      { step: 'Enquiry', sub: 'WhatsApp appointment booking' },
      { step: 'Visit', sub: 'Patient attends clinic' },
    ],

    tech: ['React', 'Vite', 'Tailwind CSS', 'Responsive Design', 'WhatsApp API', 'Unsplash Images', 'Vercel'],

    challenges: [
      { challenge: 'Presenting 6 departments without overwhelming the visitor', solution: 'Used clean department cards with images and doctor count so patients can quickly identify what they need.' },
      { challenge: 'Making a multi-specialty clinic feel personal', solution: 'Added patient reviews per department and a warm about section focused on family care.' },
    ],

    outcome: {
      type: 'concept',
      points: [
        'Demonstrates ability to design multi-specialty healthcare websites',
        'Shows how to organize complex service offerings clearly',
        'WhatsApp integration ready for immediate appointment booking',
        'Can be customized for any multi-specialty clinic',
      ],
    },

    improvements: [
      'Add individual doctor profile pages',
      'Build online appointment booking with calendar',
      'Add department-specific blog content for SEO',
      'Integrate Google Analytics and Search Console',
    ],
  },

  {
    id: 'spice-garden',
    title: 'Spice Garden Restaurant',
    type: 'Business Website',
    classification: 'concept',
    tagline: 'An authentic Indian restaurant website with menu, gallery, table reservation and WhatsApp ordering.',
    role: 'Web Developer — Design, Frontend Development, Deployment',
    status: 'Live Demo',
    liveUrl: 'https://spice-garden-sigma.vercel.app',
    gradient: 'from-amber-100 via-orange-50 to-yellow-100',
    accent: '#d97706',

    business: {
      what: 'An authentic Indian restaurant serving South and North Indian cuisine with dine-in, table reservations and catering services.',
      customers: 'Local diners, families celebrating occasions, corporate lunch customers and event catering clients.',
      context: 'Most restaurants in India rely on Zomato or Swiggy listings with no independent website to showcase their brand, menu and ambiance.',
    },

    problem: 'The restaurant had no professional online presence beyond food delivery apps, making it impossible to communicate brand identity, showcase ambiance or take direct reservations.',

    painPoints: [
      'No independent website — only food delivery app listings',
      'No way to showcase restaurant ambiance and brand story',
      'Table reservations handled only by phone',
      'No online menu with pricing and descriptions',
      'No platform to collect and showcase customer reviews',
    ],

    goals: [
      'Establish independent online presence beyond delivery apps',
      'Showcase menu with food photography and pricing',
      'Enable table reservations via WhatsApp',
      'Tell the restaurant story and build brand identity',
      'Display customer reviews to build trust',
    ],

    solution: 'A full restaurant website with menu showcase, food gallery, about section, customer reviews and WhatsApp table reservation — designed to convert visitors into diners.',

    features: [
      { title: 'Menu Showcase', description: 'Six signature dishes with food photography, pricing and spice indicators.' },
      { title: 'Food Gallery', description: 'Six high-quality food and ambiance images.' },
      { title: 'Table Reservation', description: 'WhatsApp CTA for direct reservation requests.' },
      { title: 'About Section', description: 'Restaurant story, founding year and kitchen highlights.' },
      { title: 'Customer Reviews', description: 'Six guest reviews with dish labels.' },
      { title: 'Veg/Non-Veg Indicators', description: 'Clear dietary labels on every menu item.' },
    ],

    designDecisions: [
      { decision: 'Amber/warm orange accent', reason: 'Communicates warmth, food and appetite — classic restaurant color psychology.' },
      { decision: 'Full-screen hero with food background', reason: 'Creates immediate appetite appeal and sets the atmosphere.' },
      { decision: 'Playfair Display serif font', reason: 'Gives a premium, authentic feel appropriate for a heritage Indian restaurant.' },
    ],

    flow: [
      { step: 'Google Search', sub: 'Customer searches for Indian restaurant' },
      { step: 'Website', sub: 'Sees food photography and menu' },
      { step: 'Menu Discovery', sub: 'Finds dishes they want' },
      { step: 'Trust Built', sub: 'Reviews and restaurant story' },
      { step: 'Reservation', sub: 'WhatsApp table booking' },
      { step: 'Visit', sub: 'Customer dines at restaurant' },
    ],

    tech: ['React', 'Vite', 'Tailwind CSS', 'Playfair Display Font', 'Unsplash Images', 'WhatsApp API', 'Vercel'],

    challenges: [
      { challenge: 'Making food look appetising without professional photography', solution: 'Used high-quality Unsplash food images with proper aspect ratios and hover zoom effects.' },
      { challenge: 'Balancing premium feel with accessibility', solution: 'Used serif display font for headings but kept body text in Inter for readability.' },
    ],

    outcome: {
      type: 'concept',
      points: [
        'Demonstrates ability to design food and hospitality websites',
        'Shows use of food photography and appetite-driven design',
        'WhatsApp reservation flow ready for immediate use',
        'Can be customized for any restaurant or cafe',
      ],
    },

    improvements: [
      'Add online ordering integration with payment gateway',
      'Build loyalty program page for repeat customers',
      'Add event booking form for private dining',
      'Implement Google Analytics for menu popularity tracking',
    ],
  },

  {
    id: 'nexamart',
    title: 'NexaMart',
    type: 'Web Application',
    classification: 'concept',
    tagline: 'A full-category e-commerce platform covering Electronics, Fashion, Home & Living and Grocery with cart and wishlist.',
    role: 'Web Developer — Design, Frontend Development, Deployment',
    status: 'Live Demo',
    liveUrl: 'https://nexamart-self.vercel.app',
    gradient: 'from-indigo-100 via-blue-50 to-violet-100',
    accent: '#4f46e5',

    business: {
      what: 'A general e-commerce platform selling Electronics, Fashion, Home & Living and Grocery products across India.',
      customers: 'Online shoppers looking for a wide product range with good prices, fast delivery and easy returns.',
      context: "Small and medium businesses in India need e-commerce capability but cannot afford complex custom platforms — a demo shows what's possible.",
    },

    problem: 'Businesses wanting to sell online either rely on marketplaces like Amazon and Flipkart — losing brand identity — or struggle to build their own e-commerce platform.',

    painPoints: [
      'No independent online store — only marketplace listings',
      'Losing brand identity on third-party marketplaces',
      'No control over customer relationship and data',
      'Complex and expensive to build custom e-commerce',
      'No way to run promotions and deals independently',
    ],

    goals: [
      'Demonstrate a fully functional e-commerce interface',
      'Show product browsing across multiple categories',
      'Implement cart and wishlist functionality',
      'Display deals and promotional banners',
      'Build trust through features like free delivery and easy returns',
    ],

    solution: 'A multi-category e-commerce platform with product browsing, category filtering, add to cart, wishlist, deals section and trust-building features — all in one clean interface.',

    features: [
      { title: 'Multi-Category Browse', description: '16 products across Electronics, Fashion, Home & Living and Grocery.' },
      { title: 'Category Filtering', description: 'Tab-based filter to browse products by category.' },
      { title: 'Add to Cart', description: 'Interactive cart with visual feedback on add.' },
      { title: 'Wishlist Toggle', description: 'Heart button to save favourite products.' },
      { title: 'Deals Section', description: 'Three promotional banners with discount highlights.' },
      { title: 'Trust Features', description: 'Free delivery, secure payment, easy returns, EMI and 24/7 support.' },
    ],

    designDecisions: [
      { decision: 'Indigo/blue accent', reason: 'Conveys trust, reliability and professionalism — standard in e-commerce.' },
      { decision: 'Top promotional bar', reason: 'Immediately communicates value with free delivery offer and discount code.' },
      { decision: 'Product grid layout', reason: 'Maximizes product visibility and allows easy scanning.' },
      { decision: 'Veg/non-veg style badges', reason: 'Clear NEW, SALE and HOT labels guide purchase decisions.' },
    ],

    flow: [
      { step: 'Landing', sub: 'Hero banner with promotional offer' },
      { step: 'Category Browse', sub: 'Filter by Electronics, Fashion, Home or Grocery' },
      { step: 'Product Discovery', sub: 'View product with price, rating and discount' },
      { step: 'Add to Cart', sub: 'Visual confirmation with cart count update' },
      { step: 'Deals', sub: 'Browse promotional category deals' },
      { step: 'Trust Section', sub: 'Free delivery, returns, EMI reassurance' },
    ],

    tech: ['React', 'Vite', 'Tailwind CSS', 'Lucide React', 'Unsplash Images', 'Vercel'],

    challenges: [
      { challenge: 'Managing product state across cart and wishlist without a backend', solution: 'Used React useState for in-session cart and wishlist — demonstrates UI capability cleanly.' },
      { challenge: 'Showing 16 products without the page feeling overwhelming', solution: 'Used tab-based category filtering so users see relevant products only.' },
    ],

    outcome: {
      type: 'concept',
      points: [
        'Demonstrates ability to build multi-category e-commerce interfaces',
        'Shows product filtering, cart and wishlist interaction patterns',
        'Clean component architecture makes it easy to connect to a real backend',
        'Can be extended with payment gateway, user auth and order management',
      ],
    },

    improvements: [
      'Connect to Node.js backend with real product database',
      'Add user authentication and order history',
      'Integrate Razorpay or Stripe payment gateway',
      'Build admin panel for product and order management',
    ],
  },

  {
    id: 'velciti',
    title: 'Velciti Consulting Engineers',
    type: 'Business Website',
    classification: 'experience',
    tagline: 'A responsive business website for a geotechnical engineering and NABL-accredited laboratory firm.',
    role: 'Web Developer — Frontend Development, Analytics Integration, Ongoing Maintenance',
    status: 'Live',
    liveUrl: 'https://velciti.com',
    gradient: 'from-amber-100 via-orange-50 to-yellow-100',
    accent: '#d97706',

    business: {
      what: 'A geotechnical engineering consulting firm and NABL-accredited laboratory offering soil investigation, foundation testing and infrastructure services.',
      customers: 'Construction companies, infrastructure developers, government bodies and engineering firms requiring geotechnical testing and reports.',
      context: 'B2B engineering firms need professional web presence to establish credibility with large clients and government bodies.',
    },

    problem: 'The business needed a professional online presence that communicated technical credibility, showcased services and made it easy for potential clients to make enquiries.',

    painPoints: [
      "Existing online presence did not reflect the firm's technical expertise",
      'Services were not clearly presented for potential clients',
      'No clear enquiry path for new business leads',
      'Poor mobile experience for clients browsing on the go',
      'Analytics not configured — no visibility into website performance',
    ],

    goals: [
      'Establish professional online presence reflecting technical expertise',
      'Present geotechnical services clearly for B2B clients',
      'Create clear enquiry and contact paths',
      'Ensure responsive experience across all devices',
      'Configure analytics for performance visibility',
    ],

    solution: "A professional responsive business website presenting the firm's services, accreditations and expertise — with clear contact paths and integrated analytics.",

    features: [
      { title: 'Services Presentation', description: 'Clear listing of geotechnical and laboratory services.' },
      { title: 'NABL Accreditation Highlight', description: 'Trust signals for B2B credibility.' },
      { title: 'Contact & Enquiry', description: 'Multiple contact paths for potential clients.' },
      { title: 'Responsive Design', description: 'Works across desktop, tablet and mobile.' },
      { title: 'Google Analytics', description: 'Configured for traffic and performance tracking.' },
      { title: 'Performance Optimisation', description: 'Fast loading for professional credibility.' },
    ],

    designDecisions: [
      { decision: 'Professional conservative design', reason: 'B2B engineering clients expect credibility over creativity.' },
      { decision: 'Services-first structure', reason: 'Technical clients need to quickly find specific service capabilities.' },
      { decision: 'Clear contact paths', reason: 'B2B enquiries are high value — multiple contact options reduce friction.' },
    ],

    flow: [
      { step: 'Google Search', sub: 'Client searches for geotechnical services' },
      { step: 'Website', sub: 'Professional first impression and credibility' },
      { step: 'Services', sub: 'Client finds relevant technical service' },
      { step: 'Accreditations', sub: 'Trust established through NABL certification' },
      { step: 'Enquiry', sub: 'Contact form or direct call' },
      { step: 'Engagement', sub: 'Client relationship begins' },
    ],

    tech: ['HTML', 'CSS', 'JavaScript', 'Google Analytics', 'cPanel', 'Responsive Design'],

    challenges: [
      { challenge: 'Presenting highly technical geotechnical services to non-technical decision makers', solution: 'Structured service descriptions to communicate business value alongside technical capability.' },
      { challenge: 'Maintaining performance on shared hosting', solution: 'Optimised assets and used clean HTML/CSS for fast load times without framework overhead.' },
    ],

    outcome: {
      type: 'concept',
      points: [
        'Demonstrates ability to build professional B2B business websites',
        'Shows Google Analytics integration and performance optimisation',
        'Production deployment and maintenance on cPanel hosting',
        'Real-world professional experience with live business impact',
      ],
    },

    improvements: [
      'Migrate to React for easier content management',
      'Add project portfolio with case studies',
      'Implement contact form with email integration',
      'Add blog for technical content and SEO',
    ],
  },
];

export const getCaseStudy = (id) => caseStudies.find(c => c.id === id);