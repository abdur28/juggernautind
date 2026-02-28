import { Variants, Transition } from 'framer-motion';

// Custom easing functions
export const easeOutExpo = [0.16, 1, 0.3, 1] as const;
export const easeInOutExpo = [0.87, 0, 0.13, 1] as const;

// Default transition
export const defaultTransition: Transition = {
  duration: 0.6,
  ease: easeOutExpo,
};

// ============================================
// FADE ANIMATIONS
// ============================================

export const fadeIn: Variants = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
    transition: defaultTransition,
  },
};

export const fadeInUp: Variants = {
  hidden: {
    opacity: 0,
    y: 40,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: defaultTransition,
  },
};

export const fadeInDown: Variants = {
  hidden: {
    opacity: 0,
    y: -40,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: defaultTransition,
  },
};

export const fadeInLeft: Variants = {
  hidden: {
    opacity: 0,
    x: -40,
  },
  visible: {
    opacity: 1,
    x: 0,
    transition: defaultTransition,
  },
};

export const fadeInRight: Variants = {
  hidden: {
    opacity: 0,
    x: 40,
  },
  visible: {
    opacity: 1,
    x: 0,
    transition: defaultTransition,
  },
};

// ============================================
// SCALE ANIMATIONS
// ============================================

export const scaleIn: Variants = {
  hidden: {
    opacity: 0,
    scale: 0.9,
  },
  visible: {
    opacity: 1,
    scale: 1,
    transition: defaultTransition,
  },
};

export const scaleInUp: Variants = {
  hidden: {
    opacity: 0,
    scale: 0.95,
    y: 20,
  },
  visible: {
    opacity: 1,
    scale: 1,
    y: 0,
    transition: defaultTransition,
  },
};

// ============================================
// STAGGER CONTAINERS
// ============================================

export const staggerContainer: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.1,
    },
  },
};

export const staggerContainerFast: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.05,
      delayChildren: 0.05,
    },
  },
};

export const staggerContainerSlow: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.2,
    },
  },
};

// ============================================
// TEXT REVEAL ANIMATIONS (Editorial Style)
// ============================================

// For character-by-character reveal
export const textRevealContainer: Variants = {
  hidden: { opacity: 1 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.02,
      delayChildren: 0.1,
    },
  },
};

export const textRevealCharacter: Variants = {
  hidden: {
    opacity: 0,
    y: 50,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: easeOutExpo,
    },
  },
};

// For word-by-word reveal
export const wordRevealContainer: Variants = {
  hidden: { opacity: 1 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.08,
      delayChildren: 0.1,
    },
  },
};

export const wordReveal: Variants = {
  hidden: {
    opacity: 0,
    y: '100%',
    rotateX: -90,
  },
  visible: {
    opacity: 1,
    y: 0,
    rotateX: 0,
    transition: {
      duration: 0.6,
      ease: easeOutExpo,
    },
  },
};

// Line reveal (mask style)
export const lineReveal: Variants = {
  hidden: {
    scaleX: 0,
    originX: 0,
  },
  visible: {
    scaleX: 1,
    transition: {
      duration: 0.8,
      ease: easeOutExpo,
    },
  },
};

// ============================================
// BRACKET TEXT ANIMATIONS
// ============================================

export const bracketContainer: Variants = {
  hidden: { opacity: 1 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2,
    },
  },
};

export const bracketLeft: Variants = {
  hidden: {
    opacity: 0,
    x: 20,
  },
  visible: {
    opacity: 0.6,
    x: 0,
    transition: {
      duration: 0.5,
      ease: easeOutExpo,
    },
  },
};

export const bracketRight: Variants = {
  hidden: {
    opacity: 0,
    x: -20,
  },
  visible: {
    opacity: 0.6,
    x: 0,
    transition: {
      duration: 0.5,
      ease: easeOutExpo,
    },
  },
};

export const bracketContent: Variants = {
  hidden: {
    opacity: 0,
    y: 20,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: easeOutExpo,
    },
  },
};

// ============================================
// GOLD DOT ANIMATION
// ============================================

