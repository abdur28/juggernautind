'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { cn } from '@/lib/utils';
import { Plus, ChevronRight } from 'lucide-react';
import { GoldDot } from './gold-dot';

interface AccordionItem {
  id: string;
  title: string;
  content: string;
  icon?: React.ReactNode;
}

interface AccordionListProps {
  items: AccordionItem[];
  className?: string;
  indicator?: 'dot' | 'plus' | 'arrow';
  allowMultiple?: boolean;
  defaultOpen?: string[];
}

const indicatorVariants = {
  dot: () => <GoldDot size="sm" animate={false} />,
  plus: ({ isOpen }: { isOpen: boolean }) => (
    <motion.div
      animate={{ rotate: isOpen ? 45 : 0 }}
      transition={{ duration: 0.2 }}
    >
      <Plus className="w-4 h-4 text-industrial-gold" />
    </motion.div>
  ),
  arrow: ({ isOpen }: { isOpen: boolean }) => (
    <motion.div
      animate={{ rotate: isOpen ? 90 : 0 }}
      transition={{ duration: 0.2 }}
    >
      <ChevronRight className="w-4 h-4 text-industrial-gold" />
    </motion.div>
  ),
};

export function AccordionList({
  items,
  className,
  indicator = 'dot',
  allowMultiple = false,
  defaultOpen = [],
}: AccordionListProps) {
  const [openItems, setOpenItems] = useState<string[]>(defaultOpen);

  const toggleItem = (id: string) => {
    if (allowMultiple) {
      setOpenItems((prev) =>
        prev.includes(id) ? prev.filter((i) => i !== id) : [...prev, id]
      );
    } else {
      setOpenItems((prev) => (prev.includes(id) ? [] : [id]));
    }
  };

  const Indicator = indicatorVariants[indicator];

  return (
    <div className={cn('space-y-1', className)}>
      {items.map((item) => {
        const isOpen = openItems.includes(item.id);

        return (
          <div key={item.id} className="border-b border-white/10 last:border-0">
            <button
              onClick={() => toggleItem(item.id)}
              className={cn(
                'w-full flex items-center justify-between py-4 px-2',
                'text-left transition-colors duration-200',
                'hover:bg-white/5 rounded-sm',
                'focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-industrial-gold'
              )}
            >
              <div className="flex items-center gap-3">
                {indicator === 'dot' && <Indicator isOpen={isOpen} />}
                <span
                  className={cn(
                    'font-heading text-sm font-semibold tracking-wider uppercase',
                    'transition-colors duration-200',
                    isOpen ? 'text-industrial-gold' : 'text-off-white'
                  )}
                >
                  {item.title}
                </span>
              </div>
              {indicator !== 'dot' && <Indicator isOpen={isOpen} />}
              {indicator === 'dot' && (
                <motion.div
                  className="w-1.5 h-1.5 rounded-full bg-industrial-gold"
                  animate={{ scale: isOpen ? 1 : 0.5, opacity: isOpen ? 1 : 0.5 }}
                  transition={{ duration: 0.2 }}
                />
              )}
            </button>

            <AnimatePresence initial={false}>
              {isOpen && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: 'auto', opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{
                    height: { duration: 0.3, ease: [0.16, 1, 0.3, 1] },
                    opacity: { duration: 0.2 },
                  }}
                  className="overflow-hidden"
                >
                  <div className="px-2 pb-4 pl-6">
                    <p className="text-body-sm text-mid-gray">{item.content}</p>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        );
      })}
    </div>
  );
}

// Services-specific accordion with icons
interface ServiceAccordionItem {
  id: string;
  title: string;
  description: string;
  icon: React.ReactNode;
  href: string;
  features?: string[];
}

interface ServiceAccordionProps {
  services: ServiceAccordionItem[];
  className?: string;
  variant?: 'dark' | 'light';
}

export function ServiceAccordion({ services, className, variant = 'dark' }: ServiceAccordionProps) {
  const [activeService, setActiveService] = useState<string | null>(
    services[0]?.id || null
  );

  const isLight = variant === 'light';

  return (
    <div className={cn('space-y-2', className)}>
      {services.map((service) => {
        const isActive = activeService === service.id;

        return (
          <div
            key={service.id}
            className={cn(
              'rounded-lg transition-all duration-300',
              isActive
                ? isLight
                  ? 'bg-deep-navy/5 border border-industrial-gold/40 shadow-md'
                  : 'bg-steel-blue/50 border border-industrial-gold/30'
                : isLight
                  ? 'bg-white border border-steel-blue/20 hover:border-steel-blue/40 shadow-sm'
                  : 'bg-transparent border border-white/10 hover:border-white/20'
            )}
          >
            <button
              onClick={() => setActiveService(isActive ? null : service.id)}
              className="w-full flex items-center gap-4 p-4 text-left"
            >
              <div
                className={cn(
                  'flex items-center justify-center w-10 h-10 rounded-lg',
                  'transition-colors duration-200',
                  isActive
                    ? 'bg-industrial-gold/20'
                    : isLight
                      ? 'bg-steel-blue/10'
                      : 'bg-white/5'
                )}
              >
                <span
                  className={cn(
                    'transition-colors duration-200',
                    isActive
                      ? 'text-industrial-gold'
                      : isLight
                        ? 'text-steel-blue'
                        : 'text-mid-gray'
                  )}
                >
                  {service.icon}
                </span>
              </div>
              <div className="flex-1">
                <h4
                  className={cn(
                    'font-heading text-sm font-semibold tracking-wider uppercase',
                    isActive
                      ? 'text-industrial-gold'
                      : isLight
                        ? 'text-deep-navy'
                        : 'text-off-white'
                  )}
                >
                  {service.title}
                </h4>
              </div>
              <motion.div
                animate={{ rotate: isActive ? 45 : 0 }}
                transition={{ duration: 0.2 }}
              >
                <Plus
                  className={cn(
                    'w-5 h-5',
                    isActive
                      ? 'text-industrial-gold'
                      : isLight
                        ? 'text-steel-blue'
                        : 'text-mid-gray'
                  )}
                />
              </motion.div>
            </button>

            <AnimatePresence initial={false}>
              {isActive && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: 'auto', opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{
                    height: { duration: 0.3, ease: [0.16, 1, 0.3, 1] },
                    opacity: { duration: 0.2, delay: 0.1 },
                  }}
                  className="overflow-hidden"
                >
                  <div className="px-4 pb-4 pt-0">
                    <p className={cn(
                      'text-sm leading-relaxed mb-4',
                      isLight ? 'text-steel-blue' : 'text-light-gray'
                    )}>
                      {service.description}
                    </p>
                    <a
                      href={service.href}
                      className="inline-flex items-center gap-1 text-xs font-heading font-semibold tracking-wider uppercase text-industrial-gold hover:text-[#d4940f] transition-colors"
                    >
                      Learn More
                      <ChevronRight className="w-3 h-3" />
                    </a>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        );
      })}
    </div>
  );
}
