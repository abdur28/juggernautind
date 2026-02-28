'use client';

import { motion, useInView, useMotionValue, useTransform, animate } from 'framer-motion';
import { useEffect, useRef } from 'react';
import { cn } from '@/lib/utils';
import { statsContainer, statItem } from '@/lib/animations';

interface StatItemData {
  value: number;
  suffix?: string;
  prefix?: string;
  label: string;
}

interface StatsBarProps {
  stats: StatItemData[];
  className?: string;
  variant?: 'default' | 'floating' | 'inline' | 'gold';
  animate?: boolean;
  showLines?: boolean;
}

const variantClasses = {
  default: 'border-t border-b border-white/10 py-6',
  floating:
    'bg-steel-blue/50 backdrop-blur-lg border border-white/10 rounded-lg py-6 px-4',
  inline: 'py-4',
  gold: 'bg-industrial-gold/10 border-t border-b border-industrial-gold/20 py-6',
};

// Animated counter component
function AnimatedCounter({
  value,
  suffix = '',
  prefix = '',
  duration = 2,
}: {
  value: number;
  suffix?: string;
  prefix?: string;
  duration?: number;
}) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });
  const count = useMotionValue(0);
  const rounded = useTransform(count, (latest) => Math.round(latest));

  useEffect(() => {
    if (isInView) {
      const controls = animate(count, value, {
        duration,
        ease: 'easeOut',
      });
      return controls.stop;
    }
  }, [isInView, value, count, duration]);

  return (
    <span ref={ref} className="tabular-nums">
      {prefix}
      <motion.span>{rounded}</motion.span>
      {suffix}
    </span>
  );
}

// Individual stat item
function StatItem({
  stat,
  animateCounter = true,
}: {
  stat: StatItemData;
  animateCounter?: boolean;
}) {
  return (
    <div className="stat-item flex-1 text-center px-2">
      <div className="stat-value">
        {animateCounter ? (
          <AnimatedCounter
            value={stat.value}
            suffix={stat.suffix}
            prefix={stat.prefix}
          />
        ) : (
          <>
            {stat.prefix}
            {stat.value}
            {stat.suffix}
          </>
        )}
      </div>
      <div className="stat-label">{stat.label}</div>
    </div>
  );
}

export function StatsBar({
  stats,
  className,
  variant = 'default',
  animate: shouldAnimate = true,
  showLines = true,
}: StatsBarProps) {
  const content = (
    <div
      className={cn(
        'flex justify-between items-center gap-4 md:gap-8',
        variantClasses[variant],
        className
      )}
    >
      {stats.map((stat, index) => (
        <StatItem
          key={index}
          stat={stat}
          animateCounter={shouldAnimate}
        />
      ))}
    </div>
  );

  if (!shouldAnimate) {
    return content;
  }

  return (
    <motion.div
      variants={statsContainer}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: '-50px' }}
    >
      <motion.div
        className={cn(
          'flex justify-between items-center gap-4 md:gap-8',
          variantClasses[variant],
          className
        )}
      >
        {stats.map((stat, index) => (
          <motion.div key={index} variants={statItem} className="flex-1">
            <StatItem stat={stat} animateCounter={shouldAnimate} />
          </motion.div>
        ))}
      </motion.div>
    </motion.div>
  );
}

// Floating stats bar that overlaps sections
export function FloatingStatsBar({
  stats,
  className,
}: {
  stats: StatItemData[];
  className?: string;
}) {
  return (
    <div className={cn('relative z-20', className)}>
      <StatsBar stats={stats} variant="floating" />
    </div>
  );
}
