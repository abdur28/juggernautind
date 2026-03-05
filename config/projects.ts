// Projects configuration for Juggernaut Industries Limited

export interface Project {
  id: string;
  title: string;
  client: string;
  clientLogo: string;
  category: string;
  location: string;
  year: string;
  description: string;
  fullDescription: string;
  services: string[];
  image: string;
  href: string;
}

export const projects: Project[] = [
  {
    id: 'ngsa',
    title: 'Geological Enhancement & Development',
    client: 'NGSA',
    clientLogo: '/ngsa.png',
    category: 'Mining & Exploration',
    location: 'Nigeria',
    year: '2019',
    description:
      'Juggernaut had been appointed consultants by NGSA for geological enhancement and development of Lead, Zinc, Silver, and Gold.',
    fullDescription:
      'Juggernaut Industries was appointed as consultants by the Nigerian Geological Survey Agency (NGSA) for comprehensive geological enhancement and development services. Our team conducted extensive surveys and analysis for Lead, Zinc, Silver, and Gold deposits, contributing to the national mineral resource database.',
    services: ['Geological Survey', 'Mineral Analysis', 'Resource Development', 'Technical Consulting'],
    image: '/mining.jpg',
    href: '/projects/ngsa',
  },
  {
    id: 'ministry-solid-minerals',
    title: 'Barite Processing Plant Installation',
    client: 'Ministry of Solid Minerals',
    clientLogo: '/ministry.png',
    category: 'Construction',
    location: 'South-South Nigeria',
    year: '2021',
    description:
      'Juggernaut has completed the installation of a Barite processing plant in the South-South region of the country.',
    fullDescription:
      'Juggernaut Industries successfully completed the installation of a Barite processing plant in the South-South region of Nigeria. This project aligns with the Federal Government vision to rapidly develop and support locally made Nigerian goods, contributing to the nation\'s industrial growth and self-sufficiency.',
    services: ['Plant Installation', 'Equipment Setup', 'Process Engineering', 'Commissioning'],
    image: '/construction.jpg',
    href: '/projects/ministry-solid-minerals',
  },
  {
    id: 'nimep',
    title: 'Lead, Zinc & Silver Exploration',
    client: 'National Integrated Mineral Exploration Programme',
    clientLogo: '/nimep.png',
    category: 'Mining & Exploration',
    location: 'Benue Trough, Nigeria',
    year: '2010',
    description:
      'Successfully completed the Lead, Zinc and Silver exploration program on the Benue trough for the Ministry of Mines and Steel Development.',
    fullDescription:
      'Juggernaut Industries successfully completed the Lead, Zinc and Silver exploration program on the Benue trough for the Ministry of Mines and Steel Development in Nigeria. This comprehensive project included Desktop Study, Soil Mapping, Geo-Physics and RC Drilling, establishing JIL as the first contractor under the NIMEP programme.',
    services: ['Desktop Study', 'Soil Mapping', 'Geo-Physics', 'RC Drilling', 'Data Analysis'],
    image: '/drilling.jpg',
    href: '/projects/nimep',
  },
  {
    id: 'segilola',
    title: 'Grade Control Operations',
    client: 'Segilola Gold Mine',
    clientLogo: '/segilola.png',
    category: 'Mining & Exploration',
    location: 'Osun State, Nigeria',
    year: '2020',
    description:
      "Currently conducting grade control with partners for Segilola, Nigeria's only large scale producing gold mine.",
    fullDescription:
      'Juggernaut Industries is currently conducting grade control operations with its partners for Segilola, Nigeria\'s only large scale producing gold mine. This historic project represents a significant milestone in Nigeria\'s mining industry, and JIL is proud to be providing essential services on this landmark project.',
    services: ['Grade Control', 'Drilling Services', 'Sample Analysis', 'Quality Assurance'],
    image: '/mining-1.jpeg',
    href: '/projects/segilola',
  },
  {
    id: 'newstar-thor',
    title: 'Lithium Exploration Drilling',
    client: 'Newstar Minerals Ltd (Thor Explorations)',
    clientLogo: '/newstar.png',
    category: 'Mining & Exploration',
    location: 'West Oyo, Nigeria',
    year: '2024',
    description:
      'Currently carrying out drilling services for lithium exploration in the West Oyo Project Area.',
    fullDescription:
      'Juggernaut Industries is currently carrying out drilling services for lithium exploration in partnership with Newstar Minerals Ltd (Thor Explorations) in their West Oyo Project Area. This project positions JIL at the forefront of Nigeria\'s emerging battery minerals sector.',
    services: ['Exploration Drilling', 'Core Sampling', 'Geological Mapping', 'Resource Assessment'],
    image: '/mining-2.jpeg',
    href: '/projects/newstar-thor',
  },
];

// Project categories for filtering
export const projectCategories = [
  'All',
  'Mining & Exploration',
  'Construction',
  'Agriculture',
  'Solar Energy',
];

// Success factors from company profile
export const successFactors = [
  'Availability of competent team members',
  'Extensive local regional knowledge and excellent community relations',
  'Ability to meet project objectives',
  'Completed within budget',
  'Project carried out on time',
];

export const getProjectById = (id: string): Project | undefined => {
  return projects.find((project) => project.id === id);
};

export const getProjectsByCategory = (category: string): Project[] => {
  if (category === 'All') return projects;
  return projects.filter((project) => project.category === category);
};
