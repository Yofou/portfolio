<script lang="ts">
	export let name: string;
	export let description: string;
	export let src: string;
	export let position: 'Frontend' | 'Backend' | 'Fullstack';
	export let classImg: string | undefined = undefined;
	export let href = '/';
	export let width: string | undefined = undefined;
	export let height: string | undefined = undefined;
</script>

<div
	class="
      grid
      grid-cols-1 md:grid-cols-[150px,1fr]
      grid-rows-[max-content,1fr]
      relative
      gap-2 gap-x-8
      w-full
      min-h-[200px]
      px-6
      py-4
      rounded-[10px]
      bg-purple-300
    "
>
	<img
		class="
        w-full
        hidden md:block
        md:col-start-1
        md:col-end-2
        row-start-1
        row-end-[-1]
        {classImg ?? 'place-self-center'}
      "
		{src}
		alt=""
		{width}
		{height}
	/>
	<div
		class="
        col-start-1 col-end-2
        md:col-start-2 md:col-end-3
        row-span-2
        gap-y-2
        grid grid-cols-1
        h-full
        grid-rows-[max-content,1fr]
      "
	>
		<a
			{href}
			class="
          text-[1.3rem]
          justify-self-start
          rounded-full
          px-4
          py-2
          -ml-4
          text-yellow-300
          before:absolute
          before:inset-0
     "
    >
      { name } - { position } Developer
    </a>
		<p class="row-start-2 row-end-3 leading-[1.5rem] text-white/80">{description}</p>
	</div>
</div>
