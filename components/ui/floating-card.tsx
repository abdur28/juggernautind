'use client';

import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';
import { floatingCard, floatingCardHover } from '@/lib/animations';

interface FloatingCardProps {
  children: React.ReactNode;
  className?: string;
  position?: 'center' | 'left' | 'right' | 'bottom-left' | 'bottom-right';
  overlap?: number; // Pixels to overlap into next section (negative values)
  variant?: 'glass' | 'solid' | 'dark';
  animate?: boolean;
  hover?: boolean;
}

const positionClasses = {
  center: 'left-1/2 -translate-x-1/2',
  left: 'left-4 md:left-8 lg:left-16',
  right: 'right-4 md:right-8 lg:right-16',
  'bottom-left': 'left-4 md:left-8 lg:left-16 bottom-0',
  'bottom-right': 'right-4 md:right-8 lg:right-16 bottom-0',
};

const variantClasses = {
  glass: 'floating-card', // Uses the CSS class from globals
  solid: 'bg-steel-blue border border-white/10',
  dark: 'floating-card-dark', // Uses the CSS class from globals
};

export function FloatingCard({
  children,
  className,
  position = 'center',
  overlap = 0,
  variant = 'glass',
  animate = true,
  hover = true,
}: FloatingCardProps) {
  const positionStyle = overlap !== 0 ? { marginBottom: overlap } : {};

  const cardContent = (
    <div
      className={cn(
        'rounded-lg p-6 md:p-8',
        variantClasses[variant],
        className
      )}
      style={positionStyle}
    >
      {children}
    </div>
  );

  if (!animate) {
    return (
      <div
        className={cn(
          'relative z-10',
          position !== 'center' && positionClasses[position]
        )}
      >
        {cardContent}
      </div>
    );
  }

  return (
    <motion.div
      className={cn(
        'relative z-10',
        position !== 'center' && positionClasses[position]
      )}
      variants={floatingCard}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: '-100px' }}
      whileHover={hover ? floatingCardHover : undefined}
    >
      {cardContent}
    </motion.div>
  );
}

// Simplified welcome card variant (like Horizon Grove)
interface WelcomeCardProps {
  title: string;
  subtitle?: string;
  description?: string;
  ctaLabel?: string;
  ctaHref?: string;
  className?: string;
}

export function WelcomeCard({
  title,
  subtitle,
  description,
  ctaLabel = 'View Services',
  ctaHref = '/services',
  className,
}: WelcomeCardProps) {
  return (
    <FloatingCard
      variant="glass"
      className={cn('max-w-sm', className)}
      position="right"
    >
      {subtitle && (
        <p className="text-heading-sm text-mid-gray mb-2">{subtitle}</p>
      )}
      <h3 className="font-display text-2xl md:text-3xl font-semibold text-off-white mb-3">
        {title}
      </h3>
      {description && (
        <p className="text-body-sm text-light-gray mb-4">{description}</p>
      )}
      <div className="h-px bg-white/10 mb-4" />
      <a
        href={ctaHref}
        className="btn-outline-gold text-xs inline-flex items-center gap-2 group"
      >
        {ctaLabel}
        <svg
          className="w-4 h-4 transition-transform group-hover:translate-x-1"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M17 8l4 4m0 0l-4 4m4-4H3"
          />
        </svg>
      </a>
    </FloatingCard>
  );
}
