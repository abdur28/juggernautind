'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';
import { siteConfig, navigation } from '@/config/site';
import { StackedHeading } from '@/components/ui/stacked-heading';
import { GoldDot } from '@/components/ui/gold-dot';
import { ScrollReveal, StaggerReveal, StaggerItem } from '@/components/animations/scroll-reveal';
import { Facebook, Twitter, Linkedin, Instagram, Mail, Phone, MapPin } from 'lucide-react';

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-near-black relative overflow-hidden">
      {/* Large Background Text */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none overflow-hidden">
        <span className="font-display text-[20vw] font-bold text-white/[0.02] uppercase whitespace-nowrap select-none">
          JUGGERNAUT
        </span>
      </div>

      <div className="relative z-10">
        {/* Main Footer Content */}
        <div className="container-jil py-16 md:py-24">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8">
            {/* Brand Column */}
            <ScrollReveal animation="fadeUp" className="lg:col-span-1">
              <Link href="/" className="inline-block mb-6">
                <h3 className="font-display text-3xl font-semibold text-off-white">
                  JUGGERNAUT
                </h3>
                <p className="font-heading text-xs tracking-wider text-mid-gray uppercase mt-1">
                  Industries Limited
                </p>
              </Link>

              <p className="text-body-sm text-mid-gray mb-6 max-w-xs">
                {siteConfig.description.slice(0, 150)}...
              </p>

              {/* Social Links */}
              <div className="flex items-center gap-4">
                {siteConfig.social.linkedin && (
                  <a
                    href={siteConfig.social.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 text-mid-gray hover:text-industrial-gold transition-colors"
                    aria-label="LinkedIn"
                  >
                    <Linkedin className="w-5 h-5" />
                  </a>
                )}
                <a
                  href="#"
                  className="p-2 text-mid-gray hover:text-industrial-gold transition-colors"
                  aria-label="Facebook"
                >
                  <Facebook className="w-5 h-5" />
                </a>
                <a
                  href="#"
                  className="p-2 text-mid-gray hover:text-industrial-gold transition-colors"
                  aria-label="Twitter"
                >
                  <Twitter className="w-5 h-5" />
                </a>
                <a
                  href="#"
                  className="p-2 text-mid-gray hover:text-industrial-gold transition-colors"
                  aria-label="Instagram"
                >
                  <Instagram className="w-5 h-5" />
                </a>
              </div>
            </ScrollReveal>

            {/* Quick Links */}
            <ScrollReveal animation="fadeUp" delay={0.1}>
              <h4 className="text-heading-sm text-off-white mb-6">Quick Links</h4>
              <ul className="space-y-3">
                {navigation.footer.company.map((item) => (
                  <li key={item.href}>
                    <Link
                      href={item.href}
                      className="text-body-sm text-mid-gray hover:text-industrial-gold transition-colors inline-flex items-center gap-2"
                    >
                      <GoldDot size="sm" animate={false} />
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </ScrollReveal>

            {/* Services */}
            <ScrollReveal animation="fadeUp" delay={0.2}>
              <h4 className="text-heading-sm text-off-white mb-6">Our Services</h4>
              <ul className="space-y-3">
                {navigation.footer.services.map((item) => (
                  <li key={item.href}>
                    <Link
                      href={item.href}
                      className="text-body-sm text-mid-gray hover:text-industrial-gold transition-colors inline-flex items-center gap-2"
                    >
                      <GoldDot size="sm" animate={false} />
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </ScrollReveal>

            {/* Contact Info */}
            <ScrollReveal animation="fadeUp" delay={0.3}>
              <h4 className="text-heading-sm text-off-white mb-6">Contact Us</h4>
              <ul className="space-y-4">
                <li>
                  <a
                    href={`mailto:${siteConfig.contact.email}`}
                    className="flex items-start gap-3 text-body-sm text-mid-gray hover:text-industrial-gold transition-colors"
                  >
                    <Mail className="w-4 h-4 mt-1 flex-shrink-0" />
                    {siteConfig.contact.email}
                  </a>
                </li>
                <li>
                  <a
                    href={`tel:${siteConfig.contact.phone}`}
                    className="flex items-start gap-3 text-body-sm text-mid-gray hover:text-industrial-gold transition-colors"
                  >
                    <Phone className="w-4 h-4 mt-1 flex-shrink-0" />
                    {siteConfig.contact.phone}
                  </a>
                </li>
                <li>
                  <div className="flex items-start gap-3 text-body-sm text-mid-gray">
                    <MapPin className="w-4 h-4 mt-1 flex-shrink-0" />
                    <span>{siteConfig.location.full}</span>
                  </div>
                </li>
              </ul>
            </ScrollReveal>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/10">
          <div className="container-jil py-6">
            <div className="flex flex-col md:flex-row justify-between items-center gap-4">
              <p className="text-body-sm text-mid-gray">
                &copy; {currentYear} {siteConfig.name}. All rights reserved.
              </p>

              <div className="flex items-center gap-6">
                {navigation.footer.legal.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    className="text-body-sm text-mid-gray hover:text-industrial-gold transition-colors"
                  >
                    {item.label}
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
