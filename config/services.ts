// Services configuration for Juggernaut Industries Limited

export type ServiceSector =
  | 'mining'
  | 'agriculture'
  | 'construction'
  | 'solar';

export interface ServiceHighlight {
  title: string;
  description: string;
}

export interface Service {
  id: ServiceSector;
  title: string;
  shortTitle: string;
  description: string;
  fullDescription: string[];
  icon: string;
  color: string;
  href: string;
  features: string[];
  highlights?: ServiceHighlight[];
  image: string;
  images?: string[];
}

// Mining exploration services from PDF
export const explorationServices = [
  'Literature Review & Public Domain',
  'Data Compilation',
  'Remote Sensing',
  'Geophysical Surveys',
  'Bio-geochemical Surveys',
  'Soil Sampling Surveys',
  'Mapping',
  'Trenching and Pitting',
  'Priority Targets Generation',
  'Rock Chips/Grab Sampling',
  'Drilling - RC & Diamond',
  'Geotechnical Management',
  'Geophysical Survey - Ground Mag, IP, EM',
  'Geophysical and Geological Interpretation',
  'Exploration Visualization',
  'Metallurgical Test Work Campaigns',
  'Exploration Advisory',
  'Spectral Geology',
  'Training and Capacity Building',
  'Report Writing - JORC Format',
];

// Mining process steps
export const miningProcessSteps = [
  {
    step: 1,
    title: 'Desktop Study',
    description:
      'Remote sensing using ASTER images, interpretation of government airborne data and magnetics, regional geology analysis, identifying artisanal workings, and compiling into GIS software.',
    details: [
      'Remote Sensing using ASTER Images',
      'Interpretation of government airborne data & magnetics',
      'Regional geology of the area',
      'Identify artisanal workings on Google Earth',
      'Compiling into GIS software',
    ],
  },
  {
    step: 2,
    title: 'Field Work - Geology',
    description:
      'Generate exploration plan, reconnaissance site visits, grab and soil sampling, trenching, pitting, channel sampling, and geological observations.',
    details: [
      'Generate exploration plan',
      'Reconnaissance site visits',
      'Grab and soil sampling',
      'Trenching & Pitting',
      'Channel sampling',
      'Geological observations',
    ],
  },
  {
    step: 3,
    title: 'Geophysics',
    description:
      'Ground magnetics, IP, EM surveys using our own equipment including GEM Overhauser Magnetometer with integrated GPS location, high resolution and precision measurements.',
    details: [
      'IP (Induced Polarization)',
      'EM (Electromagnetic)',
      'GEM Overhauser Magnetometer',
      'Measuring magnetic variations of rocks',
      'Base station for drift correction',
      'Integrated GPS location',
      'Resolution of 0.01nT, Precision of 0.1nT',
    ],
  },
  {
    step: 4,
    title: 'Data Interpretation & Reporting',
    description:
      'Database management, geostatistics, 2D GIS map compilations, data visualization using Micromine, Oasis Montaj, QGIS, and ENVI software.',
    details: [
      'Database management',
      'Geostatistics - Correlation & Cumulative plots',
      '2D GIS map compilations (Geology, Geochemistry, Geophysics)',
      'Data visualization',
      '2D and 3D stacking of all data interpretations',
      'Wireframing of ore bodies',
    ],
  },
  {
    step: 5,
    title: 'RC & Diamond Drilling',
    description:
      'Grade control, exploration drilling, drill management, and logging and sampling. We own our own RC drilling rig for resource definition drilling.',
    details: [
      'Grade Control',
      'Exploration Drilling',
      'Drill Management',
      'Logging and Sampling',
      'Core sampling',
      'Resource definition drilling',
    ],
  },
];

// Agriculture crops - focused on shea butter only
export const agricultureCrops = [
  {
    name: 'Shea Butter',
    description:
      'Nigeria is the world\'s largest producer of shea nuts, contributing approximately 45% of global production. JIL holds strategic shea assets in Nigeria and has established post-harvesting and processing infrastructure, with shea butter processing to high quality standards to meet local and international markets.',
    image: '/shea.jpg',
  },
];

