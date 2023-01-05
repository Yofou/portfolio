<script lang="ts">
  	import embla from 'embla-carousel-svelte'
    import NoBlogs from './NoBlogs.svelte';

	interface Blog {
		title: string;
		description: string;
		category: string;
		thumbnail: string;
		createdAt: string;
		href: string;
	}

	export let blogs: Blog[]

	let innerWidth: number
	$: isMd = innerWidth > 768
</script>

<svelte:window bind:innerWidth />

{#if blogs.length}
	<div data-mode={isMd ? "carousel" : ""} class="embla" use:embla={{ options: { align: 'center', active: isMd }, plugins: [] }}>
		<div class="embla__carousel grid gap-4 grid-flow-row md:grid-flow-col md:auto-cols-[540px]">
		{#each blogs as blog}
			<div class="embla__slide relative min-h-[450px] md:min-h-[700px] group overflow-hidden rounded-[10px] bg-purple-300">
				<img class="absolute w-full h-full object-cover object-bottom pointer-events-none rounded-b-[100px]" src={blog.thumbnail} alt="">
				<div class="bg-purple-300 px-8 py-5 absolute z-10 bottom-0 w-full items-start min-h-[250px] translate-y-[100px] group-hocus-within:translate-y-[0px] flex flex-col transition-transform left-0">
					<div class="flex justify-between w-full md:items-center">
						<h2 class="uppercase text-[1.1rem] md:text-[1.5rem] text-yellow-300">{blog.title}</h2>
						<p class="text-yellow-300">{blog.createdAt}</p>
					</div>
					<h2 class="uppercase px-2 py-1 mt-1 text-[0.8rem] bg-purple-600 w-full max-w-min rounded-full text-yellow-300">{blog.category}</h2>

					<p class="mt-4 opacity-0 group-hocus-within:opacity-100 transition-opacity">{blog.description}</p>
					<a class="mt-2 text-yellow-300 -translate-x-2 px-2 py-1 rounded-full underline lowercase opacity-0 group-hocus-within:opacity-100" href={blog.href}>Visit here</a>
				</div>
			</div>
		{/each}
		</div>
	</div>
{:else}
	<NoBlogs />
{/if}

<style>
	.embla {
		position: relative;
		overflow: hidden;
		grid-column: 1 / -1;
	}
</style>
