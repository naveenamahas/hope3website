import adapter from '@sveltejs/adapter-static';
import { vitePreprocess } from '@sveltejs/vite-plugin-svelte';

/** @type {import('@sveltejs/kit').Config} */
const config = {
    preprocess: vitePreprocess(),
    kit: {
        adapter: adapter({
            pages: 'build',
            assets: 'build',
            fallback: 'index.html' // Ensures SPA routing works
        }),
        paths: {
            base: "/hope3website" // IMPORTANT: Set this to your GitHub repo name
        },
        appDir: "internal",
        prerender: {
            entries: ['*']
        }
    }
};

export default config;
