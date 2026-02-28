'use client';

import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';
import {
  textRevealContainer,
  textRevealCharacter,
  wordRevealContainer,
  wordReveal,
} from '@/lib/animations';

type HeadingSize = 'hero' | 'large' | 'medium' | 'small';
type HeadingWeight = 'light' | 'normal' | 'medium' | 'semibold' | 'bold';

interface StackedHeadingProps {
  lines: string[];
  weights?: HeadingWeight[];
  size?: HeadingSize;
  className?: string;
  animate?: boolean;
  animationType?: 'character' | 'word' | 'line';
  alignment?: 'left' | 'center' | 'right';
  color?: 'default' | 'gold' | 'muted';
}

const sizeClasses: Record<HeadingSize, string> = {
  hero: 'text-display-hero',
  large: 'text-display-xl',
  medium: 'text-display-lg',
  small: 'text-display-md',
};

const weightClasses: Record<HeadingWeight, string> = {
  light: 'font-light',
  normal: 'font-normal',
  medium: 'font-medium',
  semibold: 'font-semibold',
  bold: 'font-bold',
};

const alignmentClasses: Record<string, string> = {
  left: 'text-left',
  center: 'text-center',
  right: 'text-right',
};

const colorClasses: Record<string, string> = {
  default: 'text-off-white',
  gold: 'text-industrial-gold',
  muted: 'text-mid-gray',
};

export function StackedHeading({
  lines,
  weights = ['light', 'bold'],
  size = 'hero',
  className,
  animate = true,
  animationType = 'character',
  alignment = 'left',
  color = 'default',
}: StackedHeadingProps) {
  const renderAnimatedLine = (line: string, index: number) => {
    const weight = weights[index % weights.length];

    if (!animate) {
      return (
        <div
          key={index}
          className={cn(
            sizeClasses[size],
            weightClasses[weight],
            colorClasses[color]
          )}
        >
          {line}
        </div>
      );
    }

    if (animationType === 'character') {
      return (
        <motion.div
          key={index}
          className={cn(
            sizeClasses[size],
            weightClasses[weight],
            colorClasses[color],
            'overflow-hidden'
          )}
          variants={textRevealContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
        >
          {line.split('').map((char, charIndex) => (
            <motion.span
              key={charIndex}
              variants={textRevealCharacter}
              className="inline-block"
              style={{ display: char === ' ' ? 'inline' : 'inline-block' }}
            >
              {char === ' ' ? '\u00A0' : char}
            </motion.span>
          ))}
        </motion.div>
      );
    }

    if (animationType === 'word') {
      return (
        <motion.div
          key={index}
          className={cn(
            sizeClasses[size],
            weightClasses[weight],
            colorClasses[color],
            'overflow-hidden'
          )}
          variants={wordRevealContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
        >
          {line.split(' ').map((word, wordIndex) => (
            <motion.span
              key={wordIndex}
              variants={wordReveal}
              className="inline-block mr-[0.25em]"
              style={{ perspective: '1000px' }}
            >
              {word}
            </motion.span>
          ))}
        </motion.div>
      );
    }

    // Line animation
    return (
      <motion.div
        key={index}
        className={cn(
          sizeClasses[size],
          weightClasses[weight],
          colorClasses[color],
          'overflow-hidden'
        )}
        initial={{ opacity: 0, y: 100 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-100px' }}
        transition={{
          duration: 0.8,
          delay: index * 0.15,
          ease: [0.16, 1, 0.3, 1],
        }}
      >
        {line}
      </motion.div>
    );
  };

  return (
    <div className={cn('font-display', alignmentClasses[alignment], className)}>
      {lines.map((line, index) => renderAnimatedLine(line, index))}
    </div>
  );
}
