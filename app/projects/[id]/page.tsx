'use client';

import { useParams } from 'next/navigation';
import { notFound } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';
import { PageHeader } from '@/components/ui/page-header';
import { GoldDot } from '@/components/ui/gold-dot';
import { ScrollReveal } from '@/components/animations/scroll-reveal';
import { projects, getProjectById } from '@/config/projects';
import { ArrowRight, ArrowLeft } from 'lucide-react';

export default function ProjectDetailPage() {
  const params = useParams();
  const projectId = params.id as string;
  const project = getProjectById(projectId);

  if (!project) {
    notFound();
  }

  // Get next and previous projects for navigation
  const currentIndex = projects.findIndex((p) => p.id === projectId);
  const prevProject = currentIndex > 0 ? projects[currentIndex - 1] : projects[projects.length - 1];
  const nextProject = currentIndex < projects.length - 1 ? projects[currentIndex + 1] : projects[0];

  return (
    <>
      {/* Page Header */}
      <PageHeader
        title={project.title}
        subtitle={project.client}
        breadcrumbs={[
          { label: 'Home', href: '/' },
          { label: 'Projects', href: '/projects' },
          { label: project.title, href: project.href },
        ]}
        backgroundImage={project.image}
      />

      {/* Project Overview Section */}
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
                    Project Overview
                  </span>
                  <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-light text-deep-navy leading-[2.5rem]">
                    {project.title.toUpperCase().split(' ').slice(0, 2).join(' ')}
                    <span className="block text-xl md:text-2xl lg:text-3xl text-steel-blue tracking-[0.15em]">
                      {project.title.toUpperCase().split(' ').slice(2).join(' ') || 'PROJECT'}
                    </span>
                  </h2>
                </div>
              </ScrollReveal>

              {/* Description */}
              <ScrollReveal animation="fadeUp" delay={0.1}>
                <p className="text-steel-blue leading-relaxed text-lg">
                  {project.fullDescription}
                </p>
              </ScrollReveal>

              {/* Divider */}
              <div className="h-px bg-steel-blue/20" />

              {/* Project Details */}
              <ScrollReveal animation="fadeUp" delay={0.15}>
                <div className="grid grid-cols-2 gap-4">
                  <div className="p-4 rounded-xl bg-off-white/50 border border-steel-blue/5">
                    <p className="font-heading text-xs tracking-[0.1em] uppercase text-industrial-gold mb-1">
                      Client
                    </p>
                    <p className="text-deep-navy font-medium">{project.client}</p>
                  </div>
                  <div className="p-4 rounded-xl bg-off-white/50 border border-steel-blue/5">
                    <p className="font-heading text-xs tracking-[0.1em] uppercase text-industrial-gold mb-1">
                      Category
                    </p>
                    <p className="text-deep-navy font-medium">{project.category}</p>
                  </div>
                  <div className="p-4 rounded-xl bg-off-white/50 border border-steel-blue/5">
                    <p className="font-heading text-xs tracking-[0.1em] uppercase text-industrial-gold mb-1">
                      Location
                    </p>
                    <p className="text-deep-navy font-medium">{project.location}</p>
                  </div>
                  <div className="p-4 rounded-xl bg-off-white/50 border border-steel-blue/5">
                    <p className="font-heading text-xs tracking-[0.1em] uppercase text-industrial-gold mb-1">
                      Year
                    </p>
                    <p className="text-deep-navy font-medium">{project.year}</p>
                  </div>
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

            {/* Right - Client Logo & Image */}
            <ScrollReveal animation="fadeUp" className="order-1 lg:order-2">
              <div className="space-y-6">
                {/* Client Logo */}
                <div className="flex items-center gap-4 p-6 rounded-xl bg-off-white border border-steel-blue/10">
                  <div className="relative w-16 h-16 bg-white rounded-lg p-2 border border-steel-blue/10">
                    <Image
                      src={project.clientLogo}
                      alt={project.client}
                      fill
                      className="object-contain p-1"
                    />
                  </div>
                  <div>
                    <p className="font-heading text-xs tracking-[0.1em] uppercase text-industrial-gold mb-1">
                      Client
                    </p>
                    <p className="font-display text-lg text-deep-navy">{project.client}</p>
                  </div>
                </div>

                {/* Project Image */}
                <div className="relative aspect-video w-full rounded-xl overflow-hidden shadow-2xl">
                  <Image
                    src={project.image}
                    alt={project.title}
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

      {/* Services Section */}
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
                What We Delivered
              </span>
              <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-light text-deep-navy">
                PROJECT SERVICES
              </h2>
            </div>
          </ScrollReveal>

          {/* Services Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {project.services.map((service, index) => (
              <ScrollReveal key={index} animation="fadeUp" delay={0.1 * index}>
                <div className="p-6 rounded-xl bg-white border border-steel-blue/10 hover:border-industrial-gold/20 hover:shadow-lg transition-all">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-1 h-8 bg-industrial-gold rounded-full" />
                    <h3 className="font-heading text-sm tracking-[0.1em] uppercase text-deep-navy">
                      {service}
                    </h3>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Project Gallery Section */}
      {project.images && project.images.length > 0 && (
        <section className="relative py-14 overflow-hidden bg-white">
          <div className="container-jil relative z-10">
            {/* Section Header */}
            <ScrollReveal animation="fadeUp">
              <div className="mb-12 md:mb-16 text-center">
                <span className="inline-flex items-center gap-2 font-heading text-xs tracking-[0.2em] uppercase text-industrial-gold mb-4">
                  <span className="w-8 h-px bg-industrial-gold" />
                  Site Documentation
                </span>
                <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-light text-deep-navy">
                  PROJECT GALLERY
                </h2>
              </div>
            </ScrollReveal>

            {/* Gallery Grid */}
            <div className="columns-1 md:columns-2 lg:columns-3 gap-4 space-y-4">
              {project.images.map((image, index) => (
                <ScrollReveal key={index} animation="fadeUp" delay={0.05 * index}>
                  <div className="relative group rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-500">
                    <div className="relative aspect-[4/3] md:aspect-auto">
                      <Image
                        src={image}
                        alt={`${project.title} gallery image ${index + 1}`}
                        width={800}
                        height={600}
                        className="object-cover w-full h-full group-hover:scale-110 transition-transform duration-700"
                      />
                    </div>
                    <div className="absolute inset-0 bg-gradient-to-t from-deep-navy/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Project Navigation */}
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
            {/* Previous Project */}
            <ScrollReveal animation="fadeUp">
              <Link
                href={prevProject.href}
                className="group block p-6 rounded-xl bg-steel-blue/10 border border-white/10 hover:bg-steel-blue/20 hover:border-white/20 transition-all"
              >
                <div className="flex items-center gap-3 mb-3">
                  <ArrowLeft className="w-4 h-4 text-industrial-gold group-hover:-translate-x-1 transition-transform" />
                  <span className="font-heading text-xs tracking-[0.1em] uppercase text-light-gray">
                    Previous Project
                  </span>
                </div>
                <h3 className="font-display text-xl text-off-white group-hover:text-industrial-gold transition-colors">
                  {prevProject.title}
                </h3>
                <p className="text-sm text-light-gray mt-1">{prevProject.client}</p>
              </Link>
            </ScrollReveal>

            {/* Next Project */}
            <ScrollReveal animation="fadeUp" delay={0.1}>
              <Link
                href={nextProject.href}
                className="group block p-6 rounded-xl bg-steel-blue/10 border border-white/10 hover:bg-steel-blue/20 hover:border-white/20 transition-all text-right"
              >
                <div className="flex items-center justify-end gap-3 mb-3">
                  <span className="font-heading text-xs tracking-[0.1em] uppercase text-light-gray">
                    Next Project
                  </span>
                  <ArrowRight className="w-4 h-4 text-industrial-gold group-hover:translate-x-1 transition-transform" />
                </div>
                <h3 className="font-display text-xl text-off-white group-hover:text-industrial-gold transition-colors">
                  {nextProject.title}
                </h3>
                <p className="text-sm text-light-gray mt-1">{nextProject.client}</p>
              </Link>
            </ScrollReveal>
          </div>

          {/* Back to All Projects */}
          <ScrollReveal animation="fadeUp" delay={0.2}>
            <div className="mt-8 text-center">
              <Link
                href="/projects"
                className="inline-flex items-center gap-2 px-6 py-3 border border-industrial-gold/50 text-industrial-gold font-heading text-xs tracking-[0.1em] uppercase rounded-xl btn-animated relative z-1 overflow-hidden after:bg-industrial-gold hover:text-near-black transition-colors"
              >
                View All Projects
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </>
  );
}
