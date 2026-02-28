'use client';

import Link from 'next/link';
import { cn } from '@/lib/utils';
import { ChevronRight } from 'lucide-react';

interface Breadcrumb {
  label: string;
  href: string;
}

interface PageHeaderProps {
  title: string;
  subtitle?: string;
  breadcrumbs: Breadcrumb[];
  backgroundImage: string;
  className?: string;
}

export function PageHeader({
  title,
  subtitle,
  breadcrumbs,
  backgroundImage,
  className,
}: PageHeaderProps) {
  return (
    <section
      className={cn(
        'relative h-[50vh] min-h-[400px] overflow-hidden flex items-center justify-center',
        className
      )}
    >
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src={backgroundImage}
          alt={title}
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-deep-navy/90 via-deep-navy/85 to-near-black/95" />
      </div>

      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `radial-gradient(circle at 2px 2px, white 1px, transparent 0)`,
            backgroundSize: '40px 40px',
          }}
        />
      </div>

      <div className="container-jil relative z-10 text-center">
        {/* Breadcrumbs */}
        <nav className="flex items-center justify-center gap-2 mb-6 max-w-4xl mx-auto">
          {breadcrumbs.map((crumb, index) => (
            <div key={crumb.href} className="flex items-center gap-2 min-w-0">
              {index > 0 && <ChevronRight className="w-4 h-4 text-off-white/40 flex-shrink-0" />}
              <Link
                href={crumb.href}
                className={cn(
                  'font-heading text-xs tracking-[0.1em] uppercase transition-colors truncate',
                  index === breadcrumbs.length - 1
                    ? 'text-industrial-gold pointer-events-none max-w-[200px] md:max-w-[300px]'
                    : 'text-off-white/70 hover:text-off-white'
                )}
              >
                {crumb.label}
              </Link>
            </div>
          ))}
        </nav>

        {/* Title */}
        <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-light text-off-white mb-4">
          {title}
        </h1>

        {/* Subtitle */}
        {subtitle && (
          <p className="text-light-gray text-lg md:text-xl max-w-2xl mx-auto">
            {subtitle}
          </p>
        )}
      </div>
    </section>
  );
}
