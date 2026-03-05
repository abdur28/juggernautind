// Services configuration for Juggernaut Industries Limited

export type ServiceSector =
  | 'mining'
  | 'agriculture'
  | 'construction'
  | 'solar'
  | 'oilgas';

export interface ServiceHighlight {
  title: string;
  description: string;
}

export interface Service {
  id: ServiceSector;
  title: string;
  shortTitle: string;
  description: string;
  fullDescription: string;
  icon: string;
  color: string;
  href: string;
  features: string[];
  highlights?: ServiceHighlight[];
  image: string;
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

// Agriculture crops
export const agricultureCrops = [
  {
    name: 'Shea Butter',
    description:
      'Nigeria is the largest shea butter producer in the world with annual production of 360,000mt and Niger State has 70% share. JIL has its own Shea Tree Parkland located in Niger State, with an estimated 100,000 wild shea trees. We have setup the first shea post harvesting and processing centre in Bida, Niger State that can produce 1,000tn a year with plans to scale up to 10,000tn.',
    image: '/shea.jpg',
  },
  {
    name: 'Rice',
    description:
      'For our rice farms in Niger State, we use quality seeds, fertilizers, and inputs to produce high quality rice. We constantly look out to eliminate weeds and protect our rice using new techniques and technologies. We have invested in mechanized equipment like tractors, threshers and weeders to enhance our overall performance.',
    image: '/rice-farm.jpg',
  },
  {
    name: 'Oil Palm Plantation',
    description:
      'We aim to be the largest regional palm producer. Our palm tenera seeds are purchased from Nigerian Institute for Oil Palm Research (NIFOR) and they produce up to 25tn per hectare when fully matured. We are constantly expanding our farm to meet the growing demand for Crude Palm Oil (CPO).',
    image: '/oil_palm.jpg',
  },
];

export const services: Service[] = [
  {
    id: 'mining',
    title: 'Mining & Exploration Services',
    shortTitle: 'Mining',
    description:
      'Our mining solutions range from grass-roots exploration to advanced definition drill-outs. This includes data compilations and reviews, planning, budgeting, drill campaigns with supervision, logistics, project management and implementation.',
    fullDescription:
      'Juggernaut Industries Ltd is an indigenous mineral exploration services company with experience in the African terrain. We own our own drill rigs, geophysics equipment and in-house lab. We completed the Lead, Zinc and Silver exploration for the Nigerian Government under the NIMEP program and made some very exciting discoveries. Our world class drilling team is proud to provide grade control drilling with our partners to the Segilola Gold Project.',
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
        title: 'NIMEP Certified',
        description: 'First contractor under the National Integrated Mineral Exploration Programme.',
      },
      {
        title: 'International Standards',
        description: 'JORC format reporting and international best practices.',
      },
      {
        title: 'World Class Team',
        description: 'International team of experienced personnel representing diverse cultures.',
      },
    ],
    image: '/mining.jpg',
  },
  {
    id: 'agriculture',
    title: 'Agriculture & Agro-Processing',
    shortTitle: 'Agriculture',
    description:
      'JIL has 5,000 hectares of farm land in Niger State to cultivate Rice, Palm Oil and Shea butter from Shea trees. We are into production and export of quality agriculture produce, farm establishment, management and consultancy.',
    fullDescription:
      'We are involved in end to end of agricultural food chain and we use the latest technology to ensure that we provide more value in the agricultural industry through quality agricultural production. We are focused on creating novel solutions to existing problems in agriculture and transforming them to economic opportunities. Our shea processing centre in Bida, Niger State is the first of its kind, producing 1,000tn annually.',
    icon: 'Leaf',
    color: 'mining-green',
    href: '/services/agriculture',
    features: [
      'Rice Cultivation',
      'Palm Oil Production',
      'Shea Butter Processing',
      'Farm Management',
      'Agricultural Consultancy',
      'Export Services',
    ],
    highlights: [
      {
        title: '5,000 Hectares',
        description: 'Vast farm land in Niger State for large-scale agricultural production.',
      },
      {
        title: '100,000 Shea Trees',
        description: 'Own Shea Tree Parkland with estimated 100,000 wild shea trees.',
      },
      {
        title: 'First Processing Centre',
        description: 'First shea post harvesting and processing centre in Bida, Niger State.',
      },
      {
        title: 'Mechanized Farming',
        description: 'Invested in tractors, threshers, and weeders for enhanced performance.',
      },
    ],
    image: '/agriculture.jpg',
  },
  {
    id: 'construction',
    title: 'Construction Engineering',
    shortTitle: 'Construction',
    description:
      'JIL contributes to sustainable development. We are recognized for offering engineering construction services to Federal and State Governments, Private companies, oil & gas pipeline companies, public works agencies, municipalities and commercial/residential real estate developers.',
    fullDescription:
      'Drawing from our expertise in construction management and engineering, we are able to leverage our process-centric business model to deliver a variety of projects for satisfied clients. We work with Federal and State Governments, private companies, oil & gas pipeline companies, public works agencies, municipalities and commercial/residential real estate developers.',
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
        title: 'Government Projects',
        description: 'Recognized partner for Federal and State Government construction projects.',
      },
      {
        title: 'Oil & Gas Infrastructure',
        description: 'Experience with oil & gas pipeline companies and related infrastructure.',
      },
      {
        title: 'Process-Centric Model',
        description: 'Leverage our business model to deliver variety of projects efficiently.',
      },
      {
        title: 'Sustainable Development',
        description: 'Contributing to sustainable development across Nigeria.',
      },
    ],
    image: '/construction.jpg',
  },
  {
    id: 'solar',
    title: 'Solar & Electrification',
    shortTitle: 'Solar',
    description:
      'JIL has successfully undertaken and completed Solar and Electrification projects across Nigeria. We have built solar street lights and installed different capacity transformers for our clients including Federal and State Governments of Nigeria.',
    fullDescription:
      'We have experienced and trained technicians which enables us to work in remote locations anywhere in Nigeria. Our solar and electrification division has successfully completed projects for both Federal and State Governments, bringing power to communities across the nation through sustainable energy solutions.',
    icon: 'Sun',
    color: 'energy-teal',
    href: '/services/solar-energy',
    features: [
      'Solar Street Lights',
      'Rural Electrification',
      'Transformer Installation',
      'Renewable Energy Solutions',
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
  },
  {
    id: 'oilgas',
    title: 'Oil & Gas Services',
    shortTitle: 'Oil & Gas',
    description:
      'Our oil and gas division provides comprehensive services to the energy sector, supporting Nigeria\'s position as a major energy producer with quality services and expertise.',
    fullDescription:
      'Our oil and gas division provides comprehensive services to the energy sector, supporting Nigeria\'s position as a major energy producer. We bring the same commitment to excellence and professionalism that defines all our operations to every oil and gas project we undertake.',
    icon: 'Fuel',
    color: 'rust',
    href: '/services/oil-gas',
    features: [
      'Upstream Services',
      'Downstream Operations',
      'Equipment Supply',
      'Technical Consulting',
      'Safety Compliance',
      'Pipeline Services',
    ],
    highlights: [
      {
        title: 'Energy Sector Expertise',
        description: 'Comprehensive services supporting Nigeria\'s energy production.',
      },
      {
        title: 'Quality Standards',
        description: 'Same commitment to excellence across all oil and gas operations.',
      },
      {
        title: 'Technical Consulting',
        description: 'Expert consulting services for upstream and downstream operations.',
      },
      {
        title: 'Safety First',
        description: 'Strict safety compliance in all our oil and gas activities.',
      },
    ],
    image: '/drilling.jpg',
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
    'oil-gas': 'oilgas',
  };
  const id = slugMap[slug];
  return id ? getServiceById(id) : undefined;
};
