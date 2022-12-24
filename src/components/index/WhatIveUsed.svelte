<script lang="ts">
	import UsedBadge from './UsedBadge.svelte';

	let readMore = false;
	const onReadMore = () => (readMore = !readMore);
</script>

<section class="w-full">
	<ul class="w-full flex justify-center md:justify-start flex-wrap gap-2" class:cancel={readMore}>
		<UsedBadge data-color="#61DAFB" src="/icons/react.svg">React</UsedBadge>
		<UsedBadge data-color="#F1413D" src="/icons/svelte.svg">Svelte</UsedBadge>
		<UsedBadge data-color="#4FC08D" src="/icons/vue.svg">Vuejs</UsedBadge>
		<UsedBadge data-color="#FFFFFF" src="/icons/next.svg">Next</UsedBadge>
		<UsedBadge data-color="#00DC82" src="/icons/nuxt.svg">Nuxt</UsedBadge>
		<UsedBadge data-color="#16B7FB" src="/icons/quasar.svg">Quasar</UsedBadge>
		<UsedBadge data-color="#663399" src="/icons/gatsby.svg">Gatsby</UsedBadge>
		<UsedBadge data-color="#FF4154" src="/icons/react-query.svg">React Query</UsedBadge>
		<UsedBadge data-color="#593D88" src="/icons/redux.svg">Redux</UsedBadge>
		<UsedBadge data-color="#EC5990" src="/icons/react-hook-form.svg">React Hook Form</UsedBadge>
		<UsedBadge data-color="#ED225D" src="/icons/p5.svg">p5.js</UsedBadge>
		<UsedBadge data-color="#38B2AC" src="/icons/tailwind.svg">TailwindCss</UsedBadge>
		<UsedBadge data-color="#48B0F1" src="/icons/windi.svg">WindiCss</UsedBadge>
		<UsedBadge data-color="#646CFF" src="/icons/vite.svg">Vite</UsedBadge>
		<UsedBadge data-color="#06080B" src="/icons/fasitfy.svg">Fasitfy</UsedBadge>
		<UsedBadge data-color="#404D59" src="/icons/express.svg">Express.js</UsedBadge>
		<UsedBadge data-color="#E0234E" src="/icons/nest.svg">Nestjs</UsedBadge>
		<UsedBadge data-color="#52B0E7" src="/icons/sequelize.svg">Sequelize</UsedBadge>
		<UsedBadge data-color="#3982CE" src="/icons/prisma.svg">Prisma</UsedBadge>
		<UsedBadge data-color="#007ACC" src="/icons/typescript.svg">Typescript</UsedBadge>
		<UsedBadge data-color="#FFFFFF" src="/icons/deno.svg">Deno js</UsedBadge>
		<UsedBadge data-color="#2E7EEA" src="/icons/strapi.svg">Strapi</UsedBadge>
		<UsedBadge data-color="#0DB7ED" src="/icons/docker.svg">Docker</UsedBadge>
		<UsedBadge data-color="#FFFFFF" src="/icons/vercel.svg">Vercel</UsedBadge>
		<UsedBadge data-color="#007BFC" src="/icons/vultr.svg">Vultr</UsedBadge>
		<UsedBadge data-color="#123F6D" src="/icons/ovh.svg">OVH</UsedBadge>
		<UsedBadge data-color="#F38020" src="/icons/cloudflare.svg">Cloudflare</UsedBadge>
		<UsedBadge data-color="#57A143" src="/icons/neovim.svg">Neovim</UsedBadge>
		<UsedBadge data-color="#0078D7" src="/icons/vscode.svg">Visual Studio Code</UsedBadge>
		<UsedBadge data-color="#F06611" src="/icons/gitpod.svg">Gitpod</UsedBadge>
		<li>
			<button
				on:click={onReadMore}
				class="text-yellow-300 inline md:hidden font-semibold rounded-full px-4 py-2"
			>
				{readMore ? 'Show Less' : 'Show More'}
			</button>
		</li>
	</ul>
</section>
