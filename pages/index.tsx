import Layout from "../components/layout";
import { Footer } from "../components/footer";
import Link from "next/link";
import { ExperienceList } from "../components/experience";
import { Projects } from "../components/projects";

const githubLink = (
  <Link className="intro" href="https://github.com" target="blank">
    GitHub
  </Link>
);

const copilotLink = (
  <Link className="intro" href="https://github.com/features/copilot" target="blank">
    Copilot
  </Link>
);

const vsCodeLink = (
  <Link className="intro" href="https://code.visualstudio.com" target="blank">
    VS Code
  </Link>
);

export default function Home() {
  return (
    <Layout>
      <main>
        <div className="py-16 max-w-3xl flex flex-col gap-8">
          <p className="intro">
            Hi, I'm David. I'm a designer and okayish developer based in Seattle. I'm currently working at {githubLink}{" "}
            building {copilotLink}.
          </p>
          <p className="intro">Previously, I led design for {vsCodeLink} at Microsoft.</p>
        </div>
        <div className="flex flex-col gap-14">
          <Projects />
          <ExperienceList />
        </div>
      </main>
      <Footer />
    </Layout>
  );
}
