import { PageHeader } from '@/components/ui/page-header';
import { NewsCard } from '@/components/ui/news-card';
import { newsArticles } from '@/config/news';
import { ScrollReveal } from '@/components/animations/scroll-reveal';

export default function NewsPage() {
  // Sort news articles by date (newest first)
  const sortedNews = [...newsArticles].sort(
    (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
  );

  return (
    <>
      {/* Page Header */}
      <PageHeader
        title="NEWS & INSIGHTS"
        subtitle="Stay updated with the latest developments, projects, and achievements from Juggernaut Industries Limited."
        breadcrumbs={[
          { label: 'Home', href: '/' },
          { label: 'News', href: '/news' },
        ]}
        backgroundImage="/conference.jpg"
      />

      {/* News Grid */}
      <section className="relative py-20 overflow-hidden bg-off-white">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-[0.03]">
          <div
            className="absolute inset-0"
            style={{
              backgroundImage: `radial-gradient(circle at 2px 2px, #0D1B2A 1px, transparent 0)`,
              backgroundSize: '48px 48px',
            }}
          />
        </div>

        <div className="container-jil relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {sortedNews.map((article, index) => (
              <ScrollReveal
                key={article.id}
                animation="fadeUp"
                delay={0.05 * index}
              >
                <NewsCard
                  id={article.id}
                  title={article.title}
                  excerpt={article.excerpt}
                  category={article.category}
                  date={article.date}
                  image={article.image}
                  href={article.href}
                  featured={false}
                />
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
