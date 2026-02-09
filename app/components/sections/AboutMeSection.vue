<template>
  <section
    id="about"
    v-motion
    :initial="{ opacity: 0, y: 16 }"
    :enter="{ opacity: 1, y: 0, transition: { duration: 0.5 } }"
    class="scroll-mt-24"
  >
    <SectionTitle :title="t('sections.about')" />
    <div
      class="grid gap-6 overflow-hidden rounded-2xl border border-slate-200/60 bg-white/80 dark:border-white/10 dark:bg-white/5 md:grid-cols-[minmax(0,280px)_1fr]"
    >
      <div class="h-full w-full">
        <img
          src="/selfie.jpg"
          :alt="t('about.photoAlt')"
          class="h-full w-full object-cover"
          loading="lazy"
        />
      </div>
      <div class="p-6">
        <p class="text-slate-700 dark:text-slate-300">
          {{ t('about.p1') }}
        </p>
        <p class="mt-4 text-slate-700 dark:text-slate-300">
          {{ t('about.p2') }}
        </p>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import SectionTitle from '~/components/ui/SectionTitle.vue'

const { t } = useI18n()
</script>

