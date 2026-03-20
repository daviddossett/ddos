import React from "react";

interface DescriptionRowProps {
  title: string;
  descriptionPrimary: string;
  descriptionSecondary?: string;
}

export const DescriptionRow: React.FC<DescriptionRowProps> = ({
  title,
  descriptionPrimary,
  descriptionSecondary,
}) => {
  return (
    <div>
      <h3 className="mb-1">{title}</h3>
      <p className="flex flex-row gap-2 mb-0 text-theme-muted">
        {descriptionPrimary}
        {descriptionSecondary && (
          <>
            <span className="text-2xl font-bold leading-4 text-theme-dot">
              .
            </span>
            {descriptionSecondary}
          </>
        )}
      </p>
    </div>
  );
};
