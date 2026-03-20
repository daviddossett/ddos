import React from "react";
import { motion } from "framer-motion";

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
    <motion.div
      whileHover={{ x: 4 }}
      transition={{ type: "spring", stiffness: 400, damping: 25 }}
    >
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
    </motion.div>
  );
};
