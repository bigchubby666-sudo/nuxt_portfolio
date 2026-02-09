<template>
  <section
    id="employment"
    v-motion
    :initial="{ opacity: 0, y: 16 }"
    :enter="{ opacity: 1, y: 0, transition: { duration: 0.5 } }"
    class="scroll-mt-24"
  >
    <SectionTitle :title="t('sections.employment')" />

    <div class="relative mt-8">
      <div
        class="pointer-events-none absolute left-1/2 top-0 hidden h-full w-px -translate-x-1/2 bg-slate-200/70 dark:bg-white/10 md:block">
      </div>

      <div class="space-y-10">
        <div v-for="(item, index) in localizedExperiences" :key="item.badge" class="relative">
          <div class="md:grid md:grid-cols-2 md:items-start md:gap-8">
            <div v-motion :initial="{ opacity: 0, y: 18 }"
              :enter="{ opacity: 1, y: 0, transition: { duration: 0.5, delay: index * 0.08 } }" :class="[
                'rounded-2xl border border-slate-200/60 bg-white/80 p-6 shadow-sm dark:border-white/10 dark:bg-white/5',
                index % 2 === 0 ? 'md:col-start-1 md:pr-10' : 'md:col-start-2 md:pl-10',
              ]">

              <p class="text-sm font-semibold text-slate-900 dark:text-white">
                {{ item.role }}
              </p>
              <p class="mt-1 text-sm text-slate-500 dark:text-slate-400">
                {{ item.company }}
              </p>
              <ul class="mt-4 list-disc space-y-2 pl-5 text-sm text-slate-700 dark:text-slate-300">
                <li v-for="bullet in item.bullets" :key="bullet">{{ bullet }}</li>
              </ul>
            </div>
          </div>

          <div class="absolute left-1/2 top-2 hidden -translate-x-1/2 md:flex md:flex-col md:items-center">
            <span
              class="flex h-8 w-8 items-center justify-center rounded-full border border-slate-200 bg-white text-xs font-semibold text-slate-700 shadow-sm dark:border-white/15 dark:bg-slate-950 dark:text-slate-200">
              {{ item.badge }}
            </span>
            <span class="mt-2 text-xs font-medium text-slate-500 dark:text-slate-400">
              {{ item.dates }}
            </span>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import SectionTitle from '~/components/ui/SectionTitle.vue'

const { t, tm, rt } = useI18n() as {
  t: (key: string) => string
  tm: (key: string) => unknown
  rt: (msg: unknown) => string
}

const experiences = [
  {
    badge: 'SF',
  },
  {
    badge: 'FS',
  },
  {
    badge: 'BE',
  },
  {
    badge: 'JR',
  },
  {
    badge: 'IN',
  },
]

const localizedExperiences = computed<
  Array<{ badge: string; role: string; company: string; dates: string; bullets: string[] }>
>(() =>
  experiences.map((item, index) => {
    const base = `employment.items.${index}`
    const bullets = tm(`${base}.bullets`)
    return {
      ...item,
      role: t(`${base}.role`),
      company: t(`${base}.company`),
      dates: t(`${base}.dates`),
      bullets: Array.isArray(bullets) ? bullets.map((bullet) => rt(bullet)) : [],
    }
  })
)
</script>
