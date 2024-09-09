import english from "./i18n/locales/english.json";

export default defineI18nConfig(() => ({
	legacy: false,
	locale: "en",
	messages: {
		en: english,
	},
}));
