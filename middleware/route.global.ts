export default defineNuxtRouteMiddleware((to, from) => {
	const jwt = useAuthStore().jwt;

	const publicRoutes = ["/", "/login", "/signup", "/forgot-password"];

	const isPublicRoute = publicRoutes.some(
		(route) => to.path === route || to.path.startsWith(`${route}/`),
	);

	if (isPublicRoute) {
		return;
	}

	if (!isPublicRoute && !jwt) {
		return navigateTo("/login");
	}
});
