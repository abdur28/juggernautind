'use client';

import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';
import {
  bracketContainer,
  bracketLeft,
  bracketRight,
  bracketContent,
} from '@/lib/animations';

interface BracketTextProps {
  children: React.ReactNode;
  className?: string;
  bracketClassName?: string;
  animate?: boolean;
  size?: 'sm' | 'md' | 'lg' | 'xl' | 'full';
  variant?: 'default' | 'gold' | 'muted' | 'light';
}

const sizeClasses = {
  sm: 'text-sm gap-2',
  md: 'text-base gap-3',
  lg: 'text-lg md:text-xl gap-4',
  xl: 'text-xl md:text-2xl lg:text-3xl gap-5',
  full: 'text-3xl md:text-5xl lg:text-6xl xl:text-7xl gap-6 md:gap-10',
};

const bracketSizeClasses = {
  sm: 'text-lg',
  md: 'text-xl',
  lg: 'text-2xl md:text-3xl',
  xl: 'text-3xl md:text-4xl lg:text-5xl',
  full: 'h-8 md:h-12 lg:h-16',
};

const variantClasses = {
  default: {
    text: 'text-off-white',
    bracket: 'text-mid-gray/60',
    line: 'bg-white/20',
  },
  gold: {
    text: 'text-industrial-gold',
    bracket: 'text-industrial-gold/40',
    line: 'bg-industrial-gold/30',
  },
  muted: {
    text: 'text-mid-gray',
    bracket: 'text-mid-gray/40',
    line: 'bg-mid-gray/20',
  },
  light: {
    text: 'text-steel-blue',
    bracket: 'text-steel-blue/40',
    line: 'bg-steel-blue/30',
  },
};

export function BracketText({
  children,
  className,
  bracketClassName,
  animate = true,
  size = 'lg',
  variant = 'default',
}: BracketTextProps) {
  const colors = variantClasses[variant];
  const isFullWidth = size === 'full';

  // Full-width bracket design (like Horizon Grove)
  if (isFullWidth) {

    if (!animate) {
      return (
        <div className={cn('flex items-stretch w-full', className)}>
          {/* Center Text */}
          <div
            className={cn(
              'px-6 md:px-12 lg:px-16 py-4 md:py-6 font-display tracking-tight uppercase text-center flex items-center justify-center',
              sizeClasses[size],
              colors.text
            )}
          >
            {children}
          </div>

        </div>
      );
    }

    return (
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true, margin: '-50px' }}
        transition={{ duration: 0.8 }}
        className="w-full"
      >
        <div className={cn('flex items-stretch w-full', className)}>

          {/* Center Text - Animated */}
          <motion.div
            className={cn(
              'px-6 md:px-12 lg:px-16  font-display tracking-tight uppercase text-center flex items-center justify-center',
              sizeClasses[size],
              colors.text
            )}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          >
            {children}
          </motion.div>

        </div>
      </motion.div>
    );
  }

  // Original bracket text design (with "[" and "]" characters)
  if (!animate) {
    return (
      <span
        className={cn(
          'inline-flex items-center font-heading tracking-wider uppercase',
          sizeClasses[size],
          colors.text,
          className
        )}
      >
        <span
          className={cn(
            'font-light',
            bracketSizeClasses[size],
            colors.bracket,
            bracketClassName
          )}
        >
          [
        </span>
        <span>{children}</span>
        <span
          className={cn(
            'font-light',
            bracketSizeClasses[size],
            colors.bracket,
            bracketClassName
          )}
        >
          ]
        </span>
      </span>
    );
  }

  return (
    <motion.span
      className={cn(
        'inline-flex items-center font-heading tracking-wider uppercase',
        sizeClasses[size],
        colors.text,
        className
      )}
      variants={bracketContainer}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: '-50px' }}
    >
      <motion.span
        className={cn(
          'font-light',
          bracketSizeClasses[size],
          colors.bracket,
          bracketClassName
        )}
        variants={bracketLeft}
      >
        [
      </motion.span>
      <motion.span variants={bracketContent}>{children}</motion.span>
      <motion.span
        className={cn(
          'font-light',
          bracketSizeClasses[size],
          colors.bracket,
          bracketClassName
        )}
        variants={bracketRight}
      >
        ]
      </motion.span>
    </motion.span>
  );
}
