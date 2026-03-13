import React, { useState, useMemo } from "react";
import { DescriptionRow } from "./description-row";

interface ExperienceData {
  title: string;
  company: string;
  description: string;
  skills: string[];
  highlights?: string[];
  companyUrl?: string;
  isCurrent?: boolean;
}

const experiences: ExperienceData[] = [
  {
    title: "Staff Product Designer, Copilot",
    company: "GitHub",
    description: "2025 - Present",
    skills: ["AI/ML", "Design Systems", "Developer Tools", "Prototyping"],
    highlights: [
      "Leading design for GitHub Copilot's core chat and inline experiences",
      "Defining interaction patterns for AI-assisted software development",
      "Collaborating with research to validate novel AI UX paradigms",
    ],
    companyUrl: "https://github.com",
    isCurrent: true,
  },
  {
    title: "Principal Designer, VS Code",
    company: "Microsoft",
    description: "2024",
    skills: ["Design Leadership", "Developer Tools", "Accessibility", "Extensions"],
    highlights: [
      "Led design strategy across VS Code's editor and extension ecosystem",
      "Drove adoption of new interaction patterns used by millions of developers",
    ],
    companyUrl: "https://code.visualstudio.com",
  },
  {
    title: "Senior Designer, VS Code",
    company: "Microsoft",
    description: "2021 — 2024",
    skills: ["UI Design", "Design Systems", "User Research", "Prototyping"],
    highlights: [
      "Designed the Merge Editor, Command Center, and Profiles features",
      "Modernized VS Code's default themes for accessibility compliance",
      "Shipped the Webview UI Toolkit component library",
    ],
    companyUrl: "https://code.visualstudio.com",
  },
  {
    title: "Senior Designer, Product Insights",
    company: "Microsoft",
    description: "2019 — 2021",
    skills: ["Data Visualization", "Dashboard Design", "Enterprise UX"],
    highlights: [
      "Designed analytics dashboards used across Microsoft product teams",
      "Led design for telemetry exploration and insight discovery tools",
    ],
  },
  {
    title: "Designer 2, Aria",
    company: "Microsoft",
    description: "2018 — 2019",
    skills: ["Telemetry", "SDK Design", "Documentation"],
  },
  {
    title: "Designer, Aria",
    company: "Microsoft",
    description: "2016 — 2018",
    skills: ["UX Design", "Interaction Design", "Onboarding"],
  },
  {
    title: "Intern, HoloLens",
    company: "8ninths",
    description: "2015",
    skills: ["Mixed Reality", "3D UI", "Spatial Design"],
    highlights: [
      "Prototyped mixed reality interfaces for enterprise HoloLens applications",
    ],
  },
];

type FilterOption = "all" | "GitHub" | "Microsoft" | "8ninths";

const filterOptions: FilterOption[] = ["all", "GitHub", "Microsoft", "8ninths"];

export const ExperienceList: React.FC = () => {
  const [filter, setFilter] = useState<FilterOption>("all");
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null);

  const filteredExperiences = useMemo(() => {
    if (filter === "all") return experiences;
    return experiences.filter((exp) => exp.company === filter);
  }, [filter]);

  const totalYears = useMemo(() => {
    const startYear = 2015;
    const currentYear = new Date().getFullYear();
    return currentYear - startYear;
  }, []);

  const toggleExpanded = (index: number) => {
    setExpandedIndex(expandedIndex === index ? null : index);
  };

  return (
    <div id="experience" className="flex-col scroll-mt-24">
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-2">
        <div>
          <h2 className="mt-0 font-base font-semibold text-blue-600 dark:text-blue-400">
            Experience
          </h2>
          <p className="text-sm text-slate-500 dark:text-slate-400">
            {totalYears}+ years in product design and developer tools
          </p>
        </div>

        {/* Filter pills */}
        <div className="flex gap-2 flex-wrap">
          {filterOptions.map((option) => (
            <button
              key={option}
              onClick={() => setFilter(option)}
              className={`px-3 py-1 rounded-full text-xs font-medium transition-colors ${
                filter === option
                  ? "bg-blue-100 text-blue-700 dark:bg-blue-900/40 dark:text-blue-300"
                  : "bg-slate-100 text-slate-600 dark:bg-slate-800 dark:text-slate-400 hover:bg-slate-200 dark:hover:bg-slate-700"
              }`}
            >
              {option === "all" ? "All" : option}
            </button>
          ))}
        </div>
      </div>

      <div className="flex flex-col gap-1">
        {filteredExperiences.map((experience, index) => (
          <div
            key={`${experience.company}-${experience.title}`}
            className={`relative pl-6 border-l-2 transition-colors ${
              experience.isCurrent
                ? "border-blue-400 dark:border-blue-500"
                : "border-slate-200 dark:border-slate-700"
            }`}
          >
            {/* Timeline dot */}
            <div
              className={`absolute -left-[7px] top-2 w-3 h-3 rounded-full border-2 ${
                experience.isCurrent
                  ? "bg-blue-400 border-blue-400 dark:bg-blue-500 dark:border-blue-500"
                  : "bg-white dark:bg-slate-900 border-slate-300 dark:border-slate-600"
              }`}
            />

            <div
              className="py-4 cursor-pointer group"
              onClick={() => toggleExpanded(index)}
              role="button"
              tabIndex={0}
              onKeyDown={(e) => e.key === "Enter" && toggleExpanded(index)}
            >
              <DescriptionRow
                title={experience.title}
                descriptionPrimary={experience.company}
                descriptionSecondary={experience.description}
              />

              {/* Skills */}
              <div className="flex gap-1.5 mt-3 flex-wrap">
                {experience.skills.map((skill) => (
                  <span
                    key={skill}
                    className="px-2 py-0.5 rounded-md text-xs bg-slate-100 text-slate-600 dark:bg-slate-800 dark:text-slate-400"
                  >
                    {skill}
                  </span>
                ))}
              </div>

              {/* Expandable highlights */}
              {experience.highlights && expandedIndex === index && (
                <ul className="mt-4 space-y-2">
                  {experience.highlights.map((highlight, hIdx) => (
                    <li
                      key={hIdx}
                      className="flex items-start gap-2 text-sm text-slate-600 dark:text-slate-400"
                    >
                      <span className="mt-1.5 w-1 h-1 rounded-full bg-slate-400 flex-shrink-0" />
                      {highlight}
                    </li>
                  ))}
                </ul>
              )}

              {/* Expand hint */}
              {experience.highlights && (
                <button
                  className="mt-2 text-xs text-slate-400 hover:text-slate-600 dark:hover:text-slate-300 transition-colors flex items-center gap-1"
                  aria-label={expandedIndex === index ? "Collapse details" : "Expand details"}
                >
                  <svg
                    className={`w-3 h-3 transition-transform ${expandedIndex === index ? "rotate-180" : ""}`}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                  {expandedIndex === index ? "Less" : "More"}
                </button>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
