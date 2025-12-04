// svelte.config.js
import adapter from '@sveltejs/adapter-static';
import { vitePreprocess } from '@sveltejs/vite-plugin-svelte';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	preprocess: vitePreprocess(),

	kit: {
		// 1. Use the static adapter
		adapter: adapter({
			// Set output directory to 'build' (or 'docs' if you prefer)
			pages: 'build', 
			assets: 'build',
			fallback: undefined // We are generating a full static site
		}),
		
		// 2. Set the base path to an empty string for User Pages 
		// (The Vite base config of '/' handles the root.)
		paths: {
			base: '',
		},
	}
};

export default config;