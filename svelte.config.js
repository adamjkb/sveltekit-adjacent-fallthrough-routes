import adapter from '@sveltejs/adapter-netlify'
/** @type {import('@sveltejs/kit').Config} */
const config = {
	kit: {
		// hydrate the <div id="svelte"> element in src/app.html
		target: '#svelte',
		adapter: adapter(),
		prerender: {
            crawl: true,
            enabled: true,
            // The * string includes all non-dynamic routes
            // Force config.js to be rendered
            pages: ['*']
        },
	}
};

export default config;
