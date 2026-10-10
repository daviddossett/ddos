<script lang="ts">
  import { dev } from "$app/env";
  import { page } from "$app/state";
  import Header from "#lib/components/Header.svelte";

  const SITE = "https://ddossett.com";
  const title = "David Dossett";
  const description = "Product designer at GitHub";

  let { children } = $props();

  const fullTitle = dev ? `${title} (Dev)` : title;
  const pageUrl = $derived(new URL(page.url.pathname, SITE).toString());
</script>

<svelte:head>
  <title>{fullTitle}</title>
  <meta name="description" content={description} />

  <meta property="og:title" content={fullTitle} />
  <meta property="og:description" content={description} />
  <meta property="og:type" content="website" />
  <meta property="og:url" content={pageUrl} />

  <meta name="twitter:card" content="summary" />
  <meta name="twitter:title" content={fullTitle} />
  <meta name="twitter:description" content={description} />

  <link
    rel="preload"
    href="/fonts/InterVariable.woff2"
    as="font"
    type="font/woff2"
    crossorigin="anonymous"
  />
</svelte:head>

<div class="site-shell">
  <Header />
  {@render children()}
</div>
