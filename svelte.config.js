import adapter from '@sveltejs/adapter-static';
import sveltePreprocess from 'svelte-preprocess';

/** @type {import('@sveltejs/kit').Config} */
const config = {
  preprocess: sveltePreprocess(),
  kit: {
    adapter: adapter({
      pages: 'build',
      assets: 'build',
      fallback: 'index.html' // Ensures SPA routing works
    }),
    paths: {
      base: '/hope3website', // ✅ Set this to your GitHub repo name
    },
    appDir: 'internal',
    prerender: {
      entries: ['*']
    }
  }
};

export default config;
