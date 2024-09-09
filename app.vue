<template>
  <div>
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
</style>