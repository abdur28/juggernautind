'use client';

import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';
import { goldDotPulse } from '@/lib/animations';

interface GoldDotProps {
  size?: 'sm' | 'md' | 'lg';
  className?: string;
  animate?: boolean;
  pulse?: boolean;
}

const sizeClasses = {
  sm: 'w-1.5 h-1.5',
  md: 'w-2 h-2',
  lg: 'w-3 h-3',
};

export function GoldDot({
  size = 'md',
  className,
  animate = true,
  pulse = false,
}: GoldDotProps) {
  const dotElement = (
    <span
      className={cn(
        'inline-block rounded-full bg-industrial-gold',
        sizeClasses[size],
        pulse && 'animate-pulse',
        className
      )}
      style={{ verticalAlign: 'middle' }}
    />
  );

  if (!animate) {
    return dotElement;
  }

  return (
    <motion.span
      className={cn(
        'inline-block rounded-full bg-industrial-gold',
        sizeClasses[size],
        className
      )}
      style={{ verticalAlign: 'middle' }}
      variants={goldDotPulse}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
    />
  );
}

// Convenience component for inline text usage
interface GoldDotTextProps {
  before: string;
  after: string;
  dotSize?: 'sm' | 'md' | 'lg';
  className?: string;
}

export function GoldDotText({
  before,
  after,
  dotSize = 'md',
  className,
}: GoldDotTextProps) {
  return (
    <span className={cn('inline', className)}>
      {before} <GoldDot size={dotSize} /> {after}
    </span>
  );
}
