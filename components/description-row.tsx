import React, { ReactNode } from "react";
import Link from "next/link";

type DescriptionRowSize = "default" | "large" | "small";

interface DescriptionRowProps {
  title: string;
  descriptionPrimary: string;
  descriptionSecondary?: string;
  href?: string;
  icon?: ReactNode;
  size?: DescriptionRowSize;
  badge?: string;
  metadata?: string;
}

const sizeStyles: Record<DescriptionRowSize, { title: string; description: string }> = {
  large: {
    title: "text-lg font-semibold mb-1.5",
    description: "text-base",
  },
  default: {
    title: "text-base font-medium mb-1",
    description: "text-sm",
  },
  small: {
    title: "text-sm font-medium mb-0.5",
    description: "text-xs",
  },
};

export const DescriptionRow: React.FC<DescriptionRowProps> = ({
  title,
  descriptionPrimary,
  descriptionSecondary,
  href,
  icon,
  size = "default",
  badge,
  metadata,
}) => {
  const styles = sizeStyles[size];

  const content = (
    <div className={`flex items-start gap-3 group ${href ? "cursor-pointer" : ""}`}>
      {/* Optional icon */}
      {icon && (
        <div className="flex-shrink-0 mt-0.5 w-8 h-8 rounded-lg bg-slate-100 dark:bg-slate-800 flex items-center justify-center text-slate-500 dark:text-slate-400 group-hover:bg-blue-50 dark:group-hover:bg-blue-900/20 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
          {icon}
        </div>
      )}

      <div className="flex-1 min-w-0">
        <div className="flex items-center gap-2 flex-wrap">
          <h3
            className={`${styles.title} ${
              href
                ? "group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors"
                : ""
            }`}
          >
            {title}
          </h3>
          {badge && (
            <span className="inline-flex items-center px-2 py-0.5 rounded-full text-xs font-medium bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-300">
              {badge}
            </span>
          )}
        </div>

        <p className={`flex flex-row items-center gap-2 mb-0 text-slate-600 dark:text-slate-400 ${styles.description}`}>
          {descriptionPrimary}
          {descriptionSecondary && (
            <>
              <span className="text-2xl font-bold leading-4 text-blue-400">
                .
              </span>
              <span>{descriptionSecondary}</span>
            </>
          )}
        </p>

        {metadata && (
          <p className="mt-1 text-xs text-slate-400 dark:text-slate-500">{metadata}</p>
        )}
      </div>

      {/* Arrow indicator for linked rows */}
      {href && (
        <div className="flex-shrink-0 mt-1 text-slate-300 dark:text-slate-600 group-hover:text-blue-500 dark:group-hover:text-blue-400 transition-colors">
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </div>
      )}
    </div>
  );

  if (href) {
    const isExternal = href.startsWith("http");
    return (
      <Link
        href={href}
        target={isExternal ? "_blank" : undefined}
        rel={isExternal ? "noopener noreferrer" : undefined}
        className="block rounded-lg -mx-3 px-3 py-2 hover:bg-slate-50 dark:hover:bg-slate-800/50 transition-colors"
      >
        {content}
      </Link>
    );
  }

  return <div>{content}</div>;
};
