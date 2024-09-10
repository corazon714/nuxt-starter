<script setup lang="ts">
const route = useRoute()

const pageTitle = computed(() => {
  const pathSegments = route.path.split('/');
  const lastSegment = pathSegments[pathSegments.length - 1];
  const title = lastSegment ? `${lastSegment.charAt(0).toUpperCase() + lastSegment.slice(1)} | {Site Name}` : '{Site Name}';
  return title;
});

useHead({
  title: pageTitle
})
</script>

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


.layout-enter-active,
.layout-leave-active,
.page-enter-active,
.page-leave-active {
  transition: all 0.2s;
}

.layout-enter-from,
.layout-leave-to,
.page-enter-from,
.page-leave-to {
  opacity: 0;
  filter: blur(1rem);
}
</style>