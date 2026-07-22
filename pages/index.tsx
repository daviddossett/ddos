import Layout from "../components/layout";
import { Footer } from "../components/footer";
import Link from "next/link";
import { ExperienceList } from "../components/experience";
import { Projects } from "../components/projects";

const githubLink = (
  <Link href="https://github.com" target="_blank" rel="noopener noreferrer">
    GitHub
  </Link>
);

const copilotLabsLink = (
  <Link href="https://github.com/features/ai/github-app" target="_blank" rel="noopener noreferrer">
    Copilot labs
  </Link>
);

const vsCodeLink = (
  <Link href="https://code.visualstudio.com/" target="_blank" rel="noopener noreferrer">
    VS Code
  </Link>
);

export default function Home() {
  return (
    <Layout>
      <main>
        <section className="intro-section" aria-labelledby="today-heading">
          <h1 id="today-heading" className="section-title">
            Today
          </h1>
          <div className="intro-copy">
            <p>
              I&apos;m a product designer based in Seattle, currently working on the {copilotLabsLink} team at{" "}
              {githubLink}. I love building tools for developers.
            </p>
            <p>Previously, I led design for {vsCodeLink}.</p>
          </div>
        </section>
        <Projects />
        <ExperienceList />
      </main>
      <Footer />
    </Layout>
  );
}
