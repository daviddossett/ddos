<script lang="ts">
  import Experience from "#lib/components/Experience.svelte";
  import Footer from "#lib/components/Footer.svelte";
  import Projects from "#lib/components/Projects.svelte";
</script>

<main>
  <section class="intro-section" aria-labelledby="about-heading">
    <h1 id="about-heading" class="section-title">About</h1>
    <div class="intro-copy">
      <p>
        I&apos;m a product designer based in Seattle, currently working at <a
          href="https://github.com"
          target="_blank"
          rel="noopener noreferrer">GitHub</a
        > on <span class="intro-phrase"
          >the <a
            href="https://github.com/features/ai/github-app"
            target="_blank"
            rel="noopener noreferrer">Copilot Labs</a
          > team.</span
        > I love building tools for developers.
      </p>
      <p>
        Previously, I led design for <a
          href="https://code.visualstudio.com/"
          target="_blank"
          rel="noopener noreferrer">VS Code</a
        >.
      </p>
    </div>
  </section>
  <Projects />
  <Experience />
</main>
<Footer />
