<script lang="ts">
  import "../styles/global.css";

  let { children } = $props();
</script>

<svelte:head>
  <link rel="icon" type="image/png" sizes="64x64" href="/favicon.png" />
</svelte:head>

{@render children()}
