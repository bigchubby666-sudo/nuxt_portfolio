<template>
  <section
    id="education"
    v-motion
    :initial="{ opacity: 0, y: 16 }"
    :enter="{ opacity: 1, y: 0, transition: { duration: 0.5 } }"
    class="scroll-mt-24"
  >
    <SectionTitle :title="t('sections.education')" />
    <div
      class="relative overflow-hidden rounded-2xl border border-slate-200/60 bg-white/70 dark:border-white/10 dark:bg-white/5"
    >
      <div class="absolute inset-0">
        <img
          src="/universidad_tecnologica_nacional_cover.jpg"
          :alt="t('education.photoAlt')"
          class="h-full w-full object-cover"
          loading="lazy"
        />
        <div class="absolute inset-0 bg-white/75 dark:bg-slate-950/70"></div>
      </div>
      <div class="relative p-6">
        <div>
          <p class="font-medium text-slate-900 dark:text-white">
            {{ t('education.school') }}
          </p>
          <p class="text-sm text-slate-600 dark:text-slate-300">{{ t('education.dates') }}</p>
          <p class="mt-2 text-slate-700 dark:text-slate-200">
            {{ t('education.program') }}
          </p>
        </div>
        <div class="mt-4">
          <p class="font-medium text-slate-900 dark:text-white">
            {{ t('education.degree') }}
          </p>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import SectionTitle from '~/components/ui/SectionTitle.vue'

const { t } = useI18n()
</script>

