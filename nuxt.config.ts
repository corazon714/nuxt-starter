// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
	compatibilityDate: "2024-04-03",
	devtools: { enabled: true },
	modules: ["@nuxt/ui", "@vueuse/nuxt", "@nuxtjs/i18n", "@nuxtjs/google-fonts"],
	ssr: true,
	ui: {
		global: true,
	},
	colorMode: {
		preference: "system",
		fallback: "dark" /* who tf uses light theme anyways */,
	},
	i18n: {
		vueI18n: "./i18n.config.ts",
	},
	googleFonts: {
		families: {
			Roboto: [100, 300, 400, 500, 700, 900],
		},
		prefetch: true,
	},
});
