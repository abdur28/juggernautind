'use client';

import Link from 'next/link';
import { cn } from '@/lib/utils';
import { ScrollReveal } from '@/components/animations/scroll-reveal';
import { siteConfig } from '@/config/site';
import { ArrowRight, Mail, Phone } from 'lucide-react';

interface CTASectionProps {
  className?: string;
}

export function CTASection({ className }: CTASectionProps) {
  return (
    <section
      id="contact"
      className={cn(
        'relative py-14 overflow-hidden',
        className
      )}
    >
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=2069&auto=format&fit=crop"
          alt="Modern office building"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-deep-navy/95 via-deep-navy/90 to-near-black" />
      </div>

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
        <div className="max-w-4xl mx-auto text-center">
          {/* Headline */}
          <ScrollReveal animation="fadeUp">
            <div className="mb-8">
              <h2 className="font-display text-3xl md:text-4xl lg:text-6xl font-light text-off-white leading-tight mb-4">
                LET'S BUILD
                <span className="block text-industrial-gold mt-2">SOMETHING GREAT</span>
              </h2>
              <p className="text-light-gray text-lg md:text-xl max-w-2xl mx-auto">
                Ready to start your next project? Get in touch with our team for a consultation.
              </p>
            </div>
          </ScrollReveal>

          {/* CTA Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
            {/* Contact Button Card */}
            <ScrollReveal animation="fadeUp" delay={0.1}>
              <div className="bg-steel-blue/10 backdrop-blur-xl border border-white/10 rounded-xl p-8 text-center hover:bg-steel-blue/20 transition-all duration-300 h-full flex flex-col justify-between">
                <div>
                  <h3 className="font-display text-2xl font-semibold text-off-white mb-3">
                    Start a Project
                  </h3>
                  <p className="text-light-gray text-sm mb-6">
                    Let's discuss your requirements and explore how we can help bring your vision to life.
                  </p>
                </div>
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-industrial-gold text-near-black font-heading text-sm tracking-[0.1em] uppercase rounded-xl btn-animated relative z-1 overflow-hidden after:bg-steel-blue hover:text-off-white transition-colors w-full"
                >
                  Contact Us
                  <ArrowRight className="w-5 h-5" />
                </Link>
              </div>
            </ScrollReveal>

            {/* Newsletter Card */}
            <ScrollReveal animation="fadeUp" delay={0.2}>
              <div className="bg-steel-blue/10 backdrop-blur-xl border border-white/10 rounded-xl p-8 text-center h-full flex flex-col justify-between">
                <div>
                  <h3 className="font-display text-2xl font-semibold text-off-white mb-3">
                    Stay Updated
                  </h3>
                  <p className="text-light-gray text-sm mb-6">
                    Subscribe to our newsletter for industry insights, project updates, and company news.
                  </p>
                </div>
                <form className="space-y-3">
                  <input
                    type="email"
                    placeholder="Enter your email"
                    className="input-field w-full"
                    required
                  />
                  <button
                    type="submit"
                    className="inline-flex items-center justify-center gap-2 px-8 py-4 border border-industrial-gold/50 text-industrial-gold font-heading text-sm tracking-[0.1em] uppercase rounded-xl btn-animated relative z-1 overflow-hidden after:bg-industrial-gold hover:text-near-black transition-colors w-full"
                  >
                    Subscribe
                    <ArrowRight className="w-5 h-5" />
                  </button>
                </form>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </div>
    </section>
  );
}
