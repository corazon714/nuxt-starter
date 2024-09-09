// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
	compatibilityDate: "2024-04-03",
	devtools: { enabled: true },
	modules: ["@nuxt/ui", "@vueuse/nuxt"],
	ui: {
		global: true,
	},
	colorMode: {
		preference: "system",
		fallback: "dark" /* who tf uses light theme anyways */,
	},
});
