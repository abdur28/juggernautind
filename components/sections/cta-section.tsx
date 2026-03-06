'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { cn } from '@/lib/utils';
import { ScrollReveal } from '@/components/animations/scroll-reveal';
import { siteConfig } from '@/config/site';
import { ArrowRight, Mail, Phone, Loader2, CheckCircle2 } from 'lucide-react';

interface CTASectionProps {
  className?: string;
}

export function CTASection({ className }: CTASectionProps) {
  const [email, setEmail] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleSubscribe = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setError(null);

    try {
      const response = await fetch('/api/send-email', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ 
          email, 
          formType: 'newsletter' 
        }),
      });

      const result = await response.json();

      if (!response.ok) {
        throw new Error(result.error || 'Failed to subscribe');
      }

      setIsSuccess(true);
      setEmail('');
    } catch (err: any) {
      setError(err.message || 'Something went wrong. Please try again.');
    } finally {
      setIsLoading(false);
    }
  };

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
          src="/conference.jpg"
          alt="JIL Conference"
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
                
                {isSuccess ? (
                  <div className="bg-industrial-gold/10 border border-industrial-gold/20 rounded-xl p-6 flex flex-col items-center justify-center animate-in fade-in zoom-in duration-300">
                    <CheckCircle2 className="w-12 h-12 text-industrial-gold mb-3" />
                    <p className="text-off-white font-medium">Thanks for subscribing!</p>
                    <p className="text-light-gray text-xs mt-1">Check your inbox for a confirmation email.</p>
                    <button 
                      onClick={() => setIsSuccess(false)}
                      className="text-industrial-gold text-xs mt-4 hover:underline"
                    >
                      Subscribe another email
                    </button>
                  </div>
                ) : (
                  <form onSubmit={handleSubscribe} className="space-y-3">
                    <input
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="Enter your email"
                      className="input-field w-full"
                      required
                    />
                    <button
                      type="submit"
                      disabled={isLoading}
                      className="inline-flex items-center justify-center gap-2 px-8 py-4 border border-industrial-gold/50 text-industrial-gold font-heading text-sm tracking-[0.1em] uppercase rounded-xl btn-animated relative z-1 overflow-hidden after:bg-industrial-gold hover:text-near-black transition-colors w-full disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                      {isLoading ? (
                        <>
                          Subscribing...
                          <Loader2 className="w-5 h-5 animate-spin" />
                        </>
                      ) : (
                        <>
                          Subscribe
                          <ArrowRight className="w-5 h-5" />
                        </>
                      )}
                    </button>
                    {error && <p className="text-red-400 text-xs mt-2">{error}</p>}
                  </form>
                )}
              </div>
            </ScrollReveal>
          </div>
        </div>
      </div>
    </section>
  );
}

