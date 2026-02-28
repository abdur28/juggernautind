'use client';

import Image from 'next/image';
import Link from 'next/link';
import { PageHeader } from '@/components/ui/page-header';
import { GoldDot } from '@/components/ui/gold-dot';
import { BracketText } from '@/components/ui/bracket-text';
import { ScrollReveal } from '@/components/animations/scroll-reveal';
import { siteConfig, stats } from '@/config/site';
import { services } from '@/config/services';
import { ArrowRight } from 'lucide-react';

// Core values
const coreValues = [
  {
    title: 'Excellence',
    description: 'Technical and professional excellence with international best practice.',
  },
  {
    title: 'Integrity',
    description: 'Highest standards of honesty and transparency in all dealings.',
  },
  {
    title: 'Innovation',
    description: 'Embracing new technologies and creative solutions.',
  },
  {
    title: 'People First',
    description: 'Our people are our greatest asset.',
  },
  {
    title: 'Commitment',
    description: 'Dedicated to Africa and sustainable development.',
  },
  {
    title: 'Quality',
    description: 'Rigorous standards across all operations.',
  },
];

export default function AboutPage() {
  return (
    <>
      {/* Page Header */}
      <PageHeader
        title="WHO WE ARE"
        subtitle="An indigenous Nigerian company with a vision to be on the global listing of world class companies."
        breadcrumbs={[
          { label: 'Home', href: '/' },
          { label: 'About', href: '/about' },
        ]}
        backgroundImage="/drilling.jpg"
      />

      {/* Who We Are Section - Content Left, Image Right */}
      <section className="relative py-14 overflow-hidden bg-white">
        <div className="container-jil relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-10 items-stretch">
            {/* Left - Content */}
            <div className="space-y-8 order-2 lg:order-1">
              {/* Header */}
              <ScrollReveal animation="fadeUp">
                <div className="space-y-4">
                  <span className="inline-flex items-center gap-2 font-heading text-xs tracking-[0.2em] uppercase text-industrial-gold">
                    <span className="w-8 h-px bg-industrial-gold" />
                    About Juggernaut Industries
                  </span>
                  <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-light text-deep-navy leading-[2.5rem]">
                    BUILDING AFRICA&apos;S
                    <span className="block text-xl md:text-2xl lg:text-3xl text-steel-blue tracking-[0.15em]">
                      INDUSTRIAL FUTURE
                    </span>
                  </h2>
                </div>
              </ScrollReveal>

              {/* Main Description */}
              <ScrollReveal animation="fadeUp" delay={0.1}>
                <p className="text-steel-blue leading-relaxed text-lg">
                  <strong className="text-deep-navy">Juggernaut Industries Limited</strong> was
                  incorporated in 2006 with the Corporate Affairs Commission of Nigeria to provide
                  quality services and products to our clients and customers.
                </p>
              </ScrollReveal>

              <ScrollReveal animation="fadeUp" delay={0.15}>
                <p className="text-steel-blue leading-relaxed">
                  We have assembled a world class team with experience in the African terrain which
                  helps serve our esteemed customers. Our proven local expertise has an
                  international team of experienced personnel representing a range of different
                  cultures, enabling us to adapt and work anywhere.
                </p>
              </ScrollReveal>

              {/* Divider */}
              <div className="h-px bg-steel-blue/20" />

              {/* Key Highlights */}
              <ScrollReveal animation="fadeUp" delay={0.2}>
                <div className="grid grid-cols-2 gap-3">
                  {[
                    'NIMEP Certified Contractor',
                    'Own Drill Rigs & Equipment',
                    'In-House Laboratory',
                    'World Class Team',
                    'Government & Private Clients',
                    'International Standards',
                  ].map((highlight, index) => (
                    <div key={index} className="flex items-center gap-2 text-sm text-steel-blue">
                      <GoldDot size="sm" />
                      <span>{highlight}</span>
                    </div>
                  ))}
                </div>
              </ScrollReveal>

              {/* CTA */}
              <ScrollReveal animation="fadeUp" delay={0.25}>
                <div className="flex flex-wrap gap-4">
                  <Link
                    href="/about/our-story"
                    className="inline-flex items-center gap-2 px-6 py-3 bg-industrial-gold text-near-black font-heading text-xs tracking-[0.1em] uppercase rounded-xl btn-animated relative z-1 overflow-hidden after:bg-steel-blue hover:text-off-white transition-colors"
                  >
                    Our Story
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                  <Link
                    href="/about/team"
                    className="inline-flex items-center gap-2 px-6 py-3 border border-industrial-gold/50 text-industrial-gold font-heading text-xs tracking-[0.1em] uppercase rounded-xl btn-animated relative z-1 overflow-hidden after:bg-industrial-gold hover:text-near-black transition-colors"
                  >
                    Meet Our Team
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </ScrollReveal>
            </div>

            {/* Right - Sticky Image */}
            <ScrollReveal animation="fadeUp" className="order-1 lg:order-2">
              <div className="sticky top-24">
                <div className="relative aspect-square w-full rounded-xl overflow-hidden shadow-2xl">
                  <Image
                    src="/construction.jpg"
                    alt="Juggernaut Industries operations"
                    fill
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-deep-navy/40 via-transparent to-transparent" />
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="relative py-14 overflow-hidden bg-deep-navy">
        <div className="container-jil relative z-10">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 lg:gap-8">
            {stats.map((stat, index) => (
              <ScrollReveal key={index} animation="fadeUp" delay={0.1 * index}>
                <div className="text-center p-6 rounded-xl bg-steel-blue/10 border border-white/10">
                  <p className="font-display text-4xl md:text-5xl font-semibold text-industrial-gold mb-2">
                    {stat.value}{stat.suffix}
                  </p>
                  <p className="font-heading text-xs tracking-[0.1em] uppercase text-light-gray mb-1">
                    {stat.label}
                  </p>
                  <p className="text-xs text-mid-gray">
                    {stat.description}
                  </p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Vision & Mission Section - Full Width Cards */}
      <section className="relative py-14 overflow-hidden bg-off-white">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-[0.03] pointer-events-none">
          <div
            className="absolute inset-0"
            style={{
              backgroundImage: `radial-gradient(circle at 2px 2px, #0D1B2A 1px, transparent 0)`,
              backgroundSize: '48px 48px',
            }}
          />
        </div>

        {/* Bracket Text Header */}
        <div className="px-4 md:px-8 lg:px-12 mb-12 md:mb-16">
          <BracketText size="full" variant="light">
            OUR PURPOSE
          </BracketText>
        </div>

        <div className="container-jil relative z-10">
          {/* Vision & Mission Cards */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8">
            {/* Vision Card */}
            <ScrollReveal animation="fadeUp" delay={0.1}>
              <div className="group h-full p-8 md:p-10 rounded-xl bg-white border border-steel-blue/10 shadow-sm hover:shadow-lg transition-shadow">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-1 h-8 bg-industrial-gold rounded-full" />
                  <h3 className="font-heading text-lg tracking-[0.1em] uppercase text-deep-navy">
                    Our Vision
                  </h3>
                </div>
                <p className="text-steel-blue leading-relaxed text-lg">
                  {siteConfig.vision}
                </p>
              </div>
            </ScrollReveal>

            {/* Mission Card */}
            <ScrollReveal animation="fadeUp" delay={0.2}>
              <div className="group h-full p-8 md:p-10 rounded-xl bg-white border border-steel-blue/10 shadow-sm hover:shadow-lg transition-shadow">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-1 h-8 bg-industrial-gold rounded-full" />
                  <h3 className="font-heading text-lg tracking-[0.1em] uppercase text-deep-navy">
                    Our Mission
                  </h3>
                </div>
                <p className="text-steel-blue leading-relaxed text-lg">
                  {siteConfig.mission}
                </p>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Core Values Section - Image Left, Content Right */}
      <section className="relative py-14 overflow-hidden bg-white">
        <div className="container-jil relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-10 items-stretch">
            {/* Left - Sticky Image */}
            <ScrollReveal animation="fadeUp" className="order-2 lg:order-1">
              <div className="sticky top-24">
                <div className="relative aspect-square w-full rounded-xl overflow-hidden shadow-2xl">
                  <Image
                    src="/story.jpg"
                    alt="Team collaboration at Juggernaut Industries"
                    fill
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-deep-navy/40 via-transparent to-transparent" />
                </div>
              </div>
            </ScrollReveal>

            {/* Right - Content */}
            <div className="space-y-8 order-1 lg:order-2">
              {/* Header */}
              <ScrollReveal animation="fadeUp">
                <div className="space-y-4">
                  <span className="inline-flex items-center gap-2 font-heading text-xs tracking-[0.2em] uppercase text-industrial-gold">
                    <span className="w-8 h-px bg-industrial-gold" />
                    What Drives Us
                  </span>
                  <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-light text-deep-navy leading-[2.5rem]">
                    OUR CORE
                    <span className="block text-xl md:text-2xl lg:text-3xl text-steel-blue tracking-[0.15em]">
                      VALUES
                    </span>
                  </h2>
                </div>
              </ScrollReveal>

              {/* Description */}
              <ScrollReveal animation="fadeUp" delay={0.1}>
                <p className="text-steel-blue leading-relaxed">
                  Our values define who we are and guide every decision we make. They are the
                  foundation of our commitment to excellence and our dedication to serving Africa
                  and its people.
                </p>
              </ScrollReveal>

              {/* Divider */}
              <div className="h-px bg-steel-blue/20" />

              {/* Values Grid */}
              <ScrollReveal animation="fadeUp" delay={0.2}>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {coreValues.map((value, index) => (
                    <div
                      key={index}
                      className="p-4 rounded-xl bg-off-white/50 border border-steel-blue/5 hover:border-industrial-gold/20 transition-colors"
                    >
                      <h4 className="font-heading text-sm tracking-[0.1em] uppercase text-deep-navy mb-2">
                        {value.title}
                      </h4>
                      <p className="text-steel-blue text-sm leading-relaxed">
                        {value.description}
                      </p>
                    </div>
                  ))}
                </div>
              </ScrollReveal>
            </div>
          </div>
        </div>
      </section>

      {/* Our Activities Section */}
      <section className="relative py-14 overflow-hidden bg-deep-navy">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-5 pointer-events-none">
          <div
            className="absolute inset-0"
            style={{
              backgroundImage: `radial-gradient(circle at 2px 2px, white 1px, transparent 0)`,
              backgroundSize: '40px 40px',
            }}
          />
        </div>

        <div className="container-jil relative z-10">
          {/* Section Header */}
          <div className="mb-12 md:mb-16">
            <ScrollReveal animation="fadeUp">
              <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-8">
                <div>
                  <span className="inline-flex items-center gap-2 font-heading text-xs tracking-[0.2em] uppercase text-industrial-gold mb-4">
                    <span className="w-8 h-px bg-industrial-gold" />
                    What We Do
                  </span>
                  <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-light text-off-white">
                    OUR ACTIVITIES
                  </h2>
                </div>
                <Link
                  href="/services"
                  className="inline-flex items-center gap-2 px-6 py-3 border border-industrial-gold/50 text-industrial-gold font-heading text-xs tracking-[0.1em] uppercase rounded-xl btn-animated relative z-1 overflow-hidden after:bg-industrial-gold hover:text-near-black transition-colors"
                >
                  View All Services
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </ScrollReveal>
          </div>

          {/* Services Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service, index) => (
              <ScrollReveal key={service.id} animation="fadeUp" delay={0.1 * index}>
                <Link
                  href={service.href}
                  className="group block h-full rounded-xl overflow-hidden"
                >
                  {/* Card with gradient border effect */}
                  <div className="h-full p-6 bg-steel-blue/10 backdrop-blur-xl border border-white/10 rounded-xl hover:bg-steel-blue/20 hover:border-industrial-gold/30 transition-all duration-300">
                    {/* Gold accent line */}
                    <div className="w-12 h-1 bg-industrial-gold rounded-full mb-4 group-hover:w-16 transition-all duration-300" />

                    <h3 className="font-heading text-base tracking-[0.1em] uppercase text-off-white mb-3 group-hover:text-industrial-gold transition-colors">
                      {service.shortTitle}
                    </h3>

                    <p className="text-light-gray text-sm leading-relaxed mb-6 line-clamp-3">
                      {service.description}
                    </p>

                    <div className="flex items-center gap-2 text-industrial-gold/70 font-heading text-xs tracking-[0.1em] uppercase group-hover:text-industrial-gold transition-colors">
                      Learn More
                      <ArrowRight className="w-3 h-3 group-hover:translate-x-1 transition-transform" />
                    </div>
                  </div>
                </Link>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us Section - Content Left, Image Right */}
      <section className="relative py-14 overflow-hidden bg-off-white">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-[0.03] pointer-events-none">
          <div
            className="absolute inset-0"
            style={{
              backgroundImage: `radial-gradient(circle at 2px 2px, #0D1B2A 1px, transparent 0)`,
              backgroundSize: '48px 48px',
            }}
          />
        </div>

        <div className="container-jil relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-10 items-stretch">
            {/* Left - Content */}
            <div className="space-y-8 order-2 lg:order-1">
              {/* Header */}
              <ScrollReveal animation="fadeUp">
                <div className="space-y-4">
                  <span className="inline-flex items-center gap-2 font-heading text-xs tracking-[0.2em] uppercase text-industrial-gold">
                    <span className="w-8 h-px bg-industrial-gold" />
                    Why Choose Us
                  </span>
                  <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-light text-deep-navy leading-[2.5rem]">
                    WHAT SETS US
                    <span className="block text-xl md:text-2xl lg:text-3xl text-steel-blue tracking-[0.15em]">
                      APART
                    </span>
                  </h2>
                </div>
              </ScrollReveal>

              {/* Description */}
              <ScrollReveal animation="fadeUp" delay={0.1}>
                <p className="text-steel-blue leading-relaxed">
                  At JIL we are committed to technical and professional excellence of products and
                  services that are tailored, innovative, cost effective and accord with
                  international best practice with emphasis on highly skilled qualified personnel.
                </p>
              </ScrollReveal>

              {/* Divider */}
              <div className="h-px bg-steel-blue/20" />

              {/* Benefits List */}
              <ScrollReveal animation="fadeUp" delay={0.2}>
                <div className="space-y-6">
                  {[
                    {
                      title: 'Local Expertise, Global Standards',
                      description:
                        'Our proven local expertise combined with an international team enables us to deliver world-class results.',
                    },
                    {
                      title: 'Complete In-House Capabilities',
                      description:
                        'We own our drill rigs, geophysics equipment, and laboratory facilities for full project control.',
                    },
                    {
                      title: 'Track Record of Excellence',
                      description:
                        'From NIMEP contracts to major gold mining operations, we have consistently delivered exceptional results.',
                    },
                    {
                      title: 'Commitment to Africa',
                      description:
                        'As a growing company, JIL has great passion and commitment to Africa and its sustainable development.',
                    },
                  ].map((benefit, index) => (
                    <div key={index} className="flex items-start gap-4">
                      <GoldDot size="lg" className="mt-1 flex-shrink-0" />
                      <div>
                        <h4 className="font-heading text-sm tracking-[0.1em] uppercase text-deep-navy mb-1">
                          {benefit.title}
                        </h4>
                        <p className="text-sm text-steel-blue leading-relaxed">
                          {benefit.description}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </ScrollReveal>

              {/* CTA */}
              <ScrollReveal animation="fadeUp" delay={0.3}>
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 px-6 py-3 bg-industrial-gold text-near-black font-heading text-xs tracking-[0.1em] uppercase rounded-xl btn-animated relative z-1 overflow-hidden after:bg-steel-blue hover:text-off-white transition-colors"
                >
                  Get In Touch
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </ScrollReveal>
            </div>

            {/* Right - Sticky Image */}
            <ScrollReveal animation="fadeUp" className="order-1 lg:order-2">
              <div className="sticky top-24">
                <div className="relative aspect-square w-full rounded-xl overflow-hidden shadow-2xl">
                  <Image
                    src="https://images.unsplash.com/photo-1504307651254-35680f356dfd?q=80&w=2070&auto=format&fit=crop"
                    alt="Industrial operations at Juggernaut Industries"
                    fill
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-deep-navy/40 via-transparent to-transparent" />
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>
    </>
  );
}
