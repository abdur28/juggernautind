// News configuration for Juggernaut Industries Limited

export interface NewsArticle {
  id: string;
  title: string;
  slug: string;
  excerpt: string;
  category: 'Mining & Exploration' | 'Agriculture' | 'Construction' | 'Renewable Energy' | 'Company News';
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
    id: 'ksa-mauritania-partnership',
    slug: 'ksa-mauritania-exclusive-partnership',
    title: 'JIL Signs Exclusive Mining Partnership for Saudi Arabia & Mauritania',
    excerpt:
      'At the Future Minerals Forum in Riyadh, Juggernaut Industries MD Bello Mohammed signed an exclusive agreement with Nebras Business Holdings, securing our presence in the Kingdom of Saudi Arabia and Mauritania.',
    category: 'Mining & Exploration',
    date: '2026-02-10',
    author: 'Corporate Communications',
    image: '/event-3.jpeg',
    images: ['/event-3.jpeg'],
    href: '/news/ksa-mauritania-exclusive-partnership',
    content: `
      <p>Juggernaut Industries Limited is proud to announce a landmark milestone in our international growth strategy. At the prestigious <strong>Future Minerals Forum in Riyadh</strong>, our Managing Director, Alh. Bello Mohammed, FNSEG, attended a signing ceremony for an exclusive agreement with <strong>Nebras Business Holdings</strong>, a reputable Saudi company.</p>

      <p>This partnership secures exclusivity in the <strong>Kingdom of Saudi Arabia and Mauritania</strong>, positioning Juggernaut Industries to drive growth and innovation in the mining sector across these key regions. It reflects our commitment to building strategic alliances that shape the future of the industry.</p>

      <p>The Future Minerals Forum, held annually in Riyadh, is one of the world's leading platforms for dialogue on the role of minerals in the global energy transition. Our participation and partnership signing at this forum underscores JIL's growing international footprint and recognition as a credible force in African and global mining.</p>

      <p>We look forward to the significant opportunities this collaboration will unlock — and to further strengthening our position as Nigeria's leading multidisciplinary services company on the global stage.</p>
    `,
    tags: ['Partnership', 'Saudi Arabia', 'Mauritania', 'Future Minerals Forum', 'International'],
    featured: true,
  },
  {
    id: 'md-nseg-honorary-fellow',
    slug: 'md-bello-mohammed-nseg-honorary-fellow',
    title: 'MD Alh. Bello Mohammed Conferred as Honorary Fellow of NSEG',
    excerpt:
      'Juggernaut Industries congratulates our Managing Director, Alh. Bello Mohammed, FNSEG, on his conferment as Honorary Fellow of the Nigerian Society of Economic Geologists — a prestigious recognition of his exceptional leadership in Nigeria\'s mining industry.',
    category: 'Company News',
    date: '2025-10-29',
    author: 'Corporate Communications',
    image: '/event-7.jpeg',
    images: ['/event-7.jpeg', '/event-8.jpg', '/event-5.jpg', '/event-6.jpg'],
    href: '/news/md-bello-mohammed-nseg-honorary-fellow',
    content: `
      <p>Juggernaut Industries Limited is proud to congratulate our Managing Director, <strong>Alh. Bello Mohammed, FNSEG</strong>, on his conferment as an <strong>Honorary Fellow of the Nigerian Society of Economic Geologists (NSEG)</strong> — a prestigious recognition of his exceptional leadership, commitment, and contributions to the growth of Nigeria's mining and exploration industry.</p>

      <p>The award was proudly received on his behalf by our Executive Director, <strong>Usman Mohammed</strong>, during the <strong>4th International Conference and Exhibition</strong> hosted by the Nigerian Society of Economic Geologists (NSEG) in collaboration with the Nigerian Geological Survey Agency (NGSA) and the Nigerian Mining and Geosciences Society (NMGS), which took place from 26–29 October 2025.</p>

      <p>This year's conference theme — <em>"Emerging Technologies in Economic Geology: Unlocking Nigeria's Mineral Potentials"</em> — underscores the forward-thinking direction of our industry, one that Juggernaut Industries remains deeply committed to advancing.</p>

      <p>This recognition is not only a tribute to Alh. Bello Mohammed's personal dedication but also a reflection of the standard of excellence that Juggernaut Industries has upheld across more than two decades of operations.</p>

      <p>Congratulations once again to Alh. Bello Mohammed, FNSEG, and the entire Juggernaut team on this outstanding recognition. #NSEG #NigeriaMining #EconomicGeology</p>
    `,
    tags: ['Award', 'NSEG', 'Bello Mohammed', 'Recognition', 'Company News'],
    featured: true,
  },
  {
    id: 'nigeria-mining-week-2025',
    slug: 'nigeria-mining-week-2025',
    title: 'JIL at the 10th Nigeria Mining Week — Inspiring a Mining-Led Future',
    excerpt:
      'The Juggernaut team attended the 10th Nigeria Mining Week in Abuja, connecting with over 1,200 industry leaders and contributing to discussions on innovation, partnerships, and mining-led economic transformation.',
    category: 'Mining & Exploration',
    date: '2025-10-15',
    author: 'Corporate Communications',
    image: '/event-15.jpg',
    images: ['/event-15.jpg', '/event-16.jpg', '/event-17.jpg', '/event-8.jpg', '/event-9.jpg', '/event-10.jpg', '/event-11.jpg', '/event-12.jpg', '/event-13.jpg', '/event-14.jpg'],
    href: '/news/nigeria-mining-week-2025',
    content: `
      <p>What an incredible <strong>10th edition of Nigeria Mining Week</strong>, held right here in Abuja!</p>

      <p>The Juggernaut Industries Limited team attended in full force, energised by the bold vision of <strong>mining-led economic transformation</strong> on display across three dynamic days at the Abuja Continental Hotel (13–15 October 2025).</p>

      <p>Highlights included the dynamic <strong>Kaduna Mining Development Company Limited (KMDC) Deal Room</strong>, the first-of-its-kind <strong>Nigeria Gold Day</strong> (proudly sponsored by the Solid Minerals Development Fund), and insightful panels on value addition and sustainable growth.</p>

      <p>We connected with over 1,200 industry leaders, sparking discussions on innovative partnerships and the future of Nigeria's solid minerals sector. A huge thank you to the <strong>Ministry of Solid Minerals Development</strong> and all fellow attendees for three days of collaboration and momentum.</p>

      <p>Here's to turning these conversations into action for a greener, more competitive future. #NigeriaMiningWeek #MiningTransformation #SustainableMining</p>
    `,
    tags: ['Nigeria Mining Week', 'Industry Event', 'Mining', 'Abuja', 'Networking'],
    featured: true,
  },
  {
    id: 'rc-drilling-osun-state',
    slug: 'rc-drilling-osun-state',
    title: 'JIL RC Drilling Rig in Full Operation — Osun State, Nigeria',
    excerpt:
      'Juggernaut Industries\' RC drilling rig continues grade control and exploration operations in Osun State, demonstrating our in-house technical capability and commitment to Nigeria\'s growing mining sector.',
    category: 'Mining & Exploration',
    date: '2025-10-01',
    author: 'Exploration Team',
    image: '/survey-8.jpg',
    images: ['/survey-8.jpg', '/survey-9.jpg', '/drilling.jpg', '/mineral.jpg'],
    href: '/news/rc-drilling-osun-state',
    content: `
      <p>Juggernaut Industries Limited continues to demonstrate its in-house technical capability with our RC (Reverse Circulation) drilling rig in full operation in <strong>Osun State, Nigeria</strong>.</p>

      <p>This deployment reflects our ongoing commitment to providing world-class grade control and exploration drilling services to our clients. Our own RC drilling rig — part of our broader portfolio of dedicated equipment including geophysics tools and an in-house laboratory — ensures complete control over quality, timelines, and project outcomes.</p>

      <p>Operating effectively across Nigeria's diverse terrains, our team of experienced drillers and geologists delivers precise, reliable results that meet international reporting standards. This operational depth is what sets Juggernaut Industries apart as a fully integrated mineral exploration services partner.</p>

      <p>#RCDrilling #MiningExploration #Nigeria #OsunState #GeologyInAction</p>
    `,
    tags: ['Drilling', 'RC Drilling', 'Osun State', 'Mining Operations'],
    featured: false,
  },
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
      
      <p>"The West Oyo project represents our commitment to innovation and sustainable energy," said Executive Director Usman Mohammed. "We are helping Nigeria unlock its potential as a provider of minerals essential for the global energy transition."</p>

      <p>This project builds on our track record of successful exploration, including our previous discovery of Lead, Zinc, and Silver deposits. Our geologists are utilizing advanced geochemistry and structural mapping to target pegmatite bodies with high lithium potential.</p>
    `,
    tags: ['Lithium', 'Newstar Minerals', 'Drilling', 'Battery Minerals', 'West Oyo'],
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
    category: 'Renewable Energy',
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
