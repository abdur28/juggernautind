'use client';

import { useRef, ReactNode } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { cn } from '@/lib/utils';

type ParallaxSpeed = 'slow' | 'medium' | 'fast' | 'reverse';

interface ParallaxLayerProps {
  children: ReactNode;
  speed?: ParallaxSpeed;
  className?: string;
  offset?: [string, string]; // Custom offset range
}

const speedConfig: Record<ParallaxSpeed, [string, string]> = {
  slow: ['0%', '-10%'],
  medium: ['0%', '-20%'],
  fast: ['0%', '-30%'],
  reverse: ['-10%', '10%'],
};

export function ParallaxLayer({
  children,
  speed = 'medium',
  className,
  offset,
}: ParallaxLayerProps) {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end start'],
  });

  const yRange = offset || speedConfig[speed];
  const y = useTransform(scrollYProgress, [0, 1], yRange);

  return (
    <motion.div ref={ref} style={{ y }} className={cn('will-change-transform', className)}>
      {children}
    </motion.div>
  );
}

// Parallax image with scale effect
interface ParallaxImageProps {
  src: string;
  alt: string;
  className?: string;
  containerClassName?: string;
  speed?: ParallaxSpeed;
  scale?: boolean;
}

export function ParallaxImage({
  src,
  alt,
  className,
  containerClassName,
  speed = 'slow',
  scale = true,
}: ParallaxImageProps) {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end start'],
  });

  const yRange = speedConfig[speed];
  const y = useTransform(scrollYProgress, [0, 1], yRange);
  const imageScale = useTransform(scrollYProgress, [0, 1], scale ? [1.1, 1] : [1, 1]);

  return (
    <div ref={ref} className={cn('overflow-hidden', containerClassName)}>
      <motion.img
        src={src}
        alt={alt}
        style={{ y, scale: imageScale }}
        className={cn('w-full h-full object-cover will-change-transform', className)}
      />
    </div>
  );
}

// Parallax background for sections
interface ParallaxBackgroundProps {
  children: ReactNode;
  backgroundImage?: string;
  backgroundColor?: string;
  overlayColor?: string;
  speed?: ParallaxSpeed;
  className?: string;
}

export function ParallaxBackground({
  children,
  backgroundImage,
  backgroundColor = 'var(--deep-navy)',
  overlayColor,
  speed = 'slow',
  className,
}: ParallaxBackgroundProps) {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end start'],
  });

  const yRange = speedConfig[speed];
  const y = useTransform(scrollYProgress, [0, 1], yRange);

  return (
    <div
      ref={ref}
      className={cn('relative overflow-hidden', className)}
      style={{ backgroundColor }}
    >
      {backgroundImage && (
        <motion.div
          className="absolute inset-0 w-full h-[120%] -top-[10%]"
          style={{ y }}
        >
          <div
            className="w-full h-full bg-cover bg-center bg-no-repeat"
            style={{ backgroundImage: `url(${backgroundImage})` }}
          />
          {overlayColor && (
            <div
              className="absolute inset-0"
              style={{ backgroundColor: overlayColor }}
            />
          )}
        </motion.div>
      )}
      <div className="relative z-10">{children}</div>
    </div>
  );
}

// Multi-layer parallax for complex effects
interface ParallaxSceneProps {
  layers: Array<{
    content: ReactNode;
    speed: ParallaxSpeed;
    zIndex?: number;
  }>;
  className?: string;
}

export function ParallaxScene({ layers, className }: ParallaxSceneProps) {
  return (
    <div className={cn('relative', className)}>
      {layers.map((layer, index) => (
        <ParallaxLayer
          key={index}
          speed={layer.speed}
          className={cn('absolute inset-0', layer.zIndex && `z-${layer.zIndex}`)}
        >
          {layer.content}
        </ParallaxLayer>
      ))}
    </div>
  );
}
