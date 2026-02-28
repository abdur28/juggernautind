'use client';

import Image from 'next/image';
import Link from 'next/link';
import { PageHeader } from '@/components/ui/page-header';
import { GoldDot } from '@/components/ui/gold-dot';
import { BracketText } from '@/components/ui/bracket-text';
import { ScrollReveal } from '@/components/animations/scroll-reveal';
import { ArrowRight } from 'lucide-react';

// Timeline milestones
const milestones = [
  {
    year: '2006',
    title: 'Company Founded',
    description:
      'Juggernaut Industries Limited was incorporated with the Corporate Affairs Commission of Nigeria, beginning our journey in mining and industrial services.',
  },
  {
    year: '2010',
    title: 'NIMEP Contract Award',
    description:
      'Successfully awarded exploration contract under the National Integrated Mineral Exploration Project (NIMEP) LOT A3 for Lead, Zinc & Silver in the Benue trough.',
  },
  {
    year: '2014',
    title: 'Agricultural Expansion',
    description:
      'Acquired 5,000 hectares of farmland in Niger State for Rice, Palm Oil, and Shea butter cultivation, diversifying into agricultural production.',
  },
  {
    year: '2018',
    title: 'Solar Energy Division',
    description:
      'Launched solar electrification services, successfully completing solar street light installations across multiple Nigerian states.',
  },
  {
    year: '2020',
    title: 'Segilola Gold Project',
    description:
      "Began grade control operations at Segilola, Nigeria's only large-scale producing gold mine, marking a milestone in our mining services.",
  },
  {
    year: '2024',
    title: 'Lithium Exploration',
    description:
      'Expanded drilling services for lithium exploration in West Oyo Project Area with Newstar Minerals Ltd (Thor Explorations).',
  },
];

