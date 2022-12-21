<script lang="ts">
	import '$lib/app.css';
	import Nav from '$components/shared/Nav.svelte';
  import Cursor from '$components/shared/Cursor.svelte';
</script>

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
