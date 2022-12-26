import { defineConfig } from 'astro/config';

// https://astro.build/config
import svelte from "@astrojs/svelte";

// https://astro.build/config
import tailwind from "@astrojs/tailwind";

// https://astro.build/config
import { astroImageTools } from "astro-imagetools";

// https://astro.build/config
import sitemap from "@astrojs/sitemap";

// https://astro.build/config
import robotsTxt from 'astro-robots-txt';

// https://astro.build/config
import vercel from "@astrojs/vercel/edge";

const site = 'https://www.yofou.dev'
// https://astro.build/config
export default defineConfig({
	integrations: [
		svelte(), 
		tailwind(), 
		astroImageTools, 
		sitemap({
			customPages: [`${site}/`, `${site}/blogs`]
		}), 
		robotsTxt({
    		sitemap: false
  		}),
	],
  	site,
  	output: 'server',
  	adapter: vercel()
});
