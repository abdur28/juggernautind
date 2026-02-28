'use client';

import { PageHeader } from '@/components/ui/page-header';
import { ScrollReveal } from '@/components/animations/scroll-reveal';
import { Play } from 'lucide-react';

export default function VideosPage() {
  const videos = [
    {
      id: 1,
      youtubeId: 'dQw4w9WgXcQ', // Replace with actual YouTube video IDs
      title: 'Mining Operations Overview',
      category: 'Mining & Exploration',
      description: 'Discover our state-of-the-art mining operations and exploration techniques.',
    },
    {
      id: 2,
      youtubeId: 'dQw4w9WgXcQ', // Replace with actual YouTube video IDs
      title: 'Agricultural Innovation',
      category: 'Agriculture',
      description: 'See how we are transforming agriculture with modern farming techniques.',
    },
    {
      id: 3,
      youtubeId: 'dQw4w9WgXcQ', // Replace with actual YouTube video IDs
      title: 'Construction Excellence',
      category: 'Construction',
      description: 'Our commitment to building Nigeria\'s infrastructure with quality and precision.',
    },
    {
      id: 4,
      youtubeId: 'dQw4w9WgXcQ', // Replace with actual YouTube video IDs
      title: 'Solar Energy Solutions',
      category: 'Solar & Renewable Energy',
      description: 'Leading the way in renewable energy and sustainable power solutions.',
    },
    {
      id: 5,
      youtubeId: 'dQw4w9WgXcQ', // Replace with actual YouTube video IDs
      title: 'Company Culture & Values',
      category: 'About Us',
      description: 'Meet our team and learn about the values that drive our success.',
    },
    {
      id: 6,
      youtubeId: 'dQw4w9WgXcQ', // Replace with actual YouTube video IDs
      title: 'Safety & Compliance',
      category: 'Operations',
      description: 'Our dedication to maintaining the highest safety standards across all projects.',
    },
  ];

  return (
    <>
      {/* Page Header */}
      <PageHeader
        title="VIDEO GALLERY"
        subtitle="Watch our video collection showcasing projects, operations, and the impact we're making across Nigeria."
        breadcrumbs={[
          { label: 'Home', href: '/' },
          { label: 'Media', href: '/media/videos' },
          { label: 'Videos', href: '/media/videos' },
        ]}
        backgroundImage="https://images.unsplash.com/photo-1492619375914-88005aa9e8fb?q=80&w=2149&auto=format&fit=crop"
      />

      {/* Videos Section */}
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
          {/* Videos Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {videos.map((video, index) => (
              <ScrollReveal key={video.id} animation="fadeUp" delay={0.1 * (index % 2)}>
                <div className="group rounded-xl overflow-hidden bg-white/40 backdrop-blur-xl border border-white/60 hover:border-industrial-gold/50 transition-all duration-300 shadow-lg hover:shadow-2xl">
                  {/* Video Embed */}
                  <div className="relative aspect-video">
                    <iframe
                      src={`https://www.youtube.com/embed/${video.youtubeId}`}
                      title={video.title}
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                      className="absolute inset-0 w-full h-full"
                    />
                  </div>

                  {/* Video Info */}
                  <div className="p-6">
                    <p className="font-heading text-xs tracking-[0.15em] uppercase text-industrial-gold mb-2">
                      {video.category}
                    </p>
                    <h3 className="font-heading text-lg tracking-[0.05em] text-deep-navy mb-3 group-hover:text-industrial-gold transition-colors">
                      {video.title}
                    </h3>
                    <p className="text-sm text-steel-blue leading-relaxed">
                      {video.description}
                    </p>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Video Section */}
      <section className="relative py-14 overflow-hidden bg-white">
        <div className="container-jil relative z-10">
          <div className="max-w-5xl mx-auto">
            <ScrollReveal animation="fadeUp">
              <div className="mb-8 text-center">
                <span className="inline-flex items-center gap-2 font-heading text-xs tracking-[0.2em] uppercase text-industrial-gold mb-4">
                  <span className="w-8 h-px bg-industrial-gold" />
                  Featured Video
                  <span className="w-8 h-px bg-industrial-gold" />
                </span>
                <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-light text-deep-navy">
                  OUR STORY
                </h2>
              </div>
            </ScrollReveal>

            <ScrollReveal animation="fadeUp" delay={0.1}>
              <div className="rounded-xl overflow-hidden shadow-2xl">
                <div className="relative aspect-video">
                  <iframe
                    src="https://www.youtube.com/embed/dQw4w9WgXcQ"
                    title="Juggernaut Industries - Our Story"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    className="absolute inset-0 w-full h-full"
                  />
                </div>
              </div>
            </ScrollReveal>

            <ScrollReveal animation="fadeUp" delay={0.2}>
              <div className="mt-8 text-center max-w-3xl mx-auto">
                <p className="text-steel-blue leading-relaxed">
                  Watch the story of Juggernaut Industries and learn how we have been building Nigeria&apos;s future since 2006 through excellence in mining, agriculture, construction, and renewable energy.
                </p>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>
    </>
  );
}
