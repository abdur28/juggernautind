'use client';

import { PageHeader } from '@/components/ui/page-header';
import { ScrollReveal } from '@/components/animations/scroll-reveal';
import { Play } from 'lucide-react';

export default function VideosPage() {
  const videos = [
    {
      id: 1,
      src: '/mining-video.mp4',
      title: 'Industrial Mining Overview',
      category: 'Mining & Exploration',
      description: 'An in-depth look at our comprehensive mining operations and heavy machinery.',
      type: 'local',
    },
    {
      id: 2,
      src: '/mining-video-1.mp4',
      title: 'Exploration Techniques',
      category: 'Mining & Exploration',
      description: 'Showcasing our advanced mineral exploration and site preparation workflows.',
      type: 'local',
    },
    {
      id: 3,
      src: '/mining-video-2.mp4',
      title: 'Site Operations',
      category: 'Mining & Exploration',
      description: 'Real-time footage from our active project sites across the region.',
      type: 'local',
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
          { label: 'Videos', href: '/media/videos' },
        ]}
        backgroundImage="/conference.jpg"
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
                  <div className="relative aspect-video bg-black flex items-center justify-center">
                    <video
                      src={video.src}
                      className="w-full h-full"
                      controls
                      poster="/mining-1.jpeg" // Valid local fallback
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
              <div className="rounded-xl overflow-hidden shadow-2xl bg-black">
                <div className="relative aspect-video">
                  <video
                    src="/mining-video.mp4"
                    className="w-full h-full"
                    controls
                    autoPlay
                    muted
                    loop
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
