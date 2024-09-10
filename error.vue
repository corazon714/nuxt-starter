<template>
    <div class="flex items-center justify-center h-screen">
        <div class="flex flex-col gap-y-10">
            <h1 class="text-9xl text-transparent bg-clip-text bg-gradient-to-b from-white to-black">404</h1>
            <h2 class="text-xl font-semibold text-center text-gray-300">Page not found</h2>
            <NuxtLink to="/">
                <UButton block color="black" label="Go back to homepage" />
            </NuxtLink>
        </div>
    </div>
</template>