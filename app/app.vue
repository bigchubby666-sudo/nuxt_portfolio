<template>
  <NuxtRouteAnnouncer />
  <NuxtLayout>
    <NuxtPage :transition="{ name: 'page', mode: 'out-in' }" />
  </NuxtLayout>
</template>

<script setup lang="ts">
import '/assets/css/tailwind.css'
</script>