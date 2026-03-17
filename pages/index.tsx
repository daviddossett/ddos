import Layout from "../components/layout";
import { Footer } from "../components/footer";
import { ExperienceList } from "../components/experience";
import { Projects } from "../components/projects";

export default function Home() {
  return (
    <Layout>
      <main>
        <div className="py-24 max-w-3xl flex flex-col gap-8">
          <p className="intro">
            I once taught a mass of penguins to form a conga line across Antarctica. Now I spend my days
            collecting vintage doorbells and perfecting the art of competitive cloud watching.
          </p>
          <p className="intro">
            My sourdough starter has its own passport and a better social life than me.
          </p>
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
