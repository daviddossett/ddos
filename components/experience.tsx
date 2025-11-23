import React from "react";
import { DescriptionRow } from "./description-row";

interface ExperienceData {
  title: string;
  company: string;
  description: string;
}

const experiences: ExperienceData[] = [
  {
    title: "Staff Product Designer, Copilot",
    company: "GitHub",
    description: "2025 — Present",
  },
  {
    title: "Principal Designer, VS Code",
    company: "Microsoft",
    description: "2024",
  },
  {
    title: "Senior Designer, VS Code",
    company: "Microsoft",
    description: "2021 — 2024",
  },
  {
    title: "Senior Designer, Product Insights",
    company: "Microsoft",
    description: "2019 — 2021",
  },
  {
    title: "Designer 2, Aria",
    company: "Microsoft",
    description: "2018 — 2019",
  },
  {
    title: "Designer, Aria",
    company: "Microsoft",
    description: "2016 — 2018",
  },
  {
    title: "Intern, HoloLens",
    company: "8ninths",
    description: "2015",
  },
];

export const ExperienceList: React.FC = () => {
  return (
    <div className="flex-col">
      <h2 className="mt-0 font-base font-semibold text-blue-600 dark:text-blue-400">Experience</h2>
      <div className="flex flex-col gap-6">
        {experiences.map((experience, index) => (
          <DescriptionRow
            key={index}
            title={experience.title}
            descriptionPrimary={experience.company}
            descriptionSecondary={experience.description}
          />
        ))}
      </div>
    </div>
  );
};
