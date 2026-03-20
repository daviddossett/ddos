import Image from "next/image";
import { motion } from "framer-motion";
import { DescriptionRow } from "./description-row";

interface ProjectProps {
  title: string;
  description: string;
  images: string[];
}

const Project: React.FC<ProjectProps> = ({ title, description, images }) => {
  return (
    <div className="flex flex-col gap-4">
      <DescriptionRow title={title} descriptionPrimary={description} />
      {images.map((image, index) => (
        <div key={index} className="overflow-hidden rounded-sm">
          <motion.div
            whileHover={{ scale: 1.03 }}
            transition={{ type: "spring", stiffness: 300, damping: 25 }}
          >
            <Image src={image} alt={title} width="1600" height="800" className="rounded-sm" />
          </motion.div>
        </div>
      ))}
    </div>
  );
};

const projectsData: ProjectProps[] = [
  {
    title: "GitHub Copilot",
    description: "Copilot Chat, Inline Chat, and extensibility in VS Code",
    images: ["/images/copilot-chat.png"],
  },
  {
    title: "Merge Editor",
    description: "Reducing anxiety when resolving complex conflicts",
    images: ["/images/vscode-merge-editor.png"],
  },
  {
    title: "Command Center",
    description: "Bringing keyboard efficiency to the masses",
    images: ["/images/vscode-command-center.png"],
  },
  {
    title: "Profiles",
    description: "Configure VS Code for different workloads",
    images: ["/images/vscode-profiles.png"],
  },
  {
    title: "Default Themes",
    description: "Modernized, accessible, dark, light, and high contrast themes",
    images: ["/images/vscode-theme-dark.png", "/images/vscode-theme-light.png"],
  },
  {
    title: "GitHub Pull Requests & Issues Extension",
    description: "Revamped UI for the much-loved GitHub extension",
    images: ["/images/vscode-ghpri.png"],
  },
  {
    title: "Webview Toolkit for Visual Studio Code",
    description: "A component library for building webview-based extensions in Visual Studio Code",
    images: ["/images/vscode-webview-toolkit.png"],
  },
  {
    title: "Grid Playground",
    description: "Side project to quickly generate CSS grid layouts",
    images: ["/images/grid-playground.png"],
  },
];

const containerVariants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.1 },
  },
} as const;

const projectVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: "easeOut" as const },
  },
};

export const Projects: React.FC = () => {
  return (
    <div className="flex-col">
      <h2 className="mt-0 font-base text-theme-accent">Recent Projects</h2>
      <motion.div
        className="flex flex-col gap-16"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-50px" }}
      >
        {projectsData.map((project, index) => (
          <motion.div key={index} variants={projectVariants}>
            <Project {...project} />
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
};
