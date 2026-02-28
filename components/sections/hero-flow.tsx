'use client';

import { useState, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { cn } from '@/lib/utils';
import { heroContent, heroSlides, stats } from '@/config/site';
import { ChevronDown, ArrowRight } from 'lucide-react';

interface HeroFlowProps {
  className?: string;
}

export function HeroFlow({ className }: HeroFlowProps) {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  const nextSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
  }, []);

  // Auto-rotate slides
  useEffect(() => {
    if (!isAutoPlaying) return;

    const interval = setInterval(() => {
      nextSlide();
    }, 10000); // Change every 10 seconds

    return () => clearInterval(interval);
  }, [isAutoPlaying, nextSlide]);

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
    setIsAutoPlaying(false);
    // Resume auto-play after 10 seconds of inactivity
    setTimeout(() => setIsAutoPlaying(true), 10000);
  };

  const currentSlideData = heroSlides[currentSlide];

  return (
    <section
      className={cn(
        'relative min-h-screen flex flex-col overflow-hidden',
        className
      )}
    >
      {/* Background Images with Smooth Crossfade */}
      <div className="absolute inset-0">
        {/* All images stacked - current one fades in on top */}
        {heroSlides.map((slide, index) => (
          <motion.div
            key={slide.id}
            initial={false}
            animate={{
              opacity: currentSlide === index ? 1 : 0,
              scale: currentSlide === index ? 1 : 1.05,
            }}
            transition={{ duration: 1.5, ease: [0.4, 0, 0.2, 1] }}
            className="absolute inset-0"
            style={{ zIndex: currentSlide === index ? 1 : 0 }}
          >
            <Image
              src={slide.image}
              alt={slide.title}
              fill
              className="object-cover"
              priority={index === 0}
            />
          </motion.div>
        ))}

        {/* Gradient overlays */}
        <div className="absolute inset-0 bg-gradient-to-b from-deep-navy/60 via-deep-navy/50 to-deep-navy z-[2]" />
        <div className="absolute inset-0 bg-gradient-to-r from-deep-navy/70 via-transparent to-transparent z-[2]" />
      </div>

      {/* Main Content */}
      <div className="relative z-10 flex-1 flex flex-col pt-28 md:pt-36 lg:pt-40">
        <div className="container-jil min-h-[100vh] flex-1 flex flex-col">
          {/* Hero Grid - Main Content */}
          <div className="flex-1 grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 items-center py-8">
            {/* Left - Typography */}
            <div className="lg:col-span-7 space-y-4">
              {/* Eyebrow */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                <span className="inline-flex items-center gap-2 font-heading text-xs tracking-[0.2em] uppercase text-mid-gray">
                  <span className="w-8 h-px bg-industrial-gold" />
                  {heroContent.eyebrow}
                </span>
              </motion.div>

              {/* Main Headline - Stacked */}
              <div className="space-y-0">
                <motion.h1
                  initial={{ opacity: 0, y: 40 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.3 }}
                  className="font-display text-[3.5rem] md:text-[7rem] lg:text-[6rem] xl:text-[7rem] font-light leading-[0.85] tracking-tight text-off-white uppercase"
                >
                  JUGGERNAUT
                </motion.h1>
                <motion.h1
                  initial={{ opacity: 0, y: 40 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.4 }}
                  className="font-heading text-[2rem] md:text-[4rem] lg:text-[3rem] xl:text-[4rem] font-light leading-[0.85] tracking-[0.2em] text-mid-gray uppercase"
                >
                  INDUSTRIES LTD
                </motion.h1>
              </div>

              {/* Subheadline */}
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.7 }}
                className="text pt-10 text-light-gray max-w-md font-light leading-relaxed"
              >
                {heroContent.description}
              </motion.p>

              {/* CTA Buttons */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.8 }}
                className="flex flex-wrap items-center gap-4 pt-2"
              >
                <Link
                  href={heroContent.cta.primary.href}
                  className="inline-flex items-center gap-2 px-6 py-3 bg-industrial-gold text-near-black font-heading text-xs tracking-[0.1em] uppercase rounded-xl btn-animated relative z-1 overflow-hidden after:bg-steel-blue hover:text-off-white transition-colors"
                >
                  {heroContent.cta.primary.label}
                  <ArrowRight className="w-4 h-4" />
                </Link>
                <Link
                  href={heroContent.cta.secondary.href}
                  className="inline-flex items-center gap-2 px-6 py-3 border border-industrial-gold/50 text-industrial-gold font-heading text-xs tracking-[0.1em] uppercase rounded-xl btn-animated relative z-1 overflow-hidden after:bg-industrial-gold hover:text-near-black transition-colors"
                >
                  {heroContent.cta.secondary.label}
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </motion.div>
            </div>

            {/* Right - Floating Card with Dynamic Content */}
            <div className="lg:col-span-5  h-full flex items-end justify-end lg:justify-end">
              <motion.div
                initial={{ opacity: 0, y: 60, scale: 0.95 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                transition={{ duration: 0.8, delay: 0.5, ease: [0.16, 1, 0.3, 1] }}
                className="w-full max-w-sm"
              >
                <div className="bg-steel-blue/10 backdrop-blur-md border border-white/10 rounded-xl p-6 shadow-2xl">
                  {/* Card Content - Animated on slide change */}
                  <AnimatePresence mode="wait">
                    <motion.div
                      key={currentSlide}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -20 }}
                      transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                    >
                      <p className="font-heading text-xs tracking-[0.2em] uppercase text-mid-gray mb-2">
                        {currentSlideData.subtitle}
                      </p>
                      <h3 className="font-display text-2xl font-semibold text-off-white mb-5 leading-[0.3rem]">
                        {currentSlideData.title}
                      </h3>
                      <p className="text-sm text-light-gray mb-5 leading-relaxed">
                        {currentSlideData.description}
                      </p>

                      <Link
                        href={currentSlideData.link.href}
                        className="inline-flex items-center gap-2 font-heading text-[0.6rem] tracking-[0.15em] uppercase text-industrial-gold hover:text-[#d4940f] transition-all duration-300 group"
                      >
                        {currentSlideData.link.label}
                        <ArrowRight className="w-3 h-3 group-hover:translate-x-1 transition-transform" />
                      </Link>
                    </motion.div>
                  </AnimatePresence>

                  {/* Slide Indicators */}
                  <div className="flex items-center gap-2 mt-6 pt-4 border-t border-white/10">
                    {heroSlides.map((_, index) => (
                      <button
                        key={index}
                        onClick={() => goToSlide(index)}
                        className={cn(
                          'h-1 rounded-full transition-all duration-500',
                          currentSlide === index
                            ? 'w-8 bg-industrial-gold'
                            : 'w-2 bg-white/30 hover:bg-white/50'
                        )}
                        aria-label={`Go to slide ${index + 1}`}
                      />
                    ))}
                  </div>
                </div>
              </motion.div>
            </div>
          </div>

          {/* Bottom Section - Stats */}
          <div className="pb-6 space-y-8">
            {/* Scroll Text */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 1 }}
              className="flex items-center justify-center gap-3 md:gap-4 flex-wrap"
            >
              <div className="flex items-center gap-2 px-4">
                <span className="font-heading text-xs tracking-[0.15em] uppercase text-mid-gray">
                  Scroll to Explore
                </span>
                <ChevronDown className="w-4 h-4 text-mid-gray" />
              </div>
            </motion.div>

            {/* Stats Bar - Redesigned */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 1.2 }}
              className="bg-steel-blue/5 backdrop-blur-sm border border-white/5 rounded-xl py-6 px-4"
            >
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-0">
                {stats.map((stat, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 1.3 + index * 0.1 }}
                    className={`text-center px-4 ${index < stats.length - 1 ? 'md:border-r md:border-white/10' : ''}`}
                  >
                    <div className="font-display text-3xl md:text-4xl lg:text-5xl font-semibold text-industrial-gold leading-none">
                      {stat.value}
                      <span className="text-2xl md:text-3xl">{stat.suffix}</span>
                    </div>
                    <div className="font-heading text-[10px] md:text-xs tracking-[0.15em] uppercase text-off-white mt-2">
                      {stat.label}
                    </div>
                    {'description' in stat && (
                      <div className="text-[9px] md:text-[10px] text-mid-gray mt-1">
                        {stat.description}
                      </div>
                    )}
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Bottom Gradient Blend */}
      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-deep-navy to-transparent pointer-events-none" />
    </section>
  );
}
