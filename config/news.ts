// News configuration for Juggernaut Industries Limited

export interface NewsArticle {
  id: string;
  title: string;
  slug: string;
  excerpt: string;
  category: 'Mining & Exploration' | 'Agriculture' | 'Construction' | 'Solar & Renewable Energy' | 'Oil & Gas' | 'Company News';
  date: string;
  author: string;
  image: string;
  images?: string[]; // Multiple images support
  href: string;
  content: string;
  tags: string[];
  featured?: boolean;
}

export const newsArticles: NewsArticle[] = [
  {
    id: 'hse-policy-launch',
    slug: 'hse-policy-formalized',
    title: 'Commitment to Safety: New HSE Policy Formalized',
    excerpt:
      'Juggernaut Industries Limited announces the official launch of its formalized Health, Safety, and Environment (HSE) Policy, reinforcing its commitment to "Zero Harm" across all project sites.',
    category: 'Company News',
    date: '2025-03-01',
    author: 'Corporate Communications',
    image: '/team-group.jpg',
    images: ['/team-group.jpg', '/conference.jpg', '/team-1.jpg'],
    href: '/news/hse-policy-formalized',
    content: `
      <p>Juggernaut Industries Limited (JIL) is proud to announce the formalization and launch of its comprehensive Health, Safety, and Environment (HSE) Policy. This initiative marks a significant milestone in our journey toward operational excellence and underscores our unwavering commitment to the well-being of our employees, contractors, and the communities where we operate.</p>
      
      <p>Our goal is simple: <strong>Zero Harm</strong>. We believe that every workplace injury and environmental incident is preventable. The new policy establishes rigorous standards for risk assessment, safety training, and environmental stewardship that align with international best practices and JORC standards.</p>
      
      <p>Managing Director Alhaji Bello Mohammed stated, "Safety is not just a priority for us; it is a core value. This formalized policy provides our world-class team with the framework they need to continue delivering excellence while ensuring every person returns home safely every day."</p>
      
      <p>The policy covers all sectors of our operations, including our deep-hole drilling sites in Osun and Oyo states, our agricultural processing centers in Bida, and our construction projects nationwide. We have also introduced a new safety certification program for all field staff to ensure the highest standards of technical competence and personal safety.</p>
    `,
    tags: ['HSE', 'Safety', 'Corporate', 'Policy'],
    featured: false,
  },
  {
    id: 'shea-processing-milestone',
    slug: 'bida-shea-processing-excellence',
    title: 'Shea Processing Excellence: Scaling Production in Bida',
    excerpt:
      'The Bida Shea Post-Harvesting and Processing Centre reaches a production milestone of 1,000 tonnes annually, with plans to scale to 10,000 tonnes.',
    category: 'Agriculture',
    date: '2025-02-15',
    author: 'Agricultural Division',
    image: '/shea.jpg',
    images: ['/shea.jpg', '/farmers.jpg', '/Agriculture.jpg', '/oil_palm.jpg'],
    href: '/news/bida-shea-processing-excellence',
    content: `
      <p>Juggernaut Industries is revolutionizing the agricultural value chain in Niger State with our Shea processing operations. Our facility in Bida, the first of its kind in the region, has successfully reached its initial production target of 1,000 tonnes of processed shea butter per year.</p>
      
      <p>Nigeria is the world's largest producer of shea butter, and Niger State accounts for 70% of that production. JIL owns its own Shea Tree Parkland with an estimated 100,000 wild shea trees, ensuring a sustainable and consistent supply of high-quality raw materials.</p>
      
      <p>We are now moving into the next phase of expansion, which aims to scale our production capacity to 10,000 tonnes annually. This expansion will create hundreds of jobs and significantly boost the local economy while providing high-grade agricultural products for export.</p>
      
      <p>Our investment in mechanized equipment, including tractors and specialized processing machinery, ensures that JIL remains a leader in Nigeria's agro-processing sector. We are also working with local farmers through our out-grower scheme to provide training and access to modern harvesting techniques.</p>
    `,
    tags: ['Agriculture', 'Shea Butter', 'Processing', 'Bida', 'Niger State'],
    featured: true,
  },
  {
    id: 'lithium-exploration-expansion',
    slug: 'west-oyo-lithium-project',
    title: "West Oyo Lithium Project: Expanding Nigeria's Battery Mineral Frontier",
    excerpt:
      'Juggernaut Industries expands its mining services into the battery minerals sector with a new lithium exploration drilling partnership in West Oyo.',
    category: 'Mining & Exploration',
    date: '2025-01-20',
    author: 'Exploration Team',
    image: '/mining-2.jpeg',
    images: ['/mining-2.jpeg', '/survery-3.jpg', '/survey-5.jpg', '/drilling-2.jpg'],
    href: '/news/west-oyo-lithium-project',
    content: `
      <p>In a strategic expansion of our mineral exploration services, Juggernaut Industries Limited has commenced drilling operations at the West Oyo Project Area. This project, conducted in partnership with Newstar Minerals Ltd (a subsidiary of Thor Explorations), aims to define significant lithium resources in the region.</p>
      
      <p>As the global demand for battery minerals grows, JIL is positioning itself at the forefront of Nigeria's emerging critical minerals sector. Our specialized deep-hole RC and Diamond drilling rigs are currently deployed at the site, providing high-quality core samples for resource assessment.</p>
      
      <p>"The West Oyo project represents our commitment to innovation and sustainable energy," said Executive Director Usman Mohammed. "By leveraging our experience from the NIMEP programme, we are helping Nigeria unlock its potential as a provider of minerals essential for the global energy transition."</p>
      
      <p>This project builds on our track record of successful exploration, including our previous discovery of Lead, Zinc, and Silver deposits under the National Integrated Mineral Exploration Project (NIMEP). Our geologists are utilizing advanced geochemistry and structural mapping to target pegmatite bodies with high lithium potential.</p>
    `,
    tags: ['Lithium', 'Newstar Minerals', 'Drilling', 'Battery Minerals', 'West Oyo'],
  },
  {
    id: 'nimep-lot-a3-success',
    slug: 'nimep-lot-a3-success',
    title: 'Juggernaut Industries Achieves Major Milestone in NIMEP LOT A3',
    excerpt:
      'Our exploration team successfully completes the Lead, Zinc, and Silver exploration program, marking a significant success for the National Integrated Mineral Exploration Project.',
    category: 'Mining & Exploration',
    date: '2024-11-15',
    author: 'Mining Operations',
    image: '/mining-1.jpeg',
    images: ['/mining-1.jpeg', '/survey-1.jpg', '/survey-2.jpg', '/survey.jpg', '/survey-4.jpg'],
    href: '/news/nimep-lot-a3-success',
    content: `
      <p>Juggernaut Industries Limited is proud to announce the successful completion of our exploration mandate under the National Integrated Mineral Exploration Project (NIMEP) LOT A3. This project focused on the discovery and definition of Lead, Zinc, and Silver deposits across the Benue Trough.</p>

      <h2>Proven Expertise in the Field</h2>
      <p>Utilizing our own RC drill rigs and advanced geophysics equipment, our team conducted a comprehensive program including desktop studies, soil mapping, and intensive drilling. The results have been described as highly promising, contributing vital data to Nigeria's national mineral resource database.</p>

      <h2>Technological Advantage</h2>
      <p>Our commitment to excellence is backed by our in-house laboratory and state-of-the-art exploration technology. This allows for rapid sample analysis and real-time decision-making in the field, ensuring that our exploration efforts are both efficient and accurate.</p>

      <h2>Setting New Standards</h2>
      <p>As the first contractor to complete their scope under the NIMEP program, Juggernaut Industries has set a high standard for indigenous mineral exploration services in West Africa. We continue to build on this success with upcoming projects in gold and battery minerals.</p>
    `,
    tags: ['Mining', 'NIMEP', 'Exploration', 'Lead', 'Zinc', 'Silver'],
    featured: true,
  },
  {
    id: 'executive-summit-2025',
    slug: 'executive-summit-strategic-growth',
    title: 'Executive Summit: Strategic Planning for Industrial Growth',
    excerpt:
      'JIL leadership convenes for an annual summit to chart the course for 2025, focusing on renewable energy and agricultural technology.',
    category: 'Company News',
    date: '2024-12-15',
    author: 'Executive Team',
    image: '/event-1.jpeg',
    images: ['/event-1.jpeg', '/event-10.jpg', '/event-11.jpg', '/event-8.jpg'],
    href: '/news/executive-summit-strategic-growth',
    content: `
      <p>The leadership of Juggernaut Industries Limited recently concluded its annual Executive Summit. The gathering, led by Managing Director Alhaji Bello Mohammed, focused on reviewing our recent achievements and outlining the strategic roadmap for the coming years.</p>
      
      <p>Key areas of focus for 2025 include the further expansion of our Solar Energy Division—which has already successfully completed street lighting projects across multiple states—and the integration of new agricultural technologies into our 5,000-hectare Niger State farms.</p>
      
      <p>The summit also addressed our commitment to community relations and local capacity building, ensuring that our growth continues to benefit the regions where we operate.</p>
      
      <p>As we approach our second decade of operations, the summit reaffirmed our vision: to be on the global listing of world-class companies through excellence, integrity, and innovation. The board also approved a new R&D investment fund to explore emerging technologies in green hydrogen and smart mining.</p>
    `,
    tags: ['Executive Summit', 'Strategic Planning', 'Growth', '2025'],
  },
  {
    id: 'segilola-gold-update',
    slug: 'segilola-grade-control-success',
    title: 'Supporting National Gold Production: Grade Control at Segilola',
    excerpt:
      "JIL's world-class drilling team continues its partnership with Segilola Gold Mine, providing critical grade control services for Nigeria's largest producing gold mine.",
    category: 'Mining & Exploration',
    date: '2024-10-05',
    author: 'Mining Services',
    image: '/mining-3.jpeg',
    images: ['/mining-3.jpeg', '/mineral.jpg', '/mineral-2.jpg', '/mineral-3.jpg'],
    href: '/news/segilola-grade-control-success',
    content: `
      <p>Juggernaut Industries continues to play a vital role in Nigeria's gold mining industry through its ongoing participation in the Segilola Gold Project in Osun State. As a trusted partner, JIL provides essential grade control drilling services that help ensure the precision and efficiency of the mine's operations.</p>
      
      <p>The Segilola Gold Mine is Nigeria's only large-scale producing gold mine and a symbol of the country's resurgent mining sector. Our team, using JIL's own RC drilling rigs, works daily to define ore bodies and maintain the high quality standards expected in a world-class operation.</p>
      
      <p>"Our work at Segilola demonstrates our ability to deliver technical excellence on high-stakes projects," said GM Thompson Waheed. "We are proud to contribute to the success of this landmark project which is paving the way for the future of mining in West Africa."</p>
    `,
    tags: ['Gold Mining', 'Segilola', 'Osun State', 'Drilling Services'],
    featured: true,
  },
  {
    id: 'solar-electrification-expansion',
    slug: 'solar-electrification-expansion',
    title: 'Rural Electrification Project Brings Light to 50+ Communities',
    excerpt:
      'Juggernaut successfully installs solar street lights and transformers across multiple Nigerian states, improving quality of life for thousands.',
    category: 'Solar & Renewable Energy',
    date: '2024-08-12',
    author: 'Energy Division',
    image: '/solarfarm.jpg',
    images: ['/solarfarm.jpg', '/solar_installation.jpg', '/conference.jpg'],
    href: '/news/solar-electrification-expansion',
    content: `
      <p>Juggernaut Industries has successfully completed solar street light installations and transformer projects across more than 50 rural communities in multiple Nigerian states, bringing sustainable illumination and power to thousands of residents.</p>

      <h2>Wide-Reaching Impact</h2>
      <p>This ambitious rural electrification project has transformed communities across Nigeria, providing reliable lighting and power infrastructure that enhances safety, extends productive hours, and improves overall quality of life.</p>

      <h2>Solar Street Lighting</h2>
      <p>Our solar street light installations utilize high-efficiency LED technology powered by solar panels, providing maintenance-free illumination that operates independently of the electrical grid. These systems have significantly improved nighttime safety and mobility in rural areas.</p>

      <h2>Sustainability Focus</h2>
      <p>By prioritizing solar technology, we are helping communities reduce energy costs while contributing to Nigeria's renewable energy goals and climate change mitigation efforts. Our future plan includes the development of multi-megawatt solar farms to provide industrial-scale energy solutions.</p>
    `,
    tags: ['Solar', 'Renewable Energy', 'Electrification', 'Community Development'],
  },
  {
    id: '20-years-excellence',
    slug: '20-years-of-industrial-excellence',
    title: 'Commemorating Nearly Two Decades of Industrial Excellence',
    excerpt:
      'Since its founding in 2006, Juggernaut Industries Limited has grown from a specialized mineral exploration firm into a diversified industrial leader across West Africa.',
    category: 'Company News',
    date: '2024-06-01',
    author: 'The Board of Directors',
    image: '/story.jpg',
    images: ['/story.jpg', '/team-group.jpg', '/team-1.jpg', '/team-2.jpg', '/team-3.jpg'],
    href: '/news/20-years-of-industrial-excellence',
    content: `
      <p>Founded in 2006, Juggernaut Industries Limited (JIL) is approaching two decades of unwavering service to Nigeria's industrial sectors. What began as a focused mission to provide world-class mineral exploration services has evolved into a diversified conglomerate with significant footprints in Agriculture, Construction, and Renewable Energy.</p>
      
      <p>Our success is built on the vision of our founders and the dedication of over 100 professionals who share a commitment to integrity, innovation, and excellence. From the remote drill sites of the NIMEP programme to our mechanized farms in Niger State, the JIL brand stands as a symbol of indigenous capability and professional pride.</p>
      
      <p>As we look toward the future, we remain dedicated to unlocking Africa's natural resources responsibly and sustainably, ensuring that our growth contributes to the prosperity of the continent. We are currently scouting for new headquarters in Abuja to accommodate our growing administrative and technical support teams.</p>
    `,
    tags: ['History', 'Anniversary', 'JIL Story', 'Industrial Growth'],
  },
];


export const featuredNews = newsArticles.filter((article) => article.featured);

export const getNewsByCategory = (category: NewsArticle['category']) => {
  return newsArticles.filter((article) => article.category === category);
};

export const getNewsById = (id: string): NewsArticle | undefined => {
  return newsArticles.find((article) => article.id === id);
};

export const getLatestNews = (limit: number = 3): NewsArticle[] => {
  return newsArticles
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
    .slice(0, limit);
};

// Format date for display
export const formatNewsDate = (dateString: string): string => {
  const date = new Date(dateString);
  return date.toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });
};
