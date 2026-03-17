'use client';

import Image from 'next/image';
import Link from 'next/link';
import { PageHeader } from '@/components/ui/page-header';
import { GoldDot } from '@/components/ui/gold-dot';
import { ScrollReveal } from '@/components/animations/scroll-reveal';
import { ArrowRight } from 'lucide-react';

// Team members data from the website
const leadership = [
  {
    name: 'Alhaji Bello Mohammed',
    role: 'Managing Director',
    image: '/team-1.jpg',
    bio: 'Leading Juggernaut Industries with over two decades of experience in mining, construction, and industrial services across Nigeria.',
  },
  {
    name: 'Usman Mohammed',
    role: 'Executive Director',
    image: '/team-2.jpg',
    bio: 'Overseeing strategic operations and business development, driving growth across all company divisions.',
  },
  {
    name: 'Thompson Waheed',
    role: 'General Manager',
    image: '/team-3.jpg',
    bio: 'Managing day-to-day operations with expertise in project management and client relations.',
  },
];

export default function TeamPage() {
  return (
    <>
      {/* Page Header */}
      <PageHeader
        title="OUR TEAM"
        subtitle="Meet the dedicated professionals driving excellence across all our operations."
        breadcrumbs={[
          { label: 'Home', href: '/' },
          { label: 'About', href: '/about' },
          { label: 'Team', href: '/about/team' },
        ]}
        backgroundImage="/team-group.jpg"
      />

      {/* Team Intro Section - Content Left, Image Right */}
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
                    Our People
                  </span>
                  <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-light text-deep-navy leading-[2.5rem]">
                    THE DRIVING FORCE
                    <span className="block text-xl md:text-2xl lg:text-3xl text-steel-blue tracking-[0.15em]">
                      BEHIND OUR SUCCESS
                    </span>
                  </h2>
                </div>
              </ScrollReveal>

              {/* Description */}
              <ScrollReveal animation="fadeUp" delay={0.1}>
                <p className="text-steel-blue leading-relaxed text-lg">
                  Juggernaut Industries Limited is driven by a world-class team of dedicated professionals with deep experience across the African continent. Our people bring together diverse cultural perspectives and specialised expertise, equipping the company to navigate complex terrains and deliver consistently across challenging environments.
                </p>
              </ScrollReveal>

              <ScrollReveal animation="fadeUp" delay={0.15}>
                <p className="text-steel-blue leading-relaxed">
                  We invest in highly skilled and qualified personnel because we believe our people are our greatest asset — and it is this commitment to talent that underpins every project we undertake and every client relationship we build.
                </p>
              </ScrollReveal>

              {/* Divider */}
              <div className="h-px bg-steel-blue/20" />
            </div>

            {/* Right - Sticky Image */}
            <ScrollReveal animation="fadeUp" className="order-1 lg:order-2">
              <div className="sticky top-24">
                <div className="relative aspect-square w-full rounded-xl overflow-hidden shadow-2xl">
                  <Image
                    src="/team-group.jpg"
                    alt="Team collaboration at Juggernaut Industries"
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

      {/* Leadership Section */}
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

        <div className="container-jil mb-12 md:mb-16">
          <span className="inline-flex items-center gap-2 font-heading text-xs tracking-[0.2em] uppercase text-industrial-gold mb-3">
            <span className="w-8 h-px bg-industrial-gold" />
            Our People
          </span>
          <h2 className="font-display text-3xl md:text-4xl font-light text-deep-navy">EXECUTIVE TEAM</h2>
        </div>

        <div className="container-jil relative z-10">
          {/* Team Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {leadership.map((member, index) => (
              <ScrollReveal key={index} animation="fadeUp" delay={0.1 * index}>
                <div className="group h-full bg-white rounded-xl overflow-hidden border border-steel-blue/10 hover:shadow-xl transition-all duration-300">
                  {/* Image */}
                  <div className="relative aspect-[4/5] overflow-hidden">
                    <Image
                      src={member.image}
                      alt={member.name}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-deep-navy/80 via-deep-navy/20 to-transparent" />

                    {/* Overlay Content */}
                    <div className="absolute bottom-0 left-0 right-0 p-6">
                      <h3 className="font-display text-xl font-semibold text-off-white mb-1">
                        {member.name}
                      </h3>
                      <p className="font-heading text-xs tracking-[0.15em] uppercase text-industrial-gold">
                        {member.role}
                      </p>
                    </div>
                  </div>

                  {/* Bio */}
                  <div className="p-6">
                    <p className="text-steel-blue text-sm leading-relaxed">{member.bio}</p>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Join Our Team Section - Content Left, Image Right */}
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
                    Careers
                  </span>
                  <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-light text-deep-navy leading-[2.5rem]">
                    JOIN OUR
                    <span className="block text-xl md:text-2xl lg:text-3xl text-steel-blue tracking-[0.15em]">
                      TEAM
                    </span>
                  </h2>
                </div>
              </ScrollReveal>

              {/* Description */}
              <ScrollReveal animation="fadeUp" delay={0.1}>
                <p className="text-steel-blue leading-relaxed">
                  We&apos;re always looking for talented individuals who share our passion for
                  excellence and commitment to building Africa&apos;s industrial future. Join a team
                  that values innovation, integrity, and growth.
                </p>
              </ScrollReveal>

              {/* Divider */}
              <div className="h-px bg-steel-blue/20" />

              {/* Benefits */}
              <ScrollReveal animation="fadeUp" delay={0.15}>
                <div className="space-y-6">
                  {[
                    {
                      title: 'Competitive Compensation',
                      description: 'Industry-leading packages with performance bonuses and benefits.',
                    },
                    {
                      title: 'Career Development',
                      description: 'Structured training programs and mentorship opportunities.',
                    },
                    {
                      title: 'Dynamic Environment',
                      description: 'Work on diverse projects across multiple industry sectors.',
                    },
                    {
                      title: 'Growth Opportunities',
                      description: 'Clear career paths with opportunities for advancement.',
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
              <ScrollReveal animation="fadeUp" delay={0.2}>
                <div className="flex flex-wrap gap-4">
                  <Link
                    href="/careers"
                    className="inline-flex items-center gap-2 px-6 py-3 bg-industrial-gold text-near-black font-heading text-xs tracking-[0.1em] uppercase rounded-xl btn-animated relative z-1 overflow-hidden after:bg-steel-blue hover:text-off-white transition-colors"
                  >
                    View Open Positions
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
                    src="/story.jpg"
                    alt="Team meeting at Juggernaut Industries"
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
