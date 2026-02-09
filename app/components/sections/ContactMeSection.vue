<template>
  <section id="contact" class="scroll-mt-24">
    <SectionTitle :title="t('sections.contact')" />
    <div
      class="relative left-1/2 right-1/2 w-screen -ml-[50vw] -mr-[50vw] border-y border-slate-200/60 bg-slate-900/95 text-slate-100 shadow-lg shadow-slate-950/30 dark:border-white/10 dark:bg-slate-900/95"
    >
      <div class="mx-auto w-full max-w-6xl px-4 py-10 sm:px-6 lg:px-8">
        <div class="space-y-6">
        <div>
          <p class="text-sm font-semibold uppercase tracking-[0.2em] text-slate-400">
            {{ t('contact.kicker') }}
          </p>
          <h3 class="mt-2 text-3xl font-semibold text-white">
            {{ t('contact.title') }}
          </h3>
          <p class="mt-3 text-slate-300">
            {{ t('contact.body') }}
          </p>
        </div>

        <form class="grid gap-4 sm:grid-cols-2" @submit.prevent>
          <label class="space-y-2">
            <span class="text-sm font-medium text-slate-200">
              {{ t('contact.form.nameLabel') }}
            </span>
            <input
              type="text"
              class="w-full rounded-xl border border-white/10 bg-slate-950/60 px-4 py-3 text-sm text-slate-100 shadow-sm outline-none transition focus:border-white/30 focus:ring-2 focus:ring-white/10"
              :placeholder="t('contact.form.namePlaceholder')"
            />
          </label>

          <label class="space-y-2">
            <span class="text-sm font-medium text-slate-200">
              {{ t('contact.form.emailLabel') }}
            </span>
            <input
              type="email"
              class="w-full rounded-xl border border-white/10 bg-slate-950/60 px-4 py-3 text-sm text-slate-100 shadow-sm outline-none transition focus:border-white/30 focus:ring-2 focus:ring-white/10"
              :placeholder="t('contact.form.emailPlaceholder')"
            />
          </label>

          <label class="space-y-2 sm:col-span-2">
            <span class="text-sm font-medium text-slate-200">
              {{ t('contact.form.messageLabel') }}
            </span>
            <textarea
              rows="5"
              class="w-full rounded-xl border border-white/10 bg-slate-950/60 px-4 py-3 text-sm text-slate-100 shadow-sm outline-none transition focus:border-white/30 focus:ring-2 focus:ring-white/10"
              :placeholder="t('contact.form.messagePlaceholder')"
            ></textarea>
          </label>

          <div class="flex flex-wrap items-center gap-3 sm:col-span-2">
            <button type="submit" class="btn-primary">
              {{ t('contact.form.submit') }}
            </button>
            <a class="btn-secondary" href="mailto:you@example.com">{{ t('contact.email') }}</a>
            <a
              class="btn-secondary"
              href="https://www.linkedin.com/"
              target="_blank"
              rel="noreferrer"
            >
              {{ t('contact.linkedin') }}
            </a>
          </div>
        </form>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import SectionTitle from '~/components/ui/SectionTitle.vue'

const { t } = useI18n()
</script>
