'use client';

import { PageHeader } from '@/components/ui/page-header';
import { ScrollReveal } from '@/components/animations/scroll-reveal';
import { GoldDot } from '@/components/ui/gold-dot';
import { ShieldCheck, Leaf, HeartPulse, FileText, Download, ArrowRight } from 'lucide-react';
import Link from 'next/link';

const hseHighlights = [
  {
    title: 'Zero Harm Objective',
    description: 'We strive for zero incidents, injuries, and illnesses across all our project sites.',
    icon: ShieldCheck,
  },
  {
    title: 'Environmental Stewardship',
    description: 'Commitment to protecting the environment and minimizing our ecological footprint.',
    icon: Leaf,
  },
  {
    title: 'Safety Leadership',
    description: 'Every employee is empowered to be a safety leader and stop any unsafe work.',
    icon: HeartPulse,
  },
  {
    title: 'Compliance & Improvement',
    description: 'Adherence to international standards and continuous improvement of our HSE system.',
    icon: FileText,
  },
];

export default function HSEPolicyPage() {
  return (
    <>
      <PageHeader
        title="HSE POLICY"
        subtitle="Our commitment to Health, Safety, and the Environment is at the core of every project we undertake."
        breadcrumbs={[
          { label: 'Home', href: '/' },
          { label: 'HSE Policy', href: '/hse-policy' },
        ]}
        backgroundImage="/team-group.jpg"
      />

      {/* Overview Section */}
      <section className="relative py-20 bg-white overflow-hidden">
        <div className="container-jil relative z-10">
          <div className="max-w-4xl mx-auto text-center mb-16">
            <ScrollReveal animation="fadeUp">
              <span className="inline-flex items-center gap-2 font-heading text-xs tracking-[0.2em] uppercase text-industrial-gold mb-4">
                <span className="w-8 h-px bg-industrial-gold" />
                Policy Overview
              </span>
              <h2 className="font-display text-3xl md:text-5xl font-light text-deep-navy mb-6">
                SAFETY IS OUR <span className="text-steel-blue">PRIORITY</span>
              </h2>
              <p className="text-steel-blue text-lg leading-relaxed">
                Juggernaut Industries Limited (JIL) recognizes that the protection of the health and safety of its employees, contractors, and the public, as well as the protection of the environment, are among its highest priorities.
              </p>
            </ScrollReveal>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {hseHighlights.map((item, index) => (
              <ScrollReveal key={index} animation="fadeUp" delay={0.1 * index}>
                <div className="h-full p-8 rounded-2xl bg-off-white border border-steel-blue/5 hover:border-industrial-gold/20 hover:shadow-xl transition-all duration-300 group">
                  <div className="w-12 h-12 rounded-xl bg-steel-blue/5 flex items-center justify-center mb-6 group-hover:bg-industrial-gold/10 transition-colors">
                    <item.icon className="w-6 h-6 text-industrial-gold" />
                  </div>
                  <h3 className="font-heading text-base font-semibold text-deep-navy uppercase tracking-wider mb-3">
                    {item.title}
                  </h3>
                  <p className="text-sm text-steel-blue leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* PDF View Section */}
      <section className="relative py-20 bg-deep-navy text-off-white overflow-hidden">
        {/* Background Decorative Element */}
        <div className="absolute top-0 right-0 w-1/3 h-full bg-industrial-gold/5 blur-[120px] rounded-full -translate-y-1/2 translate-x-1/2" />
        
        <div className="container-jil relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            
            {/* Policy Description */}
            <div className="lg:col-span-5 space-y-8">
              <ScrollReveal animation="fadeUp">
                <h2 className="font-display text-3xl md:text-4xl font-light leading-tight">
                  OFFICIAL <br />
                  <span className="text-industrial-gold font-semibold uppercase">HSE STATEMENT</span>
                </h2>
                <div className="w-20 h-1 bg-industrial-gold rounded-full mt-6" />
              </ScrollReveal>

              <ScrollReveal animation="fadeUp" delay={0.1}>
                <div className="space-y-6 text-light-gray italic font-serif text-lg">
                  <p>
                    &ldquo;We are committed to providing a safe and healthy workplace for all employees and contractors. We believe that all workplace injuries are preventable and we work tirelessly to achieve our goal of Zero Harm.&rdquo;
                  </p>
                </div>
              </ScrollReveal>

              <ScrollReveal animation="fadeUp" delay={0.2}>
                <div className="p-6 rounded-xl bg-steel-blue/10 border border-white/10 backdrop-blur-sm">
                  <p className="text-sm text-light-gray leading-relaxed mb-6">
                    Download the complete Health, Safety, and Environment Policy document for Juggernaut Industries Limited.
                  </p>
                  <a 
                    href="/hse-policy.pdf" 
                    download
                    className="inline-flex items-center gap-3 px-6 py-4 bg-industrial-gold text-near-black font-heading text-sm tracking-[0.1em] uppercase rounded-xl btn-animated relative z-1 overflow-hidden after:bg-steel-blue hover:text-off-white transition-colors w-full justify-center"
                  >
                    <Download className="w-5 h-5" />
                    Download PDF Policy
                  </a>
                </div>
              </ScrollReveal>
            </div>

            {/* PDF Preview / Viewer */}
            <div className="lg:col-span-7 h-full">
              <ScrollReveal animation="fadeLeft" delay={0.3}>
                <div className="relative aspect-[3/4] md:aspect-[4/5] lg:aspect-auto lg:h-[800px] w-full bg-white/5 rounded-2xl border border-white/10 overflow-hidden shadow-2xl group">
                  {/* Overlay for small screens or fallback */}
                  <div className="absolute inset-0 z-0 flex flex-col items-center justify-center p-8 text-center bg-deep-navy/40 lg:hidden">
                    <FileText className="w-16 h-16 text-industrial-gold/40 mb-6" />
                    <p className="text-off-white font-heading text-sm uppercase tracking-widest mb-4">Document Preview</p>
                    <a 
                      href="/hse-policy.pdf" 
                      target="_blank"
                      className="text-industrial-gold border-b border-industrial-gold/30 hover:border-industrial-gold flex items-center gap-2 transition-all mt-2"
                    >
                      Open in new tab to view <ArrowRight className="w-4 h-4" />
                    </a>
                  </div>

                  {/* PDF Object (Hidden on mobile if not supported, but CSS will handle display) */}
                  <object
                    data="/hse-policy.pdf"
                    type="application/pdf"
                    className="relative z-10 w-full h-full rounded-2xl hidden lg:block"
                  >
                    <div className="flex flex-col items-center justify-center h-full p-12 text-center">
                      <p className="mb-4">PDF viewer is not supported by your browser.</p>
                      <a href="/hse-policy.pdf" className="text-industrial-gold underline">Click here to download the PDF</a>
                    </div>
                  </object>
                </div>
              </ScrollReveal>
            </div>

          </div>
        </div>
      </section>

      {/* Team CTA */}
      <section className="py-20 bg-off-white overflow-hidden">
        <div className="container-jil">
            <ScrollReveal animation="fadeUp">
                <div className="bg-deep-navy rounded-[2rem] p-8 md:p-16 relative overflow-hidden flex flex-col lg:flex-row items-center justify-between gap-8 border border-white/5 shadow-2xl">
                    {/* Pattern Overlay */}
                    <div className="absolute inset-0 opacity-5 pointer-events-none">
                        <div
                            className="absolute inset-0"
                            style={{
                            backgroundImage: `radial-gradient(circle at 2px 2px, white 1px, transparent 0)`,
                            backgroundSize: '32px 32px',
                            }}
                        />
                    </div>

                    <div className="relative z-10 text-center lg:text-left max-w-xl">
                        <h3 className="font-display text-2xl md:text-3xl text-off-white mb-4">CULTURE OF EXCELLENCE</h3>
                        <p className="text-light-gray">Learn more about our core values and the team that drives our success across the continent.</p>
                    </div>
                    
                    <div className="relative z-10 flex flex-wrap justify-center gap-4">
                        <Link
                            href="/about"
                            className="px-8 py-4 bg-industrial-gold text-near-black font-heading text-xs tracking-widest uppercase rounded-xl hover:bg-steel-blue hover:text-white transition-all transform hover:-translate-y-1"
                        >
                            Our Company
                        </Link>
                        <Link
                            href="/careers"
                            className="px-8 py-4 border border-white/20 text-white font-heading text-xs tracking-widest uppercase rounded-xl hover:bg-white/10 transition-all transform hover:-translate-y-1"
                        >
                            Join Our Team
                        </Link>
                    </div>
                </div>
            </ScrollReveal>
        </div>
      </section>
    </>
  );
}
