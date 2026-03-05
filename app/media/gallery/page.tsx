'use client';

import Image from 'next/image';
import { PageHeader } from '@/components/ui/page-header';
import { ScrollReveal } from '@/components/animations/scroll-reveal';
import { useState } from 'react';
import { X } from 'lucide-react';

export default function GalleryPage() {
  const [selectedImage, setSelectedImage] = useState<number | null>(null);
  const [selectedCategory, setSelectedCategory] = useState<string>('All');

  const categories = [
    'All',
    'Mining & Exploration',
    'Agriculture',
    'Construction',
    'Solar & Renewable Energy',
    'Events',
    'Company Culture',
  ];

  const galleryImages = [
    {
      id: 1,
      src: '/mining-1.jpeg',
      title: 'Active Mining Site',
      category: 'Mining & Exploration',
    },
    {
      id: 2,
      src: '/mining-2.jpeg',
      title: 'Mineral Exploration',
      category: 'Mining & Exploration',
    },
    {
      id: 3,
      src: '/mining-3.jpeg',
      title: 'Geological Survey',
      category: 'Mining & Exploration',
    },
    {
      id: 4,
      src: '/Agriculture.jpg',
      title: 'Large Scale Farming',
      category: 'Agriculture',
    },
    {
      id: 5,
      src: '/farmers.jpg',
      title: 'Local Farm Support',
      category: 'Agriculture',
    },
    {
      id: 6,
      src: '/oil_palm.jpg',
      title: 'Oil Palm Processing',
      category: 'Agriculture',
    },
    {
      id: 7,
      src: '/construction.jpg',
      title: 'Infrastructure Development',
      category: 'Construction',
    },
    {
      id: 8,
      src: '/drilling.jpg',
      title: 'Borehole Drilling',
      category: 'Construction',
    },
    {
      id: 9,
      src: '/solar_installation.jpg',
      title: 'Industrial Solar Array',
      category: 'Solar & Renewable Energy',
    },
    {
      id: 10,
      src: '/solarfarm.jpg',
      title: 'Renewable Power Plant',
      category: 'Solar & Renewable Energy',
    },
    {
      id: 11,
      src: '/event-1.jpeg',
      title: 'Executive Summit',
      category: 'Events',
    },
    {
      id: 12,
      src: '/event-2.jpeg',
      title: 'Strategic Partnership',
      category: 'Events',
    },
    {
      id: 13,
      src: '/event-3.jpeg',
      title: 'Community Engagement',
      category: 'Events',
    },
    {
      id: 14,
      src: '/event-4.jpeg',
      title: 'Technical Workshop',
      category: 'Events',
    },
    {
      id: 15,
      src: '/team-group.jpg',
      title: 'Our Dedicated Team',
      category: 'Company Culture',
    },
  ];

  const filteredImages = selectedCategory === 'All'
    ? galleryImages
    : galleryImages.filter(img => img.category === selectedCategory);

  return (
    <>
      {/* Page Header */}
      <PageHeader
        title="PHOTO GALLERY"
        subtitle="Explore our projects and operations across Nigeria through these captivating images showcasing our commitment to excellence."
        breadcrumbs={[
          { label: 'Home', href: '/' },
          { label: 'Media', href: '/media/gallery' },
          { label: 'Gallery', href: '/media/gallery' },
        ]}
        backgroundImage="https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?q=80&w=2083&auto=format&fit=crop"
      />

      {/* Gallery Section */}
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
          {/* Category Filter */}
          <div className="mb-12">
            <ScrollReveal animation="fadeUp">
              <div className="flex flex-wrap justify-center gap-3">
                {categories.map((category) => (
                  <button
                    key={category}
                    onClick={() => setSelectedCategory(category)}
                    className={`px-6 py-3 font-heading text-xs tracking-[0.1em] uppercase rounded-xl transition-all duration-300 ${
                      selectedCategory === category
                        ? 'bg-industrial-gold text-near-black shadow-lg'
                        : 'bg-white/40 backdrop-blur-xl border border-white/60 text-steel-blue hover:border-industrial-gold/50'
                    }`}
                  >
                    {category}
                  </button>
                ))}
              </div>
            </ScrollReveal>
          </div>

          {/* Gallery Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredImages.map((image, index) => (
              <ScrollReveal key={image.id} animation="fadeUp" delay={0.1 * (index % 3)}>
                <div
                  className="group relative aspect-[4/3] rounded-xl overflow-hidden cursor-pointer shadow-lg hover:shadow-2xl transition-all duration-300"
                  onClick={() => setSelectedImage(index)}
                >
                  <Image
                    src={image.src}
                    alt={image.title}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-500"
                  />

                  {/* Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-deep-navy/80 via-deep-navy/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="absolute bottom-0 left-0 right-0 p-6">
                      <p className="font-heading text-xs tracking-[0.15em] uppercase text-industrial-gold mb-1">
                        {image.category}
                      </p>
                      <h3 className="font-display text-xl text-off-white">
                        {image.title}
                      </h3>
                    </div>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Lightbox Modal */}
      {selectedImage !== null && (
        <div
          className="fixed inset-0 z-50 bg-deep-navy/95 backdrop-blur-sm flex items-center justify-center p-4"
          onClick={() => setSelectedImage(null)}
        >
          <button
            className="absolute top-4 right-4 w-12 h-12 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center text-off-white transition-colors"
            onClick={() => setSelectedImage(null)}
          >
            <X className="w-6 h-6" />
          </button>

          <div className="relative max-w-6xl w-full aspect-video">
            <Image
              src={filteredImages[selectedImage].src}
              alt={filteredImages[selectedImage].title}
              fill
              className="object-contain"
              onClick={(e) => e.stopPropagation()}
            />

            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-deep-navy/90 to-transparent p-6">
              <p className="font-heading text-xs tracking-[0.15em] uppercase text-industrial-gold mb-1">
                {filteredImages[selectedImage].category}
              </p>
              <h3 className="font-display text-2xl text-off-white">
                {filteredImages[selectedImage].title}
              </h3>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
