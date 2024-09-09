import type { Config } from "tailwindcss";

export default (<Partial<Config>>{
	content: ["docs/content/**/*.md"],
	theme: {
		extend: {
			/* theming example */
			colors: {
				green_but_hand_declared: {
					50: "#EFFDF5",
					100: "#D9FBE8",
					200: "#B3F5D1",
					300: "#75EDAE",
					400: "#00DC82",
					500: "#00C16A",
					600: "#00A155",
					700: "#007F45",
					800: "#016538",
					900: "#0A5331",
					950: "#052e16",
				},
			},
		},
	},
});
