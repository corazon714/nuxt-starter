import { defineStore } from "pinia";

export const useAuthStore = defineStore({
	id: "authStore",
	state: () => ({
		jwt: "",
	}),
	actions: {
		setJwt(jwt: string) {
			this.jwt = jwt;
		},
	},
	persist: {
		storage: piniaPluginPersistedstate.cookies(),
	},
});
