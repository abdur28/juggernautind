'use client';

import { useEffect } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { ArrowRight, Home, RefreshCw, AlertTriangle } from 'lucide-react';

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    // Log the error to an error reporting service
    console.error(error);
  }, [error]);

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

      {/* Animated Warning Icon Background */}
      <motion.div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] md:w-[500px] md:h-[500px]"
        animate={{ rotate: 360 }}
        transition={{ duration: 120, repeat: Infinity, ease: 'linear' }}
      >
        <div className="absolute inset-0 rounded-full border border-red-500/10" />
        <div className="absolute inset-8 rounded-full border border-industrial-gold/10" />
        <div className="absolute inset-16 rounded-full border border-steel-blue/10" />
      </motion.div>

      {/* Content */}
      <div className="relative z-10 text-center px-4 max-w-lg">
        {/* Warning Icon */}
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
          className="mb-8 flex justify-center"
        >
          <div className="relative">
            {/* Glow */}
            <div className="absolute inset-0 blur-2xl bg-red-500/20 rounded-full" />

            {/* Icon container */}
            <motion.div
              className="relative w-24 h-24 rounded-full bg-gradient-to-br from-red-500/20 to-red-500/5 border border-red-500/30 flex items-center justify-center"
              animate={{ scale: [1, 1.05, 1] }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              <AlertTriangle className="w-10 h-10 text-red-400" />
            </motion.div>
          </div>
        </motion.div>

        {/* Message */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mb-8"
        >
          <span className="inline-flex items-center justify-center gap-2 font-heading text-xs tracking-[0.2em] uppercase text-red-400 mb-4">
            <span className="w-8 h-px bg-red-400" />
            Something Went Wrong
            <span className="w-8 h-px bg-red-400" />
          </span>
          <h2 className="font-display text-2xl md:text-3xl lg:text-4xl font-light text-off-white mb-4">
            UNEXPECTED
            <span className="block text-lg md:text-xl lg:text-2xl text-light-gray tracking-[0.15em]">
              ERROR OCCURRED
            </span>
          </h2>
          <p className="text-light-gray/70 leading-relaxed">
            We encountered an issue while processing your request.
            Our team has been notified and is working on a fix.
          </p>
        </motion.div>

        {/* Action Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <button
            onClick={reset}
            className="inline-flex items-center gap-2 px-6 py-3 bg-industrial-gold text-near-black font-heading text-xs tracking-[0.1em] uppercase rounded-xl btn-animated relative z-1 overflow-hidden after:bg-off-white hover:text-deep-navy transition-colors"
          >
            <RefreshCw className="w-4 h-4" />
            Try Again
          </button>
          <Link
            href="/"
            className="inline-flex items-center gap-2 px-6 py-3 border border-industrial-gold/50 text-industrial-gold font-heading text-xs tracking-[0.1em] uppercase rounded-xl btn-animated relative z-1 overflow-hidden after:bg-industrial-gold hover:text-near-black transition-colors"
          >
            <Home className="w-4 h-4" />
            Back to Home
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
            Need Help?
          </p>
          <div className="flex flex-wrap items-center justify-center gap-6">
            <Link
              href="/contact"
              className="text-sm text-light-gray hover:text-industrial-gold transition-colors flex items-center gap-1 group"
            >
              Contact Support
              <ArrowRight className="w-3 h-3 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all" />
            </Link>
            <a
              href={`mailto:info@juggernautind.com?subject=Error Report&body=Error: ${error.message}`}
              className="text-sm text-light-gray hover:text-industrial-gold transition-colors flex items-center gap-1 group"
            >
              Report Issue
              <ArrowRight className="w-3 h-3 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all" />
            </a>
          </div>
        </motion.div>
      </div>

      {/* Bottom Accent Line */}
      <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-red-500/50 to-transparent" />
    </div>
  );
}
