'use client';

import { forwardRef } from 'react';
import { motion, HTMLMotionProps } from 'framer-motion';
import { cn } from '@/lib/utils';
import { ArrowRight, Loader2 } from 'lucide-react';

type ButtonVariant = 'primary' | 'secondary' | 'outline' | 'ghost' | 'gold-outline';
type ButtonSize = 'sm' | 'md' | 'lg';

interface ButtonProps extends Omit<HTMLMotionProps<'button'>, 'size'> {
  variant?: ButtonVariant;
  size?: ButtonSize;
  isLoading?: boolean;
  showArrow?: boolean;
  fullWidth?: boolean;
  children: React.ReactNode;
}

const variantClasses: Record<ButtonVariant, string> = {
  primary:
    'bg-industrial-gold text-near-black hover:bg-[#d4940f] active:bg-[#c08a0e]',
  secondary:
    'bg-transparent text-off-white border border-white/30 hover:bg-white/10 hover:border-white/50',
  outline:
    'bg-transparent text-off-white border border-white/20 hover:bg-white/5 hover:border-white/40',
  ghost:
    'bg-transparent text-off-white hover:bg-white/10',
  'gold-outline':
    'bg-transparent text-industrial-gold border border-industrial-gold hover:bg-industrial-gold hover:text-near-black',
};

const sizeClasses: Record<ButtonSize, string> = {
  sm: 'px-4 py-2 text-xs',
  md: 'px-6 py-3 text-xs',
  lg: 'px-8 py-4 text-sm',
};

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      variant = 'primary',
      size = 'md',
      isLoading = false,
      showArrow = false,
      fullWidth = false,
      className,
      children,
      disabled,
      ...props
    },
    ref
  ) => {
    return (
      <motion.button
        ref={ref}
        className={cn(
          'inline-flex items-center justify-center gap-2',
          'font-heading font-semibold tracking-wider uppercase',
          'rounded-md transition-colors duration-200',
          'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-industrial-gold focus-visible:ring-offset-2 focus-visible:ring-offset-deep-navy',
          'disabled:opacity-50 disabled:pointer-events-none',
          variantClasses[variant],
          sizeClasses[size],
          fullWidth && 'w-full',
          className
        )}
        disabled={disabled || isLoading}
        whileHover={{ y: -2 }}
        whileTap={{ scale: 0.98 }}
        transition={{ duration: 0.2 }}
        {...props}
      >
        {isLoading ? (
          <>
            <Loader2 className="w-4 h-4 animate-spin" />
            <span>Loading...</span>
          </>
        ) : (
          <>
            {children}
            {showArrow && (
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            )}
          </>
        )}
      </motion.button>
    );
  }
);

Button.displayName = 'Button';

// Link styled as button
interface ButtonLinkProps {
  href: string;
  variant?: ButtonVariant;
  size?: ButtonSize;
  showArrow?: boolean;
  fullWidth?: boolean;
  className?: string;
  children: React.ReactNode;
  external?: boolean;
  onClick?: () => void;
}

export function ButtonLink({
  href,
  variant = 'primary',
  size = 'md',
  showArrow = false,
  fullWidth = false,
  className,
  children,
  external = false,
  onClick,
}: ButtonLinkProps) {
  const externalProps = external
    ? { target: '_blank', rel: 'noopener noreferrer' }
    : {};

  return (
    <motion.a
      href={href}
      onClick={onClick}
      className={cn(
        'inline-flex items-center justify-center gap-2 group',
        'font-heading font-semibold tracking-wider uppercase',
        'rounded-md transition-colors duration-200',
        'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-industrial-gold focus-visible:ring-offset-2 focus-visible:ring-offset-deep-navy',
        variantClasses[variant],
        sizeClasses[size],
        fullWidth && 'w-full',
        className
      )}
      whileHover={{ y: -2 }}
      whileTap={{ scale: 0.98 }}
      transition={{ duration: 0.2 }}
      {...externalProps}
    >
      {children}
      {showArrow && (
        <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
      )}
    </motion.a>
  );
}

// Text link with underline animation
interface TextLinkProps {
  href: string;
  className?: string;
  children: React.ReactNode;
  showArrow?: boolean;
  external?: boolean;
}

export function TextLink({
  href,
  className,
  children,
  showArrow = true,
  external = false,
}: TextLinkProps) {
  const externalProps = external
    ? { target: '_blank', rel: 'noopener noreferrer' }
    : {};

  return (
    <a
      href={href}
      className={cn(
        'inline-flex items-center gap-1 group',
        'font-heading text-xs font-semibold tracking-wider uppercase',
        'text-industrial-gold hover:text-[#d4940f]',
        'transition-colors duration-200',
        className
      )}
      {...externalProps}
    >
      <span className="relative">
        {children}
        <span className="absolute bottom-0 left-0 w-0 h-px bg-current transition-all duration-300 group-hover:w-full" />
      </span>
      {showArrow && (
        <ArrowRight className="w-3 h-3 transition-transform group-hover:translate-x-1" />
      )}
    </a>
  );
}
