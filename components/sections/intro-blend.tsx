'use client';

import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import Image from 'next/image';
import { cn } from '@/lib/utils';
import { GoldDot } from '@/components/ui/gold-dot';
import { ScrollReveal } from '@/components/animations/scroll-reveal';

interface IntroBlendProps {
  className?: string;
}

const aboutContent = {
  eyebrow: 'Who We Are',
  title: 'POWERING PROGRESS',
  subtitle: 'ACROSS AFRICA',
  description:
    "Juggernaut Industries Limited (JIL) is an indigenous, multidisciplinary services company incorporated in Nigeria in 2006. With more than two decades of operational experience, JIL has grown into a diversified group delivering excellence across mineral exploration, energy, construction, and agribusiness sectors.",
  description2:
    "At the heart of JIL's success is a world-class team of local and international professionals, bringing together a wealth of expertise and cross-cultural experience that enables the company to operate effectively across diverse and challenging terrains. This blend of proven local knowledge and global expertise allows JIL to consistently meet and exceed the expectations of both government and private sector clients, while adhering to the highest international standards.",
  vision: {
    title: 'Our Vision',
    text: "To be Nigeria's leading multidisciplinary services company, recognised for unwavering excellence, the quality of our people, and the strength of our values.",
  },
  mission: {
    title: 'Our Mission',
    text: 'To become the preferred company of choice in the hearts and minds of our clients and customers recognized for providing quality and reliable products and services.',
  },
};

// Horizontal Parallax Text Component
function HorizontalParallaxText() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start end', 'end start'],
  });

  // Move text from right to left as you scroll down
  const x = useTransform(scrollYProgress, [0, 1], ['10%', '-10%']);

  return (
    <div ref={containerRef} className="mt-24 md:mt-32 relative ">
      <motion.div style={{ x }} className="text-center">
        <h2 className="font-display text-[12vw] md:text-[10vw] -ml-14 md:-ml-20 lg:-ml-36 font-bold text-white/[0.03] uppercase whitespace-nowrap leading-none select-none">
          JUGGERNAUT INDUSTRIES
        </h2>
      </motion.div>

      {/* Overlapping Content Card */}
      <div className="absolute inset-0 flex items-center justify-center">
        <ScrollReveal animation="scale">
          <div className="bg-steel-blue/10 backdrop-blur-xl border border-white/10 rounded-xl px-4 md:px-8 py-3 md:py-6 text-center">
            <p className="font-heading md:text-xs text-[0.5rem] tracking-[0.2em] uppercase text-mid-gray mb-2">Established</p>
            <p className="font-display text-2xl md:text-5xl font-semibold text-industrial-gold">
              2006
            </p>
            <p className="text-xs md:text-sm  text-mid-gray mt-2">Abuja, Nigeria</p>
          </div>
        </ScrollReveal>
      </div>
    </div>
  );
}

export function IntroBlend({ className }: IntroBlendProps) {
  return (
    <section
      id="intro"
      className={cn(
        'relative pt-20 md:pt-32 pb-32 md:pb-48 overflow-hidden',
        'bg-gradient-to-b from-deep-navy via-steel-blue/20 to-deep-navy',
        className
      )}
    >

      {/* Main Content - Image Left, Info Right */}
      <div className="container-jil">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-10 items-stretch">
          {/* Left - Image */}
          <ScrollReveal animation="fadeUp">
            <div className="relative aspect-square w-full md:h-[500px] lg:h-full rounded-xl overflow-hidden">
              <Image
                src="/mining-1.jpeg"
                alt="Mining exploration site"
                fill
                className="object-cover"
              />
              {/* Overlay gradient */}
              <div className="absolute inset-0 bg-gradient-to-t from-deep-navy/60 via-transparent to-transparent" />
            </div>
          </ScrollReveal>

          {/* Right - Info Section */}
          <div className="space-y-8">
            {/* About Header */}
            <ScrollReveal animation="fadeUp">
              <div className="space-y-4">
                <span className="inline-flex items-center gap-2 font-heading text-xs tracking-[0.2em] uppercase text-industrial-gold">
                  <span className="w-8 h-px bg-industrial-gold" />
                  {aboutContent.eyebrow}
                </span>
                <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-light text-off-white leading-[2.5rem]">
                  {aboutContent.title}
                  <span className="block text-xl md:text-2xl lg:text-3xl text-mid-gray tracking-[0.15em]">
                    {aboutContent.subtitle}
                  </span>
                </h2>
              </div>
            </ScrollReveal>

            {/* Description */}
            <ScrollReveal animation="fadeUp" delay={0.1} className="space-y-4">
              <p className="text-light-gray leading-relaxed">
                {aboutContent.description}
              </p>
              <p className="text-light-gray leading-relaxed">
                {aboutContent.description2}
              </p>
            </ScrollReveal>

            {/* Divider */}
            <div className="h-px bg-white/10" />

            {/* Vision & Mission - Glassmorphism Cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {/* Vision */}
              <ScrollReveal animation="fadeUp" delay={0.3}>
                <div className="bg-steel-blue/10 backdrop-blur-xl border border-white/10 rounded-xl p-5 h-full">
                  <h3 className="font-heading text-xs tracking-[0.15em] uppercase text-industrial-gold mb-3">
                    {aboutContent.vision.title}
                  </h3>
                  <p className="text-sm text-light-gray leading-relaxed">
                    {aboutContent.vision.text}
                  </p>
                </div>
              </ScrollReveal>

              {/* Mission */}
              <ScrollReveal animation="fadeUp" delay={0.4}>
                <div className="bg-steel-blue/10 backdrop-blur-xl border border-white/10 rounded-xl p-5 h-full">
                  <h3 className="font-heading text-xs tracking-[0.15em] uppercase text-industrial-gold mb-3">
                    {aboutContent.mission.title}
                  </h3>
                  <p className="text-sm text-light-gray leading-relaxed">
                    {aboutContent.mission.text}
                  </p>
                </div>
              </ScrollReveal>
            </div>

          </div>
        </div>

        {/* Large Brand Text as Section Divider */}
        <HorizontalParallaxText />
      </div>
    </section>
  );
}
