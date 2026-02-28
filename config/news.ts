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
  href: string;
  content: string;
  tags: string[];
  featured?: boolean;
}

export const newsArticles: NewsArticle[] = [
  {
    id: 'new-mining-operations-launch',
    title: 'Juggernaut Industries Launches New Mining Operations in Kaduna',
    slug: 'new-mining-operations-launch',
    excerpt: 'We are excited to announce the launch of our new state-of-the-art mining facility in Kaduna State, marking a significant milestone in our expansion.',
    category: 'Mining & Exploration',
    date: '2024-12-15',
    author: 'Operations Team',
    image: 'https://images.unsplash.com/photo-1578328819058-b69f3a3b0f6b?q=80&w=2074&auto=format&fit=crop',
    href: '/news/new-mining-operations-launch',
    content: `
      <p>Juggernaut Industries Limited is proud to announce the opening of our latest mining facility in Kaduna State, representing a significant investment in Nigeria's mining sector and our commitment to sustainable resource extraction.</p>

      <h2>State-of-the-Art Technology</h2>
      <p>The new facility features cutting-edge mining equipment and advanced processing technology, enabling us to extract minerals more efficiently while minimizing environmental impact. Our investment in modern equipment demonstrates our commitment to both productivity and sustainability.</p>

      <h2>Job Creation and Economic Impact</h2>
      <p>This expansion will create over 200 direct jobs and approximately 500 indirect employment opportunities for local communities. We have partnered with local training institutions to ensure our workforce is equipped with the necessary skills for modern mining operations.</p>

      <h2>Environmental Commitment</h2>
      <p>Environmental stewardship is at the core of this project. We have implemented comprehensive environmental management systems, including water treatment facilities, dust suppression systems, and rehabilitation plans for mined areas. Our goal is to set new standards for responsible mining in Nigeria.</p>

      <h2>Community Engagement</h2>
      <p>We recognize the importance of maintaining positive relationships with host communities. As part of this project, we have established community development programs focused on education, healthcare, and infrastructure development. We believe in shared prosperity and sustainable development that benefits all stakeholders.</p>

      <p>This new facility represents our vision for the future of mining in Nigeria – technologically advanced, environmentally responsible, and community-focused. We look forward to contributing to the growth and development of Kaduna State and Nigeria as a whole.</p>
    `,
    tags: ['Mining', 'Kaduna', 'Expansion', 'Job Creation', 'Sustainability'],
    featured: true,
  },
  {
    id: 'agricultural-innovation-program',
    title: 'Agricultural Innovation Program Transforms Local Farming',
    slug: 'agricultural-innovation-program',
    excerpt: 'Our new agricultural innovation program is helping local farmers increase crop yields by 40% through modern farming techniques and technology.',
    category: 'Agriculture',
    date: '2024-11-28',
    author: 'Agricultural Division',
    image: 'https://images.unsplash.com/photo-1625246333195-78d9c38ad449?q=80&w=2070&auto=format&fit=crop',
    href: '/news/agricultural-innovation-program',
    content: `
      <p>Juggernaut Industries' Agricultural Innovation Program has achieved remarkable results, helping local farmers increase productivity while promoting sustainable farming practices across Northern Nigeria.</p>

      <h2>Program Overview</h2>
      <p>Launched six months ago, our Agricultural Innovation Program combines modern farming techniques, quality inputs, and technical support to help smallholder farmers maximize their productivity. The program has already reached over 500 farmers across three states.</p>

      <h2>Key Achievements</h2>
      <p>Participating farmers have reported an average 40% increase in crop yields, with some farms achieving even higher improvements. This success is attributed to the introduction of high-yield seed varieties, proper fertilizer application, and improved irrigation techniques.</p>

      <h2>Technology Integration</h2>
      <p>We have introduced farmers to modern agricultural technologies including soil testing, precision farming techniques, and mobile apps for weather forecasting and market information. This technology transfer is empowering farmers to make data-driven decisions.</p>

      <h2>Sustainable Practices</h2>
      <p>The program emphasizes sustainable farming practices such as crop rotation, organic fertilizer use, and water conservation. We believe that long-term agricultural success requires a balance between productivity and environmental conservation.</p>

      <p>Looking ahead, we plan to expand this program to reach 2,000 farmers by the end of next year, continuing our commitment to agricultural development and food security in Nigeria.</p>
    `,
    tags: ['Agriculture', 'Innovation', 'Farmers', 'Technology', 'Sustainability'],
    featured: true,
  },
  {
    id: 'solar-energy-initiative',
    title: 'Solar Energy Initiative Brings Power to Rural Communities',
    slug: 'solar-energy-initiative',
    excerpt: 'Our solar energy initiative has successfully electrified 15 rural communities, providing clean and reliable power to over 5,000 households.',
    category: 'Solar & Renewable Energy',
    date: '2024-10-10',
    author: 'Energy Solutions Team',
    image: 'https://images.unsplash.com/photo-1509391366360-2e959784a276?q=80&w=2072&auto=format&fit=crop',
    href: '/news/solar-energy-initiative',
    content: `
      <p>In a significant milestone for rural electrification, Juggernaut Industries has completed the installation of solar power systems in 15 rural communities, bringing clean and reliable electricity to thousands of households for the first time.</p>

      <h2>Project Scope</h2>
      <p>This comprehensive solar energy initiative involved the installation of both community-scale solar mini-grids and household solar systems, tailored to the specific needs of each community. The project represents an investment of over ₦500 million in renewable energy infrastructure.</p>

      <h2>Impact on Communities</h2>
      <p>Access to electricity has transformed daily life in these communities. Students can now study after dark, small businesses can operate extended hours, and healthcare facilities can maintain vaccine cold chains and provide better services. Over 5,000 households are now connected to clean, reliable power.</p>

      <h2>Economic Benefits</h2>
      <p>The availability of electricity has sparked economic activity in these communities. We have observed the emergence of new businesses including charging stations, cold storage facilities, and small-scale manufacturing operations. This demonstrates the multiplier effect of energy access on economic development.</p>

      <h2>Environmental Impact</h2>
      <p>By replacing diesel generators and kerosene lamps with solar power, these communities are now avoiding approximately 500 tons of CO2 emissions annually. This project demonstrates that economic development and environmental sustainability can go hand in hand.</p>

      <p>We are committed to expanding this initiative to reach more rural communities, contributing to Nigeria's renewable energy targets and sustainable development goals.</p>
    `,
    tags: ['Solar Energy', 'Rural Electrification', 'Clean Power', 'Community Development', 'Renewable Energy'],
    featured: true,
  },
  {
    id: 'segilola-milestone-2024',
    title: 'Juggernaut Celebrates Major Milestone at Segilola Gold Mine',
    slug: 'segilola-milestone-2024',
    excerpt: "Our team successfully completed the grade control phase at Nigeria's only large-scale producing gold mine, contributing to the nation's mining heritage and economic growth.",
    category: 'Mining & Exploration',
    date: '2024-02-15',
    author: 'Mining Operations',
    image: 'https://images.unsplash.com/photo-1605723517503-3cadb5818a0c?q=80&w=2070&auto=format&fit=crop',
    href: '/news/segilola-milestone-2024',
    content: `
      <p>Juggernaut Industries Limited proudly announces the successful completion of the grade control phase at the Segilola Gold Mine, Nigeria's only large-scale producing gold mine located in Osun State.</p>

      <h2>Project Achievement</h2>
      <p>Our expert team has been instrumental in conducting precision grade control operations, ensuring optimal ore extraction and processing efficiency. This milestone demonstrates our technical expertise and commitment to excellence in mining operations.</p>

      <h2>Economic Impact</h2>
      <p>The Segilola Gold Mine plays a crucial role in Nigeria's mining sector, contributing significantly to the nation's mineral wealth and economic diversification efforts. Our involvement in this prestigious project reinforces our position as a trusted partner in Nigeria's mining industry.</p>

      <h2>Technical Excellence</h2>
      <p>The grade control phase required advanced geological mapping, sampling, and analysis to ensure accurate ore classification. Our team utilized state-of-the-art equipment and methodologies to deliver precise results that optimize mining operations.</p>

      <h2>Commitment to Quality</h2>
      <p>This achievement reflects our unwavering commitment to delivering high-quality mining services that meet international standards while supporting Nigeria's economic development goals.</p>

      <p>We remain dedicated to contributing to Nigeria's mining heritage and look forward to continued partnership in projects that drive national growth and prosperity.</p>
    `,
    tags: ['Gold Mining', 'Segilola', 'Grade Control', 'Mining Operations', 'Osun State'],
  },
  {
    id: 'lithium-exploration-update',
    title: 'Lithium Drilling Services Expanded in West Oyo Project',
    slug: 'lithium-exploration-update',
    excerpt: 'Juggernaut Industries expands drilling operations for Newstar Minerals, supporting the growing demand for battery minerals in the renewable energy sector.',
    category: 'Mining & Exploration',
    date: '2024-02-01',
    author: 'Exploration Team',
    image: 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?q=80&w=2070&auto=format&fit=crop',
    href: '/news/lithium-exploration-update',
    content: `
      <p>In response to the global demand for lithium and battery minerals, Juggernaut Industries has significantly expanded its drilling services for Newstar Minerals' lithium exploration project in West Oyo State.</p>

      <h2>Strategic Expansion</h2>
      <p>This expansion positions Nigeria to participate in the global renewable energy revolution by developing domestic lithium resources. Our drilling services are helping to establish the extent and quality of lithium deposits in the region.</p>

      <h2>Advanced Drilling Technology</h2>
      <p>We have deployed advanced reverse circulation (RC) and diamond drilling equipment to ensure accurate sample collection and geological data. Our experienced drilling crews work around the clock to maintain project momentum.</p>

      <h2>Supporting Renewable Energy</h2>
      <p>Lithium is a critical mineral for battery production, essential for electric vehicles and renewable energy storage. By supporting lithium exploration in Nigeria, we are contributing to the global transition to clean energy.</p>

      <h2>Partnership Excellence</h2>
      <p>Our collaboration with Newstar Minerals demonstrates our capability to deliver specialized exploration services that meet the exacting standards of modern mineral exploration.</p>

      <p>As the world shifts toward renewable energy, Juggernaut Industries is proud to support Nigeria's participation in the battery minerals sector through expert drilling and exploration services.</p>
    `,
    tags: ['Lithium', 'Exploration', 'Drilling', 'Battery Minerals', 'Oyo State'],
  },
  {
    id: 'barite-processing-success',
    title: 'Barite Processing Plant Achieves Full Production Capacity',
    slug: 'barite-processing-success',
    excerpt: "The Barite processing plant in the South-South region reaches optimal production levels, supporting the Federal Government's vision for locally made goods.",
    category: 'Mining & Exploration',
    date: '2024-01-20',
    author: 'Processing Operations',
    image: 'https://images.unsplash.com/photo-1504307651254-35680f356dfd?q=80&w=2070&auto=format&fit=crop',
    href: '/news/barite-processing-success',
    content: `
      <p>Juggernaut Industries announces that our Barite processing plant in the South-South region has achieved full production capacity, marking a significant milestone in supporting Nigeria's oil and gas industry.</p>

      <h2>Production Milestone</h2>
      <p>The plant now operates at optimal capacity, producing high-grade Barite that meets international standards for use in drilling mud and other industrial applications. This achievement reduces Nigeria's dependence on imported Barite.</p>

      <h2>Supporting Local Content</h2>
      <p>In alignment with the Federal Government's vision for locally made goods and the Nigerian Oil and Gas Industry Content Development Act, our Barite production supports domestic value addition and job creation.</p>

      <h2>Quality Assurance</h2>
      <p>Our processing plant employs rigorous quality control measures to ensure that our Barite meets or exceeds API specifications. This commitment to quality has positioned us as a reliable supplier to the oil and gas sector.</p>

      <h2>Economic Impact</h2>
      <p>The plant's success has created numerous employment opportunities and contributed to the economic development of the South-South region while supporting critical industries.</p>

      <p>We continue to invest in capacity expansion and quality improvement to meet the growing demand for locally produced industrial minerals in Nigeria.</p>
    `,
    tags: ['Barite', 'Processing', 'Mining', 'Oil & Gas', 'Local Content'],
  },
  {
    id: 'rice-harvest-2024',
    title: '5,000 Hectares Rice Cultivation Shows Promising Yields',
    slug: 'rice-harvest-2024',
    excerpt: 'Our Niger State farmland demonstrates exceptional results in rice production, palm oil, and shea butter cultivation this season.',
    category: 'Agriculture',
    date: '2024-01-10',
    author: 'Agricultural Team',
    image: 'https://images.unsplash.com/photo-1625246333195-78d9c38ad449?q=80&w=2070&auto=format&fit=crop',
    href: '/news/rice-harvest-2024',
    content: `
      <p>Juggernaut Industries celebrates an exceptional harvest season from our 5,000-hectare farmland in Niger State, demonstrating the success of our integrated agricultural approach.</p>

      <h2>Harvest Results</h2>
      <p>This season's rice harvest has exceeded expectations, with yields demonstrating the effectiveness of our modern farming techniques and quality inputs. Our cultivation practices ensure both quantity and quality of produce.</p>

      <h2>Diversified Production</h2>
      <p>Beyond rice, our Niger State operations include successful palm oil and shea butter production. This diversification strategy ensures sustainable revenue streams while contributing to Nigeria's food security and agro-processing industry.</p>

      <h2>Modern Farming Techniques</h2>
      <p>We employ advanced agricultural practices including precision planting, integrated pest management, and efficient irrigation systems. These techniques maximize productivity while promoting environmental sustainability.</p>

      <h2>Food Security Contribution</h2>
      <p>Our rice production directly supports Nigeria's food security objectives by reducing dependence on imported rice and providing high-quality local alternatives to consumers.</p>

      <p>As we expand our agricultural operations, we remain committed to excellence in farming practices and contributing to Nigeria's agricultural transformation agenda.</p>
    `,
    tags: ['Rice', 'Agriculture', 'Niger State', 'Food Security', 'Farming'],
  },
  {
    id: 'solar-electrification-expansion',
    title: 'Rural Electrification Project Brings Light to 50+ Communities',
    slug: 'solar-electrification-expansion',
    excerpt: 'Juggernaut successfully installs solar street lights and transformers across multiple Nigerian states, improving quality of life for thousands.',
    category: 'Solar & Renewable Energy',
    date: '2023-12-15',
    author: 'Renewable Energy Division',
    image: 'https://images.unsplash.com/photo-1509391366360-2e959784a276?q=80&w=2070&auto=format&fit=crop',
    href: '/news/solar-electrification-expansion',
    content: `
      <p>Juggernaut Industries has successfully completed solar street light installations and transformer projects across more than 50 rural communities in multiple Nigerian states, bringing sustainable illumination and power to thousands of residents.</p>

      <h2>Wide-Reaching Impact</h2>
      <p>This ambitious rural electrification project has transformed communities across Nigeria, providing reliable lighting and power infrastructure that enhances safety, extends productive hours, and improves overall quality of life.</p>

      <h2>Solar Street Lighting</h2>
      <p>Our solar street light installations utilize high-efficiency LED technology powered by solar panels, providing maintenance-free illumination that operates independently of the electrical grid. These systems have significantly improved nighttime safety and mobility in rural areas.</p>

      <h2>Transformer Infrastructure</h2>
      <p>In addition to solar installations, we have deployed transformers in communities with grid access but inadequate distribution infrastructure, ensuring stable power supply for homes and businesses.</p>

      <h2>Sustainability Focus</h2>
      <p>By prioritizing solar technology, we are helping communities reduce energy costs while contributing to Nigeria's renewable energy goals and climate change mitigation efforts.</p>

      <p>This project exemplifies our commitment to bridging the rural-urban divide in infrastructure development and supporting sustainable community development across Nigeria.</p>
    `,
    tags: ['Solar', 'Rural Electrification', 'Street Lights', 'Community Development', 'Infrastructure'],
  },
  {
    id: '20-years-excellence',
    title: 'Celebrating Two Decades of Excellence in Nigerian Industries',
    slug: '20-years-excellence',
    excerpt: 'Since 2006, Juggernaut Industries Limited has been at the forefront of mining, agriculture, construction, and renewable energy across Nigeria.',
    category: 'Company News',
    date: '2023-12-01',
    author: 'Executive Team',
    image: 'https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=2069&auto=format&fit=crop',
    href: '/news/20-years-excellence',
    content: `
      <p>As we celebrate 20 years of operations since our founding in 2006, Juggernaut Industries Limited reflects on two decades of excellence, innovation, and commitment to Nigeria's industrial development.</p>

      <h2>Our Journey</h2>
      <p>From our beginnings as a focused mining services provider, we have evolved into a diversified industrial conglomerate with operations spanning mining and exploration, agriculture, construction, solar and renewable energy, oil and gas services, and general contracting.</p>

      <h2>Key Milestones</h2>
      <p>Over the past 20 years, we have completed hundreds of projects across Nigeria, created thousands of jobs, and contributed significantly to local content development in key industries. Our portfolio includes landmark projects in gold mining, lithium exploration, agricultural production, and rural electrification.</p>

      <h2>Commitment to Excellence</h2>
      <p>Our success is built on unwavering commitment to quality, safety, and environmental responsibility. We have consistently invested in modern equipment, skilled personnel, and sustainable practices that deliver value to our clients and communities.</p>

      <h2>Looking Ahead</h2>
      <p>As we enter our third decade, we remain focused on innovation, sustainability, and contributing to Nigeria's economic development. We are excited about emerging opportunities in renewable energy, agricultural technology, and mineral resource development.</p>

      <p>Thank you to our clients, partners, employees, and communities for 20 years of trust and collaboration. Together, we are building Nigeria's industrial future.</p>
    `,
    tags: ['Anniversary', 'Company News', 'Milestone', '20 Years', 'Excellence'],
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
