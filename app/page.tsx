import { HeroFlow } from '@/components/sections/hero-flow';
import { IntroBlend } from '@/components/sections/intro-blend';
import { ServicesAsymmetric } from '@/components/sections/services-asymmetric';
import { ProjectsCarousel } from '@/components/sections/projects-carousel';
import { NewsSection } from '@/components/sections/news-section';
import { CTASection } from '@/components/sections/cta-section';

export default function HomePage() {
  return (
    <>
      {/* Hero Section - Full viewport, stacked heading, floating card, stats */}
      <HeroFlow />

      {/* Intro Section - Bracket text, thumbnails, brand divider */}
      <IntroBlend />

      {/* Services Section - Asymmetric layout with accordion */}
      <ServicesAsymmetric />

      {/* Projects Section - Full screen carousel with project overlays */}
      <ProjectsCarousel />

      {/* News Section - Latest updates with glassmorphism cards */}
      <NewsSection limit={3} showFeatured={true} />

      {/* CTA Section - Contact form, flows into footer */}
      <CTASection />
    </>
  );
}
