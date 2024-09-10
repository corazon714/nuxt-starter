export default defineNuxtPlugin((nuxtApp) => {
	nuxtApp.vueApp.config.errorHandler = (error, instance, info) => {
		let errorMessage = "An error occurred on our side.";
		if (error instanceof Error) {
			errorMessage = error.message;
		}

		useToast().add({
			title: "Error",
			description: errorMessage,
			color: "red",
			icon: "i-mdi-alert-circle-outline",
			timeout: 5000,
		});

		console.error("Error occurred: ", error);
	};
});
