'use client';

import Link from 'next/link';
import { cn } from '@/lib/utils';
import { ScrollReveal } from '@/components/animations/scroll-reveal';
import { ShieldCheck, ArrowRight, Leaf, HeartPulse } from 'lucide-react';
import Image from 'next/image';

interface HSEPolicySectionProps {
  className?: string;
}

export function HSEPolicySection({ className }: HSEPolicySectionProps) {
  return (
    <section
      className={cn(
        'relative py-24 overflow-hidden bg-deep-navy text-off-white',
        className
      )}
    >
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `radial-gradient(circle at 2px 2px, white 1px, transparent 0)`,
            backgroundSize: '40px 40px',
          }}
        />
      </div>

      <div className="container-jil relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          
          {/* Left - Content */}
          <div className="space-y-4">
            <ScrollReveal animation="fadeUp">
              <div className="space-y-4">
                <span className="inline-flex items-center gap-2 font-heading text-xs tracking-[0.2em] uppercase text-industrial-gold">
                  <span className="w-8 h-px bg-industrial-gold" />
                  Our Commitment
                </span>
                <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-light leading-[2.5rem]">
                  HEALTH, SAFETY &
                  <span className="block text-industrial-gold mt-2">ENVIRONMENT</span>
                </h2>
              </div>
            </ScrollReveal>

            <ScrollReveal animation="fadeUp" delay={0.1}>
              <p className="text-light-gray text-lg leading-relaxed">
                At Juggernaut Industries Limited, the health and safety of our people, and the protection of our environment, are fundamental to how we do business. We are committed to maintaining the highest HSE standards across all our operations.
              </p>
            </ScrollReveal>

            {/* Feature points */}
            <ScrollReveal animation="fadeUp" delay={0.2}>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-8">
                <div className="flex items-start gap-4">
                  <div className="p-3 rounded-lg bg-steel-blue/20 text-industrial-gold">
                    <ShieldCheck className="w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="font-heading text-sm uppercase tracking-wider mb-2">Zero Harm</h4>
                    <p className="text-sm text-light-gray">Dedicated to ensuring a safe working environment for all employees and contractors.</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="p-3 rounded-lg bg-steel-blue/20 text-industrial-gold">
                    <Leaf className="w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="font-heading text-sm uppercase tracking-wider mb-2">Sustainability</h4>
                    <p className="text-sm text-light-gray">Minimizing our environmental footprint through responsible operational practices.</p>
                  </div>
                </div>
              </div>
            </ScrollReveal>

            <ScrollReveal animation="fadeUp" delay={0.3}>
              <Link
                href="/hse-policy"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 border border-industrial-gold/50 text-industrial-gold font-heading text-sm tracking-[0.1em] uppercase rounded-xl btn-animated relative z-1 overflow-hidden after:bg-industrial-gold hover:text-near-black transition-colors w-full sm:w-auto mt-4"
              >
                Read Our Policy
                <ArrowRight className="w-5 h-5" />
              </Link>
            </ScrollReveal>
          </div>

          {/* Right - Visual / Cards */}
          <ScrollReveal animation="fadeLeft" delay={0.2} className="relative">
            <div className="relative aspect-square md:aspect-[4/3] lg:aspect-square w-full rounded-2xl overflow-hidden shadow-2xl border border-white/10">
                <div className="absolute inset-0 bg-gradient-to-tr from-steel-blue/10 to-deep-navy/20 mix-blend-multiply z-10" />
                <Image
                  src="/team-group.jpg"
                  alt="HSE Commitment"
                  fill
                  className="object-cover"
                />
                
                
            </div>
          </ScrollReveal>

        </div>
      </div>
    </section>
  );
}
