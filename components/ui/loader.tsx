'use client';

import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';

interface LoaderProps {
  size?: 'sm' | 'md' | 'lg' | 'full';
  variant?: 'default' | 'minimal' | 'page';
  text?: string;
  className?: string;
}

export function Loader({ size = 'md', variant = 'default', text, className }: LoaderProps) {
  const sizeClasses = {
    sm: 'w-8 h-8',
    md: 'w-12 h-12',
    lg: 'w-16 h-16',
    full: 'w-24 h-24',
  };

  const ringSize = {
    sm: 'w-8 h-8 border-2',
    md: 'w-12 h-12 border-2',
    lg: 'w-16 h-16 border-3',
    full: 'w-24 h-24 border-4',
  };

  const dotSize = {
    sm: 'w-1.5 h-1.5',
    md: 'w-2 h-2',
    lg: 'w-3 h-3',
    full: 'w-4 h-4',
  };

  if (variant === 'minimal') {
    return (
      <div className={cn('flex items-center justify-center', className)}>
        <motion.div
          className={cn(
            ringSize[size],
            'rounded-full border-industrial-gold/30 border-t-industrial-gold'
          )}
          animate={{ rotate: 360 }}
          transition={{ duration: 1, repeat: Infinity, ease: 'linear' }}
        />
      </div>
    );
  }

  if (variant === 'page') {
    return (
      <div className="min-h-screen bg-deep-navy flex items-center justify-center">
        <div className="relative">
          {/* Outer rotating ring */}
          <motion.div
            className="w-20 h-20 rounded-full border-2 border-industrial-gold/20 border-t-industrial-gold"
            animate={{ rotate: 360 }}
            transition={{ duration: 1.5, repeat: Infinity, ease: 'linear' }}
          />

          {/* Inner rotating ring (opposite direction) */}
          <motion.div
            className="absolute inset-2 rounded-full border-2 border-steel-blue/20 border-b-steel-blue/50"
            animate={{ rotate: -360 }}
            transition={{ duration: 2, repeat: Infinity, ease: 'linear' }}
          />

          {/* Center pulsing dot */}
          <motion.div
            className="absolute inset-0 flex items-center justify-center"
            animate={{ scale: [1, 1.2, 1], opacity: [0.5, 1, 0.5] }}
            transition={{ duration: 1.5, repeat: Infinity }}
          >
            <div className="w-3 h-3 rounded-full bg-industrial-gold" />
          </motion.div>

          {/* Text */}
          {text && (
            <motion.p
              className="absolute -bottom-10 left-1/2 -translate-x-1/2 whitespace-nowrap font-heading text-xs tracking-[0.15em] uppercase text-light-gray"
              animate={{ opacity: [0.5, 1, 0.5] }}
              transition={{ duration: 1.5, repeat: Infinity }}
            >
              {text}
            </motion.p>
          )}
        </div>
      </div>
    );
  }

  // Default variant
  return (
    <div className={cn('flex flex-col items-center justify-center gap-4', className)}>
      <div className={cn('relative', sizeClasses[size])}>
        {/* Outer ring */}
        <motion.div
          className={cn(
            'absolute inset-0 rounded-full border-industrial-gold/20 border-t-industrial-gold',
            ringSize[size]
          )}
          animate={{ rotate: 360 }}
          transition={{ duration: 1.2, repeat: Infinity, ease: 'linear' }}
        />

        {/* Inner pulsing dot */}
        <motion.div
          className="absolute inset-0 flex items-center justify-center"
          animate={{ scale: [1, 1.3, 1], opacity: [0.3, 1, 0.3] }}
          transition={{ duration: 1, repeat: Infinity }}
        >
          <div className={cn('rounded-full bg-industrial-gold', dotSize[size])} />
        </motion.div>
      </div>

      {text && (
        <motion.p
          className="font-heading text-xs tracking-[0.1em] uppercase text-steel-blue"
          animate={{ opacity: [0.5, 1, 0.5] }}
          transition={{ duration: 1.5, repeat: Infinity }}
        >
          {text}
        </motion.p>
      )}
    </div>
  );
}

// Full page loader with branding
export function PageLoader() {
  return (
    <div className="fixed inset-0 z-[100] bg-deep-navy flex flex-col items-center justify-center">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5 pointer-events-none">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `radial-gradient(circle at 2px 2px, white 1px, transparent 0)`,
            backgroundSize: '40px 40px',
          }}
        />
      </div>

      {/* Animated rings */}
      <div className="relative mb-8">
        {/* Outermost ring */}
        <motion.div
          className="w-32 h-32 rounded-full border border-industrial-gold/10"
          animate={{ rotate: 360, scale: [1, 1.05, 1] }}
          transition={{ rotate: { duration: 8, repeat: Infinity, ease: 'linear' }, scale: { duration: 2, repeat: Infinity } }}
        />

        {/* Middle ring */}
        <motion.div
          className="absolute inset-4 rounded-full border-2 border-industrial-gold/20 border-t-industrial-gold"
          animate={{ rotate: 360 }}
          transition={{ duration: 1.5, repeat: Infinity, ease: 'linear' }}
        />

        {/* Inner ring */}
        <motion.div
          className="absolute inset-8 rounded-full border border-steel-blue/30 border-b-steel-blue"
          animate={{ rotate: -360 }}
          transition={{ duration: 2, repeat: Infinity, ease: 'linear' }}
        />

        {/* Center logo placeholder / dot */}
        <motion.div
          className="absolute inset-0 flex items-center justify-center"
          animate={{ scale: [1, 1.2, 1], opacity: [0.5, 1, 0.5] }}
          transition={{ duration: 1.5, repeat: Infinity }}
        >
          <div className="w-4 h-4 rounded-full bg-industrial-gold shadow-lg shadow-industrial-gold/50" />
        </motion.div>
      </div>

      {/* Brand name */}
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3 }}
        className="text-center"
      >
        <h2 className="font-display text-2xl font-semibold text-off-white tracking-wide mb-1">
          JUGGERNAUT
        </h2>
        <p className="font-heading text-xs tracking-[0.2em] text-mid-gray uppercase">
          Industries Ltd
        </p>
      </motion.div>

      {/* Loading text */}
      <motion.div
        className="mt-8 flex items-center gap-1"
        animate={{ opacity: [0.5, 1, 0.5] }}
        transition={{ duration: 1.5, repeat: Infinity }}
      >
        <span className="font-heading text-xs tracking-[0.15em] uppercase text-light-gray">
          Loading
        </span>
        <motion.span
          className="flex gap-1"
          animate={{ opacity: [0, 1, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
        >
          {[...Array(3)].map((_, i) => (
            <motion.span
              key={i}
              className="w-1 h-1 rounded-full bg-industrial-gold"
              animate={{ y: [0, -4, 0] }}
              transition={{ duration: 0.6, repeat: Infinity, delay: i * 0.15 }}
            />
          ))}
        </motion.span>
      </motion.div>

      {/* Bottom accent */}
      <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-industrial-gold/50 to-transparent" />
    </div>
  );
}

// Skeleton loader for content
export function SkeletonLoader({ className }: { className?: string }) {
  return (
    <motion.div
      className={cn('bg-steel-blue/10 rounded-lg', className)}
      animate={{ opacity: [0.5, 1, 0.5] }}
      transition={{ duration: 1.5, repeat: Infinity }}
    />
  );
}
