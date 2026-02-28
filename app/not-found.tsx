'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { ArrowRight, Home, Search } from 'lucide-react';

export default function NotFound() {
  return (
    <div className="min-h-screen bg-deep-navy relative overflow-hidden flex items-center justify-center">
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

      {/* Animated Background Shapes */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Large rotating ring */}
        <motion.div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] md:w-[800px] md:h-[800px]"
          animate={{ rotate: 360 }}
          transition={{ duration: 60, repeat: Infinity, ease: 'linear' }}
        >
          <div className="absolute inset-0 rounded-full border border-industrial-gold/10" />
          <div className="absolute inset-8 rounded-full border border-industrial-gold/5" />
          <div className="absolute inset-16 rounded-full border border-steel-blue/10" />
        </motion.div>

        {/* Floating particles */}
        {[...Array(6)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 rounded-full bg-industrial-gold/20"
            style={{
              top: `${20 + i * 15}%`,
              left: `${10 + i * 15}%`,
            }}
            animate={{
              y: [0, -30, 0],
              opacity: [0.2, 0.5, 0.2],
            }}
            transition={{
              duration: 3 + i * 0.5,
              repeat: Infinity,
              delay: i * 0.3,
            }}
          />
        ))}
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-4">
        {/* 404 Number */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="relative mb-8"
        >
          {/* Glow effect behind number */}
          <div className="absolute inset-0 blur-3xl bg-industrial-gold/20 rounded-full" />

          <h1 className="relative font-display text-[120px] md:text-[180px] lg:text-[220px] font-bold leading-none">
            <span className="bg-gradient-to-b from-industrial-gold via-industrial-gold/80 to-industrial-gold/40 bg-clip-text text-transparent">
              4
            </span>
            <span className="relative inline-block">
              {/* Mining drill icon as the 0 */}
              <span className="bg-gradient-to-b from-off-white via-light-gray to-mid-gray bg-clip-text text-transparent">
                0
              </span>
              {/* Animated pulse inside the 0 */}
              <motion.span
                className="absolute inset-0 flex items-center justify-center"
                animate={{ scale: [1, 1.1, 1], opacity: [0.5, 1, 0.5] }}
                transition={{ duration: 2, repeat: Infinity }}
              >
                <span className="w-8 h-8 md:w-12 md:h-12 rounded-full bg-industrial-gold/30" />
              </motion.span>
            </span>
            <span className="bg-gradient-to-b from-industrial-gold via-industrial-gold/80 to-industrial-gold/40 bg-clip-text text-transparent">
              4
            </span>
          </h1>
        </motion.div>

        {/* Message */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mb-8"
        >
          <span className="inline-flex items-center justify-center gap-2 font-heading text-xs tracking-[0.2em] uppercase text-industrial-gold mb-4">
            <span className="w-8 h-px bg-industrial-gold" />
            Page Not Found
            <span className="w-8 h-px bg-industrial-gold" />
          </span>
          <h2 className="font-display text-2xl md:text-3xl lg:text-4xl font-light text-off-white mb-4">
            LOST IN THE
            <span className="block text-lg md:text-xl lg:text-2xl text-light-gray tracking-[0.15em]">
              EXPLORATION ZONE
            </span>
          </h2>
          <p className="text-light-gray/70 max-w-md mx-auto leading-relaxed">
            The page you&apos;re looking for seems to have been mined out or never existed.
            Let&apos;s get you back on track.
          </p>
        </motion.div>

        {/* Action Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <Link
            href="/"
            className="inline-flex items-center gap-2 px-6 py-3 bg-industrial-gold text-near-black font-heading text-xs tracking-[0.1em] uppercase rounded-xl btn-animated relative z-1 overflow-hidden after:bg-off-white hover:text-deep-navy transition-colors"
          >
            <Home className="w-4 h-4" />
            Back to Home
          </Link>
          <Link
            href="/services"
            className="inline-flex items-center gap-2 px-6 py-3 border border-industrial-gold/50 text-industrial-gold font-heading text-xs tracking-[0.1em] uppercase rounded-xl btn-animated relative z-1 overflow-hidden after:bg-industrial-gold hover:text-near-black transition-colors"
          >
            <Search className="w-4 h-4" />
            Explore Services
          </Link>
        </motion.div>

        {/* Quick Links */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="mt-12 pt-8 border-t border-white/10"
        >
          <p className="text-xs text-mid-gray mb-4 font-heading tracking-wider uppercase">
            Quick Links
          </p>
          <div className="flex flex-wrap items-center justify-center gap-6">
            {[
              { label: 'About Us', href: '/about' },
              { label: 'Projects', href: '/projects' },
              { label: 'Contact', href: '/contact' },
              { label: 'Careers', href: '/careers' },
            ].map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-sm text-light-gray hover:text-industrial-gold transition-colors flex items-center gap-1 group"
              >
                {link.label}
                <ArrowRight className="w-3 h-3 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all" />
              </Link>
            ))}
          </div>
        </motion.div>
      </div>

      {/* Bottom Accent Line */}
      <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-industrial-gold to-transparent opacity-50" />
    </div>
  );
}
