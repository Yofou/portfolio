<script lang="ts">
	import UsedBadge from './UsedBadge.svelte';
	import React from "./icons/react.svelte"
	import Svelte from "./icons/svelte.svelte"
	import Vue from "./icons/vue.svelte"
	import Next from "./icons/next.svelte"
	import Nuxt from "./icons/nuxt.svelte"
	import Quasar from "./icons/quasar.svelte"
	import Gatsby from "./icons/gatsby.svelte"
	import ReactQuery from "./icons/react-query.svelte"
	import Redux from "./icons/redux.svelte"
	import ReactHookForm from "./icons/react-hook-form.svelte"
	import P5 from "./icons/p5.svelte"
	import Tailwind from "./icons/tailwind.svelte"
	import Windi from "./icons/windi.svelte"
	import Vite from "./icons/vite.svelte"
	import Fastify from "./icons/fasitfy.svelte"
	import Express from "./icons/express.svelte"
	import Nest from "./icons/nest.svelte"
	import Sequelize from "./icons/sequelize.svelte"
	import Prisma from "./icons/prisma.svelte"
	import Typescript from "./icons/typescript.svelte"
	import Deno from "./icons/deno.svelte"
	import Strapi from "./icons/strapi.svelte"
	import Docker from "./icons/docker.svelte"
	import Vercel from "./icons/vercel.svelte"
	import Ovh from "./icons/ovh.svelte"
	import Cloudflare from "./icons/cloudflare.svelte"
	import Neovim from "./icons/neovim.svelte"
	import Vscode from "./icons/vscode.svelte"
	import Gitpod from "./icons/gitpod.svelte"
    import Fasitfy from './icons/fasitfy.svelte';
    import Vultr from './icons/vultr.svelte';

	let readMore = false;
	const onReadMore = () => (readMore = !readMore);
</script>

<section class="w-full">
	<ul class="w-full flex justify-center md:justify-start flex-wrap gap-2" class:cancel={readMore}>
		<UsedBadge data-color="#61DAFB">
			<React slot="icon" />
			React
		</UsedBadge>
	    <UsedBadge data-color="#F1413D"><Svelte slot="icon" /> Svelte</UsedBadge>
		<UsedBadge data-color="#4FC08D"><Vue slot="icon" /> Vuejs</UsedBadge>
		<UsedBadge data-color="#FFFFFF"><Next slot="icon" /> Next</UsedBadge>
		<UsedBadge data-color="#00DC82"><Nuxt slot="icon" /> Nuxt</UsedBadge>
		<UsedBadge data-color="#16B7FB"><Quasar slot="icon" /> Quasar</UsedBadge>
		<UsedBadge data-color="#663399"><Gatsby slot="icon" /> Gatsby</UsedBadge>
		<UsedBadge data-color="#FF4154"><ReactQuery slot="icon" /> React Query</UsedBadge>
		<UsedBadge data-color="#593D88"><Redux slot="icon" /> Redux</UsedBadge>
		<UsedBadge data-color="#EC5990"><ReactHookForm slot="icon" /> React Hook Form</UsedBadge>
		<UsedBadge data-color="#ED225D"><P5 slot="icon" /> p5.js</UsedBadge>
		<UsedBadge data-color="#38B2AC"><Tailwind slot="icon" /> TailwindCss</UsedBadge>
		<UsedBadge data-color="#48B0F1"><Windi slot="icon" /> WindiCss</UsedBadge>
		<UsedBadge data-color="#646CFF"><Vite slot="icon" /> Vite</UsedBadge>
		<UsedBadge data-color="#06080B"><Fasitfy slot="icon" /> Fasitfy</UsedBadge>
		<UsedBadge data-color="#404D59"><Express slot="icon" /> Express.js</UsedBadge>
		<UsedBadge data-color="#E0234E"><Nest slot="icon" /> Nestjs</UsedBadge>
		<UsedBadge data-color="#52B0E7"><Sequelize slot="icon" /> Sequelize</UsedBadge>
		<UsedBadge data-color="#3982CE"><Prisma slot="icon" /> Prisma</UsedBadge>
		<UsedBadge data-color="#007ACC"><Typescript slot="icon" /> Typescript</UsedBadge>
		<UsedBadge data-color="#FFFFFF"><Deno slot="icon" /> Deno js</UsedBadge>
		<UsedBadge data-color="#2E7EEA"><Strapi slot="icon" /> Strapi</UsedBadge>
		<UsedBadge data-color="#0DB7ED"><Docker slot="icon" /> Docker</UsedBadge>
		<UsedBadge data-color="#FFFFFF"><Vercel slot="icon" />Vercel</UsedBadge>
		<UsedBadge data-color="#007BFC"><Vultr slot="icon" /> Vultr</UsedBadge>
		<UsedBadge data-color="#123F6D"><Ovh slot="icon" /> OVH</UsedBadge>
		<UsedBadge data-color="#F38020"><Cloudflare slot="icon" /> Cloudflare</UsedBadge>
		<UsedBadge data-color="#57A143"><Neovim slot="icon" /> Neovim</UsedBadge>
		<UsedBadge data-color="#0078D7"><Vscode slot="icon" /> Visual Studio Code</UsedBadge>
		<UsedBadge data-color="#F06611"><Gitpod slot="icon" /> Gitpod</UsedBadge>
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
