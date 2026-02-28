'use client';

import { useParams } from 'next/navigation';
import { notFound } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';
import { PageHeader } from '@/components/ui/page-header';
import { GoldDot } from '@/components/ui/gold-dot';
import { BracketText } from '@/components/ui/bracket-text';
import { ScrollReveal } from '@/components/animations/scroll-reveal';
import {
  services,
  getServiceBySlug,
  miningProcessSteps,
  agricultureCrops,
  explorationServices,
} from '@/config/services';
import { ArrowRight, ArrowLeft } from 'lucide-react';

export default function ServiceDetailPage() {
  const params = useParams();
  const slug = params.slug as string;
  const service = getServiceBySlug(slug);

  if (!service) {
    notFound();
  }

  // Get next and previous services for navigation
  const currentIndex = services.findIndex((s) => s.id === service.id);
  const prevService = currentIndex > 0 ? services[currentIndex - 1] : services[services.length - 1];
  const nextService = currentIndex < services.length - 1 ? services[currentIndex + 1] : services[0];

  const isMining = service.id === 'mining';
  const isAgriculture = service.id === 'agriculture';

  return (
    <>
      {/* Page Header */}
      <PageHeader
        className='h-[70vh] md:h-[60vh] lg:h-[50vh]'
        title={service.title.toUpperCase()}
        subtitle={service.description}
        breadcrumbs={[
          { label: 'Home', href: '/' },
          { label: 'Services', href: '/services' },
          { label: service.shortTitle, href: service.href },
        ]}
        backgroundImage={service.image}
      />

      {/* Service Overview Section */}
      <section className="relative py-14 overflow-hidden bg-white">
        <div className="container-jil relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-10 items-stretch">
            {/* Left - Content */}
            <div className="order-2 lg:order-1">
              <div className="sticky top-24 space-y-8">
                {/* Header */}
                <ScrollReveal animation="fadeUp">
                  <div className="space-y-4">
                    <span className="inline-flex items-center gap-2 font-heading text-xs tracking-[0.2em] uppercase text-industrial-gold">
                      <span className="w-8 h-px bg-industrial-gold" />
                      Service Overview
                    </span>
                    <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-light text-deep-navy leading-[2.5rem]">
                      {service.shortTitle.toUpperCase()}
                      <span className="block text-xl md:text-2xl lg:text-3xl text-steel-blue tracking-[0.15em]">
                        SERVICES
                      </span>
                    </h2>
                  </div>
                </ScrollReveal>

                {/* Description */}
                <ScrollReveal animation="fadeUp" delay={0.1}>
                  <p className="text-steel-blue leading-relaxed text-lg">
                    {service.fullDescription}
                  </p>
                </ScrollReveal>

                {/* Divider */}
                <div className="h-px bg-steel-blue/20" />

                {/* Features Grid */}
                <ScrollReveal animation="fadeUp" delay={0.15}>
                  <div className="grid grid-cols-2 gap-3">
                    {service.features.map((feature, index) => (
                      <div
                        key={index}
                        className="flex items-center gap-3 text-sm text-steel-blue"
                      >
                        <GoldDot size="sm" />
                        <span>{feature}</span>
                      </div>
                    ))}
                  </div>
                </ScrollReveal>

                {/* CTA */}
                <ScrollReveal animation="fadeUp" delay={0.2}>
                  <Link
                    href="/contact"
                    className="inline-flex items-center gap-2 px-6 py-3 bg-industrial-gold text-near-black font-heading text-xs tracking-[0.1em] uppercase rounded-xl btn-animated relative z-1 overflow-hidden after:bg-steel-blue hover:text-off-white transition-colors"
                  >
                    Discuss Your Project
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </ScrollReveal>
              </div>
            </div>

            {/* Right - Image */}
            <ScrollReveal animation="fadeUp" className="order-1 lg:order-2">
              <div className="space-y-6">
                {/* Service Image */}
                <div className="relative aspect-video w-full rounded-xl overflow-hidden shadow-2xl">
                  <Image
                    src={service.image}
                    alt={service.title}
                    fill
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-deep-navy/40 via-transparent to-transparent" />
                </div>

                {/* Highlights */}
                {service.highlights && (
                  <div className="grid grid-cols-2 gap-4">
                    {service.highlights.map((highlight, index) => (
                      <div
                        key={index}
                        className="p-4 rounded-xl bg-off-white border border-steel-blue/10"
                      >
                        <h4 className="font-heading text-xs tracking-[0.1em] uppercase text-industrial-gold mb-1">
                          {highlight.title}
                        </h4>
                        <p className="text-xs text-steel-blue leading-relaxed">
                          {highlight.description}
                        </p>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Mining Process Section */}
      {isMining && (
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
              HOW WE DO IT
            </BracketText>
          </div>

          <div className="container-jil relative z-10">
            {/* Process Steps */}
            <div className="space-y-8">
              {miningProcessSteps.map((step, index) => (
                <ScrollReveal key={index} animation="fadeUp" delay={0.1 * index}>
                  <div className="group bg-white rounded-xl overflow-hidden border border-steel-blue/10 hover:shadow-lg transition-all">
                    <div className="p-6 lg:p-8">
                      <div className="flex items-start gap-6">
                        {/* Step Number */}
                        <div className="flex-shrink-0">
                          <span className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-industrial-gold text-near-black font-display text-xl font-semibold">
                            {step.step}
                          </span>
                        </div>

                        {/* Content */}
                        <div className="flex-1">
                          <h3 className="font-display text-xl md:text-2xl font-semibold text-deep-navy mb-3">
                            {step.title}
                          </h3>
                          <p className="text-steel-blue leading-relaxed mb-4">
                            {step.description}
                          </p>

                          {/* Details Grid */}
                          <div className="grid grid-cols-2 md:grid-cols-3 gap-2">
                            {step.details.map((detail, idx) => (
                              <div
                                key={idx}
                                className="flex items-center gap-2 text-sm text-steel-blue"
                              >
                                <GoldDot size="sm" />
                                <span>{detail}</span>
                              </div>
                            ))}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Mining Exploration Services */}
      {isMining && (
        <section className="relative py-14 overflow-hidden bg-white">
          <div className="container-jil relative z-10">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-10 items-stretch">
              {/* Left - Sticky Image */}
              <ScrollReveal animation="fadeUp" className="order-2 lg:order-1">
                <div className="sticky top-24">
                  <div className="relative aspect-square w-full rounded-xl overflow-hidden shadow-2xl">
                    <Image
                      src="https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?q=80&w=2070&auto=format&fit=crop"
                      alt="Mining exploration services"
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
                      What We Do
                    </span>
                    <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-light text-deep-navy leading-[2.5rem]">
                      EXPLORATION
                      <span className="block text-xl md:text-2xl lg:text-3xl text-steel-blue tracking-[0.15em]">
                        SERVICES
                      </span>
                    </h2>
                  </div>
                </ScrollReveal>

                {/* Description */}
                <ScrollReveal animation="fadeUp" delay={0.1}>
                  <p className="text-steel-blue leading-relaxed">
                    Our consulting services range from the evaluation of mineral properties, quality control implementation, resource estimations, database implementation and economic assessment and review of mineral projects.
                  </p>
                </ScrollReveal>

                {/* Divider */}
                <div className="h-px bg-steel-blue/20" />

                {/* Services Grid */}
                <ScrollReveal animation="fadeUp" delay={0.2}>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {explorationServices.slice(0, 12).map((item, index) => (
                      <div
                        key={index}
                        className="flex items-center gap-3 text-sm text-steel-blue"
                      >
                        <GoldDot size="sm" />
                        <span>{item}</span>
                      </div>
                    ))}
                  </div>
                </ScrollReveal>

                {/* More Services */}
                {explorationServices.length > 12 && (
                  <ScrollReveal animation="fadeUp" delay={0.3}>
                    <div className="p-4 rounded-xl bg-off-white border border-steel-blue/10">
                      <p className="text-sm text-steel-blue">
                        <span className="text-industrial-gold font-semibold">+{explorationServices.length - 12} more services</span> including Training and Capacity Building, Spectral Geology, and JORC Format Report Writing.
                      </p>
                    </div>
                  </ScrollReveal>
                )}
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Agriculture Crops Section */}
      {isAgriculture && (
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
              OUR CROPS
            </BracketText>
          </div>

          <div className="container-jil relative z-10">
            {/* Crops Grid */}
            <div className="space-y-8">
              {agricultureCrops.map((crop, index) => (
                <ScrollReveal key={index} animation="fadeUp" delay={0.1 * index}>
                  <div className="group bg-white rounded-xl overflow-hidden border border-steel-blue/10 hover:shadow-xl transition-all duration-300">
                    <div className="grid grid-cols-1 lg:grid-cols-2">
                      {/* Image */}
                      <div className={`relative aspect-[4/3]  overflow-hidden ${index % 2 === 1 ? 'lg:order-2' : ''}`}>
                        <Image
                          src={crop.image}
                          alt={crop.name}
                          fill
                          className="object-cover group-hover:scale-105 transition-transform duration-500"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-deep-navy/60 via-transparent to-transparent" />

                        {/* Crop Name Badge */}
                        <div className="absolute bottom-4 left-4">
                          <span className="inline-flex items-center px-4 py-2 rounded-full bg-industrial-gold text-near-black font-heading text-xs tracking-[0.1em] uppercase">
                            {crop.name}
                          </span>
                        </div>
                      </div>

                      {/* Content */}
                      <div className={`p-6 lg:p-8 flex flex-col justify-center ${index % 2 === 1 ? 'lg:order-1' : ''}`}>
                        <h3 className="font-display text-xl md:text-2xl font-semibold text-deep-navy mb-4">
                          {crop.name}
                        </h3>
                        <p className="text-steel-blue leading-relaxed">
                          {crop.description}
                        </p>
                      </div>
                    </div>
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* General Features Section (for other services) */}
      {!isMining && !isAgriculture && service.highlights && (
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
            {/* Section Header */}
            <ScrollReveal animation="fadeUp">
              <div className="mb-12 md:mb-16">
                <span className="inline-flex items-center gap-2 font-heading text-xs tracking-[0.2em] uppercase text-industrial-gold mb-4">
                  <span className="w-8 h-px bg-industrial-gold" />
                  Key Highlights
                </span>
                <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-light text-deep-navy">
                  WHY CHOOSE US
                </h2>
              </div>
            </ScrollReveal>

            {/* Highlights Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {service.highlights.map((highlight, index) => (
                <ScrollReveal key={index} animation="fadeUp" delay={0.1 * index}>
                  <div className="p-6 rounded-xl bg-white border border-steel-blue/10 hover:border-industrial-gold/20 hover:shadow-lg transition-all">
                    <div className="flex items-start gap-4">
                      <div className="w-1 h-12 bg-industrial-gold rounded-full flex-shrink-0" />
                      <div>
                        <h3 className="font-heading text-sm tracking-[0.1em] uppercase text-deep-navy mb-2">
                          {highlight.title}
                        </h3>
                        <p className="text-steel-blue text-sm leading-relaxed">
                          {highlight.description}
                        </p>
                      </div>
                    </div>
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Service Navigation */}
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
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Previous Service */}
            <ScrollReveal animation="fadeUp">
              <Link
                href={prevService.href}
                className="group block p-6 rounded-xl bg-steel-blue/10 border border-white/10 hover:bg-steel-blue/20 hover:border-white/20 transition-all"
              >
                <div className="flex items-center gap-3 mb-3">
                  <ArrowLeft className="w-4 h-4 text-industrial-gold group-hover:-translate-x-1 transition-transform" />
                  <span className="font-heading text-xs tracking-[0.1em] uppercase text-light-gray">
                    Previous Service
                  </span>
                </div>
                <h3 className="font-display text-xl text-off-white group-hover:text-industrial-gold transition-colors">
                  {prevService.title}
                </h3>
              </Link>
            </ScrollReveal>

            {/* Next Service */}
            <ScrollReveal animation="fadeUp" delay={0.1}>
              <Link
                href={nextService.href}
                className="group block p-6 rounded-xl bg-steel-blue/10 border border-white/10 hover:bg-steel-blue/20 hover:border-white/20 transition-all text-right"
              >
                <div className="flex items-center justify-end gap-3 mb-3">
                  <span className="font-heading text-xs tracking-[0.1em] uppercase text-light-gray">
                    Next Service
                  </span>
                  <ArrowRight className="w-4 h-4 text-industrial-gold group-hover:translate-x-1 transition-transform" />
                </div>
                <h3 className="font-display text-xl text-off-white group-hover:text-industrial-gold transition-colors">
                  {nextService.title}
                </h3>
              </Link>
            </ScrollReveal>
          </div>

          {/* Back to All Services */}
          <ScrollReveal animation="fadeUp" delay={0.2}>
            <div className="mt-8 text-center">
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
      </section>
    </>
  );
}
