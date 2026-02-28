'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { cn } from '@/lib/utils';
import { ArrowRight, Calendar } from 'lucide-react';
import { formatNewsDate } from '@/config/news';

export interface NewsCardProps {
  id: string;
  title: string;
  excerpt: string;
  category: string;
  date: string;
  image: string;
  href: string;
  featured?: boolean;
  className?: string;
}

export function NewsCard({
  title,
  excerpt,
  category,
  date,
  image,
  href,
  featured = false,
  className,
}: NewsCardProps) {
  return (
    <Link href={href} className={cn('group block h-full', className)}>
      <motion.div
        whileHover={{ y: -8 }}
        transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
        className={cn(
          'relative h-full rounded-xl overflow-hidden',
          'bg-white/40 backdrop-blur-xl border border-white/60',
          'shadow-lg hover:shadow-2xl transition-shadow duration-500',
          featured && 'md:row-span-2'
        )}
      >
        {/* Image */}
        <div className={cn('relative w-full overflow-hidden', featured ? 'h-64 md:h-80' : 'h-48')}>
          <Image
            src={image}
            alt={title}
            fill
            className="object-cover transition-transform duration-700 group-hover:scale-110"
          />
          {/* Gradient Overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-deep-navy/60 via-deep-navy/20 to-transparent" />
        </div>

        {/* Content */}
        <div className={cn('p-6', featured && 'md:p-8')}>
          {/* Meta Info */}
          <div className="flex items-center gap-2 mb-3 text-xs text-steel-blue">
            <Calendar className="w-3.5 h-3.5" />
            <span>{formatNewsDate(date)}</span>
          </div>

          {/* Title */}
          <h3
            className={cn(
              'font-display font-semibold text-deep-navy mb-3 line-clamp-2 group-hover:text-industrial-gold transition-colors duration-300',
              featured ? 'text-2xl md:text-3xl' : 'text-xl'
            )}
          >
            {title}
          </h3>

          {/* Excerpt */}
          <p className={cn('text-steel-blue leading-relaxed mb-4', featured ? 'text-base line-clamp-3' : 'text-sm line-clamp-2')}>
            {excerpt}
          </p>

          {/* Read More Link */}
          <div className="inline-flex items-center gap-2 font-heading text-xs tracking-[0.1em] uppercase text-industrial-gold group-hover:gap-3 transition-all duration-300">
            Read More
            <ArrowRight className="w-4 h-4" />
          </div>
        </div>

        {/* Decorative Corner Accent */}
        <div className="absolute bottom-0 right-0 w-24 h-24 bg-gradient-to-tl from-industrial-gold/10 to-transparent pointer-events-none" />
      </motion.div>
    </Link>
  );
}

// Compact version for sidebar/widgets
export function NewsCardCompact({
  title,
  category,
  date,
  image,
  href,
  className,
}: Omit<NewsCardProps, 'excerpt'>) {
  return (
    <Link href={href} className={cn('group block', className)}>
      <div className="flex gap-4 p-4 rounded-xl bg-white/30 backdrop-blur-xl border border-white/50 hover:bg-white/50 transition-all duration-300">
        {/* Thumbnail */}
        <div className="relative w-20 h-20 flex-shrink-0 rounded-lg overflow-hidden">
          <Image src={image} alt={title} fill className="object-cover" />
        </div>

        {/* Content */}
        <div className="flex-1 min-w-0">
          <span className="inline-block px-2 py-0.5 bg-industrial-gold/20 text-industrial-gold font-heading text-[9px] tracking-wider uppercase rounded mb-2">
            {category}
          </span>
          <h4 className="font-heading text-sm font-semibold text-deep-navy line-clamp-2 mb-1 group-hover:text-industrial-gold transition-colors">
            {title}
          </h4>
          <p className="text-xs text-steel-blue">{formatNewsDate(date)}</p>
        </div>
      </div>
    </Link>
  );
}
