'use client';

import Image from 'next/image';
import Link from 'next/link';
import { PageHeader } from '@/components/ui/page-header';
import { GoldDot } from '@/components/ui/gold-dot';
import { ScrollReveal } from '@/components/animations/scroll-reveal';
import { services } from '@/config/services';
import { ArrowRight } from 'lucide-react';

export default function ServicesPage() {
  // Mining is our featured/main service
  const featuredService = services[0];
  const otherServices = services.slice(1);

  return (
    <>
      {/* Page Header */}
      <PageHeader
        title="OUR SERVICES"
        subtitle="Comprehensive solutions across mining, agriculture, construction, and renewable energy sectors."
        breadcrumbs={[
          { label: 'Home', href: '/' },
          { label: 'Services', href: '/services' },
        ]}
        backgroundImage="https://images.unsplash.com/photo-1578328819058-b69f3a3b0f6b?q=80&w=2074&auto=format&fit=crop"
      />

      {/* Intro Section - Centered */}
      <section className="relative py-14 overflow-hidden bg-white">
        <div className="container-jil relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <ScrollReveal animation="fadeUp">
              <span className="inline-flex items-center justify-center gap-2 font-heading text-xs tracking-[0.2em] uppercase text-industrial-gold mb-4">
                <span className="w-8 h-px bg-industrial-gold" />
                What We Do
                <span className="w-8 h-px bg-industrial-gold" />
              </span>
            </ScrollReveal>

            <ScrollReveal animation="fadeUp" delay={0.1}>
              <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-light text-deep-navy leading-[2.5rem] mb-6">
                INDUSTRIAL EXCELLENCE
                <span className="block text-xl md:text-2xl lg:text-3xl text-steel-blue tracking-[0.15em]">
                  ACROSS SECTORS
                </span>
              </h2>
            </ScrollReveal>

            <ScrollReveal animation="fadeUp" delay={0.15}>
              <p className="text-steel-blue leading-relaxed text-lg">
                JIL delivers a comprehensive range of services across Nigeria's key growth sectors, including mineral exploration, construction, renewable energy, agribusiness, and general contracting and supplies. Through a disciplined, client-focused approach, the company provides integrated solutions tailored to the specific needs of both government and private sector clients.
              </p>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Featured Service - Mining (Full Width Hero) */}
      <section className="relative py-14 overflow-hidden bg-deep-navy">
        {/* Background Image */}
        <div className="absolute inset-0">
          <Image
            src={featuredService.image}
            alt={featuredService.title}
            fill
            className="object-cover opacity-30"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-deep-navy via-deep-navy/95 to-deep-navy/80" />
        </div>

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
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            {/* Left - Content */}
            <div className="lg:col-span-7 space-y-6">
              <ScrollReveal animation="fadeUp">
                <span className="inline-flex items-center gap-2 font-heading text-xs tracking-[0.2em] uppercase text-industrial-gold">
                  <span className="w-8 h-px bg-industrial-gold" />
                  Our Core Service
                </span>
              </ScrollReveal>

              <ScrollReveal animation="fadeUp" delay={0.1}>
                <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-light text-off-white leading-[2.5rem]">
                  MINING & EXPLORATION
                  <span className="block text-xl md:text-2xl lg:text-3xl text-light-gray tracking-[0.15em]">
                    SERVICES
                  </span>
                </h2>
              </ScrollReveal>

              <ScrollReveal animation="fadeUp" delay={0.15}>
                <div className="space-y-3 max-w-xl">
                  {featuredService.fullDescription.map((para, i) => (
                    <p key={i} className="text-light-gray leading-relaxed text-lg">{para}</p>
                  ))}
                </div>
              </ScrollReveal>

              <ScrollReveal animation="fadeUp" delay={0.2}>
                <div className="flex flex-wrap gap-2">
                  {featuredService.features.map((feature, idx) => (
                    <span
                      key={idx}
                      className="px-3 py-1.5 rounded-full text-xs font-heading tracking-wider uppercase bg-steel-blue/20 text-light-gray border border-white/10"
                    >
                      {feature}
                    </span>
                  ))}
                </div>
              </ScrollReveal>

              <ScrollReveal animation="fadeUp" delay={0.25}>
                <Link
                  href={featuredService.href}
                  className="inline-flex items-center gap-2 px-6 py-3 bg-industrial-gold text-near-black font-heading text-xs tracking-[0.1em] uppercase rounded-xl btn-animated relative z-1 overflow-hidden after:bg-off-white hover:text-deep-navy transition-colors"
                >
                  Explore Mining Services
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </ScrollReveal>
            </div>

            {/* Right - Highlights Grid */}
            <div className="lg:col-span-5">
              <ScrollReveal animation="fadeUp" delay={0.2}>
                <div className="grid grid-cols-2 gap-4">
                  {featuredService.highlights?.map((highlight, index) => (
                    <div
                      key={index}
                      className="p-5 rounded-xl bg-white/5 backdrop-blur-sm border border-white/10 hover:bg-white/10 transition-colors"
                    >
                      <h4 className="font-heading text-xs tracking-[0.1em] uppercase text-industrial-gold mb-2">
                        {highlight.title}
                      </h4>
                      <p className="text-xs text-light-gray leading-relaxed">
                        {highlight.description}
                      </p>
                    </div>
                  ))}
                </div>
              </ScrollReveal>
            </div>
          </div>
        </div>
      </section>

      {/* Other Services Grid - 2x2 Compact Cards */}
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
            More Services
          </span>
          <h2 className="font-display text-3xl md:text-4xl font-light text-deep-navy">OTHER SERVICES</h2>
        </div>

        <div className="container-jil relative z-10">
          {/* Services Grid - 2x2 on desktop */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {otherServices.map((service, index) => (
              <ScrollReveal key={service.id} animation="fadeUp" delay={0.1 * index}>
                <Link href={service.href} className="group block h-full">
                  <div className="relative h-full bg-white rounded-xl overflow-hidden border border-steel-blue/10 hover:shadow-xl hover:border-industrial-gold/20 transition-all duration-300">
                    {/* Image Header */}
                    <div className="relative h-52 overflow-hidden">
                      <Image
                        src={service.image}
                        alt={service.title}
                        fill
                        className="object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-deep-navy/80 via-deep-navy/20 to-transparent" />

                      {/* Service Number */}
                      <div className="absolute top-4 right-4">
                        <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 text-off-white font-display text-lg font-semibold group-hover:bg-industrial-gold group-hover:text-near-black group-hover:border-industrial-gold transition-all">
                          {String(index + 2).padStart(2, '0')}
                        </span>
                      </div>

                      {/* Title Overlay */}
                      <div className="absolute bottom-4 left-4 right-4">
                        <h3 className="font-display text-xl md:text-2xl font-semibold text-off-white group-hover:text-industrial-gold transition-colors">
                          {service.title}
                        </h3>
                      </div>
                    </div>

                    {/* Content */}
                    <div className="p-6">
                      <p className="text-steel-blue text-sm leading-relaxed mb-4">
                        {service.description}
                      </p>

                      {/* Features */}
                      <div className="space-y-2 mb-4">
                        {service.features.slice(0, 3).map((feature, idx) => (
                          <div key={idx} className="flex items-center gap-2 text-sm text-steel-blue">
                            <GoldDot size="sm" />
                            <span>{feature}</span>
                          </div>
                        ))}
                      </div>

                      {/* CTA */}
                      <div className="flex items-center gap-2 text-industrial-gold font-heading text-xs tracking-[0.1em] uppercase group-hover:gap-3 transition-all">
                        Learn More
                        <ArrowRight className="w-4 h-4" />
                      </div>
                    </div>
                  </div>
                </Link>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us Section - Stats + Content Side by Side */}
      <section className="relative py-14 overflow-hidden bg-white">
        <div className="container-jil relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            {/* Left - Stats Grid */}
            <ScrollReveal animation="fadeUp">
              <div className="grid grid-cols-2 gap-4">
                {[
                  { value: '4', label: 'Service Areas', description: 'Diverse sectors' },
                  { value: '20+', label: 'Years Experience', description: 'Since 2006' },
                  { value: '100%', label: 'Client Satisfaction', description: 'Quality assured' },
                  { value: '24/7', label: 'Support', description: 'Always available' },
                ].map((stat, index) => (
                  <div
                    key={index}
                    className="p-6 rounded-xl bg-off-white border border-steel-blue/10 text-center hover:border-industrial-gold/20 transition-colors"
                  >
                    <p className="font-display text-3xl md:text-4xl font-semibold text-industrial-gold mb-1">
                      {stat.value}
                    </p>
                    <p className="font-heading text-xs tracking-[0.1em] uppercase text-deep-navy mb-1">
                      {stat.label}
                    </p>
                    <p className="text-xs text-steel-blue">{stat.description}</p>
                  </div>
                ))}
              </div>
            </ScrollReveal>

            {/* Right - Content */}
            <div className="space-y-6">
              <ScrollReveal animation="fadeUp">
                <div className="space-y-4">
                  <span className="inline-flex items-center gap-2 font-heading text-xs tracking-[0.2em] uppercase text-industrial-gold">
                    <span className="w-8 h-px bg-industrial-gold" />
                    Why Choose Us
                  </span>
                  <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-light text-deep-navy leading-[2.5rem]">
                    TRUSTED
                    <span className="block text-xl md:text-2xl lg:text-3xl text-steel-blue tracking-[0.15em]">
                      EXCELLENCE
                    </span>
                  </h2>
                </div>
              </ScrollReveal>

              <ScrollReveal animation="fadeUp" delay={0.1}>
                <p className="text-steel-blue leading-relaxed">
                  We have assembled a world class team with experience in the African terrain. We own our own drill rigs, geophysics equipment and in-house lab, ensuring complete control over quality and timelines.
                </p>
              </ScrollReveal>

              <div className="h-px bg-steel-blue/20" />

              <ScrollReveal animation="fadeUp" delay={0.15}>
                <div className="space-y-3">
                  {[
                    'Own equipment - drill rigs, geophysics, in-house lab',
                    'COREN-registered engineers',
                    'International team with local expertise',
                    'Projects delivered on time and within budget',
                  ].map((point, index) => (
                    <div key={index} className="flex items-center gap-3 text-sm text-steel-blue">
                      <GoldDot size="sm" />
                      <span>{point}</span>
                    </div>
                  ))}
                </div>
              </ScrollReveal>

              <ScrollReveal animation="fadeUp" delay={0.2}>
                <div className="flex flex-wrap gap-4">
                  <Link
                    href="/contact"
                    className="inline-flex items-center gap-2 px-6 py-3 bg-industrial-gold text-near-black font-heading text-xs tracking-[0.1em] uppercase rounded-xl btn-animated relative z-1 overflow-hidden after:bg-steel-blue hover:text-off-white transition-colors"
                  >
                    Get in Touch
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                  <Link
                    href="/projects"
                    className="inline-flex items-center gap-2 px-6 py-3 border border-industrial-gold/50 text-industrial-gold font-heading text-xs tracking-[0.1em] uppercase rounded-xl btn-animated relative z-1 overflow-hidden after:bg-industrial-gold hover:text-near-black transition-colors"
                  >
                    View Projects
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </ScrollReveal>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
