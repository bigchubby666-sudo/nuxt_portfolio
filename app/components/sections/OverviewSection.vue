<template>
  <section
    class="rounded-2xl border border-slate-200/60 bg-white/80 p-8 shadow-sm dark:border-white/10 dark:bg-white/5"
  >
    <h1 class="text-3xl font-semibold tracking-tight text-slate-900 dark:text-white sm:text-4xl">
      {{ t('overview.title') }}
    </h1>
    <p class="mt-3 max-w-2xl text-slate-700 dark:text-slate-300">
      {{ t('overview.subtitle') }}
    </p>
    <div class="mt-6 flex flex-wrap gap-3">
      <NuxtLink :to="{ path: '/', hash: '#projects' }" class="btn-primary">
        {{ t('overview.cta.projects') }}
      </NuxtLink>
      <NuxtLink :to="{ path: '/', hash: '#contact' }" class="btn-secondary">
        {{ t('overview.cta.contact') }}
      </NuxtLink>
    </div>
  </section>
</template>

<script setup lang="ts">
const { t } = useI18n()
</script>
