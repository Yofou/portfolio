import { defineConfig } from 'astro/config';

// https://astro.build/config
import svelte from "@astrojs/svelte";

// https://astro.build/config
import tailwind from "@astrojs/tailwind";

// https://astro.build/config
import image from "@astrojs/image";

// https://astro.build/config
import sitemap from "@astrojs/sitemap";

// https://astro.build/config
import robotsTxt from 'astro-robots-txt';

// https://astro.build/config
import vercel from "@astrojs/vercel/static";

const site = 'https://www.yofou.dev'
// https://astro.build/config
export default defineConfig({
	integrations: [
		svelte(), 
		tailwind(), 
		image({
			serviceEntryPoint: '@astrojs/image/sharp'
		}), 
		sitemap(), 
		robotsTxt({
    		sitemap: false
  		}),
	],
  	site,
  	output: 'static',
	adapter: vercel(),
});
