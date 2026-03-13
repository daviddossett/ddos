import Link from 'next/link';
import Image, { StaticImageData } from 'next/image';
import { useState, useRef, useCallback } from 'react';

type CardVariant = 'default' | 'featured' | 'compact';

interface TagProps {
  label: string;
  color?: 'blue' | 'green' | 'purple' | 'orange' | 'slate';
}

interface ICard {
  title: string;
  desc: string;
  to: string;
  image: StaticImageData;
  variant?: CardVariant;
  tags?: TagProps[];
  date?: string;
  isExternal?: boolean;
}

const tagColorMap: Record<NonNullable<TagProps['color']>, string> = {
  blue: 'bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-300',
  green: 'bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-300',
  purple: 'bg-purple-100 text-purple-700 dark:bg-purple-900/30 dark:text-purple-300',
  orange: 'bg-orange-100 text-orange-700 dark:bg-orange-900/30 dark:text-orange-300',
  slate: 'bg-slate-100 text-slate-700 dark:bg-slate-700 dark:text-slate-300',
};

const variantStyles: Record<CardVariant, string> = {
  default: 'py-3 md:px-6 md:py-5 rounded-xl flex gap-4 items-center',
  featured: 'p-6 rounded-2xl flex flex-col sm:flex-row gap-6 items-start border border-slate-200 dark:border-slate-700 shadow-sm',
  compact: 'py-2 px-3 rounded-lg flex gap-3 items-center',
};

function Tag({ label, color = 'slate' }: TagProps) {
  return (
    <span className={`inline-flex items-center px-2 py-0.5 rounded-full text-xs font-medium ${tagColorMap[color]}`}>
      {label}
    </span>
  );
}

function Card({ title, desc, to, image, variant = 'default', tags, date, isExternal }: ICard): JSX.Element {
  const [isHovered, setIsHovered] = useState(false);
  const cardRef = useRef<HTMLDivElement>(null);

  const handleMouseEnter = useCallback(() => setIsHovered(true), []);
  const handleMouseLeave = useCallback(() => setIsHovered(false), []);

  const imageSize = variant === 'featured' ? 80 : variant === 'compact' ? 40 : 60;

  return (
    <Link
      href={to}
      target={isExternal ? '_blank' : undefined}
      rel={isExternal ? 'noopener noreferrer' : undefined}
    >
      <div
        ref={cardRef}
        className={`${variantStyles[variant]} transition-all duration-200 ${
          isHovered
            ? 'bg-slate-50 dark:bg-slate-800/50 shadow-md -translate-y-0.5'
            : 'md:hover:bg-[#64646426]'
        }`}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        <div className="relative flex-shrink-0">
          <Image
            src={image}
            alt={`${title} thumbnail`}
            width={imageSize}
            height={imageSize}
            className={`rounded-lg object-cover transition-transform duration-200 ${
              isHovered ? 'scale-105' : ''
            }`}
          />
          {isExternal && (
            <div className="absolute -top-1 -right-1 bg-white dark:bg-slate-800 rounded-full p-0.5 shadow-sm">
              <svg className="w-3 h-3 text-slate-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
              </svg>
            </div>
          )}
        </div>
        <div className="flex-1 min-w-0">
          <div className="flex items-center gap-2">
            <h2 className={`leading-6 truncate ${variant === 'featured' ? 'text-lg font-semibold' : ''}`}>
              {title}
            </h2>
            {isExternal && (
              <svg className="w-4 h-4 text-slate-400 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
              </svg>
            )}
          </div>
          <p className={`leading-relaxed text-neutral-400 ${variant === 'compact' ? 'text-sm' : ''}`}>
            {desc}
          </p>
          {(tags || date) && (
            <div className="flex items-center gap-2 mt-2 flex-wrap">
              {date && (
                <span className="text-xs text-slate-400 dark:text-slate-500">{date}</span>
              )}
              {tags?.map((tag) => (
                <Tag key={tag.label} {...tag} />
              ))}
            </div>
          )}
        </div>
      </div>
    </Link>
  );
}

export default Card;