export default function OurStoryPage() {
  return (
    <>
      {/* Page Header */}
      <PageHeader
        title="OUR STORY"
        subtitle="From a vision in 2006 to Nigeria's leading industrial services company - discover our journey of growth and excellence."
        breadcrumbs={[
          { label: 'Home', href: '/' },
          { label: 'About', href: '/about' },
          { label: 'Our Story', href: '/about/our-story' },
        ]}
        backgroundImage="https://images.unsplash.com/photo-1504307651254-35680f356dfd?q=80&w=2070&auto=format&fit=crop"
      />

      {/* Story Intro Section - Content Left, Image Right */}
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
                    How It All Began
                  </span>
                  <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-light text-deep-navy leading-[2.5rem]">
                    THE JUGGERNAUT
                    <span className="block text-xl md:text-2xl lg:text-3xl text-steel-blue tracking-[0.15em]">
                      JOURNEY
                    </span>
                  </h2>
                </div>
              </ScrollReveal>

              {/* Story Content */}
              <ScrollReveal animation="fadeUp" delay={0.1}>
                <p className="text-steel-blue leading-relaxed text-lg">
                  <strong className="text-deep-navy">JIL was founded in Nigeria in 2006</strong> with
                  a clear vision: to deliver world-class industrial services while contributing to
                  Africa&apos;s economic development.
                </p>
              </ScrollReveal>

              <ScrollReveal animation="fadeUp" delay={0.15}>
                <p className="text-steel-blue leading-relaxed">
                  In our efforts to grow and expand in Nigeria, we participated in the first ever
                  Nigerian mining mineral exploration tender under the Ministry of Mines and Steel
                  Development. We were successfully awarded a contract for exploration work under
                  the National Integrated Mineral Exploration Project (NIMEP) LOT A3 for base metals
                  - Lead, Zinc & Silver.
                </p>
              </ScrollReveal>

              <ScrollReveal animation="fadeUp" delay={0.2}>
                <p className="text-steel-blue leading-relaxed">
                  Since then, we have been growing leaps and bounds in all our business interests,
                  expanding into Agriculture, Construction, Solar Energy, and Oil & Gas services
                  while maintaining our commitment to excellence and quality.
                </p>
              </ScrollReveal>

              {/* Divider */}
              <div className="h-px bg-steel-blue/20" />

              {/* Key Facts */}
              <ScrollReveal animation="fadeUp" delay={0.25}>
                <div className="grid grid-cols-2 gap-3">
                  {[
                    'First NIMEP contractor',
                    'Own drill rigs & equipment',
                    'In-house laboratory',
                    'International team',
                    'Government contracts',
                    'Private sector clients',
                  ].map((fact, index) => (
                    <div key={index} className="flex items-center gap-2 text-sm text-steel-blue">
                      <GoldDot size="sm" />
                      <span>{fact}</span>
                    </div>
                  ))}
                </div>
              </ScrollReveal>
            </div>

            {/* Right - Sticky Image */}
            <ScrollReveal animation="fadeUp" className="order-1 lg:order-2">
              <div className="sticky top-24">
                <div className="relative aspect-square w-full rounded-xl overflow-hidden shadow-2xl">
                  <Image
                    src="/construction.jpg"
                    alt="Juggernaut Industries mining site"
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

      {/* Timeline Section */}
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
            OUR MILESTONES
          </BracketText>
        </div>

        <div className="container-jil relative z-10">
          {/* Timeline */}
          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-px bg-steel-blue/20 md:-translate-x-1/2" />

            {/* Timeline Items */}
            <div className="space-y-12">
              {milestones.map((milestone, index) => (
                <ScrollReveal key={index} animation="fadeUp" delay={0.1 * index}>
                  <div
                    className={`relative flex flex-col md:flex-row gap-6 md:gap-12 ${
                      index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                    }`}
                  >
                    {/* Year Dot */}
                    <div className="absolute left-4 md:left-1/2 w-3 h-3 bg-industrial-gold rounded-full -translate-x-1/2 mt-2 z-10" />

                    {/* Content */}
                    <div
                      className={`flex-1 pl-10 md:pl-0 ${
                        index % 2 === 0 ? 'md:text-right md:pr-12' : 'md:text-left md:pl-12'
                      }`}
                    >
                      <span className="font-display text-3xl md:text-4xl font-semibold text-industrial-gold">
                        {milestone.year}
                      </span>
                      <h3 className="font-heading text-sm tracking-[0.1em] uppercase text-deep-navy mt-2 mb-3">
                        {milestone.title}
                      </h3>
                      <p className="text-steel-blue text-sm leading-relaxed max-w-md inline-block">
                        {milestone.description}
                      </p>
                    </div>

                    {/* Spacer for opposite side */}
                    <div className="hidden md:block flex-1" />
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Looking Ahead Section - Content Left, Image Right */}
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
                    The Future
                  </span>
                  <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-light text-deep-navy leading-[2.5rem]">
                    LOOKING
                    <span className="block text-xl md:text-2xl lg:text-3xl text-steel-blue tracking-[0.15em]">
                      AHEAD
                    </span>
                  </h2>
                </div>
              </ScrollReveal>

              {/* Content */}
              <ScrollReveal animation="fadeUp" delay={0.1}>
                <p className="text-steel-blue leading-relaxed">
                  As we enter our third decade, Juggernaut Industries remains focused on innovation,
                  sustainability, and contributing to Nigeria&apos;s economic development. We are
                  excited about emerging opportunities in renewable energy, agricultural technology,
                  and mineral resource development.
                </p>
              </ScrollReveal>

              <ScrollReveal animation="fadeUp" delay={0.15}>
                <p className="text-steel-blue leading-relaxed">
                  Our commitment to excellence, our dedicated team, and our strong partnerships
                  position us well for continued growth. We look forward to creating more value for
                  our clients, communities, and Nigeria as a whole.
                </p>
              </ScrollReveal>

              {/* Divider */}
              <div className="h-px bg-steel-blue/20" />

              {/* Future Focus */}
              <ScrollReveal animation="fadeUp" delay={0.2}>
                <div className="grid grid-cols-2 gap-3">
                  {[
                    'Renewable Energy',
                    'Agri-Technology',
                    'Critical Minerals',
                    'Sustainable Mining',
                  ].map((focus, index) => (
                    <div key={index} className="flex items-center gap-2 text-sm text-steel-blue">
                      <GoldDot size="sm" />
                      <span>{focus}</span>
                    </div>
                  ))}
                </div>
              </ScrollReveal>

              {/* CTA */}
              <ScrollReveal animation="fadeUp" delay={0.25}>
                <div className="flex flex-wrap gap-4">
                  <Link
                    href="/about/team"
                    className="inline-flex items-center gap-2 px-6 py-3 bg-industrial-gold text-near-black font-heading text-xs tracking-[0.1em] uppercase rounded-xl btn-animated relative z-1 overflow-hidden after:bg-steel-blue hover:text-off-white transition-colors"
                  >
                    Meet Our Team
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                  <Link
                    href="/contact"
                    className="inline-flex items-center gap-2 px-6 py-3 border border-industrial-gold/50 text-industrial-gold font-heading text-xs tracking-[0.1em] uppercase rounded-xl btn-animated relative z-1 overflow-hidden after:bg-industrial-gold hover:text-near-black transition-colors"
                  >
                    Get In Touch
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
                    src="https://images.unsplash.com/photo-1509391366360-2e959784a276?q=80&w=2070&auto=format&fit=crop"
                    alt="Solar panels representing future growth"
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
