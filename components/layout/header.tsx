'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';
import { Menu, X, ArrowRight, ChevronDown } from 'lucide-react';
import { cn } from '@/lib/utils';
import { navigation, siteConfig } from '@/config/site';

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isMobileMenuOpen]);

  return (
    <>
      <motion.header
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        className={cn(
          'fixed top-0 left-0 right-0 z-50',
          'transition-all duration-500',
          isScrolled
            ? 'bg-deep-navy/95 backdrop-blur-xl shadow-lg shadow-black/10'
            : 'bg-transparent'
        )}
      >
        <div className="container-jil">
          <nav className="flex items-center justify-between h-20 md:h-24">
            {/* Logo */}
            <Link href="/" className="flex flex-col items-center group">
              <div className="relative w-10 h-10 md:w-12 md:h-12">
                <Image
                  src="/logo.png"
                  alt="Juggernaut Industries Logo"
                  fill
                  className="object-contain"
                  priority
                />
              </div>
              <div className="flex flex-col items-center">
                <span className="font-display text-base md:text-2xl font-semibold text-off-white tracking-wide group-hover:text-industrial-gold transition-colors leading-[0.8em]">
                  JUGGERNAUT
                </span>
                <span className="text-[7px] md:text-[10px] font-heading tracking-[0.2em] text-mid-gray uppercase">
                  Industries Ltd
                </span>
              </div>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center gap-8">
              {navigation.main.map((item, index) => (
                <div
                  key={item.href}
                  className="relative"
                  onMouseEnter={() => item.submenu && setActiveDropdown(item.label)}
                  onMouseLeave={() => setActiveDropdown(null)}
                >
                  <motion.div
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.1 * index, duration: 0.5 }}
                  >
                    <Link
                      href={item.href}
                      className={cn(
                        'relative font-heading text-xs tracking-[0.15em] uppercase text-light-gray hover:text-off-white transition-colors duration-300 py-2',
                        'flex items-center gap-1'
                      )}
                    >
                      {item.label}
                      {item.submenu && (
                        <ChevronDown
                          className={cn(
                            'w-3 h-3 transition-transform duration-300',
                            activeDropdown === item.label && 'rotate-180'
                          )}
                        />
                      )}
                      <span className="absolute bottom-0 left-0 w-0 h-px bg-industrial-gold transition-all duration-300 group-hover:w-full hover:w-full" />
                    </Link>
                  </motion.div>

                  {/* Dropdown Menu */}
                  <AnimatePresence>
                    {item.submenu && activeDropdown === item.label && (
                      <motion.div
                        initial={{ opacity: 0, y: 10, scale: 0.95 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: 10, scale: 0.95 }}
                        transition={{ duration: 0.2, ease: [0.16, 1, 0.3, 1] }}
                        className="absolute top-full left-0 mt-3 min-w-[300px]"
                      >
                        {/* Glassmorphism Container */}
                        <div className="relative rounded-2xl overflow-hidden">
                          {/* Glass Background */}
                          <div className="absolute inset-0 bg-gradient-to-br from-white/10 via-white/5 to-transparent backdrop-blur-lg" />
                          <div className="absolute inset-0 bg-deep-navy/80" />

                          {/* Border Glow */}
                          <div className="absolute inset-0 rounded-2xl border border-white/10" />
                          <div className="absolute inset-0 rounded-2xl border border-industrial-gold/10" />

                          {/* Content */}
                          <div className="relative p-2">
                            {item.submenu.map((subitem, subIndex) => (
                              <motion.div
                                key={subitem.href}
                                initial={{ opacity: 0, x: -10 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ delay: subIndex * 0.05 }}
                              >
                                <Link
                                  href={subitem.href}
                                  className="block px-4 py-3 rounded-xl hover:bg-white/10 transition-all duration-300 group"
                                >
                                  <div className="flex items-start justify-between gap-3">
                                    <div>
                                      <div className="font-heading text-sm text-off-white group-hover:text-industrial-gold transition-colors">
                                        {subitem.label}
                                      </div>
                                      {subitem.description && (
                                        <div className="text-xs text-light-gray/70 mt-0.5 group-hover:text-light-gray transition-colors">
                                          {subitem.description}
                                        </div>
                                      )}
                                    </div>
                                    <ArrowRight className="w-4 h-4 text-light-gray/50 group-hover:text-industrial-gold group-hover:translate-x-1 transition-all flex-shrink-0 mt-0.5" />
                                  </div>
                                </Link>
                              </motion.div>
                            ))}
                          </div>

                          {/* Bottom Accent */}
                          <div className="absolute bottom-0 left-4 right-4 h-px bg-gradient-to-r from-transparent via-industrial-gold/30 to-transparent" />
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              ))}
            </div>

            {/* CTA + Mobile Toggle */}
            <div className="flex items-center gap-4">
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.4, duration: 0.5 }}
              >
                <Link
                  href="/contact"
                  className="hidden md:inline-flex items-center gap-2 px-5 py-2.5 border border-industrial-gold/50 text-industrial-gold font-heading text-xs tracking-[0.1em] uppercase rounded-xl btn-animated relative overflow-hidden after:bg-industrial-gold hover:text-near-black"
                >
                  Get Quote
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </motion.div>

              <button
                onClick={() => setIsMobileMenuOpen(true)}
                className="lg:hidden p-2 text-off-white hover:text-industrial-gold transition-colors"
                aria-label="Open menu"
              >
                <Menu className="w-6 h-6" />
              </button>
            </div>
          </nav>
        </div>
      </motion.header>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="fixed inset-0 z-50 bg-near-black/90 backdrop-blur-md lg:hidden"
              onClick={() => setIsMobileMenuOpen(false)}
            />

            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
              className="fixed top-0 right-0 bottom-0 z-50 w-full max-w-md bg-deep-navy lg:hidden overflow-y-auto"
            >
              <div className="flex flex-col h-full">
                {/* Mobile Header */}
                <div className="flex items-center justify-between p-6 border-b border-white/10">
                  <Link
                    href="/"
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="flex flex-col items-center"
                  >
                    <div className="relative w-12 h-12">
                      <Image
                        src="/logo.png"
                        alt="Juggernaut Industries Logo"
                        fill
                        className="object-contain"
                      />
                    </div>
                    <div className="flex flex-col items-center">
                      <span className="font-display text-base font-semibold text-off-white leading-[0.8em]">
                        JUGGERNAUT
                      </span>
                      <span className="text-[7px] font-heading tracking-[0.2em] text-mid-gray uppercase">
                        Industries Ltd
                      </span>
                    </div>
                  </Link>
                  <button
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="p-2 text-off-white hover:text-industrial-gold transition-colors"
                    aria-label="Close menu"
                  >
                    <X className="w-6 h-6" />
                  </button>
                </div>

                {/* Mobile Nav Links */}
                <nav className="flex-1 p-6">
                  <ul className="space-y-1">
                    {navigation.main.map((item, index) => (
                      <motion.li
                        key={item.href}
                        initial={{ opacity: 0, x: 30 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.1 + index * 0.1, duration: 0.4 }}
                      >
                        {item.submenu ? (
                          <div>
                            <button
                              onClick={() =>
                                setActiveDropdown(
                                  activeDropdown === item.label ? null : item.label
                                )
                              }
                              className="flex items-center justify-between w-full py-4 font-heading text-xl tracking-wide text-off-white hover:text-industrial-gold transition-colors border-b border-white/5"
                            >
                              {item.label}
                              <ChevronDown
                                className={cn(
                                  'w-5 h-5 transition-transform',
                                  activeDropdown === item.label && 'rotate-180'
                                )}
                              />
                            </button>
                            <AnimatePresence>
                              {activeDropdown === item.label && (
                                <motion.div
                                  initial={{ height: 0, opacity: 0 }}
                                  animate={{ height: 'auto', opacity: 1 }}
                                  exit={{ height: 0, opacity: 0 }}
                                  transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
                                  className="overflow-hidden"
                                >
                                  <div className="relative mt-2 mx-2 rounded-xl overflow-hidden">
                                    {/* Glass Background */}
                                    <div className="absolute inset-0 bg-white/5 backdrop-blur-xl" />
                                    <div className="absolute inset-0 border border-white/10 rounded-xl" />

                                    {/* Content */}
                                    <div className="relative p-2 space-y-1">
                                      {item.submenu.map((subitem) => (
                                        <Link
                                          key={subitem.href}
                                          href={subitem.href}
                                          onClick={() => setIsMobileMenuOpen(false)}
                                          className="block py-3 px-4 text-sm text-light-gray hover:text-industrial-gold hover:bg-white/10 rounded-lg transition-all duration-300"
                                        >
                                          <div className="font-heading">{subitem.label}</div>
                                          {subitem.description && (
                                            <div className="text-xs text-mid-gray mt-0.5">
                                              {subitem.description}
                                            </div>
                                          )}
                                        </Link>
                                      ))}
                                    </div>
                                  </div>
                                </motion.div>
                              )}
                            </AnimatePresence>
                          </div>
                        ) : (
                          <Link
                            href={item.href}
                            onClick={() => setIsMobileMenuOpen(false)}
                            className="flex items-center justify-between py-4 font-heading text-xl tracking-wide text-off-white hover:text-industrial-gold transition-colors border-b border-white/5"
                          >
                            {item.label}
                            <ArrowRight className="w-5 h-5" />
                          </Link>
                        )}
                      </motion.li>
                    ))}
                  </ul>
                </nav>

                {/* Mobile Footer */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5, duration: 0.4 }}
                  className="p-6 border-t border-white/10"
                >
                  <Link
                    href="/contact"
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="btn-primary btn-animated w-full"
                  >
                    Get a Free Quote
                    <ArrowRight className="w-4 h-4" />
                  </Link>

                  <div className="mt-6 space-y-2 text-sm text-mid-gray">
                    <p>{siteConfig.contact.email}</p>
                    <p>{siteConfig.contact.phone}</p>
                  </div>
                </motion.div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
