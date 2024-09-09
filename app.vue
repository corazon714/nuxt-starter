<template>
  <div class="font-roboto">
    <NuxtLayout>
      <NuxtPage />
    </NuxtLayout>
    <UNotifications />
    <UModals />
    <USlideovers />
  </div>
</template>

<style>
/* global things */
Body {
  @apply bg-white
}

.dark Body {
  @apply bg-black
}

.font-roboto {
  font-family: 'Roboto', sans-serif;
}
</style>