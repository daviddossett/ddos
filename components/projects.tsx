import Link from "next/link";
import styles from "./entry-list.module.css";

interface ProjectProps {
  title: string;
  description: string;
  href: string;
}

const ProjectContent: React.FC<Omit<ProjectProps, "href">> = ({ title, description }) => (
  <>
    <span className="entry-title">{title}</span>
    <span className="entry-description">{description}</span>
  </>
);

const Project: React.FC<ProjectProps> = ({ title, description, href }) => {
  return (
    <li>
      <Link
        className={`${styles.row} entry entry-link`}
        href={href}
        target="_blank"
        rel="noopener noreferrer"
      >
        <ProjectContent title={title} description={description} />
      </Link>
    </li>
  );
};

export const Projects: React.FC = () => {
  return (
    <section className="content-section" aria-labelledby="projects-heading">
      <h2 id="projects-heading" className="section-title">
        Projects
      </h2>
      <ul className={`${styles.list} entry-list`}>
        <Project
          title="GitHub Copilot app"
          description="Parallel agentic coding with native GitHub context"
          href="https://github.com/features/ai/github-app"
        />
        <Project
          title="GitHub Copilot CLI"
          description="Coding agent built for the terminal"
          href="https://github.com/features/copilot/cli"
        />
        <Project
          title="Ace GitHub"
          description="Multiplayer agentic coding with your team"
          href="https://githubnext.com/talks/one-developer-two-dozen-agents-zero-alignment/"
        />
        <Project
          title="GitHub Models"
          description="Evaluate and improve your LLM prompts"
          href="https://github.com/features/models"
        />
        <Project
          title="GitHub Spark"
          description="Build and ship full-stack apps"
          href="https://github.com/features/spark"
        />
        <Project
          title="VS Code"
          description="The open source AI code editor"
          href="https://code.visualstudio.com/"
        />
      </ul>
    </section>
  );
};
