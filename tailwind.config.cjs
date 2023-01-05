const defaultTheme = require('tailwindcss/defaultTheme');

/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			fontFamily: {
				jost: ["'Jost'", ...defaultTheme.fontFamily.sans],
				merriweather: ["'Merriweather'", ...defaultTheme.fontFamily.sans],
				fira: ["'Fira Mono'", ...defaultTheme.fontFamily.mono],
			},
			gridTemplateColumns: {
				container: 'minmax(0, 1fr) minmax(0, var(--container, 1250px)) minmax(0, 1fr)',
			},
			colors: {
				yellow: {
					300: '#E9AA52'
				},
				purple: {
          			300: '#302638',
					600: '#16131d'
				}
			}
		}
	},
	plugins: [require('@tailwindcss/forms'), require("tailwindcss-hocus")]
}
