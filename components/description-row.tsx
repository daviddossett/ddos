import React from "react";

interface DescriptionRowProps {
  title: string;
  descriptionPrimary: string;
  descriptionSecondary?: string;
}

export const DescriptionRow: React.FC<DescriptionRowProps> = React.memo(({
  title,
  descriptionPrimary,
  descriptionSecondary,
}) => {
  return (
    <div>
      <h3 className="mb-1">{title}</h3>
      <p className="flex flex-row gap-2 mb-0 text-slate-600 dark:text-slate-400">
        {descriptionPrimary}
        {descriptionSecondary && (
          <>
            <span className="text-2xl font-bold leading-4 text-blue-400">
              .
            </span>
            {descriptionSecondary}
          </>
        )}
      </p>
    </div>
  );
});
