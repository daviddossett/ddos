import Layout from "../components/layout";
import { Footer } from "../components/footer";
import Link from "next/link";
import { ExperienceList } from "../components/experience";
import { Projects } from "../components/projects";
import { useEffect, useState, useRef } from "react";

const githubLink = (
  <Link className="intro" href="https://github.com" target="_blank" rel="noopener noreferrer">
    GitHub
  </Link>
);

const copilotLink = (
  <Link className="intro" href="https://github.com/features/copilot" target="_blank" rel="noopener noreferrer">
    Copilot
  </Link>
);

const vsCodeLink = (
  <Link className="intro" href="https://code.visualstudio.com" target="_blank" rel="noopener noreferrer">
    VS Code
  </Link>
);

interface StatItem {
  label: string;
  value: string;
  description: string;
}

const stats: StatItem[] = [
  { label: "Years in Design", value: "10+", description: "Building developer tools since 2015" },
  { label: "Products Shipped", value: "20+", description: "Across GitHub and Microsoft" },
  { label: "Users Impacted", value: "Millions", description: "VS Code has 15M+ monthly active users" },
];

function useIntersectionObserver(threshold = 0.1) {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold }
    );

    const currentRef = ref.current;
    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, [threshold]);

  return { ref, isVisible };
}

function StatsSection() {
  const { ref, isVisible } = useIntersectionObserver(0.2);

  return (
    <div
      ref={ref}
      className={`grid grid-cols-1 sm:grid-cols-3 gap-8 py-12 border-y border-slate-200 dark:border-slate-700 transition-all duration-700 ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
      }`}
    >
      {stats.map((stat, index) => (
        <div
          key={stat.label}
          className="flex flex-col gap-1 text-center sm:text-left"
          style={{ transitionDelay: `${index * 100}ms` }}
        >
          <span className="text-3xl font-bold text-blue-600 dark:text-blue-400">
            {stat.value}
          </span>
          <span className="text-sm font-medium text-slate-900 dark:text-slate-200">
            {stat.label}
          </span>
          <span className="text-xs text-slate-500 dark:text-slate-400">
            {stat.description}
          </span>
        </div>
      ))}
    </div>
  );
}

function AvailabilityBadge() {
  return (
    <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800">
      <span className="relative flex h-2 w-2">
        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75" />
        <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500" />
      </span>
      <span className="text-xs font-medium text-green-700 dark:text-green-300">
        Open to speaking opportunities
      </span>
    </div>
  );
}

function ScrollIndicator() {
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
      const progress = totalHeight > 0 ? (window.scrollY / totalHeight) * 100 : 0;
      setScrollProgress(Math.min(progress, 100));
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="fixed top-0 left-0 w-full h-0.5 z-[100]">
      <div
        className="h-full bg-blue-500 transition-all duration-150 ease-out"
        style={{ width: `${scrollProgress}%` }}
      />
    </div>
  );
}

export default function Home() {
  return (
    <Layout>
      <ScrollIndicator />
      <main>
        <div className="py-24 max-w-3xl flex flex-col gap-8">
          <AvailabilityBadge />
          <div className="flex flex-col gap-6">
            <p className="intro">
              Hi, I'm David. I'm a designer and okayish developer based in Seattle. I'm currently
              working at {githubLink} building {copilotLink}.
            </p>
            <p className="intro">Previously, I led design for {vsCodeLink} at Microsoft.</p>
            <p className="text-base text-slate-500 dark:text-slate-400 leading-relaxed max-w-2xl">
              I'm passionate about making developer tools more approachable and delightful. I believe
              that great design can reduce cognitive load and help developers stay in flow. My work
              focuses on the intersection of AI, design systems, and developer experience.
            </p>
          </div>

          {/* CTA buttons */}
          <div className="flex flex-wrap gap-3 pt-2">
            <Link
              href="/#projects"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-blue-600 text-white text-sm font-medium hover:bg-blue-700 transition-colors shadow-sm"
            >
              View my work
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </Link>
            <Link
              href="mailto:hello@ddossett.com"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg border border-slate-300 dark:border-slate-600 text-sm font-medium text-slate-700 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-slate-800 transition-colors"
            >
              Get in touch
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
            </Link>
          </div>
        </div>

        <StatsSection />

        <div className="flex flex-col gap-14 mt-16">
          <Projects />
          <ExperienceList />
        </div>
      </main>
      <Footer />
    </Layout>
  );
}
