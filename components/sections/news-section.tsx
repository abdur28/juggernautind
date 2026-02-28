'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { cn } from '@/lib/utils';
import { BracketText } from '@/components/ui/bracket-text';
import { NewsCard } from '@/components/ui/news-card';
import { ScrollReveal } from '@/components/animations/scroll-reveal';
import { getLatestNews, featuredNews } from '@/config/news';
import { ArrowRight } from 'lucide-react';

interface NewsSectionProps {
  className?: string;
  limit?: number;
  showFeatured?: boolean;
}

export function NewsSection({ className, limit = 3, showFeatured = true }: NewsSectionProps) {
  // Get news articles - either featured or latest
  const newsToDisplay = showFeatured && featuredNews.length > 0
    ? featuredNews.slice(0, limit)
    : getLatestNews(limit);

  return (
    <section
      id="news"
      className={cn(
        'relative py-14 overflow-hidden',
        'bg-off-white',
        className
      )}
    >
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
        {/* Section Header */}
        <div className="mb-12 md:mb-16">
          <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-8">
            {/* Left - Headline */}
            <div className="flex-1">
              <ScrollReveal animation="fadeUp">
                <div className="space-y-4">
                  <span className="inline-flex items-center gap-2 font-heading text-xs tracking-[0.2em] uppercase text-industrial-gold">
                    <span className="w-8 h-px bg-industrial-gold" />
                    Latest Updates
                  </span>
                  <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-light text-deep-navy leading-[2.5rem]">
                    NEWS & INSIGHTS
                    <span className="block text-xl md:text-2xl lg:text-3xl text-steel-blue tracking-[0.15em] mt-1">
                      FROM THE FIELD
                    </span>
                  </h2>
                </div>
              </ScrollReveal>
            </div>

            {/* Right - View All CTA */}
            <ScrollReveal animation="fadeUp" delay={0.1}>
              <Link
                href="/news"
                className="inline-flex items-center gap-2 px-6 py-3 border border-industrial-gold/50 text-industrial-gold font-heading text-xs tracking-[0.1em] uppercase rounded-xl btn-animated relative z-1 overflow-hidden after:bg-industrial-gold hover:text-near-black transition-colors"
              >
                View All News
                <ArrowRight className="w-4 h-4" />
              </Link>
            </ScrollReveal>
          </div>
        </div>

        {/* News Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {newsToDisplay.map((article, index) => (
            <ScrollReveal
              key={article.id}
              animation="fadeUp"
              delay={0.1 * index}
              className={cn(article.featured && 'md:col-span-2 lg:col-span-1')}
            >
              <NewsCard
                id={article.id}
                title={article.title}
                excerpt={article.excerpt}
                category={article.category}
                date={article.date}
                image={article.image}
                href={article.href}
                featured={article.featured}
              />
            </ScrollReveal>
          ))}
        </div>
      </div>

    </section>
  );
}
