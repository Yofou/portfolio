<script lang="ts">
	export let url: string
</script>

<nav
	class="
      grid grid-cols-[repeat(2,max-content),1fr,max-content]
      gap-4
      mb-10
      -translate-x-2
    "
>
	<a
		class="
        	font-semibold
        	rounded-full
        	hover:text-yellow-300 hover:underline
        	px-2
        	py-1
      	"
		href="/"
		class:passthrough={url == '/'}
		tabindex={url == '/' ? -1 : 0}
	>
		Home
	</a>
	<a
		class="
        font-semibold
        rounded-full
        hover:text-yellow-300 hover:underline
        px-2
        py-1
      "
		href="/blogs"
		class:passthrough={url.includes('/blogs')}
		tabindex={url.includes('/blogs') ? -1 : 0}
	>
		Blogs
	</a>

	<a class="justify-self-end" href="https://github.com/Yofou">
		<img
			class="w-[30px] h-[30px] rounded-full"
			src="/icons/github.svg"
			alt="Github Profiled"
			width="150"
			height="150"
		/>
	</a>

	<a href="https://www.linkedin.com/in/nathan-ewen-b86315182/">
		<img
			class="w-[30px] h-[30px] rounded-[5px]"
			src="/icons/linkedin.svg"
			alt="Linked in Profile"
			width="150"
			height="150"
		/>
	</a>
</nav>

<style>
	.passthrough {
		@apply pointer-events-none underline;
	}
</style>
