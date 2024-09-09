<script lang="ts" setup>

</script>

<template>
  <div class="flex flex-col">
    <UBadge size="lg" class="w-fit">Index Page</UBadge>
    <span>You visited here {{ useLocaleTimeAgo(new Date()).value }}</span>
  </div>
</template>