import Layout from "../components/layout";
import { Footer } from "../components/footer";
import Link from "next/link";
import { ExperienceList } from "../components/experience";
import { Projects } from "../components/projects";
import { motion } from "framer-motion";

const AnimatedLink: React.FC<{ href: string; children: React.ReactNode }> = ({
  href,
  children,
}) => (
  <motion.span
    className="inline-block"
    whileHover={{ y: -2, scale: 1.03 }}
    whileTap={{ scale: 0.97 }}
    transition={{ type: "spring", stiffness: 400, damping: 17 }}
  >
    <Link className="intro" href={href} target="blank">
      {children}
    </Link>
  </motion.span>
);

export default function Home() {
  return (
    <Layout>
      <main>
        <motion.div
          className="py-24 max-w-3xl flex flex-col gap-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          <p className="intro">
            Hi, I&#39;m David. I&#39;m a designer and okayish developer based in
            Seattle. I&#39;m currently working at{" "}
            <AnimatedLink href="https://github.com">GitHub</AnimatedLink>{" "}
            building{" "}
            <AnimatedLink href="https://github.com/features/copilot">
              Copilot
            </AnimatedLink>
            .
          </p>
          <motion.p
            className="intro"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1, ease: "easeOut" }}
          >
            Previously, I led design for{" "}
            <AnimatedLink href="https://code.visualstudio.com">
              VS Code
            </AnimatedLink>{" "}
            at Microsoft.
          </motion.p>
        </motion.div>
        <motion.div
          className="flex flex-col gap-14"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.4, delay: 0.2 }}
        >
          <Projects />
          <ExperienceList />
        </motion.div>
      </main>
      <Footer />
    </Layout>
  );
}
