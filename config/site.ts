// Site-wide configuration for Juggernaut Industries Limited

export const siteConfig = {
  name: 'Juggernaut Industries Limited',
  shortName: 'JIL',
  tagline: 'Mining & Exploration Services',
  description:
    'Juggernaut Industries Limited was incorporated in 2006 with the corporate Affairs Commission of Nigeria to provide quality services and products to our clients and customers.',
  url: 'https://juggernautind.com',
  founded: 2006,
  location: {
    address: '3 Wiser Estate, Off Regent School Road',
    city: 'Mabushi',
    state: 'Abuja',
    country: 'Nigeria',
    full: '3 Wiser Estate, Off Regent School Road, Mabushi - Abuja, FCT, Nigeria',
  },
  contact: {
    email: 'info@juggernautind.com',
    phone: '+234 7052440133',
  },
  social: {
    linkedin: 'https://ng.linkedin.com/company/juggernaut-industries-ltd',
    twitter: '',
    facebook: '',
    instagram: '',
  },
  vision:
    "To be Nigeria's leading multidisciplinary services company, recognised for unwavering excellence, the quality of our people, and the strength of our values.",
  mission:
    'To become the preferred company of choice in the hearts and minds of our clients and customers recognized for providing quality and reliable products and services.',
};

export const navigation = {
  main: [
    { label: 'Home', href: '/' },
    {
      label: 'About',
      href: '/about',
      submenu: [
        { label: 'Who We Are', href: '/about', description: 'Our company profile and values' },
        { label: 'Team', href: '/about/team', description: 'Meet our leadership' },
      ],
    },
    {
      label: 'Services',
      href: '/services',
      submenu: [
        { label: 'Mining & Exploration', href: '/services/mining', description: 'Mineral exploration services' },
        { label: 'Agriculture & Agro-Processing', href: '/services/agriculture', description: 'Shea butter processing & export' },
        { label: 'Construction', href: '/services/construction', description: 'Infrastructure development' },
        { label: 'Renewable Energy', href: '/services/solar-energy', description: 'Solar & electrification solutions' },
      ],
    },
    { label: 'Projects', href: '/projects' },
    {
      label: 'Media',
      href: '/media/gallery',
      submenu: [
        { label: 'Image Gallery', href: '/media/gallery', description: 'Project photos & highlights' },
        { label: 'Video Gallery', href: '/media/videos', description: 'Video documentation' },
      ],
    },
    { label: 'News', href: '/news' },
  ],
  services: [
    { label: 'Mining & Exploration', href: '/services/mining', icon: 'Pickaxe' },
    { label: 'Agriculture & Agro-Processing', href: '/services/agriculture', icon: 'Leaf' },
    { label: 'Construction', href: '/services/construction', icon: 'Building2' },
    { label: 'Renewable Energy', href: '/services/solar-energy', icon: 'Sun' },
  ],
  footer: {
    company: [
      { label: 'About Us', href: '/about' },
      { label: 'Our Team', href: '/about#team' },
      { label: 'Careers', href: '/careers' },
      { label: 'News', href: '/news' },
    ],
    services: [
      { label: 'Mining & Exploration', href: '/services/mining' },
      { label: 'Agriculture & Agro-Processing', href: '/services/agriculture' },
      { label: 'Construction', href: '/services/construction' },
      { label: 'Renewable Energy', href: '/services/solar-energy' },
    ],
    legal: [
      { label: 'Privacy Policy', href: '/privacy' },
      { label: 'Terms of Service', href: '/terms' },
      { label: 'HSE Policy', href: '/hse-policy' },
    ],
  },
};

export const stats = [
  { value: 20, suffix: '+', label: 'Years Experience', description: 'Since 2006' },
  { value: 5, suffix: '+', label: 'Major Projects', description: 'Government & Private' },
  { value: 4, suffix: '', label: 'Industry Sectors', description: 'Diversified Services' },
  { value: 100, suffix: '%', label: 'Nigerian Owned', description: 'Indigenous Company' },
];

export const heroContent = {
  eyebrow: 'Since 2006 • RC 657541 • Abuja, Nigeria',
  headline: ['JUGGERNAUT', 'INDUSTRIES'],
  tagline: 'Mining & Exploration',
  taglineAccent: 'Services',
  subheadline: "Building Africa's mineral future",
  description:
    'Juggernaut Industries Ltd (JIL) is a Nigerian conglomerate with diversified interests spanning mining & mineral exploration, agriculture, construction and renewable energy solutions. Incorporated in Abuja in 2006, JIL is led by a team with deep expertise and project delivery.',
  cta: {
    primary: { label: 'Explore Services', href: '/services' },
    secondary: { label: 'Contact Us', href: '/contact' },
  },
};

// Hero slides for rotating background and floating card
export const heroSlides = [
  {
    id: 'mining',
    image: '/drilling.jpg',
    title: 'Mining & Exploration',
    subtitle: 'Core Service',
    description: 'Expert mineral exploration with our own drill rigs, geophysics equipment and in-house laboratory.',
    link: { label: 'Explore Mining', href: '/services/mining' },
  },
  {
    id: 'agriculture',
    image: 'https://images.unsplash.com/photo-1625246333195-78d9c38ad449?q=80&w=2070&auto=format&fit=crop',
    title: 'Agriculture & Agro-Processing',
    subtitle: 'Shea Butter',
    description: 'Strategic shea assets in Nigeria with post-harvesting and processing infrastructure for local and international markets.',
    link: { label: 'Explore Agriculture', href: '/services/agriculture' },
  },
  {
    id: 'construction',
    image: 'https://images.unsplash.com/photo-1504307651254-35680f356dfd?q=80&w=2070&auto=format&fit=crop',
    title: 'Construction',
    subtitle: 'Infrastructure',
    description: 'Building Nigeria\'s future with quality infrastructure and construction services.',
    link: { label: 'Explore Construction', href: '/services/construction' },
  },
  {
    id: 'solar',
    image: 'https://images.unsplash.com/photo-1509391366360-2e959784a276?q=80&w=2070&auto=format&fit=crop',
    title: 'Renewable Energy',
    subtitle: 'Solar & Electrification',
    description: 'Reliable solar and electrification solutions with a proven track record across Nigeria.',
    link: { label: 'Explore Renewable Energy', href: '/services/solar-energy' },
  },
];

// Thumbnail images for hero section
export const heroThumbnails = [
  {
    src: 'https://images.unsplash.com/photo-1578328819058-b69f3a3b0f6b?q=80&w=400',
    alt: 'Drilling operations',
  },
  {
    src: 'https://images.unsplash.com/photo-1581094794329-c8112a89af12?q=80&w=400',
    alt: 'Geophysics survey',
  },
  {
    src: 'https://images.unsplash.com/photo-1504307651254-35680f356dfd?q=80&w=400',
    alt: 'Mining site',
  },
  {
    src: 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?q=80&w=400',
    alt: 'Laboratory analysis',
  },
];

export const galleryThumbnails = [
  {
    id: 1,
    src: '/mining-1.jpeg',
  },
  {
    id: 2,
    src: '/mining-2.jpeg',
  },
  {
    id: 3,
    src: '/mining-3.jpeg',
  },
  {
    id: 4,
    src: '/Agriculture.jpg',
  },
];
