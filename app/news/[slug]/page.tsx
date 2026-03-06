'use client';

import { use } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { PageHeader } from '@/components/ui/page-header';
import { ScrollReveal } from '@/components/animations/scroll-reveal';
import { NewsCard } from '@/components/ui/news-card';
import { Calendar, ArrowLeft, Share2, Tag } from 'lucide-react';
import { notFound } from 'next/navigation';
import { newsArticles, formatNewsDate } from '@/config/news';

export default function NewsArticlePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = use(params);
  const article = newsArticles.find(a => a.slug === slug);

  if (!article) {
    notFound();
  }

  // Get related articles (exclude current article)
  const relatedArticles = newsArticles
    .filter(a => a.slug !== slug && a.category === article.category)
    .slice(0, 2);

  return (
    <>
      {/* Page Header */}
      <PageHeader
        className='h-[70vh] md:h-[60vh] lg:h-[50vh]'
        title={article.title}
        subtitle={article.excerpt}
        breadcrumbs={[
          { label: 'Home', href: '/' },
          { label: 'News', href: '/news' },
          { label: article.title, href: `/news/${slug}` },
        ]}
        backgroundImage={article.image}
      />

      {/* Article Content Section - Image Left Sticky, Content Right */}
      <section className="relative py-14 overflow-hidden bg-white">
        <div className="container-jil relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-10 items-start">
            {/* Left - Sticky Image */}
            <ScrollReveal animation="fadeUp" className="order-2 lg:order-1">
              <div className="sticky top-24">
                <div className="relative aspect-[4/3] w-full rounded-xl overflow-hidden shadow-2xl">
                  <Image
                    src={article.image}
                    alt={article.title}
                    fill
                    className="object-cover"
                    priority
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-deep-navy/40 via-transparent to-transparent" />
                </div>

                {/* Article Meta Info */}
                <div className="mt-6 p-6 rounded-xl bg-off-white/40 backdrop-blur-xl border border-steel-blue/20">
                  <div className="space-y-4">
                    <div>
                      <span className="font-heading text-xs tracking-[0.1em] uppercase text-steel-blue mb-2 block">
                        Category
                      </span>
                      <span className="inline-flex items-center gap-2 font-heading text-xs tracking-[0.2em] uppercase text-industrial-gold">
                        <span className="w-6 h-px bg-industrial-gold" />
                        {article.category}
                      </span>
                    </div>

                    <div className="h-px bg-steel-blue/20" />

                    <div>
                      <span className="font-heading text-xs tracking-[0.1em] uppercase text-steel-blue mb-2 block">
                        Published
                      </span>
                      <div className="flex items-center gap-2 text-sm text-steel-blue">
                        <Calendar className="w-4 h-4" />
                        {formatNewsDate(article.date)}
                      </div>
                    </div>

                    <div className="h-px bg-steel-blue/20" />

                    <div>
                      <span className="font-heading text-xs tracking-[0.1em] uppercase text-steel-blue mb-2 block">
                        Author
                      </span>
                      <p className="text-sm text-steel-blue">{article.author}</p>
                    </div>
                  </div>
                </div>

                {/* Back to News */}
                <div className="mt-6">
                  <Link
                    href="/news"
                    className="inline-flex items-center gap-2 px-6 py-3 border border-industrial-gold/50 text-industrial-gold font-heading text-xs tracking-[0.1em] uppercase rounded-xl btn-animated relative z-1 overflow-hidden after:bg-industrial-gold hover:text-near-black transition-colors"
                  >
                    <ArrowLeft className="w-4 h-4" />
                    Back to News
                  </Link>
                </div>
              </div>
            </ScrollReveal>

            {/* Right - Content */}
            <div className="space-y-8 order-1 lg:order-2">
              <ScrollReveal animation="fadeUp">
                <article
                  className="prose prose-lg max-w-none text-steel-blue
                    prose-headings:font-display prose-headings:font-light prose-headings:text-deep-navy
                    prose-h2:text-3xl prose-h2:mt-12 prose-h2:mb-6
                    prose-p:text-steel-blue prose-p:leading-relaxed prose-p:mb-6
                    prose-strong:text-deep-navy prose-strong:font-semibold
                    prose-li:text-steel-blue prose-a:text-industrial-gold prose-a:no-underline hover:prose-a:underline"
                  dangerouslySetInnerHTML={{ __html: article.content }}
                />
              </ScrollReveal>

              {/* Tags Section */}
              {article.tags && article.tags.length > 0 && (
                <ScrollReveal animation="fadeUp" delay={0.1}>
                  <div className="pt-6 border-t border-steel-blue/20">
                    <div className="flex items-start gap-4">
                      <div className="flex items-center gap-2 text-steel-blue">
                        <Tag className="w-4 h-4" />
                        <span className="font-heading text-xs tracking-[0.1em] uppercase">
                          Tags
                        </span>
                      </div>
                      <div className="flex flex-wrap gap-2">
                        {article.tags.map((tag, index) => (
                          <span
                            key={index}
                            className="px-3 py-1 bg-industrial-gold/10 border border-industrial-gold/30 text-steel-blue font-heading text-xs tracking-[0.05em] rounded-lg hover:bg-industrial-gold/20 transition-colors"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </ScrollReveal>
              )}
            </div>
          </div>

          {/* Field Gallery Section (Only if multiple images exist) */}
          {article.images && article.images.length > 1 && (
            <div className="mt-20">
              <ScrollReveal animation="fadeUp">
                <div className="mb-10 text-center">
                  <span className="inline-flex items-center gap-2 font-heading text-xs tracking-[0.2em] uppercase text-industrial-gold mb-4">
                    <span className="w-8 h-px bg-industrial-gold" />
                    Field Gallery
                  </span>
                  <h2 className="font-display text-3xl md:text-4xl font-light text-deep-navy">
                    Operational Showcase
                  </h2>
                </div>
              </ScrollReveal>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {article.images.map((image, index) => (
                  <ScrollReveal
                    key={index}
                    animation="fadeUp"
                    delay={0.1 * (index % 3)}
                  >
                    <div className="group relative aspect-[4/3] rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500">
                      <Image
                        src={image}
                        alt={`${article.title} - Image ${index + 1}`}
                        fill
                        className="object-cover group-hover:scale-110 transition-transform duration-700"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-deep-navy/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    </div>
                  </ScrollReveal>
                ))}
              </div>
            </div>
          )}
        </div>
      </section>


      {/* Related Articles */}
      {relatedArticles.length > 0 && (
        <section className="relative py-14 overflow-hidden bg-off-white">
          {/* Background Pattern */}
          <div className="absolute inset-0 opacity-[0.03] pointer-events-none">
            <div
              className="absolute inset-0"
              style={{
                backgroundImage: `radial-gradient(circle at 2px 2px, #0D1B2A 1px, transparent 0)`,
                backgroundSize: '48px 48px',
              }}
            />
          </div>

          <div className="container-jil relative z-10">
            <ScrollReveal animation="fadeUp">
              <div className="mb-8">
                <span className="inline-flex items-center gap-2 font-heading text-xs tracking-[0.2em] uppercase text-industrial-gold mb-4">
                  <span className="w-8 h-px bg-industrial-gold" />
                  Related Articles
                </span>
                <h2 className="font-display text-3xl md:text-4xl font-light text-deep-navy">
                  More from {article.category}
                </h2>
              </div>
            </ScrollReveal>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {relatedArticles.map((related, index) => (
                <ScrollReveal key={related.slug} animation="fadeUp" delay={0.1 * index}>
                  <NewsCard
                    id={related.slug}
                    title={related.title}
                    excerpt={related.excerpt}
                    category={related.category}
                    date={related.date}
                    image={related.image}
                    href={`/news/${related.slug}`}
                  />
                </ScrollReveal>
              ))}
            </div>
          </div>
        </section>
      )}
    </>
  );
}
