<script lang="ts">
  import { page } from "$app/stores"
	import '$lib/app.css';
	import Nav from '$components/shared/Nav.svelte';
  import Cursor from '$components/shared/Cursor.svelte';
</script>

<svelte:head>
  <meta property="og:title" content="Nathans Portfolio">
  <meta property="og:description" content="Nathan Portfolio & Where they put their short blogs reviewing Web Developement tech.">
  <meta property="og:type" content="article">
  <meta property="og:image" content="{$page.url.host}/portfolio-thumbnail.png">
</svelte:head>

<main
	class="
      w-full
      justify-center
      min-h-screen
      grid-flow-row
      auto-rows-max
      grid grid-cols-container
      py-20
      px-4
      text-white
      selection:bg-purple-500
    "
>
	<Nav />
  <slot />
</main>

<Cursor />
