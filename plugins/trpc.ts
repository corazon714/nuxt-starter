import { createTRPCProxyClient, httpBatchLink } from "@trpc/client";
import type { AppRouter } from "~/trpc/trpc-remote";
import { useAuthStore } from "~/stores/auth";

/* THIS IS A SPECIAL TRPC SETUP FOR OUR TEAM THAT MAKES TRPC WORK OUT OF MONOREPO, DONT MIND IT IF YOU DONT UNDERSTAND THIS, I DGaF */

export default defineNuxtPlugin((nuxtApp) => {
	const trpc = createTRPCProxyClient<AppRouter>({
		links: [
			httpBatchLink({
				url: `${useRuntimeConfig().public.trpcUrl}/trpc`,
				headers() {
					return {
						Authorization: `Bearer ${useAuthStore().jwt}`,
					};
				},
			}),
		],
	});

	return {
		provide: {
			trpc,
		},
	};
});
