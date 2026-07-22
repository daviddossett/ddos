import Layout from "../components/layout";
import { Footer } from "../components/footer";

export default function GitHubCopilot() {
  return (
    <Layout
      title="GitHub Copilot — David Dossett"
      description="My work on GitHub Copilot, an AI pair programmer that helps you write code faster."
    >
      <main>
        <section className="intro-section" aria-labelledby="copilot-heading">
          <h1 id="copilot-heading" className="section-title">
            GitHub Copilot
          </h1>
          <div className="intro-copy">
            <p>
              My work on Copilot Chat, Inline Chat, and extensibility in VS Code.
            </p>
          </div>
        </section>
      </main>
      <Footer />
    </Layout>
  );
}