export const services: Service[] = [
  {
    id: 'mining',
    title: 'Mining & Exploration Services',
    shortTitle: 'Mining',
    description:
      'Juggernaut Industries Ltd is an indigenous mineral exploration services company offering a full suite of services — from grass-roots exploration to advanced definition drill-outs — fully compliant with international reporting standards including JORC and NI 43-101.',
    fullDescription: [
      'With deep experience across the African terrain and access to dedicated drilling rigs, geophysics equipment, and an in-house laboratory, the company delivers end-to-end solutions encompassing data compilation and review, planning, budgeting, drill campaign supervision, logistics, and project management.',
      'Juggernaut Industries has demonstrated a strong track record in the field, having successfully completed Lead, Zinc, and Silver exploration on behalf of the Nigerian Government under the NIMEP program, yielding significant new discoveries, while also providing world-class grade control drilling services in partnership with the Segilola Gold Project.',
    ],
    icon: 'Pickaxe',
    color: 'mining-green',
    href: '/services/mining',
    features: [
      'Mineral Exploration',
      'RC & Diamond Drilling',
      'Geophysical Surveys',
      'Grade Control',
      'Resource Estimation',
      'JORC Reporting',
    ],
    highlights: [
      {
        title: 'Own Equipment',
        description: 'We own our own drill rigs, geophysics equipment and in-house laboratory.',
      },
      {
        title: 'International Standards',
        description: 'JORC and NI 43-101 format reporting and international best practices.',
      },
      {
        title: 'Proven Track Record',
        description: 'Successfully completed Lead, Zinc, and Silver exploration with significant new discoveries.',
      },
      {
        title: 'World Class Team',
        description: 'International team of experienced personnel representing diverse cultures.',
      },
    ],
    image: '/mining-1.jpeg',
    images: ['/mining-1.jpeg', '/mining-2.jpeg', '/mining-3.jpeg', '/mineral.jpg', '/mineral-2.jpg'],
  },
  {
    id: 'agriculture',
    title: 'Agriculture & Agro-Processing',
    shortTitle: 'Agriculture & Agro-Processing',
    description:
      'Nigeria is the world\'s largest producer of shea nuts, contributing approximately 45% of global production. Juggernaut Industries Ltd holds strategic shea assets in Nigeria, positioning the company for significant participation in this growing market.',
    fullDescription: [
      'Nigeria is the world\'s largest producer of shea nuts, contributing approximately 45% of global production. Juggernaut Industries Ltd holds strategic shea assets in Nigeria, positioning the company for significant participation in this growing market.',
      'JIL has established post-harvesting and processing infrastructure and is currently in the process of recommencing operations at a new facility, with a clear growth roadmap to scale production in the near term. The company has an established distribution network and existing international off-take and partnership agreements ready to support full-scale operations.',
      'JIL remains committed to ethical sourcing, full compliance with Nigerian labour laws, and honouring the shea industry\'s long-standing tradition as a sector that empowers women.',
    ],
    icon: 'Leaf',
    color: 'mining-green',
    href: '/services/agriculture',
    features: [
      'Shea Butter Processing',
      'Post-Harvesting Infrastructure',
      'International Off-Take Agreements',
      'Ethical Sourcing',
      'Quality Standards Compliance',
      'Export Services',
    ],
    highlights: [
      {
        title: 'Processing Machines & Lab',
        description: 'Shea butter processing to high quality to meet local and international standards.',
      },
      {
        title: 'Strategic Shea Assets',
        description: 'Holds strategic shea assets in Nigeria for significant market participation.',
      },
      {
        title: 'Distribution Network',
        description: 'Established distribution network and international off-take agreements.',
      },
      {
        title: 'Ethical Sourcing',
        description: 'Committed to ethical sourcing and empowering women in the shea industry.',
      },
    ],
    image: '/shea.jpg',
    images: ['/shea.jpg', '/farmers.jpg'],
  },
  {
    id: 'construction',
    title: 'Construction Engineering',
    shortTitle: 'Construction',
    description:
      'Juggernaut Industries Ltd delivers high-quality construction and civil engineering solutions across Nigeria, with a strong portfolio of successfully completed projects for both Federal Government and private sector clients.',
    fullDescription: [
      'Juggernaut Industries Ltd delivers high-quality construction and civil engineering solutions across Nigeria, with a strong portfolio of successfully completed projects for both Federal Government and private sector clients.',
      'Underpinned by a team of COREN-registered engineers with decades of combined experience, JIL brings technical rigour, professional excellence, and a commitment to delivering projects on time and within specification.',
      'From concept to completion, the company applies industry best practices to every engagement, ensuring durable, compliant, and high-impact infrastructure outcomes for its clients.',
    ],
    icon: 'Building2',
    color: 'industrial-gold',
    href: '/services/construction',
    features: [
      'Commercial Buildings',
      'Infrastructure Development',
      'Civil Engineering',
      'Project Management',
      'Quality Assurance',
      'Government Contracts',
    ],
    highlights: [
      {
        title: 'COREN-Registered Engineers',
        description: 'Team of COREN-registered engineers with decades of combined experience.',
      },
      {
        title: 'Government & Private Clients',
        description: 'Strong portfolio for both Federal Government and private sector clients.',
      },
      {
        title: 'On Time Delivery',
        description: 'Commitment to delivering projects on time and within specification.',
      },
      {
        title: 'Industry Best Practices',
        description: 'Durable, compliant, and high-impact infrastructure outcomes.',
      },
    ],
    image: 'https://images.unsplash.com/photo-1504307651254-35680f356dfd?q=80&w=800&auto=format&fit=crop',
    images: ['https://images.unsplash.com/photo-1504307651254-35680f356dfd?q=80&w=800&auto=format&fit=crop', '/construction.jpg'],
  },
  {
    id: 'solar',
    title: 'Renewable Energy',
    shortTitle: 'Renewable Energy',
    description:
      'Juggernaut Industries Ltd delivers reliable solar and electrification solutions across Nigeria, with a proven track record of successfully completed projects for Federal Government and private sector clients.',
    fullDescription: [
      'Juggernaut Industries Ltd delivers reliable solar and electrification solutions across Nigeria, with a proven track record of successfully completed projects for Federal Government and private sector clients.',
      'From solar street lighting to transformer installation across varying capacities, JIL brings technical expertise and a commitment to sustainable energy to every project.',
      'Supported by a team of experienced and trained technicians, JIL is equipped to operate effectively in remote locations nationwide, ensuring that communities and private clients alike gain access to dependable and sustainable power infrastructure.',
    ],
    icon: 'Sun',
    color: 'energy-teal',
    href: '/services/solar-energy',
    features: [
      'Solar Street Lights',
      'Rural Electrification',
      'Transformer Installation',
      'Sustainable Energy Solutions',
      'Government Projects',
      'Remote Location Expertise',
    ],
    highlights: [
      {
        title: 'Nationwide Coverage',
        description: 'Successfully completed projects across Nigeria including remote locations.',
      },
      {
        title: 'Government Partner',
        description: 'Trusted by Federal and State Governments for electrification projects.',
      },
      {
        title: 'Trained Technicians',
        description: 'Experienced and trained technicians for all types of installations.',
      },
      {
        title: 'Multiple Capacities',
        description: 'Install different capacity transformers based on project requirements.',
      },
    ],
    image: '/solar_installation.jpg',
    images: ['/solar_installation.jpg', 'https://images.unsplash.com/photo-1509391366360-2e959784a276?q=80&w=800&auto=format&fit=crop'],
  },
];

export const getServiceById = (id: ServiceSector): Service | undefined => {
  return services.find((service) => service.id === id);
};

export const getServiceBySlug = (slug: string): Service | undefined => {
  const slugMap: Record<string, ServiceSector> = {
    mining: 'mining',
    agriculture: 'agriculture',
    construction: 'construction',
    'solar-energy': 'solar',
  };
  const id = slugMap[slug];
  return id ? getServiceById(id) : undefined;
};
