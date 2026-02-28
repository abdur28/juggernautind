'use client';

import { useState, useEffect, useCallback } from 'react';
import { motion, AnimatePresence, Variants } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { cn } from '@/lib/utils';
import { projects } from '@/config/projects';
import { ChevronLeft, ChevronRight, ArrowRight } from 'lucide-react';
import { BracketText } from '@/components/ui/bracket-text';

interface ProjectsCarouselProps {
  className?: string;
}

export function ProjectsCarousel({ className }: ProjectsCarouselProps) {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const [direction, setDirection] = useState(0);

  const nextSlide = useCallback(() => {
    setDirection(1);
    setCurrentSlide((prev) => (prev + 1) % projects.length);
  }, []);

  const prevSlide = useCallback(() => {
    setDirection(-1);
    setCurrentSlide((prev) => (prev - 1 + projects.length) % projects.length);
  }, []);

  const goToSlide = (index: number) => {
    setDirection(index > currentSlide ? 1 : -1);
    setCurrentSlide(index);
    setIsAutoPlaying(false);
    setTimeout(() => setIsAutoPlaying(true), 15000);
  };

  useEffect(() => {
    if (!isAutoPlaying) return;
    const interval = setInterval(nextSlide, 12000);
    return () => clearInterval(interval);
  }, [isAutoPlaying, nextSlide]);

  const currentProject = projects[currentSlide];

  const slideVariants: Variants = {
    enter: (dir: number) => ({
      x: dir > 0 ? '100%' : '-100%',
      opacity: 0,
    }),
    center: { x: 0, opacity: 1 },
    exit: (dir: number) => ({
      x: dir < 0 ? '100%' : '-100%',
      opacity: 0,
    }),
  };

  const contentVariants: Variants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: [0.16, 1, 0.3, 1],
        staggerChildren: 0.1,
        delayChildren: 0.3,
      },
    },
    exit: { opacity: 0, y: -20, transition: { duration: 0.3 } },
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: [0.16, 1, 0.3, 1] },
    },
  };

  return (
    <section id="projects" className={cn('relative', className)}>
      {/* Bracket Text Header */}
      <div className="bg-off-white py-14 md:py-20">
        <div className="px-4 md:px-8 lg:px-12">
          <BracketText size="full" variant="light">
            SELECTED PROJECTS
          </BracketText>
        </div>
      </div>


      {/* Carousel */}
      <div className="relative h-[92vh] md:h-[90vh] w-full overflow-hidden">
        {/* Background Images */}
        <AnimatePresence initial={false} custom={direction} mode="popLayout">
          <motion.div
            key={currentSlide}
            custom={direction}
            variants={slideVariants}
            initial="enter"
            animate="center"
            exit="exit"
            transition={{ duration: 1.2, ease: [0.32, 0.72, 0, 1] }}
            className="absolute inset-0"
          >
            <Image
              src={currentProject.image}
              alt={currentProject.client}
              fill
              className="object-cover"
              priority
            />
          </motion.div>
        </AnimatePresence>

        {/* Gradient Overlays */}
        <div className="absolute inset-0 bg-deep-navy/60 z-[1]" />
        <div className="absolute inset-0 bg-gradient-to-t from-deep-navy/90 via-transparent to-deep-navy/50 z-[1]" />

        {/* Main Content - Centered */}
        <div className="absolute inset-0 z-10 flex items-center justify-center">
          <div className="container-jil">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentSlide}
                variants={contentVariants}
                initial="hidden"
                animate="visible"
                exit="exit"
                className="max-w-3xl mx-auto text-center"
              >
                {/* Client Logo */}
                <motion.div
                  variants={itemVariants}
                  className="flex justify-center mb-6"
                >
                  <div className="relative w-16 h-16 bg-white/10 backdrop-blur-sm rounded-xl p-2 border border-white/20">
                    <Image
                      src={currentProject.clientLogo}
                      alt={currentProject.client}
                      fill
                      className="object-contain p-1"
                    />
                  </div>
                </motion.div>

                {/* Client Name */}
                <motion.h3
                  variants={itemVariants}
                  className="font-display text-3xl md:text-4xl lg:text-5xl font-semibold text-off-white leading-tight mb-6"
                >
                  {currentProject.client}
                </motion.h3>

                {/* Description */}
                <motion.p
                  variants={itemVariants}
                  className="text-light-gray text-base md:text-lg leading-relaxed mb-8 max-w-2xl mx-auto"
                >
                  {currentProject.description}
                </motion.p>

                {/* CTA Button */}
                <motion.div variants={itemVariants}>
                  <Link
                    href={currentProject.href}
                    className="inline-flex items-center gap-2 px-8 py-3.5 bg-industrial-gold text-near-black font-heading text-xs tracking-[0.1em] uppercase rounded-xl btn-animated relative z-1 overflow-hidden after:bg-steel-blue hover:text-off-white transition-colors group"
                  >
                    Read More
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </motion.div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>

        {/* Navigation Controls */}
        <div className="absolute bottom-8 left-0 right-0 z-10">
          <div className="container-jil">
            <div className="flex items-center justify-center gap-8">
              <button
                onClick={prevSlide}
                className="p-3 border border-white/20 rounded-full text-off-white hover:bg-white/10 hover:border-white/40 transition-all"
                aria-label="Previous project"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>

              <div className="flex items-center gap-3">
                {projects.map((project, index) => (
                  <button
                    key={project.id}
                    onClick={() => goToSlide(index)}
                    className={cn(
                      'transition-all duration-500',
                      currentSlide === index ? 'opacity-100' : 'opacity-50 hover:opacity-75'
                    )}
                    aria-label={`Go to ${project.client}`}
                  >
                    <span
                      className={cn(
                        'block h-1 rounded-full transition-all duration-500',
                        currentSlide === index
                          ? 'w-12 bg-industrial-gold'
                          : 'w-4 bg-white/40 hover:bg-white/60'
                      )}
                    />
                  </button>
                ))}
              </div>

              <button
                onClick={nextSlide}
                className="p-3 border border-white/20 rounded-full text-off-white hover:bg-white/10 hover:border-white/40 transition-all"
                aria-label="Next project"
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>

        {/* Slide Counter */}
        <div className="absolute top-8 right-8 z-10 hidden md:block">
          <div className="flex items-center gap-2">
            <span className="font-display text-4xl font-semibold text-industrial-gold">
              {String(currentSlide + 1).padStart(2, '0')}
            </span>
            <span className="text-mid-gray">/</span>
            <span className="font-heading text-sm text-mid-gray">
              {String(projects.length).padStart(2, '0')}
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