export const goldDotPulse: Variants = {
  hidden: {
    opacity: 0,
    scale: 0,
  },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.4,
      ease: easeOutExpo,
    },
  },
};

// ============================================
// FLOATING CARD ANIMATIONS
// ============================================

export const floatingCard: Variants = {
  hidden: {
    opacity: 0,
    y: 60,
    scale: 0.95,
  },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.8,
      ease: easeOutExpo,
      delay: 0.3,
    },
  },
};

export const floatingCardHover = {
  y: -10,
  transition: {
    duration: 0.3,
    ease: easeOutExpo,
  },
};

// ============================================
// STATS/COUNTER ANIMATIONS
// ============================================

export const statsContainer: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2,
    },
  },
};

export const statItem: Variants = {
  hidden: {
    opacity: 0,
    y: 30,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: easeOutExpo,
    },
  },
};

// Counter animation config (for use with animate())
export const counterConfig = {
  duration: 2,
  ease: 'easeOut' as const,
};

// ============================================
// PARALLAX CONFIGURATIONS
// ============================================

export const parallaxConfig = {
  slow: { start: '0%', end: '-10%' },
  medium: { start: '0%', end: '-20%' },
  fast: { start: '0%', end: '-30%' },
  reverse: { start: '-10%', end: '10%' },
};

// ============================================
// NAVIGATION ANIMATIONS
// ============================================

export const navContainer: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.05,
      delayChildren: 0.1,
    },
  },
};

export const navItem: Variants = {
  hidden: {
    opacity: 0,
    y: -10,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: defaultTransition,
  },
};

export const mobileMenuOverlay: Variants = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
    transition: {
      duration: 0.3,
    },
  },
  exit: {
    opacity: 0,
    transition: {
      duration: 0.2,
    },
  },
};

export const mobileMenuContent: Variants = {
  hidden: {
    x: '100%',
  },
  visible: {
    x: 0,
    transition: {
      duration: 0.4,
      ease: easeOutExpo,
    },
  },
  exit: {
    x: '100%',
    transition: {
      duration: 0.3,
      ease: easeInOutExpo,
    },
  },
};

export const mobileNavItem: Variants = {
  hidden: {
    opacity: 0,
    x: 20,
  },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.4,
      ease: easeOutExpo,
    },
  },
};

// ============================================
// SECTION TRANSITION ANIMATIONS
// ============================================

export const sectionFadeIn: Variants = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
    transition: {
      duration: 0.8,
      ease: 'linear',
    },
  },
};

export const sectionSlideUp: Variants = {
  hidden: {
    opacity: 0,
    y: 100,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      ease: easeOutExpo,
    },
  },
};

// ============================================
// IMAGE REVEAL ANIMATIONS
// ============================================

export const imageReveal: Variants = {
  hidden: {
    clipPath: 'inset(0 100% 0 0)',
  },
  visible: {
    clipPath: 'inset(0 0% 0 0)',
    transition: {
      duration: 1,
      ease: easeOutExpo,
    },
  },
};

export const imageScale: Variants = {
  hidden: {
    scale: 1.2,
    opacity: 0,
  },
  visible: {
    scale: 1,
    opacity: 1,
    transition: {
      duration: 1.2,
      ease: easeOutExpo,
    },
  },
};

// ============================================
// ACCORDION ANIMATIONS
// ============================================

export const accordionContent: Variants = {
  hidden: {
    height: 0,
    opacity: 0,
  },
  visible: {
    height: 'auto',
    opacity: 1,
    transition: {
      height: {
        duration: 0.4,
        ease: easeOutExpo,
      },
      opacity: {
        duration: 0.3,
        delay: 0.1,
      },
    },
  },
};

export const accordionIcon: Variants = {
  closed: { rotate: 0 },
  open: { rotate: 45 },
};

// ============================================
// UTILITY: Create delay variant
// ============================================

export const withDelay = (variants: Variants, delay: number): Variants => {
  return {
    hidden: variants.hidden,
    visible: {
      ...variants.visible,
      transition: {
        ...(typeof variants.visible === 'object' && 'transition' in variants.visible
          ? variants.visible.transition
          : {}),
        delay,
      },
    },
  };
};
