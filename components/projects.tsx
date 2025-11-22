import Image from "next/image";
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
        <Image key={index} src={image} alt={title} width="1600" height="800" className="rounded-md" />
      ))}
    </div>
  );
};

export const Projects: React.FC = () => {
  return (
    <div className="flex-col">
      <h2 className="mt-0 font-base font-semibold text-blue-600 dark:text-blue-400">Recent Projects</h2>
      <div className="flex flex-col gap-16">
        <Project
          title="GitHub Copilot"
          description="Copilot Chat, Inline Chat, and extensibility in VS Code"
          images={["/images/copilot-chat.png"]}
        />
        <Project
          title="Merge Editor"
          description="Reducing anxiety when resolving complex conflicts"
          images={["/images/vscode-merge-editor.png"]}
        />
        <Project
          title="Command Center"
          description="Bringing keyboard efficiency to the masses"
          images={["/images/vscode-command-center.png"]}
        />
        <Project
          title="Profiles"
          description="Configure VS Code for different workloads"
          images={["/images/vscode-profiles.png"]}
        />
        <Project
          title="Default Themes"
          description="Modernized, accessible, dark, light, and high contrast themes"
          images={["/images/vscode-theme-dark.png", "/images/vscode-theme-light.png"]}
        />
        <Project
          title="GitHub Pull Requests & Issues Extension"
          description="Revamped UI for the much-loved GitHub extension"
          images={["/images/vscode-ghpri.png"]}
        />
        <Project
          title="Webview Toolkit for Visual Studio Code"
          description="A component library for building webview-based extensions in Visual Studio Code"
          images={["/images/vscode-webview-toolkit.png"]}
        />
        <Project
          title="Grid Playground"
          description="Side project to quickly generate CSS grid layouts"
          images={["/images/grid-playground.png"]}
        />
      </div>
    </div>
  );
};
