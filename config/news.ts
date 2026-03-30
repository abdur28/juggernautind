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
    date: '2022-11-03',
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
