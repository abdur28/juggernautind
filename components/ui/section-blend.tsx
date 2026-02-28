'use client';

import { cn } from '@/lib/utils';

type BlendColor =
  | 'deep-navy'
  | 'steel-blue'
  | 'near-black'
  | 'off-white'
  | 'transparent';

interface SectionBlendProps {
  children: React.ReactNode;
  className?: string;
  from?: BlendColor;
  to?: BlendColor;
  via?: BlendColor;
  direction?: 'down' | 'up' | 'left' | 'right';
  overlap?: boolean;
  id?: string;
  as?: 'section' | 'div';
  padding?: 'none' | 'sm' | 'md' | 'lg' | 'xl';
}

const colorMap: Record<BlendColor, string> = {
  'deep-navy': 'var(--deep-navy)',
  'steel-blue': 'var(--steel-blue)',
  'near-black': 'var(--near-black)',
  'off-white': 'var(--off-white)',
  transparent: 'transparent',
};

const directionMap: Record<string, string> = {
  down: '180deg',
  up: '0deg',
  left: '270deg',
  right: '90deg',
};

const paddingClasses: Record<string, string> = {
  none: '',
  sm: 'py-12 md:py-16',
  md: 'py-16 md:py-24',
  lg: 'py-24 md:py-32',
  xl: 'py-32 md:py-40',
};

export function SectionBlend({
  children,
  className,
  from = 'deep-navy',
  to = 'deep-navy',
  via,
  direction = 'down',
  overlap = false,
  id,
  as: Component = 'section',
  padding = 'lg',
}: SectionBlendProps) {
  const fromColor = colorMap[from];
  const toColor = colorMap[to];
  const viaColor = via ? colorMap[via] : null;
  const gradientDirection = directionMap[direction];

  const gradientStyle = viaColor
    ? {
        background: `linear-gradient(${gradientDirection}, ${fromColor} 0%, ${viaColor} 50%, ${toColor} 100%)`,
      }
    : {
        background: `linear-gradient(${gradientDirection}, ${fromColor} 0%, ${toColor} 100%)`,
      };

  return (
    <Component
      id={id}
      className={cn(
        'relative',
        paddingClasses[padding],
        overlap && 'z-0',
        className
      )}
      style={gradientStyle}
    >
      {/* Optional overlap fade at top */}
      {overlap && (
        <div
          className="absolute top-0 left-0 right-0 h-24 pointer-events-none"
          style={{
            background: `linear-gradient(180deg, ${fromColor} 0%, transparent 100%)`,
          }}
        />
      )}

      {children}

      {/* Optional overlap fade at bottom */}
      {overlap && (
        <div
          className="absolute bottom-0 left-0 right-0 h-24 pointer-events-none"
          style={{
            background: `linear-gradient(0deg, ${toColor} 0%, transparent 100%)`,
          }}
        />
      )}
    </Component>
  );
}

// Preset section variants for common patterns
export function HeroSection({
  children,
  className,
  id,
}: {
  children: React.ReactNode;
  className?: string;
  id?: string;
}) {
  return (
    <SectionBlend
      id={id}
      from="deep-navy"
      to="steel-blue"
      padding="none"
      className={cn('min-h-screen', className)}
    >
      {children}
    </SectionBlend>
  );
}

export function DarkSection({
  children,
  className,
  id,
}: {
  children: React.ReactNode;
  className?: string;
  id?: string;
}) {
  return (
    <SectionBlend
      id={id}
      from="deep-navy"
      to="deep-navy"
      padding="lg"
      className={className}
    >
      {children}
    </SectionBlend>
  );
}

export function LightSection({
  children,
  className,
  id,
}: {
  children: React.ReactNode;
  className?: string;
  id?: string;
}) {
  return (
    <SectionBlend
      id={id}
      from="off-white"
      to="off-white"
      padding="lg"
      className={cn('light-section', className)}
    >
      {children}
    </SectionBlend>
  );
}

export function TransitionSection({
  children,
  className,
  id,
  fromDark = true,
}: {
  children: React.ReactNode;
  className?: string;
  id?: string;
  fromDark?: boolean;
}) {
  return (
    <SectionBlend
      id={id}
      from={fromDark ? 'deep-navy' : 'off-white'}
      via="steel-blue"
      to={fromDark ? 'off-white' : 'deep-navy'}
      padding="lg"
      overlap
      className={className}
    >
      {children}
    </SectionBlend>
  );
}
