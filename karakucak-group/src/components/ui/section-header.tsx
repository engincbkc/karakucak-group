import React from 'react';
import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';

interface SectionHeaderProps {
  title: string;
  subtitle?: string;
  alignment?: 'left' | 'center' | 'right';
  titleSize?: 'sm' | 'md' | 'lg' | 'xl';
  className?: string;
  subtitleClassName?: string;
  showLine?: boolean;
  darkMode?: boolean;
}

export const SectionHeader = ({
  title,
  subtitle,
  alignment = 'left',
  titleSize = 'lg',
  className = '',
  subtitleClassName = '',
  showLine = true,
  darkMode = false,
}: SectionHeaderProps) => {
  const alignmentClasses = {
    left: 'text-left',
    center: 'text-center mx-auto',
    right: 'text-right ml-auto',
  };

  const titleSizeClasses = {
    sm: 'text-2xl md:text-3xl',
    md: 'text-3xl md:text-4xl',
    lg: 'text-4xl md:text-5xl',
    xl: 'text-5xl md:text-6xl',
  };

  const textColor = darkMode ? 'text-white' : 'text-gray-900 dark:text-white';

  return (
    <div className={cn('mb-12', alignmentClasses[alignment], className)}>
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className={cn('font-bold mb-4', titleSizeClasses[titleSize], textColor)}
      >
        {title}
      </motion.h2>
      
      {showLine && (
        <motion.div
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className={cn(
            'h-1 bg-blue-600 rounded transform origin-left',
            alignment === 'center' ? 'w-24 mx-auto' : alignment === 'right' ? 'w-24 ml-auto' : 'w-24'
          )}
        />
      )}
      
      {subtitle && (
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className={cn(
            'mt-4 text-lg md:text-xl',
            darkMode ? 'text-gray-200' : 'text-gray-700 dark:text-gray-300',
            subtitleClassName
          )}
        >
          {subtitle}
        </motion.p>
      )}
    </div>
  );
};
