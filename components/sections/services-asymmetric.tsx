'use client';

import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';
import { GoldDot } from '@/components/ui/gold-dot';
import { ServiceAccordion } from '@/components/ui/accordion-list';
import { ScrollReveal } from '@/components/animations/scroll-reveal';
import { services } from '@/config/services';
import { Pickaxe, Leaf, Building2, Sun, Fuel, ArrowRight } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';

interface ServicesAsymmetricProps {
  className?: string;
}

// Icon mapping
const iconMap: Record<string, React.ReactNode> = {
  Pickaxe: <Pickaxe className="w-5 h-5" />,
  Leaf: <Leaf className="w-5 h-5" />,
  Building2: <Building2 className="w-5 h-5" />,
  Sun: <Sun className="w-5 h-5" />,
  Fuel: <Fuel className="w-5 h-5" />,
};

export function ServicesAsymmetric({ className }: ServicesAsymmetricProps) {
  const serviceItems = services.map((service) => ({
    id: service.id,
    title: service.shortTitle,
    description: service.description,
    icon: iconMap[service.icon] || <Pickaxe className="w-5 h-5" />,
    href: service.href,
    features: service.features,
  }));

  return (
    <section
      id="services"
      className={cn(
        'relative z-10 -mt-16 md:-mt-24',
        className
      )}
    >
      {/* Main light background with rounded top */}
      <div className="bg-off-white rounded-t-[2rem] md:rounded-t-[3rem] pt-16 md:pt-24 pb-24 md:pb-32 ">
        <div className="container-jil">
          {/* Two Column Layout - Details Left, Sticky Image Right */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-10 items-stretch">
            {/* Left - Details Section */}
            <div className="space-y-8 order-1">
              {/* Section Header - Like Intro */}
              <ScrollReveal animation="fadeUp">
                <div className="space-y-4">
                  <span className="inline-flex items-center gap-2 font-heading text-xs tracking-[0.2em] uppercase text-industrial-gold">
                    <span className="w-8 h-px bg-industrial-gold" />
                    What We Do
                  </span>
                  <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-light text-deep-navy leading-[2.5rem]">
                    OUR SERVICES
                    <span className="block text-xl md:text-2xl lg:text-3xl text-steel-blue tracking-[0.15em] mt-1">
                      ACROSS INDUSTRIES
                    </span>
                  </h2>
                </div>
              </ScrollReveal>

              {/* Description */}
              <ScrollReveal animation="fadeUp" delay={0.1}>
                <p className="text-steel-blue leading-relaxed">
                  Our activities and interest span across various sectors such as Agriculture,
                  Mining, Construction Engineering, Manufacturing, Oil & Gas, Solar Energy
                  Installation, Rural Electrification and General Contractor & Supplies.
                </p>
              </ScrollReveal>

              {/* Service Accordion */}
              <ScrollReveal animation="fadeUp" delay={0.2}>
                <ServiceAccordion services={serviceItems} variant="light" />
              </ScrollReveal>

              {/* Divider */}
              <div className="h-px bg-steel-blue/20" />

              {/* Bottom Info */}
              <ScrollReveal animation="fadeUp" delay={0.3}>
                <div className="flex items-start gap-4">
                  <GoldDot size="lg" className="mt-2 flex-shrink-0" />
                  <div>
                    <h4 className="font-heading text-lg font-semibold text-deep-navy mb-2">
                      Everything You Need, Just Steps Away
                    </h4>
                    <p className="text-steel-blue leading-relaxed">
                      From initial consultation to project completion, our
                      comprehensive services cover every aspect of your industrial
                      needs across Nigeria.
                    </p>
                  </div>
                </div>
              </ScrollReveal>

              {/* CTA Button */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.8 }}
              >
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 px-6 py-3 bg-industrial-gold text-near-black font-heading text-xs tracking-[0.1em] uppercase rounded-xl btn-animated relative z-1 overflow-hidden after:bg-steel-blue hover:text-off-white transition-colors"
                >
                  Get In Touch
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </motion.div>
            </div>

            {/* Right - Sticky Image */}
            <ScrollReveal animation="fadeUp" className="order-2">
              <div className="sticky top-24">
                <div className="relative aspect-square w-full rounded-xl overflow-hidden shadow-2xl">
                  <Image
                    src="/survey-4.jpg"
                    alt="Industrial mining operation"
                    fill
                    className="object-cover"
                  />
                  {/* Subtle gradient overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-deep-navy/40 via-transparent to-transparent" />
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </div>
    </section>
  );
}
