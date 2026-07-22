import React from "react";
import styles from "./entry-list.module.css";
interface ExperienceData {
  title: string;
  company: string;
  description: string;
}

const experiences: ExperienceData[] = [
  {
    title: "Staff Product Designer, Copilot Labs",
    company: "GitHub",
    description: "2025 - Present",
  },
  {
    title: "Principal Designer, VS Code",
    company: "Microsoft",
    description: "2024",
  },
  {
    title: "Senior Designer, VS Code",
    company: "Microsoft",
    description: "2021–2024",
  },
  {
    title: "Senior Designer, Product Insights",
    company: "Microsoft",
    description: "2019–2021",
  },
  {
    title: "Designer 2, Aria",
    company: "Microsoft",
    description: "2018–2019",
  },
  {
    title: "Designer, Aria",
    company: "Microsoft",
    description: "2016–2018",
  },
  {
    title: "Intern, HoloLens",
    company: "8ninths",
    description: "2015",
  },
];

export const ExperienceList: React.FC = () => {
  return (
    <section className="content-section" aria-labelledby="experience-heading">
      <h2 id="experience-heading" className="section-title">
        Experience
      </h2>
      <ul className={`${styles.list} entry-list`}>
        {experiences.map((experience) => (
          <li
            key={`${experience.company}-${experience.title}`}
            className={`${styles.row} entry`}
          >
            <span className="entry-title">{experience.title}</span>
            <span className="entry-description">
              {experience.company}, {experience.description}
            </span>
          </li>
        ))}
      </ul>
    </section>
  );
};
