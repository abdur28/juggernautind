'use client';

import { cn } from '@/lib/utils';
import { ScrollReveal } from '@/components/animations/scroll-reveal';

interface IntroBlendProps {
  className?: string;
}

const aboutContent = {
  eyebrow: 'Who We Are',
  description:
    "Juggernaut Industries Limited (JIL) is an indigenous, multidisciplinary services company incorporated in Nigeria in 2006. With more than two decades of operational experience, JIL has grown into a diversified group delivering excellence across mineral exploration, energy, construction, and agribusiness sectors.",
  description2:
    "At the heart of JIL's success is a world-class team of local and international professionals, bringing together a wealth of expertise and cross-cultural experience that enables the company to operate effectively across diverse and challenging terrains. This blend of proven local knowledge and global expertise allows JIL to consistently meet and exceed the expectations of both government and private sector clients, while adhering to the highest international standards.",
  vision: {
    title: 'Our Vision',
    text: "To be Nigeria's leading multidisciplinary services company, recognised for unwavering excellence, the quality of our people, and the strength of our values.",
  },
  mission: {
    title: 'Our Mission',
    text: 'To become the preferred company of choice in the hearts and minds of our clients and customers recognized for providing quality and reliable products and services.',
  },
};

export function IntroBlend({ className }: IntroBlendProps) {
  return (
    <section
      id="intro"
      className={cn(
        'relative pt-20 md:pt-32 pb-32 md:pb-48 overflow-hidden',
        'bg-gradient-to-b from-deep-navy via-steel-blue/20 to-deep-navy',
        className
      )}
    >

      <div className="container-jil">
        {/* Section Title */}
        <ScrollReveal animation="fadeUp">
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-white text-center mb-12">
            Vision & Mission Statement
          </h2>
        </ScrollReveal>

        {/* Vision & Mission Cards Side by Side */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Vision */}
          <ScrollReveal animation="fadeUp" delay={0.2}>
            <div className="bg-steel-blue/10 backdrop-blur-xl border border-white/10 rounded-xl p-6 h-full">
              <h3 className="font-heading text-sm tracking-[0.15em] uppercase text-industrial-gold mb-3">
                {aboutContent.vision.title}
              </h3>
              <p className="text-lg text-light-gray leading-relaxed">
                {aboutContent.vision.text}
              </p>
            </div>
          </ScrollReveal>

          {/* Mission */}
          <ScrollReveal animation="fadeUp" delay={0.3}>
            <div className="bg-steel-blue/10 backdrop-blur-xl border border-white/10 rounded-xl p-6 h-full">
              <h3 className="font-heading text-sm tracking-[0.15em] uppercase text-industrial-gold mb-3">
                {aboutContent.mission.title}
              </h3>
              <p className="text-lg text-light-gray leading-relaxed">
                {aboutContent.mission.text}
              </p>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
