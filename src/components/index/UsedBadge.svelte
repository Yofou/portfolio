<script lang="ts">
	export let src: any;
	export let alt = '';

  $: dataColor = $$props["data-color"]
</script>

<li
  data-color={dataColor}
	class="bg-purple-300 used-item rounded-[5px] group grid text-white/80 grid-cols-[20px,max-content] items-center font-bold gap-2 tracking-wider uppercase cursor-pointer px-4 py-2"
>
	<svelte:component this={src} />
	<slot />
</li>

<style lang="scss">
	:global(.used-item:nth-of-type(n + 15)) {
		@apply hidden md:grid;
	}

	:global(.cancel > .used-item) {
		@apply grid;
	}
</style>
