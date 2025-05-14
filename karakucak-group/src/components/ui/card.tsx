import React from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { cn } from '@/lib/utils';

export interface CardProps {
  title: string;
  description?: string;
  imageSrc?: string;
  imageAlt?: string;
  link?: string;
  icon?: React.ReactNode;
  className?: string;
  imageClassName?: string;
  contentClassName?: string;
  index?: number;
  variant?: 'default' | 'elevated' | 'bordered' | 'minimal';
  aspectRatio?: 'auto' | 'square' | 'video' | 'wide';
  hoverEffect?: boolean;
  children?: React.ReactNode;
}

export const Card = ({
  title,
  description,
  imageSrc,
  imageAlt = "Karakucak Group",
  link,
  icon,
  className = '',
  imageClassName = '',
  contentClassName = '',
  index = 0,
  variant = 'default',
  aspectRatio = 'auto',
  hoverEffect = true,
  children,
}: CardProps) => {
  const variants = {
    hidden: { opacity: 0, y: 20 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.1,
        duration: 0.5,
      },
    }),
  };

  const aspectRatioClasses = {
    auto: '',
    square: 'aspect-square',
    video: 'aspect-video',
    wide: 'aspect-[16/9]',
  };

  const variantClasses = {
    default: 'bg-white dark:bg-gray-800 shadow-md hover:shadow-lg',
    elevated: 'bg-white dark:bg-gray-800 shadow-xl hover:shadow-2xl',
    bordered: 'border border-gray-200 dark:border-gray-700 hover:border-blue-500 dark:hover:border-blue-500',
    minimal: 'bg-transparent',
  };

  const CardWrapper = ({ children }: { children: React.ReactNode }) => {
    if (link) {
      return (
        <Link href={link} className="block h-full focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 rounded-lg">
          {children}
        </Link>
      );
    }
    return <>{children}</>;
  };

  return (
    <motion.div
      custom={index}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-100px" }}
      variants={variants}
      className={cn(
        'rounded-xl overflow-hidden transition-all duration-300 h-full',
        variantClasses[variant],
        hoverEffect && 'transform hover:-translate-y-1',
        className
      )}
    >
      <CardWrapper>
        {imageSrc && (
          <div className={cn('relative overflow-hidden', aspectRatioClasses[aspectRatio], imageClassName)}>
            <Image
              src={imageSrc}
              alt={imageAlt}
              fill
              className="object-cover transition-transform duration-500 hover:scale-105"
              sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
            />
          </div>
        )}

        <div className={cn('p-5', contentClassName)}>
          {icon && <div className="text-blue-600 mb-4">{icon}</div>}
          <h3 className="text-xl font-semibold mb-2 text-gray-900 dark:text-white">{title}</h3>
          
          {description && (
            <p className="text-gray-600 dark:text-gray-300 mb-4">{description}</p>
          )}
          
          {children}
        </div>
      </CardWrapper>
    </motion.div>
  );
};
